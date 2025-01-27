import BlackLogoText from '@/shared/assets/boolock_logo_black.svg?react';
import { Link } from 'react-router-dom';
import WhiteLogoText from '@/shared/assets/boolock_logo_white.svg?react';
import { memo } from 'react';

type LogoProps = {
  isBlack: boolean;
};

/**
 *
 * @description
 * 로고 컴포넌트 (흰색/검은색), 클릭 시 홈페이지로 이동
 */
export const Logo = memo(({ isBlack }: LogoProps) => {
  return (
    <Link to="/">
      <div className="flex items-center gap-3">
        <img
          src={`${import.meta.env.VITE_STATIC_STORAGE_URL}boolock_logo.png`}
          width={32}
          height={32}
          alt="Boolock Logo"
        />
        {isBlack ? <WhiteLogoText className="w-28" /> : <BlackLogoText className="w-28" />}
      </div>
    </Link>
  );
});
