'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  mounted: boolean;
}

export default function HeroSection({ mounted }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      // === HERO PARALLAX ===
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 100,
        opacity: 0.5,
      });

      // === FLOATING LIGHTS ===
      gsap.to('.ambient-light-1', {
        y: -30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.ambient-light-2', {
        y: 30,
        x: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      ref={heroRef}
      className="
        relative flex flex-col items-center justify-center text-center 
        px-6 md:px-12 lg:px-20 
        min-h-screen overflow-hidden
      "
    >
      {/* Enhanced Ambient Lights */}
      <div className="ambient-light-1 absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px]" />
      <div className="ambient-light-2 absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px]" />

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${(i * 7 + 15) % 100}%`,
                top: `${(i * 11 + 10) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium"
        >
          Innovative IT Solutions Since 2013
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
          About PT xSiA Sistem
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Empowering industries with smart and affordable IT solutions.
          We believe innovation should be accessible for everyone, helping businesses grow efficiently and sustainably.
        </p>
      </motion.div>
    </section>
  );
}
