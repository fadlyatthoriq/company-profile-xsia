'use client';

import Link from 'next/link';
import LightRays from '@/components/LightRays';
import GradientText from '@/components/Hero/GradientText';

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-parallax
      className="relative flex flex-col items-center justify-center min-h-screen py-20 sm:py-28 lg:py-36 overflow-hidden 
      bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0D0716]"
    >
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00FFFF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>

      {/* Hero Content */}
      <div className="parallax-content relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        <div className="reveal-group flex flex-col items-center space-y-8 sm:space-y-10">

          {/* Title */}
          <h1 className="reveal-item text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight px-4">
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={5}
              showBorder={false}
            >
              Grow Smarter, Serve Better
            </GradientText>
          </h1>

          {/* Subtitle */}
          <p className="reveal-item text-[#94A3B8] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Empowering businesses with intelligent systems and personal support that grows with you.
          </p>

          {/* CTA Buttons - Responsive */}
          <div className="reveal-item w-full flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4 max-w-md sm:max-w-none mx-auto">
            <Link
              href="#contact"
              className="group w-full sm:w-auto px-8 sm:px-10 h-12 sm:h-14 rounded-full flex items-center justify-center gap-x-3 
                    bg-[#00FFFF]/20 border border-[#00FFFF]/40 text-[#F8FAFC] font-semibold text-base sm:text-lg 
                    hover:shadow-[0_0_30px_#00FFFF80] hover:scale-105 transition-all duration-300 ease-out"
            >
              Let&apos;s talk
            </Link>

            <Link
              href="#projects-overview"
              className="w-full sm:w-auto px-8 sm:px-10 h-12 sm:h-14 rounded-full flex items-center justify-center
                    bg-[#1E293B]/80 border border-[#38BDF8]/20 
                    text-[#F8FAFC] font-semibold text-base sm:text-lg 
                    hover:bg-[#1E293B]/60 hover:border-[#38BDF8]/40 
                    transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
