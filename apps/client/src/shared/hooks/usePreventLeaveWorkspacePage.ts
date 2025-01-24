import { useBlocker } from 'react-router-dom';
import { useEffect } from 'react';
import { useWorkspaceChangeStatusStore } from '@/shared/store';
import { useWorkspaceSave } from './useWorkspaceSave';

export const usePreventLeaveWorkspacePage = () => {
  const { handleSave } = useWorkspaceSave();
  const { isBlockChanged, isCssChanged } = useWorkspaceChangeStatusStore();
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname && (isBlockChanged || isCssChanged)
  );

  const promptOfLeavePage = `저장하지 않은 변경사항이 있습니다. 정말로 떠나시겠습니까?`;
  useEffect(() => {
    if (blocker.state === 'blocked') {
      handleSave();
    }
  }, [blocker.state, isBlockChanged, isCssChanged]);

  const handleBeforeUnload = (e: Event) => {
    if (isBlockChanged || isCssChanged) {
      e.preventDefault();
      alert(promptOfLeavePage);
    } else {
      handleSave();
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isBlockChanged, isCssChanged]);
};
