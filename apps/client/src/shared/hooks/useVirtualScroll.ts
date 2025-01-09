import { useEffect, useState } from 'react';
import { useScrollPosition, useWindowSize } from '@/shared/hooks';

const calculateNumOfNodePadding = (windowWidth: number): number => {
  if (windowWidth < 640) {
    return 1;
  } else if (windowWidth < 768) {
    return 2;
  } else if (windowWidth < 1024) {
    return 3;
  }
  return 4;
};

export const useVirtualScroll = <T>({
  data,
  topSectionHeight = 0,
  renderedItemHeight,
  gapY = 0,
}: {
  data: T[] | undefined;
  topSectionHeight?: number;
  renderedItemHeight: number;
  gapY: number;
}) => {
  const { scrollPosition } = useScrollPosition();
  const { screenHeight, screenWidth } = useWindowSize();

  const [renderedData, setRenderedData] = useState<T[]>([]);

  const nodePadding = calculateNumOfNodePadding(screenWidth);
  const start = Math.max(
    0,
    Math.floor((scrollPosition - topSectionHeight) / (renderedItemHeight + gapY)) * nodePadding
  );
  const offsetY = Math.floor(start / nodePadding) * (renderedItemHeight + gapY);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    if (!data) {
      return;
    }

    setRenderedData(
      data.slice(
        start,
        start +
          Math.floor(screenHeight / (renderedItemHeight + gapY)) * nodePadding +
          2 * nodePadding
      )
    );
    setTotalHeight(Math.floor(data!.length / nodePadding) * (renderedItemHeight + gapY));
  }, [start, screenHeight, data]);

  return { renderedData, offsetY, totalHeight };
};
