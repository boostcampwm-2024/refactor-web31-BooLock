import 'blockly/blocks';

import * as Blockly from 'blockly/core';

import { CssPropsSelectBox, PreviewBox } from '@/widgets';
import {
  blockContents,
  calculateBlockLength,
  cssCodeGenerator,
  cssStyleToolboxConfig,
  defineBlocks,
  findBlockStartLine,
  generateFullCodeWithBlockId,
  htmlTagToolboxConfig,
  initTheme,
  initializeBlocks,
  removeBlockIdFromCode,
  tabToolboxConfig,
} from '@/shared/blockly';
import { removeCssClassNamePrefix, trackEvent } from '@/shared/utils';
import {
  useClassBlockStore,
  useCssPropsStore,
  useWorkspaceChangeStatusStore,
  useWorkspaceStore,
} from '@/shared/store';
import { useEffect, useRef, useState } from 'react';

import CustomTrashcan from '@/core/customTrashcan';
import CustomZoomControls from '@/core/customZoomControls';
import FixedFlyout from '@/core/fixedFlyout';
import TabbedToolbox from '@/core/tabbedToolbox';
import { customTooltip } from '@/core/customTooltip';
import { registerCustomComponents } from '@/core/register';
import { useWorkspaceSave } from '@/shared/hooks/useWorkspaceSave';

for (const blockType in Blockly.Blocks) {
  if (Object.prototype.hasOwnProperty.call(Blockly.Blocks, blockType)) {
    delete Blockly.Blocks[blockType];
  }
}

registerCustomComponents();
defineBlocks(blockContents);

Blockly.Tooltip.setCustomTooltip(customTooltip);

Blockly.WorkspaceSvg.prototype.addZoomControls = function () {
  this.zoomControls_ = new CustomZoomControls(this);
  const svgZoomControls = this.zoomControls_.createDom();
  this.svgGroup_.appendChild(svgZoomControls);
};

Blockly.WorkspaceSvg.newTrashcan = function (workspace: Blockly.WorkspaceSvg): CustomTrashcan {
  return new CustomTrashcan(workspace);
};

Blockly.WorkspaceSvg.prototype.addTrashcan = function () {
  this.trashcan = Blockly.WorkspaceSvg.newTrashcan(this);
  const svgTrashcan = this.trashcan.createDom();
  this.svgGroup_.insertBefore(svgTrashcan, this.getCanvas());
};

/**
 *
 * @description
 * 블록 코딩을 할 수 있고 웹사이트, HTML, CSS 코드를 미리보기 할 수 있는 컴포넌트
 */
