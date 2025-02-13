import { ReactNode } from 'react';

type SquareButtonProps = {
  children: ReactNode;
  variant?: 'neutral' | 'danger';
  onClick: () => void;
  isDisabled?: boolean;
};

/**
 *
 * @description
 * 사각형 버튼 재사용 컴포넌트
 */
export const SquareButton = ({
  children,
  variant = 'neutral',
  onClick,
  isDisabled = false,
}: SquareButtonProps) => {
  const colorClasses =
    variant === 'danger'
      ? 'bg-red-500 hover:bg-red-600 text-white'
      : 'bg-gray-50 hover:bg-gray-100 text-gray-300';
  return (
    <button
      onClick={onClick}
      className={`text-bold-md rounded-lg px-[72px] py-4 ${colorClasses} w-[200px]`}
      disabled={isDisabled}
      aria-label="재사용 사각형 버튼"
    >
      {children}
    </button>
  );
};
