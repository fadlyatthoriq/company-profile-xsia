'use client';

import { useLayoutEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: isMobile ? 0.08 : 0.25,
      smoothWheel: !isMobile,
      syncTouch: true,
      gestureOrientation: 'vertical',
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) lenis.scrollTo(value);
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.addEventListener('refresh', () => lenis.raf(performance.now()));
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
