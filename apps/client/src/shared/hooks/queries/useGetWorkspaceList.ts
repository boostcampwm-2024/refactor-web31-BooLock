import { createUserId, getUserId } from '@/shared/utils';

import { WorkspaceApi } from '@/shared/api';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { workspaceKeys } from '@/shared/hooks';
export const useGetWorkspaceList = () => {
  const workspaceApi = WorkspaceApi();

  const {
    hasNextPage,
    fetchNextPage,
    isPending,
    isFetchingNextPage,
    isError,
    data: workspaceList,
  } = useSuspenseInfiniteQuery({
    queryKey: workspaceKeys.list(),
    queryFn: async ({ pageParam }) => {
      const isNewUser = !getUserId();
      const userId = getUserId() || createUserId();
      if (isNewUser) {
        await workspaceApi.createWorkspace(userId, true);
      }
      return workspaceApi.getWorkspaceList(userId, pageParam);
    },
    initialPageParam: 'null',
    getNextPageParam: (lastPage) => {
      return lastPage.pagedWorkspaceListResult?.nextCursor
        ? JSON.stringify(lastPage.pagedWorkspaceListResult.nextCursor)
        : undefined;
    },
    select: (data) =>
      (data.pages ?? []).flatMap((page) => page.pagedWorkspaceListResult.workspaceList),
  });

  return { hasNextPage, fetchNextPage, isFetchingNextPage, isPending, isError, workspaceList };
};
