import { useWorkspaceSave } from '@/shared/hooks/useWorkspaceSave';
import { Spinner } from '@/shared/ui';

/**
 *
 * @description
 * Workspace 상태를 저장하는 버튼입니다.
 * 저장 항목 : css 속성, 캔버스 블록 상태, css class 블록, css 리셋 여부, 미리보기 썸네일
 */
export const SaveButton = () => {
  const { handleSave, isCapture, isPending } = useWorkspaceSave();

  return (
    <>
      <p>{isPending || isCapture ? '저장 중' : '저장 완료'}</p>
      <button
        onClick={handleSave}
        className="text-bold-rg w-16 rounded-[30px] bg-green-500 py-2 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500"
        disabled={isPending}
        aria-label="워크스페이스 저장 버튼"
      >
        {isPending || isCapture ? (
          <Spinner width={4} height={4} backgroundColor="gray200" foregroundColor="grayWhite" />
        ) : (
          <p>저장</p>
        )}
      </button>
    </>
  );
};
