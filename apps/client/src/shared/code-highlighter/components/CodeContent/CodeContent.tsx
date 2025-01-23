import styles from '../../styles/CodeViewer.module.css';
import { useDiffCodeAnimate } from '../../hooks/useDiffCodeAnimate';
import { getClassNames } from '../../utils/getClassNames';

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
  const highlightedLines = useDiffCodeAnimate(code, codeLineList);

  return (
    <pre className={styles.codeContent}>
      <code>
        {codeLineList.map((line, index) => {
          return (
            <div
              key={index}
              className={getClassNames(
                styles,
                index,
                line,
                highlightedLines,
                selectedBlockStartLine,
                selectedBlockLength,
                selectedBlockType
              )}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          );
        })}
      </code>
    </pre>
  );
};
