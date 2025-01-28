// components 타입
export type CodeViewerProps = {
  code: string;
  type: 'html' | 'css';
  theme?: 'light' | 'dark';
  selectedBlockStartLine?: number;
  selectedBlockLength?: number;
  selectedBlockType?: string | null;
};

export type LineNumbersProps = {
  codeLineList: string[];
};

// hooks 타입
export type useDiffCodeAnimateProps = {
  code: string;
  codeLineList: string[];
};

// utils 타입
export type getClassNamesProps = {
  styles: { [key: string]: string };
  index: number;
  line: string;
  highlightedLines: number[];
  selectedBlockStartLine?: number;
  selectedBlockLength?: number;
  selectedBlockType?: string | null;
};

export type getParsedCodeLineListProps = {
  code: string;
  type: 'html' | 'css';
  styles: { [key: string]: string };
  selectedBlockType?: string | null;
};

export type getViewerClassNamesProps = {
  styles: any;
  theme: string | undefined;
  currentStep: number;
};
