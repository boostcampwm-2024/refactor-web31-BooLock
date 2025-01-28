import { createCssClassBlock, cssStyleToolboxConfig } from '@/shared/blockly';
import { createUserId, getUserId, removeCssClassNamePrefix } from '@/shared/utils';
import {
  useClassBlockStore,
  useCssPropsStore,
  useImageModalStore,
  useResetCssStore,
  useWorkspaceChangeStatusStore,
  useWorkspaceStore,
} from '@/shared/store';

import { WorkspaceApi } from '@/shared/api';
import { useEffect } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { workspaceKeys } from '@/shared/hooks';

export const useGetWorkspace = (workspaceId: string) => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId() || createUserId();
  const initCssPropertyObj = useCssPropsStore((state) => state.initCssPropertyObj);
  const { initClassBlockList } = useClassBlockStore();
  const { setCanvasInfo, setName } = useWorkspaceStore();
  const { resetChangedStatusState } = useWorkspaceChangeStatusStore();
  const { setIsResetCssChecked } = useResetCssStore();
  const { setInitialImageMap, setInitialImageList } = useImageModalStore();
  const { data, isError } = useSuspenseQuery({

    queryKey: workspaceKeys.detail(workspaceId),
    queryFn: () => {
      resetChangedStatusState();
      return workspaceApi.getWorkspace(userId, workspaceId);
    },
  });

  useEffect(() => {
    if (isError || !data || !data.workspaceDto) {
      return;
    }

    setName(data.workspaceDto.name);
    Object.keys(data.workspaceDto.totalCssPropertyObj).forEach((className) => {
      createCssClassBlock(className);
    });

    initCssPropertyObj(data.workspaceDto.totalCssPropertyObj);
    initClassBlockList(
      Object.keys(data.workspaceDto.totalCssPropertyObj).map((className) =>
        removeCssClassNamePrefix(className)
      )
    );
    setCanvasInfo(data.workspaceDto.canvas);
    cssStyleToolboxConfig.contents = data.workspaceDto.classBlockList
      ? JSON.parse(data.workspaceDto.classBlockList)
      : [];
    setIsResetCssChecked(data.workspaceDto.isCssReset);
    setInitialImageMap(data.workspaceDto.imageMap);
    setInitialImageList(data.workspaceDto.imageList);
  }, [isError, data]);
};
