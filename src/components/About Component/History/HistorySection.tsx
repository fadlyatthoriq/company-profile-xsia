'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HistorySection() {
  const historyRef = useRef<HTMLDivElement | null>(null);
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      timelineItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
            x: -50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.05,
          });
        }
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={historyRef}
      className="
        relative px-6 md:px-12 lg:px-32 py-24
        bg-gradient-to-b from-[#0B1120]/90 via-[#0F172A]/95 to-[#0F172A]
        text-gray-300 overflow-hidden
      "
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-[50rem] h-[30rem] bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[30rem] bg-purple-500/10 blur-[180px] rounded-full" />

      {/* Decorative line */}
      <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Company History
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
          </motion.div>
        </div>

        <div className="space-y-6 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/40 to-purple-500/40 hidden md:block" />

          {[
            {
              color: 'bg-cyan-400',
              shadow: 'shadow-cyan-400/50',
              text: (
                <>
                  PT xSiA Sistem was founded in{' '}
                  <span className="text-cyan-400 font-semibold">2013</span>{' '}
                  following years of experience developing systems for
                  Indonesia&apos;s maritime industry. It began in 2014 with a
                  web-based <strong className="text-white">Ship Layout and Weekly Reporting System</strong>{' '}
                  for one of Jakarta&apos;s largest shipyards.
                </>
              ),
            },
            {
              color: 'bg-blue-400',
              shadow: 'shadow-blue-400/50',
              text: (
                <>
                  The company&apos;s expertise later expanded through collaboration
                  with the{' '}
                  <strong className="text-white">Directorate General of Land Transportation</strong>,
                  developing a{' '}
                  <strong className="text-white">Vessel Tracking System</strong> for the{' '}
                  <strong className="text-white">Merak–Bakauheni</strong> route.
                  The system provides real-time monitoring and automated analytics
                  for ship operations, now used in multiple major ferry ports.
                </>
              ),
            },
            {
              color: 'bg-purple-400',
              shadow: 'shadow-purple-400/50',
              text: (
                <>
                  PT xSiA Sistem then launched{' '}
                  <strong className="text-white">Dock-Rp</strong>, an ERP system for
                  shipyard production management, and expanded to{' '}
                  <strong className="text-white">Shop-Rp</strong> (for retail) and{' '}
                  <strong className="text-white">School-Rp</strong> (for education),
                  empowering digital transformation across industries.
                </>
              ),
            },
            {
              color: 'bg-emerald-400',
              shadow: 'shadow-emerald-400/50',
              text: (
                <>
                  From industrial systems to educational software, PT xSiA Sistem
                  continues to transform real-world challenges into digital
                  innovations.
                </>
              ),
              highlight: true,
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) timelineItemsRef.current[index] = el;
              }}
              className="relative pl-0 md:pl-8"
            >
              <div
                className={`absolute left-0 top-2 w-3 h-3 rounded-full hidden md:block ${item.color} ${item.shadow}`}
                style={{ left: '-6px' }}
              />
              <div
                className={`border rounded-xl p-6 transition-all duration-300 backdrop-blur-sm ${
                  item.highlight
                    ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 hover:from-cyan-500/20 hover:to-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <p className="leading-relaxed text-gray-300 font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
