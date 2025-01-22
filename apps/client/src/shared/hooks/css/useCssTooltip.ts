import { useLayoutEffect, useRef, useState } from 'react';

import { useWindowSize } from '@/shared/hooks';

export const useCssTooltip = (leftX: number, topY: number) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);
  const { screenHeight } = useWindowSize();

  useLayoutEffect(() => {
    if (tooltipRef.current) {
      setTooltipHeight(tooltipRef.current.getBoundingClientRect().height);
    }
    return () => setTooltipHeight(0);
  }, [tooltipRef.current]);

  let tooltipX = leftX;
  let tooltipY = 0;

  if (topY + tooltipHeight > screenHeight) {
    tooltipY = -topY + tooltipHeight;
  } else {
    tooltipY = topY;
  }

  return { tooltipX, tooltipY, tooltipRef };
};
