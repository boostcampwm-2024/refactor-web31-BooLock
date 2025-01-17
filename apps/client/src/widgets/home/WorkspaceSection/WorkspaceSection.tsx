import { WorkspaceContainer, WorkspaceGrid, WorkspaceHeader } from '@/widgets';

import { SkeletonWorkspaceList } from '@/shared/ui';
import { Suspense } from 'react';

/**
 *
 * @description
 * 워크스페이스 헤더와 컨테이너를 합친 섹션 컴포넌트
 */
export const WorkspaceSection = () => {
  return (
    <section className="w-full max-w-[1152px] px-3 pb-48">
      <WorkspaceHeader />
      <Suspense
        fallback={
          <WorkspaceGrid>
            <SkeletonWorkspaceList skeletonNum={8} />
          </WorkspaceGrid>
        }
      >
        <WorkspaceContainer />
      </Suspense>
    </section>
  );
};
