import { createPortal } from 'react-dom';
import { useCssTooltip } from '@/shared/hooks';

type CssTooltipProps = {
  description: string;
  leftX: number;
  topY: number;
};

export const CssTooltip = ({ description, leftX, topY }: CssTooltipProps) => {
  const { tooltipX, tooltipY, tooltipRef } = useCssTooltip(leftX, topY);
  return createPortal(
    <div
      className={`text-gray-white text-tooltip-sm fixed left-0 top-0 z-[9999] rounded-3xl ${tooltipY >= 0 ? 'rounded-tl-none' : 'rounded-bl-none'} bg-green-500 px-3 py-2`}
      style={{
        left: `${tooltipX + 18}px`,
        top: tooltipY >= 0 ? `${tooltipY + 8}px` : `${-tooltipY}px`,
      }}
      ref={tooltipRef}
    >
      <p>{description}</p>
    </div>,
    document.body
  );
};
