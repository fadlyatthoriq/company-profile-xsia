'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// === React Icons (FontAwesome) ===
import { FaEye, FaRocket, FaDesktop, FaBolt, FaHandshake, FaGlobe } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function VisionMissionSection() {
  const visionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const visionCards = gsap.utils.toArray<HTMLDivElement>('.vision-card');
      if (visionCards.length > 0) {
        gsap.fromTo(
          visionCards,
          {
            opacity: 0,
            y: 40,
            scale: 0.97,
          },
          {
            scrollTrigger: {
              trigger: visionRef.current,
              start: 'top 90%',
              end: 'bottom 80%',
              toggleActions: 'play none none reverse',
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.15,
          }
        );
      }

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={visionRef}
      className="
        relative px-6 md:px-12 lg:px-32 py-24 
        bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#0B1120]
        text-gray-300 overflow-hidden
      "
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[30rem] bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[45rem] h-[35rem] bg-emerald-500/10 blur-[180px] rounded-full" />

      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Vision & Mission
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="vision-card bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <FaEye className="text-2xl text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Vision</h3>
            </div>
            <p className="text-gray-300 italic leading-relaxed text-lg border-l-4 border-emerald-400 pl-4">
              &ldquo;To become a trusted provider of high-quality information technology solutions at affordable prices.&rdquo;
            </p>
          </div>

          {/* Mission Card */}
          <div className="vision-card bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <FaRocket className="text-2xl text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Mission</h3>
            </div>

            <ul className="space-y-4 text-gray-300">
              {[
                {
                  icon: <FaDesktop className="text-cyan-400 text-xl" />,
                  title: 'Product Development',
                  desc: 'Create secure, efficient, and user-friendly software to meet modern business needs.',
                },
                {
                  icon: <FaBolt className="text-cyan-400 text-xl" />,
                  title: 'Quality & Innovation',
                  desc: 'Deliver continuous innovation through research and development, ensuring top-tier service quality.',
                },
                {
                  icon: <FaHandshake className="text-cyan-400 text-xl" />,
                  title: 'Customer Service',
                  desc: 'Offer responsive and personalized technical support to guarantee customer satisfaction.',
                },
                {
                  icon: <FaGlobe className="text-cyan-400 text-xl" />,
                  title: 'Strategic Partnerships',
                  desc: 'Build strong collaborations with clients, partners, and communities to create mutual growth.',
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="mt-1">{item.icon}</span>
                  <div>
                    <strong className="text-white">{item.title}:</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
