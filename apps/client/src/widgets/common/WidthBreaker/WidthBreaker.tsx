import { useWindowSize } from '@/shared/hooks';

export const WidthBreaker = () => {
  const { screenWidth } = useWindowSize();

  return (
    <>
      {screenWidth < 1230 ? (
        <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-50/70 backdrop-blur-sm">
          <span className="text-bold-lg text-gray-950">
            PC 환경(너비 1230px 이상)에서만 접근 가능한 서비스입니다.
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
