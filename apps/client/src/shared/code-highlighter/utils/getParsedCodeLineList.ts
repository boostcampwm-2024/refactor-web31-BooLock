import { parseHighlightCss } from './parseHighlightCss';
import { parseHighlightHtml } from './parseHighlightHtml';

/**
 *
 * @description
 * 코드를 파싱후 라인들을 배열로 반환하는 함수
 */
export const getParsedCodeLineList = (
  code: string,
  type: 'html' | 'css',
  styles: { [key: string]: string },
  selectedBlockType?: string | null
): string[] => {
  const parsedCode =
    type === 'html'
      ? parseHighlightHtml(code, styles, selectedBlockType || '')
      : parseHighlightCss(code, styles, selectedBlockType || '');

  // 코드 라인을 배열로 변환하여 빈 줄 제거
  return parsedCode.split('\n').filter((line) => line.trim() !== '');
};
