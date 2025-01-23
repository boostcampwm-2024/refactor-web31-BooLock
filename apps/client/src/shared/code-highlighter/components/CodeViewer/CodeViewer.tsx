import styles from '../../styles/CodeViewer.module.css';
import { LineNumbers } from '../../components';
import { useDiffCodeAnimate } from '../../hooks';
import { getParsedCodeLineList, getClassNames, getViewerClassNames } from '../../utils';
import { CodeViewerProps } from '../../types';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';

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
  const codeLineList = getParsedCodeLineList({ code, type, styles, selectedBlockType });
  const highlightedLines = useDiffCodeAnimate({ code, codeLineList });
  const { currentStep } = useCoachMarkStore();

  return (
    <div className={getViewerClassNames({ styles, theme, currentStep })}>
      <div className={styles.scrollContainer}>
        <LineNumbers codeLineList={codeLineList} />

        <pre className={styles.codeContent}>
          <code>
            {codeLineList.map((line, index) => {
              return (
                <div
                  key={index}
                  className={getClassNames({
                    styles,
                    index,
                    line,
                    highlightedLines,
                    selectedBlockStartLine,
                    selectedBlockLength,
                    selectedBlockType,
                  })}
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
