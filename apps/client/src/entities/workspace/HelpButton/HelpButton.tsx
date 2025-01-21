import Question from '@/shared/assets/question.svg?react';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';
import { useShallow } from 'zustand/react/shallow';

export const HelpButton = () => {
  const { openCoachMark } = useCoachMarkStore(
    useShallow((state) => ({
      openCoachMark: state.openCoachMark,
    }))
  );

  return (
    <button
      className="text-medium-rg hover flex items-center gap-1 text-gray-300 hover:text-gray-500"
      onClick={openCoachMark}
      aria-label="도움말 버튼"
    >
      도움말 <Question />
    </button>
  );
};
