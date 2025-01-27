import { useIframeStore } from '@/shared/store';

import { IFRAME_ERROR_MESSAGE } from '@/shared/utils';
import html2canvas from 'html2canvas';

export const convertToCanvas = async () => {
  const previewIframe = useIframeStore.getState().iframeRef?.current;

  if (!previewIframe) {
    throw new Error(IFRAME_ERROR_MESSAGE.SELECT_PREVIEW_TAB);
  }
  const previewDocument = previewIframe?.contentDocument || previewIframe?.contentWindow?.document;
  if (!previewDocument) {
    throw new Error(IFRAME_ERROR_MESSAGE.FAIL_TO_SAVE);
  }

  const previewY = previewIframe.getBoundingClientRect().y;

  const canvas = await html2canvas(previewDocument.documentElement, {
    useCORS: true,
    logging: true,
    allowTaint: true,
    imageTimeout: 20000,
    proxy: 'https://boolock-storage.kr.object.ncloudstorage.com/',
    scale: 2,
    width: previewIframe.clientWidth,
    height: previewIframe.clientWidth,
    ignoreElements: (element) => {
      if (!element || !element.getBoundingClientRect) return true;
      const rect = element.getBoundingClientRect();

      return rect.y - previewY > previewIframe.clientWidth;
    },
  });
  return canvas;
};
