import { parseHighlightHtml, parseHighlightCss } from '../utils';
import { getParsedCodeLineListProps } from '../types';

/**
 *
 * @description
 * 코드를 파싱후 라인들을 배열로 반환하는 함수
 */
export const getParsedCodeLineList = ({
  code,
  type,
  styles,
  selectedBlockType,
}: getParsedCodeLineListProps): string[] => {
  const parsedCode =
    type === 'html'
      ? parseHighlightHtml(code, styles, selectedBlockType || '')
      : parseHighlightCss(code, styles, selectedBlockType || '');

  return parsedCode.split('\n').filter((line) => line.trim() !== '');
};
