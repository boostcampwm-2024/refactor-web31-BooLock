import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import { useEffect, useState } from 'react';
import htmlCodeGenerator from '@/widgets/workspace/htmlCodeGenerator';
import { CssPropsSelectBox } from '@/widgets/workspace/CssPropsSelectBox';

const toolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'html',
      contents: [
        {
          kind: 'block',
          type: 'html',
        },
        {
          kind: 'block',
          type: 'head',
        },
        {
          kind: 'block',
          type: 'body',
        },
        {
          kind: 'block',
          type: 'p',
        },
        {
          kind: 'block',
          type: 'button',
        },
        {
          kind: 'block',
          type: 'text',
        },
      ],
    },
    {
      kind: 'category',
      name: 'css',
      contents: [
        { kind: 'button', text: '추가하기' },
        { kind: 'block', type: 'css_style' },
      ],
      id: 'css_category',
    },
  ],
};

const customTheme = Blockly.Theme.defineTheme('custom', {
  name: 'custom',
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: '#fafafa', // 워크스페이스 배경색
    toolboxBackgroundColour: 'blackBackground', // 툴박스 배경색
    flyoutBackgroundColour: '#123213', // 툴박스 플라이아웃 배경색
    flyoutForegroundColour: '#ccc', // 툴박스 플라이아웃 전경색
    flyoutOpacity: 1,
    scrollbarColour: '#000000',
    insertionMarkerColour: '#fff',
    insertionMarkerOpacity: 0.3,
    scrollbarOpacity: 0.001,
    cursorColour: '#d0d0d0',
  },
});

Blockly.Blocks['html'] = {
  init: function () {
    this.appendDummyInput().appendField('html');
    this.appendValueInput('css class').setCheck('String').appendField('css class');
    this.appendStatementInput('children').appendField('children');
    this.setColour(230);
  },
};

Blockly.Blocks['head'] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendEndRowInput().appendField('head');
    this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
    this.appendStatementInput('children').appendField();
    this.setColour(120);
  },
};

Blockly.Blocks['body'] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendEndRowInput().appendField('body');
    this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
    this.appendStatementInput('children').appendField();
    this.setColour(300);
  },
};

Blockly.Blocks['p'] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendEndRowInput().appendField('p');
    this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
    this.appendStatementInput('children').appendField();
    this.setColour(180);
  },
};

Blockly.Blocks['button'] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendEndRowInput().appendField('button');
    this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
    this.appendStatementInput('children').appendField();
    this.setColour(280);
  },
};

Blockly.Blocks['text'] = {
  init: function () {
    this.setPreviousStatement(true); // 다른 블록 위에 연결 가능
    this.setNextStatement(true); // 다른 블록 아래에 연결 가능
    this.appendDummyInput().appendField('text').appendField(new Blockly.FieldTextInput(), 'TEXT');
    this.setColour(40);
  },
};

// css 블록
Blockly.Blocks['css_style'] = {
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput('클래스명'), 'CLASS'); // "클래스명"은 초기값
    this.setOutput(true); // 이 블록을 다른 블록에 연결할 수 있도록 설정
  },
};

export const WorkspaceContent = () => {
  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [htmlCode, setHtmlCode] = useState<string>('');
  // const [styleName, setStyleName] = useState('');

  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      renderer: 'zelos',
      toolbox: toolboxConfig,
      theme: customTheme, // 커스텀 테마 적용
      zoom: {
        // 확대 및 축소 버튼 설정
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
    });
    setWorkspace(newWorkspace);

    // CSS 카테고리가 열릴 때 input 필드를 동적으로 추가하는 함수
    const addInputFieldToFlyout = () => {
      const toolboxElement = document.querySelector('.blocklyFlyout');

      if (toolboxElement) {
        // 기존에 추가된 input 필드가 있는지 확인하고, 있으면 제거
        let existingInputDiv = toolboxElement.querySelector('.custom-input');
        if (existingInputDiv) {
          existingInputDiv.remove();
        }

        // 새로운 input 필드 생성
        const inputDiv = document.createElement('div');
        inputDiv.className = 'custom-input';
        inputDiv.style.padding = '5px';
        inputDiv.innerHTML = `<input type="text" placeholder="스타일을 정해주세요" style="width: 90%;" />`;

        // Flyout toolbox에 input 필드를 추가
        toolboxElement.insertBefore(inputDiv, toolboxElement.firstChild);
      }
    };

    // CSS 카테고리 열기를 감지하고 input 필드를 추가
    newWorkspace.addChangeListener((event) => {
      if (
        event.type === Blockly.Events.TOOLBOX_ITEM_SELECT &&
        (event as any).newItemId === 'css_category'
      ) {
        addInputFieldToFlyout();
      }
    });
    return () => {
      newWorkspace.dispose();
    };
  }, []);

  const generateHtmlCode = () => {
    if (!workspace) {
      return;
    }
    const code = htmlCodeGenerator.workspaceToCode(workspace);
    setHtmlCode(code);
  };

  return (
    <div className="flex">
      <CssPropsSelectBox />
      <div>
        <button className="h-[50px] w-[100px] bg-blue-400" onClick={generateHtmlCode}>
          변환하기
        </button>
        <p className="h-[200px] w-[400px] bg-green-200">{htmlCode}</p>
        <iframe srcDoc={htmlCode} className="h-[450px] w-[400px] bg-pink-200"></iframe>
      </div>
      <div id="blocklyDiv" style={{ width: '600px', height: '700px' }}></div>
    </div>
  );
};
