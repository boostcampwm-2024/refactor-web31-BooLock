export const getSelectedBlockDetails = (
  startLine: number,
  length: number,
  type: string | null
) => ({
  startLine,
  length,
  type,
});
