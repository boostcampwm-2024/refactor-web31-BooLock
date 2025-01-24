import { CodeExportButton, RedoButton, UndoButton } from '@/entities';

import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';

export const WorkspaceHeaderButtons = () => {
  const { currentStep } = useCoachMarkStore();
  return (
    <div className={`flex items-center gap-3 ${currentStep === 4 ? 'z-[99999]' : ''}`}>
      <CodeExportButton />

      <UndoButton />
      <RedoButton />
    </div>
  );
};
