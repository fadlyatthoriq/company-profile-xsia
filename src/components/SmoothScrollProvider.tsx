'use client';

import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollContextProps {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextProps>({ lenis: null });

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenisReady, setLenisReady] = useState(false);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        lerp: 0.1,
        touchMultiplier: 1.5, 
        wheelMultiplier: 1.2, 
        infinite: false,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      setLenisReady(true);
    }

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      setLenisReady(false);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScrollProvider;
