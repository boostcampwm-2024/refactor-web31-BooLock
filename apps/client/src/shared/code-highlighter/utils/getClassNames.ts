import { getClassNamesProps } from '../types';

/**
 *
 * @description
 * 클래스명을 할당하는 함수
 */
export const getClassNames = ({
  styles,
  index,
  line,
  highlightedLines,
  selectedBlockStartLine,
  selectedBlockLength,
  selectedBlockType,
}: getClassNamesProps): string => {
  const isHighlighted = highlightedLines.includes(index) ? styles.newLine : '';
  const isInSelectedBlock =
    selectedBlockStartLine &&
    selectedBlockLength &&
    index + 1 >= selectedBlockStartLine &&
    index + 1 < selectedBlockStartLine + selectedBlockLength
      ? styles.blockHighlight
      : '';
  const isOfSelectedType =
    selectedBlockType && line.includes(selectedBlockType) ? styles.highlightBg : '';

  return `${isHighlighted} ${isInSelectedBlock} ${isOfSelectedType}`.trim();
};
