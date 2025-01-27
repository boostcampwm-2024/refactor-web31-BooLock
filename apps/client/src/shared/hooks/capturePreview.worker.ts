self.onmessage = async (event) => {
  const { imageData, width, height } = event.data;

  if (!imageData) {
    self.postMessage({ error: '받은 이미지 데이터가 없습니다' });
    return;
  }

  try {
    const offscreenCanvas = new OffscreenCanvas(width, height);
    const ctx = offscreenCanvas.getContext('2d');

    if (!ctx) {
      throw new Error('OffscreenCanvas 컨텍스트가 없음');
    }

    ctx.putImageData(imageData, 0, 0);

    const blob = await offscreenCanvas.convertToBlob({ type: 'image/webp', quality: 0.8 });

    if (!blob) {
      self.postMessage({ error: 'Blob 생성 실패' });
      return;
    }

    const thumbnail = new File([blob], 'thumbnail.webp', { type: 'image/webp' });

    self.postMessage({ thumbnail });
  } catch (error) {
    self.postMessage({ error: error });
  }
};
