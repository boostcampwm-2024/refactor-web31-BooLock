import * as Blockly from 'blockly/core';

import { useCssPropsStore, useResetCssStore, useWorkspaceStore } from '@/shared/store';
import { convertToCanvas, trackEvent } from '@/shared/utils';
import { cssStyleToolboxConfig } from '@/shared/blockly';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useSaveWorkspace } from '@/shared/hooks';
import { useState } from 'react';

const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let timer: number;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const useWorkspaceSave = () => {
  const workspaceId = useParams().workspaceId as string;
  const { mutate: saveWorkspace, isPending } = useSaveWorkspace(workspaceId);
  const { totalCssPropertyObj } = useCssPropsStore();
  const { workspace } = useWorkspaceStore();
  const { isResetCssChecked } = useResetCssStore();
  const [isCapture, setIsCapture] = useState<boolean>(false);

  const handleSave = async () => {
    trackEvent('workspace_saved');
    try {
      setIsCapture(true);
      const canvas = await convertToCanvas();
      const ctx = canvas.getContext('2d');
      const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height);

      const worker = new Worker(new URL('./capturePreview.worker.ts', import.meta.url), {
        type: 'module',
      });

      worker.postMessage({
        imageData,
        width: canvas.width,
        height: canvas.height,
      });

      worker.onmessage = (event) => {
        if (event.data.error) {
          console.log(event.data.error);
          setIsCapture(false);
          return;
        }

        const { thumbnail } = event.data;
        const serialized = Blockly.serialization.workspaces.save(workspace!) as any;

        console.log({
          totalCssPropertyObj,
          canvas: serialized,
          classBlockList: cssStyleToolboxConfig.contents,
          cssResetStatus: isResetCssChecked,
          thumbnail,
        });

        saveWorkspace({
          totalCssPropertyObj,
          canvas: serialized,
          classBlockList: cssStyleToolboxConfig.contents,
          cssResetStatus: isResetCssChecked,
          thumbnail,
        });
        worker.terminate();
      };
    } catch (error) {
      if (error && typeof error == 'string') {
        toast.error(error);
      }
    } finally {
      setIsCapture(false);
    }
  };

  const debouncedHandleSave = debounce(handleSave, 3000);

  return {
    handleSave: debouncedHandleSave,
    isPending,
    isCapture,
  };
};
