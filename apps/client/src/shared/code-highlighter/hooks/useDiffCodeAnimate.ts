import { useEffect, useState } from 'react';

export const useDiffCodeAnimate = (code: string, codeLineList: string[]) => {
  const [previousCodeLines, setPreviousCodeLines] = useState<string[]>([]);
  const [highlightedLines, setHighlightedLines] = useState<number[]>([]);

  // 코드 애니메이션 효과
  useEffect(() => {
    const newLineList: number[] = [];

    codeLineList.forEach((line, index) => {
      if (!previousCodeLines[index] || previousCodeLines[index] !== line) {
        newLineList.push(index);
      }
    });

    setHighlightedLines(newLineList);

    // 애니메이션이 끝난 후 강조 제거
    const timeout = setTimeout(() => setHighlightedLines([]), 1000);

    setPreviousCodeLines(codeLineList);

    return () => clearTimeout(timeout);
  }, [code]);

  return highlightedLines;
};
