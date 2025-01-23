export const getLineNumberClass = (
  baseClass: string,
  highlightClass: string,
  lineNumber: number,
  hoveredLineNumber: number | null
): string => {
  return `${baseClass} ${hoveredLineNumber === lineNumber ? highlightClass : ''}`.trim();
};
