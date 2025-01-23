import styles from '../../styles/CodeViewer.module.css';
import { useDiffCodeAnimate } from '../../hooks/useDiffCodeAnimate';

type CodeViewerProps = {
  code: string;
  codeLineList: string[];
  selectedBlockStartLine?: number;
  selectedBlockLength?: number;
  selectedBlockType?: string | null;
};

/**
 *
 * @description
 * 변환된 HTML, CSS 코드를 보여주는 컴포넌트
 */
export const CodeContent = ({
  code,
  codeLineList,
  selectedBlockStartLine,
  selectedBlockLength,
  selectedBlockType,
}: CodeViewerProps) => {
  // 바뀐 코드 라인 애니메이션 주면서 할당
  const highlightedLines = useDiffCodeAnimate(code, codeLineList);

  return (
    <div className={styles.codeContent}>
      <pre>
        <code>
          {codeLineList.map((line, index) => {
            const isWithinSelectedBlock =
              selectedBlockStartLine &&
              selectedBlockLength &&
              index + 1 >= selectedBlockStartLine &&
              index + 1 < selectedBlockStartLine + selectedBlockLength;

            // selectedBlockType에 해당하는 부분 강조
            const containsSelectedType = selectedBlockType && line.includes(selectedBlockType);

            return (
              <div
                key={index}
                className={`${highlightedLines.includes(index) ? styles.newLine : ''} ${
                  isWithinSelectedBlock ? styles.blockHighlight : ''
                } ${containsSelectedType ? styles.highlightBg : ''}`}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            );
          })}
        </code>
      </pre>
    </div>
  );
};
