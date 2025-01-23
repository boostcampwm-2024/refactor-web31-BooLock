/**
 *
 * @description
 * 라인의 클래스명을 할당하는 함수
 */
export const getLineNumberClass = (
  baseClass: string,
  highlightClass: string,
  lineNumber: number,
  hoveredLineNumber: number | null
): string => {
  return `${baseClass} ${hoveredLineNumber === lineNumber ? highlightClass : ''}`.trim();
};
