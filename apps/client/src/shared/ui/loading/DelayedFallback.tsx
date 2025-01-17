import { ReactNode, useEffect, useState } from 'react';

type DelayedFallbackProps = {
  children: ReactNode;
  delay?: number;
};

export const DelayedFallback = ({ children, delay = 50 }: DelayedFallbackProps) => {
  const [showFallback, setShowFallback] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return <>{showFallback ? children : null} </>;
};
