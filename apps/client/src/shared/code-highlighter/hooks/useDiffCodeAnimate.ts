import { useEffect, useState } from 'react';

import { ANIMATION_DURATION_MS } from '../constants/animation';

/**
 *
 * @description
 * 변환된 HTML 코드에서 바뀐 코드 라인을 애니메이션 주면서 할당
 */
export const useDiffCodeAnimate = (code: string, codeLineList: string[]) => {
  const [previousCodeLines, setPreviousCodeLines] = useState<string[]>([]);
  const [highlightedLines, setHighlightedLines] = useState<number[]>([]);

  useEffect(() => {
    const newLineList: number[] = [];

    codeLineList.forEach((line, index) => {
      if (!previousCodeLines[index] || previousCodeLines[index] !== line) {
        newLineList.push(index);
      }
    });

    setHighlightedLines(newLineList);
    const timeout = setTimeout(() => setHighlightedLines([]), ANIMATION_DURATION_MS);
    setPreviousCodeLines(codeLineList);

    return () => clearTimeout(timeout);
  }, [code]);

  return highlightedLines;
};
