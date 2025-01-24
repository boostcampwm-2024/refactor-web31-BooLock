import { HelpButton, WorkspaceNameInput } from '@/entities';
import { Logo } from '@/shared/ui';
import { WorkspaceHeaderButtons } from '../WorkspaceHeaderButtons/WorkspaceHeaderButtons';
import { memo } from 'react';

/**
 *
 * @description
 * 워크스페이스 페이지 헤더 컴포넌트
 */

type TWorkspacePageHeader = {
  currentStep: number;
};

export const WorkspacePageHeader = memo(
  ({ currentStep }: TWorkspacePageHeader) => {
    return (
      <div className="flex h-14 w-full flex-shrink-0 items-center justify-between border-b border-gray-100 bg-white pl-8 pr-4">
        <div className="flex items-center gap-5">
          <Logo isBlack={false} />
          <WorkspaceNameInput />
        </div>
        <div className="flex gap-11">
          <HelpButton />
          <WorkspaceHeaderButtons currentStep={currentStep} />
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    const prevIsFour = prevProps.currentStep !== 4;
    const nextIsFour = nextProps.currentStep !== 4;
    return prevIsFour && nextIsFour;
  }
);
