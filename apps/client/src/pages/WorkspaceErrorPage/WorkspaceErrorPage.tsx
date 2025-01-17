import { ErrorPage, NotFound } from '@/pages';

import toast from 'react-hot-toast';
import { useRouteError } from 'react-router-dom';

export const WorkspaceErrorPage = () => {
  const error: any = useRouteError();
  const statusCode = error?.response?.statusCode || error?.status;
  if (statusCode === 404) {
    toast.error('워크스페이스 정보 불러오기 실패');
    return <NotFound />;
  }
  return <ErrorPage />;
};
