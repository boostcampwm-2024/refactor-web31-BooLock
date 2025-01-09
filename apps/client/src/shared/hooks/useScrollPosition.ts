import { useEffect, useRef, useState } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scrollPosition };
};
