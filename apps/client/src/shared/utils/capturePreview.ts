import { useIframeStore } from '@/shared/store';

import { IFRAME_ERROR_MESSAGE } from '@/shared/utils';
import html2canvas from 'html2canvas';

export const capturePreview = async () => {
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
    imageTimeout: 20000,
    scale: 2,
    width: 600,
    height: 600,
    ignoreElements: (element) => {
      if (!element || !element.getBoundingClientRect) return true;
      const rect = element.getBoundingClientRect();

      return rect.y - previewY > 600;
    },
  });
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp'));
  const thumbnail = new File([blob as Blob], 'thumbnail.webp', { type: 'image/webp' });
  return thumbnail;
};
