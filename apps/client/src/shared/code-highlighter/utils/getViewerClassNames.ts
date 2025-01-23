import { getViewerClassNamesProps } from '../types';

/**
 *
 * @description
 * 클래스명을 할당하는 함수
 */
export const getViewerClassNames = ({ styles, theme, currentStep }: getViewerClassNamesProps) => {
  return `${styles.viewer} ${theme === 'dark' ? styles.dark : styles.light} ${currentStep === 3 ? 'z-[200] bg-white' : ''}`;
};
