/**
 *
 * @description
 * 클래스명을 할당하는 함수
 */
export const getViewerClassNames = (
  styles: any,
  theme: string | undefined,
  currentStep: number
) => {
  return `${styles.viewer} ${theme === 'dark' ? styles.dark : styles.light} ${currentStep === 3 ? 'z-[200] bg-white' : ''}`;
};
