'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    const btn = document.querySelector('#backToTopBtn');

    if (btn) {
      gsap.fromTo(
        btn,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: document.body,
            start: 'top -400',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="backToTopBtn"
      onClick={scrollToTop}
      className={`fixed bottom-10 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
      shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/20
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </button>
  );
}
