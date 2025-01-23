import { ModalConfirm, Spinner, SquareButton } from '@/shared/ui';

import { TButtonContent } from '@/shared/types';
import { useModalStore } from '@/shared/store/useModalStore';
import { useTranslation } from 'react-i18next';

/**
 *
 * @description
 * 워크스페이스 삭제 모달 컴포넌트
 */
export const WorkspaceModal = () => {
  const { t } = useTranslation('home');

  const {
    isModalOpen: isOpen,
    modalContent,
    handleModalConfirmButton,
    handleModalCloseButton,
    isLoading,
  } = useModalStore();

  const buttonContents: TButtonContent[] = [
    { name: t('workspaceModal.cancelButton'), func: handleModalCloseButton, type: 'neutral' },
    {
      name: t('workspaceModal.confirmButton'),
      func: handleModalConfirmButton,
      type: 'danger',
      isDisabled: isLoading,
    },
  ];

  return (
    <ModalConfirm isOpen={isOpen}>
      <div className="text-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-3 text-center">
          <img
            src={`${import.meta.env.VITE_STATIC_STORAGE_URL}booduck_modal.png`}
            width={100}
            height={100}
            alt="Booduck Modal"
          />
          <p className="text-semibold-lg whitespace-pre-line text-gray-500">{modalContent}</p>
        </div>

        <div className="flex gap-3">
          {buttonContents.map((content, index) => (
            <SquareButton
              key={index}
              onClick={() => content.func()}
              variant={content.type}
              isDisabled={content.isDisabled}
              aria-label="워크스페이스 삭제 여부 버튼"
            >
              <>
                {content.isDisabled ? (
                  <Spinner
                    width={4}
                    height={4}
                    foregroundColor="grayWhite"
                    backgroundColor="gray200"
                  />
                ) : (
                  content.name
                )}
              </>
            </SquareButton>
          ))}
        </div>
      </div>
    </ModalConfirm>
  );
};
