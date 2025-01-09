import { EmptyWorkspace, WorkspaceGrid, WorkspaceHeader, WorkspaceList } from '@/widgets';
import {
  useGetWorkspaceList,
  useInfiniteScroll,
  useScrollPostion,
  useWindowSize,
} from '@/shared/hooks';

import { SkeletonWorkspaceList } from '@/shared/ui';
import { WorkspaceLoadError } from '@/entities';
import { useEffect, useState } from 'react';
import { TWorkspace } from '@/shared/types';

const calculateNumOfNodePadding = (windowWidth: number): number => {
  if (windowWidth < 640) {
    return 1;
  } else if (windowWidth < 768) {
    return 2;
  } else if (windowWidth < 1024) {
    return 3;
  }
  return 4;
};

/**
 *
 * @description
 * 워크스페이스 헤더와 그리드를 감싸는 컨테이너 컴포넌트
 */
export const WorkspaceContainer = () => {
  const { scrollPosition } = useScrollPostion();
  const { screenHeight, screenWidth } = useWindowSize();

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    console.log(screenHeight, screenWidth);
  }, [screenHeight, screenWidth]);

  const { hasNextPage, fetchNextPage, isPending, isFetchingNextPage, isError, workspaceList } =
    useGetWorkspaceList();

  const [renderedData, setRenderedData] = useState<TWorkspace[]>([]);

  const topSectionHeight = 594;
  const workspaceItemHeight = 262;

  const nodePadding = calculateNumOfNodePadding(screenWidth);
  const gapY = 32;
  const start = Math.max(
    0,
    Math.floor((scrollPosition - topSectionHeight) / (workspaceItemHeight + gapY)) * nodePadding
  );
  console.log(`start : ${start}`);

  useEffect(() => {
    if (!workspaceList) {
      return;
    }
    console.log(nodePadding);

    setRenderedData(
      workspaceList.slice(
        start,
        start +
          Math.floor(screenHeight / (workspaceItemHeight + gapY)) * nodePadding +
          2 * nodePadding
      )
    );
  }, [start, screenHeight, workspaceList]);

  useEffect(() => {
    console.log(renderedData);
  }, [renderedData]);

  const fetchCallback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
        observer.unobserve(entry.target);
      }
    });
  };

  const nextFetchTargetRef = useInfiniteScroll({ intersectionCallback: fetchCallback });

  return (
    <section className="w-full max-w-[1152px] px-3 pb-48">
      <WorkspaceHeader />
      {isPending && (
        <WorkspaceGrid>
          <SkeletonWorkspaceList skeletonNum={8} />
        </WorkspaceGrid>
      )}
      {isError ? (
        <WorkspaceLoadError />
      ) : (
        workspaceList &&
        (workspaceList.length === 0 ? (
          <EmptyWorkspace />
        ) : (
          <WorkspaceGrid offsetY={Math.floor(start / nodePadding) * (workspaceItemHeight + gapY)}>
            <WorkspaceList workspaceList={renderedData} />
            {isFetchingNextPage && <SkeletonWorkspaceList skeletonNum={8} />}
          </WorkspaceGrid>
        ))
      )}
      {!isPending && !isFetchingNextPage && hasNextPage && (
        <div ref={nextFetchTargetRef} className="h-3 w-full"></div>
      )}
    </section>
  );
};
