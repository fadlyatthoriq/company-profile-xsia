'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import LightRays from '@/components/LightRays';
import GradientText from '@/components/Main Component/Hero/GradientText';
import TextType from '@/components/TextType';

interface Particle {
  id: number;
  left: string;
  top: string;
  delay: string;
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[] | null>(null);

  // Generate partikel hanya di client setelah mount
  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section
      id="hero"
      data-parallax
      className="relative flex flex-col items-center justify-center min-h-screen py-20 sm:py-28 lg:py-36 
      overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0D0716]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Render partikel hanya setelah mount (client-side) */}
        {particles && (
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-[5px] h-[5px] bg-cyan-300/40 rounded-full animate-float"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                }}
              />
            ))}
          </div>
        )}

        <LightRays
          raysOrigin="top-center"
          raysColor="#00FFFF"
          raysSpeed={2}
          lightSpread={1}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.2}
          distortion={0.1}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight flex justify-center animate-fade-in-up">
          <GradientText
            colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
            animationSpeed={6}
            showBorder={false}
          >
            Grow Smarter, Serve Better
          </GradientText>
        </h1>

        <div className="text-[#94A3B8] text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
          <TextType
            text={[
              'Empowering businesses with intelligent systems and personal support that grows with you.', 'Innovate with AI-driven solutions tailored for your success.', 'Seamless integration, real-time insights, and dedicated support for your business growth.'
            ]}
            typingSpeed={50}
            pauseDuration={1500}
            showCursor={true}
            deletingSpeed={25}
            cursorBlinkDuration={0.5}
            cursorCharacter="|"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
          <Link
            href="#contact"
            className="group px-8 sm:px-10 h-12 sm:h-14 rounded-full flex items-center justify-center gap-x-3 
            bg-[#00FFFF]/20 border border-[#00FFFF]/40 text-[#F8FAFC] font-semibold text-lg 
            hover:shadow-[0_0_40px_#00FFFF] hover:scale-110 hover:bg-[#00FFFF]/30 transition-all duration-500 ease-out"
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Let&apos;s Talk
          </Link>

          <Link
            href="#projects-overview"
            className="px-8 sm:px-10 h-12 sm:h-14 rounded-full flex items-center justify-center
            bg-[#1E293B]/80 border border-[#38BDF8]/20 text-[#F8FAFC] font-semibold text-lg 
            hover:bg-[#1E293B]/60 hover:border-[#38BDF8]/40 hover:shadow-[0_0_20px_#38BDF8] hover:scale-105 
            transition-all duration-500"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
