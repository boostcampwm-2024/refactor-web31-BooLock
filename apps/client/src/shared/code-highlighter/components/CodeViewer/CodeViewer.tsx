import styles from '../../styles/CodeViewer.module.css';
import { useDiffCodeAnimate } from '../../hooks/useDiffCodeAnimate';
import { LineNumbers } from '../LineNumbers/LineNumbers';
import { getParsedCodeLineList } from '../../utils/getParsedCodeLineList';
import { getClassNames } from '../../utils/getClassNames';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';

type CodeViewerProps = {
  code: string;
  type: 'html' | 'css';
  theme?: 'light' | 'dark';
  selectedBlockStartLine?: number;
  selectedBlockLength?: number;
  selectedBlockType?: string | null;
};

/**
 *
 * @description
 * 변환된 HTML, CSS 코드를 줄 수와 함께 보여주는 컴포넌트
 */
export const CodeViewer = ({
  code,
  type,
  theme,
  selectedBlockStartLine,
  selectedBlockLength,
  selectedBlockType,
}: CodeViewerProps) => {
  const codeLineList = getParsedCodeLineList(code, type, styles, selectedBlockType);
  const highlightedLines = useDiffCodeAnimate(code, codeLineList);
  const { currentStep } = useCoachMarkStore();

  const getLineClassNames = (line: string, index: number) => {
    return getClassNames(
      styles,
      index,
      line,
      highlightedLines,
      selectedBlockStartLine,
      selectedBlockLength,
      selectedBlockType
    );
  };

  return (
    <div
      className={`${styles.viewer} ${theme === 'dark' ? styles.dark : styles.light} ${currentStep === 3 ? 'z-[200] bg-white' : ''}`}
    >
      <div className={styles.scrollContainer}>
        <LineNumbers codeLineList={codeLineList} />

        <pre className={styles.codeContent}>
          <code>
            {codeLineList.map((line, index) => {
              return (
                <div
                  key={index}
                  className={getLineClassNames(line, index)}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};
