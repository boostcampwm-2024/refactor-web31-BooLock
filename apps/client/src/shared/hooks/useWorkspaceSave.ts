import * as Blockly from 'blockly/core';

import { useCssPropsStore, useResetCssStore, useWorkspaceStore } from '@/shared/store';
import { capturePreview, trackEvent } from '@/shared/utils';
import { cssStyleToolboxConfig } from '@/shared/blockly';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useSaveWorkspace } from '@/shared/hooks';
import { useState } from 'react';

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
      const canvas = Blockly.serialization.workspaces.save(workspace!) as any;
      const thumbnail = await capturePreview();

      saveWorkspace({
        totalCssPropertyObj,
        canvas,
        classBlockList: cssStyleToolboxConfig.contents,
        cssResetStatus: isResetCssChecked,
        thumbnail,
      });
      setIsCapture(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsCapture(false);
    }
  };
  return {
    handleSave,
    isPending,
    isCapture,
  };
};
