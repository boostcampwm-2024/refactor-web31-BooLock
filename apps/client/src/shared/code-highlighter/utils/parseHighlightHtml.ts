/**
 *
 * @description
 * 주어진 HTML 코드에 하이라이트 스타일을 적용하여 변환
 */
export const parseHighlightHtml = (
  html: string,
  styles: Record<string, string>,
  selectedBlockType: string | null
) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // HTML 요소 노드 처리
  const renderElement = (element: HTMLElement, depth: number): string => {
    const indent = '  '.repeat(depth);
    const tag = `<span class="${styles.tag}">${element.tagName.toLowerCase()}</span>`;
    const attrs = Array.from(element.attributes)
      .map((attr) => {
        const value =
          attr.name === 'class' && selectedBlockType && attr.value.includes(selectedBlockType)
            ? attr.value.replace(
                selectedBlockType,
                `<span style="background-color: #FFF3AD; color: green">${selectedBlockType}</span>`
              )
            : attr.value;
        return `<span class="${styles.attribute}">${attr.name}</span>=<span class="${styles.value}">"${value}"</span>`;
      })
      .join(' ');
    const openTag = `${indent}&lt;${tag}${attrs ? ' ' + attrs : ''}&gt;`;
    const closeTag = `${indent}&lt;/${tag}&gt;`;

    // 자식 노드 처리
    const children = Array.from(element.childNodes)
      .map((child) => processNode(child, depth + 1))
      .join('');

    // 예외 처리: br와 hr 태그는 한 줄로 출력
    if (['br', 'hr', 'img'].includes(element.tagName.toLowerCase())) {
      return `\n${indent}&lt;${tag}${attrs ? ' ' + attrs : ''} /&gt;`;
    }

    // 예외 처리: <head> 태그는 한 줄로 처리
    if (element.tagName.toLowerCase() === 'head') {
      return `${indent}&lt;${tag}${attrs ? ' ' + attrs : ''}&gt;${children.trim()}&lt;/${tag}&gt;`;
    }

    // 자식 노드 유무에 따른 반환
    return children.trim() ? `\n${openTag}\n${children}\n${closeTag}` : `\n${openTag}\n${closeTag}`;
  };

  // 텍스트 노드는 따로 처리
  const renderText = (textNode: Text, depth: number): string => {
    const text = textNode.textContent?.trim();
    const indent = '  '.repeat(depth);
    return text ? `\n${indent}<span class="${styles.text}">${text}</span>` : '';
  };

  // 노드 타입에 따로 처리
  const processNode = (node: ChildNode, depth: number = 0): string => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      return renderElement(node as HTMLElement, depth);
    } else if (node.nodeType === Node.TEXT_NODE) {
      return renderText(node as Text, depth);
    }
    return '';
  };

  // 문서 루트 노드로 시작
  const result = processNode(doc.documentElement, 0).trim();

  // 각 줄 앞에 공백 두 칸 추가
  return result
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n');
};