export const WorkspaceContent = () => {
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [cssCode, setCssCode] = useState<string>('');
  const totalCssPropertyObj = useCssPropsStore((state) => state.totalCssPropertyObj);
  const setCurrentCssClassName = useCssPropsStore((state) => state.setCurrentCssClassName);
  const { workspace, setWorkspace, canvasInfo } = useWorkspaceStore();
  const { isBlockChanged, isCssChanged, setIsBlockChanged } = useWorkspaceChangeStatusStore();
  const { findClassBlock } = useClassBlockStore();
  const [selectedBlockStartLine, setSelectedBlockStartLine] = useState<number>(0);
  const [selectedBlockLength, setSelectedBlockLength] = useState<number>(0);
  const [selectedBlockType, setSelectedBlockType] = useState<string | null>(null);
  const isBlockLoadingFinish = useRef<boolean>(false);
  const { handleSave, isPending } = useWorkspaceSave();

  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      plugins: {
        flyoutsVerticalToolbox: FixedFlyout,
        toolbox: TabbedToolbox,
      },
      renderer: 'boolock',
      toolboxPosition: 'end',
      toolbox: htmlTagToolboxConfig,
      theme: initTheme,
      zoom: {
        controls: true,
        wheel: false,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      maxTrashcanContents: 0,
    });

    (newWorkspace.getToolbox() as TabbedToolbox).setConfig(tabToolboxConfig);
    initializeBlocks(newWorkspace);
    newWorkspace.clearUndo();

    // workspace 변화 감지해 자동 변환
    const handleAutoConversion = (event: Blockly.Events.Abstract) => {
      if (isBlockLoadingFinish.current) {
        if (event.type === Blockly.Events.BLOCK_CHANGE && 'name' in event && 'newValue' in event) {
          trackEvent('block_content_changed', {
            item: event.name,
            value: event.newValue,
          });
        }
        if (event.type === Blockly.Events.BLOCK_DELETE) {
          trackEvent('block_deleted');
        }
        if (event.type === Blockly.Events.BLOCK_CREATE) {
          trackEvent('block_created', {
            // @ts-ignore
            item: removeCssClassNamePrefix(event.json.type),
          });
        }
        if (event.type === Blockly.Events.BLOCK_DRAG && 'isStart' in event && event.isStart) {
          trackEvent('block_drag_completed');
        }
      }

      if (
        event.type === Blockly.Events.BLOCK_CREATE ||
        event.type === Blockly.Events.BLOCK_MOVE ||
        event.type === Blockly.Events.BLOCK_CHANGE ||
        event.type === Blockly.Events.BLOCK_DELETE
      ) {
        // data-block-id 포함된 코드 (내부 처리용)
        const codeWithId = generateFullCodeWithBlockId(newWorkspace);

        // data-block-id 제거된 코드 (사용자에게 보여지는 코드)
        const codeWithNoId = removeBlockIdFromCode(codeWithId);

        setHtmlCode(codeWithNoId);
      }

      // workspace 변경에 따른 blockChange state 변경
      if (isBlockLoadingFinish.current) {
        if (
          event.type === Blockly.Events.CREATE ||
          event.type === Blockly.Events.BLOCK_CHANGE ||
          event.type === Blockly.Events.BLOCK_MOVE ||
          event.type === Blockly.Events.BLOCK_DELETE
        ) {
          setIsBlockChanged(true);
        }
      }

      if (event.type === Blockly.Events.FINISHED_LOADING) {
        isBlockLoadingFinish.current = true;
      }
    };

    // 블록 클릭 이벤트 핸들러
    const handleBlockClick2 = (event: Blockly.Events.Abstract) => {
      if (!(event instanceof Blockly.Events.Click)) {
        return;
      }

      const block = newWorkspace.getBlockById(event.blockId || '');

      setSelectedBlockType(
        block && block.type.startsWith('CSS_') ? block.type.replace(/^CSS_/, '') : null
      );

      // 블록 미 선택시 초기화
      if (!block) {
        setSelectedBlockStartLine(0);
        setSelectedBlockLength(0);

        return;
      }

      // 블록 ID가 포함된 전체 코드 생성
      const codeWithIds = generateFullCodeWithBlockId(newWorkspace);

      // 선택한 블록 시작 줄 계산
      const blockStartLine = findBlockStartLine(codeWithIds, block.id);
      setSelectedBlockStartLine(blockStartLine);

      // 선택한 블록 길이 계산
      const blockLength = calculateBlockLength(block);
      setSelectedBlockLength(blockLength);
    };

    newWorkspace.getParentSvg().addEventListener(
      'wheel',
      (event) => {
        if (event.ctrlKey) {
          event.preventDefault();
          const zoomAmount = event.deltaY > 0 ? -1 : 1;
          newWorkspace.zoomCenter(zoomAmount);
        } else {
          event.preventDefault();
        }
      },
      { passive: false }
    );

    newWorkspace.showContextMenu = () => {};

    newWorkspace.addChangeListener(handleAutoConversion);
    newWorkspace.addChangeListener(handleBlockClick2);

    if (workspace === null) {
      setWorkspace(newWorkspace);
    }

    return () => {
      newWorkspace.removeChangeListener(handleAutoConversion);
      newWorkspace.removeChangeListener(handleBlockClick2);
      newWorkspace.dispose();
    };
  }, []);

  useEffect(() => {
    if (!workspace) return;

    const handleBlockClick = (event: Blockly.Events.Abstract) => {
      if (event.type === 'click') {
        const block = workspace.getBlockById((event as any).blockId);
        if (block && findClassBlock(block.type)) {
          setCurrentCssClassName(block.type);
        }
      }
    };

    workspace.addChangeListener(handleBlockClick);

    return () => {
      workspace.removeChangeListener(handleBlockClick);
    };
  }, [workspace]);

  useEffect(() => {
    if ((isBlockChanged || isCssChanged) && !isPending) {
      handleSave();
    }
  }, [handleSave, isPending, isBlockChanged, isCssChanged]);

  useEffect(() => {
    if (!workspace || !canvasInfo || canvasInfo.length === 0) {
      return;
    }
    Blockly.serialization.workspaces.load(JSON.parse(canvasInfo), workspace);
    cssStyleToolboxConfig.contents.length = 0;
    Object.keys(totalCssPropertyObj).forEach((className) => {
      cssStyleToolboxConfig.contents.push({
        type: className,
        kind: 'block',
        enabled: true,
      });
    });
  }, [workspace, canvasInfo]);

  useEffect(() => {
    setCssCode(cssCodeGenerator(totalCssPropertyObj));
  }, [htmlCode, totalCssPropertyObj]);

  return (
    <div className="flex flex-1">
      <div className="flex h-[calc(100vh-56px)] w-[32rem] flex-shrink-0 flex-col">
        <PreviewBox
          htmlCode={htmlCode}
          cssCode={cssCode}
          selectedBlockStartLine={selectedBlockStartLine}
          selectedBlockLength={selectedBlockLength}
          selectedBlockType={selectedBlockType}
        />
        <CssPropsSelectBox />
      </div>
      <div id="blocklyDiv" className="h-full w-full"></div>
    </div>
  );
};
