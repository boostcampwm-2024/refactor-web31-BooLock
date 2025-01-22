import { CoachMark, ImageTagModal, WorkspaceContent, WorkspacePageHeader } from '@/widgets';
import { useEffect, useLayoutEffect } from 'react';
import { useGetWorkspace, usePreventLeaveWorkspacePage } from '@/shared/hooks';

import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';
import { useParams } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

/**
 *
 * @description
 * 워크스페이스 페이지 컴포넌트
 */
export const WorkspacePage = () => {
  const { workspaceId } = useParams();
  useGetWorkspace(workspaceId as string);
  usePreventLeaveWorkspacePage();
  const { currentStep, isCoachMarkOpen, openCoachMark } = useCoachMarkStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      isCoachMarkOpen: state.isCoachMarkOpen,
      openCoachMark: state.openCoachMark,
    }))
  );
  const toolboxDiv = document.querySelector('.blocklyToolboxDiv');

  useLayoutEffect(() => {
    const isCoachMarkDismissed = localStorage.getItem('isCoachMarkDismissed');

    if (!isCoachMarkDismissed) {
      openCoachMark();
    }
  }, []);

  useEffect(() => {
    if (!toolboxDiv) return;

    if (currentStep <= 1) {
      toolboxDiv.classList.add('coachMarkHighlight');
    } else {
      toolboxDiv.classList.remove('coachMarkHighlight');
    }
  }, [currentStep, toolboxDiv]);

  return (
    <>
      <div className="flex h-screen flex-col">
        {isCoachMarkOpen && <CoachMark />}
        <WorkspacePageHeader currentStep={currentStep} />
        <WorkspaceContent />
      </div>
      <ImageTagModal />
    </>
  );
};
