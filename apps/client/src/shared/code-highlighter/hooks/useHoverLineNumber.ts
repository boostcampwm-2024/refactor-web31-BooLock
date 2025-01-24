import { useState } from 'react';

/**
 *
 * @description
 * 마우스 호버한 라인넘버의 색상을 변경하는 함수
 */
export const useHoverLineNumber = () => {
  const [hoveredLineNumber, setHoveredLineNumber] = useState<number | null>(null);

  const handleMouseEnter = (lineNumber: number) => {
    setHoveredLineNumber(lineNumber);
  };

  const handleMouseLeave = () => {
    setHoveredLineNumber(null);
  };

  return { hoveredLineNumber, handleMouseEnter, handleMouseLeave };
};
