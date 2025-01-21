import { CodeExportButton, RedoButton, SaveButton, UndoButton } from '@/entities';
import { memo } from 'react';

type TWorkspaceHeaderButtons = {
  currentStep: number;
};

export const WorkspaceHeaderButtons = memo(
  ({ currentStep }: TWorkspaceHeaderButtons) => {
    const buttonsClassName = `flex items-center gap-3 ${currentStep === 4 ? 'z-[99999]' : ''}`;

    return (
      <div className={buttonsClassName}>
        <CodeExportButton />
        <SaveButton />
        <UndoButton />
        <RedoButton />
      </div>
    );
  },
  (prevProps, nextProps) => {
    const prevIsFour = prevProps.currentStep !== 4;
    const nextIsFour = nextProps.currentStep !== 4;
    return prevIsFour && nextIsFour;
  }
);
