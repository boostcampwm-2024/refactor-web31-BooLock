import { ReactNode } from 'react';

/**
 *
 * @description
 * 워크스페이스 그리드 컴포넌트
 */
export const WorkspaceGrid = ({
  offsetY = 0,
  children,
}: {
  offsetY?: number;
  children: ReactNode;
}) => {
  return (
    <div
      style={{ transform: offsetY > 0 ? `translateY(${offsetY + 32}px)` : 'none' }}
      will-change="transform"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
};
