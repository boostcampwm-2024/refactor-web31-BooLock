import styles from '../../styles/CodeViewer.module.css';
import { useHoverLineNumber } from '../../hooks';
import { getLineNumberClass } from '../../utils';
import { LineNumbersProps } from '../../types';

/**
 *
 * @description
 * 코드의 줄 수를 표시하는 컴포넌트
 */
export const LineNumbers = ({ codeLineList }: LineNumbersProps) => {
  const { hoveredLineNumber, handleMouseEnter, handleMouseLeave } = useHoverLineNumber();

  return (
    <div className={styles.lineNumbers}>
      {codeLineList.map((_, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          className={getLineNumberClass(
            styles.lineNumber,
            styles.lineHighlight,
            index + 1,
            hoveredLineNumber
          )}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};
