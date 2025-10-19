'use client';

import Link from 'next/link';
import LightRays from '@/components/Hero/LightRays';
import GradientText from '@/components/Hero/GradientText';

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-parallax
      className="relative flex items-center justify-center min-h-screen py-28 sm:py-36 overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      {/* Background Light Rays */}
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
      <div className="parallax-content relative z-10 w-full max-w-6xl mx-auto px-6 text-center space-y-10">
        <div className="reveal-group flex flex-col items-center space-y-10">

          {/* Title */}
          <h1 className="reveal-item text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={5}
              showBorder={false}
            >
              Grow Smarter, Serve Better
            </GradientText>
          </h1>

          {/* Subtitle */}
          <p className="reveal-item text-[#94A3B8] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Empowering businesses with intelligent systems and personal support that grows with you.
          </p>

          {/* CTA */}
          <div className="reveal-item flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="#"
              className="group px-10 h-14 rounded-full flex items-center gap-x-3 
                    bg-[#00FFFF]/20 border border-[#00FFFF]/40 text-[#F8FAFC] font-semibold text-lg 
                    hover:shadow-[0_0_30px_#00FFFF80] hover:scale-105 transition-all duration-300 ease-out"
            >
              Let’s talk
            </Link>

            <Link
              href="#projects-overview"
              className="px-10 h-14 rounded-full flex items-center 
                    bg-[#1E293B]/80 border border-[#38BDF8]/20 
                    text-[#F8FAFC] font-semibold text-lg 
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
