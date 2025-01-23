import { WorkspaceAddBtn, WorkspaceSampleButton } from '@/entities';
import { useTranslation } from 'react-i18next';

/**
 *
 * @description
 * 워크스페이스 헤더 컴포넌트
 */
export const WorkspaceHeader = () => {
  const { t } = useTranslation('home');

  return (
    <header className="mb-5 mt-[60px] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-bold-xl">{t('section.header')}</h2>
        <WorkspaceAddBtn />
      </div>
      <WorkspaceSampleButton />
    </header>
  );
};
