/**
 *
 * @description
 * 클래스명을 할당하는 함수
 */
export const getClassNames = (
  styles: { [key: string]: string },
  index: number,
  line: string,
  highlightedLines: number[],
  selectedBlockStartLine?: number,
  selectedBlockLength?: number,
  selectedBlockType?: string | null
): string => {
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
