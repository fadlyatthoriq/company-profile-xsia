'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUserTie } from 'react-icons/fa';
import ProfileCard from '@/components/ProfileCard';

gsap.registerPlugin(ScrollTrigger);

export default function CeoSection() {
  const ceoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ceoCard = ceoRef.current?.querySelector('.ceo-card');
      const ceoBio = ceoRef.current?.querySelector('.ceo-bio');

      if (ceoCard) {
        gsap.from(ceoCard, {
          scrollTrigger: {
            trigger: ceoRef.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.85,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      if (ceoBio) {
        gsap.from(ceoBio, {
          scrollTrigger: {
            trigger: ceoRef.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
          x: 60,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        });
      }

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ceoRef}
      className="
        relative px-6 md:px-12 lg:px-32 py-28
        bg-gradient-to-b from-[#0B1120] via-[#111827] to-[#0F172A]
        text-gray-300 overflow-hidden
      "
    >
      {/* Ambient background */}
      <div className="absolute top-1/3 left-1/4 w-[50rem] h-[40rem] bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[45rem] h-[35rem] bg-blue-500/10 blur-[160px] rounded-full" />

      {/* Pattern subtle */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our CEO
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* CEO ProfileCard */}
          <div className="ceo-card flex justify-center">
            <ProfileCard
              avatarUrl="/images/profile.jpg"
              miniAvatarUrl="/images/profile.jpg"
              name="Catur Diantono"
              title="Founder & CEO"
              handle="catur.diantono"
              status="Leading Innovation"
              contactText="Contact Me"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              showBehindGradient={true}
              behindGradient={`radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),
                hsla(230, 100%, 92%, var(--card-opacity)) 4%,
                hsla(250, 70%, 85%, calc(var(--card-opacity) * 0.8)) 10%,
                hsla(260, 40%, 70%, calc(var(--card-opacity) * 0.5)) 50%,
                hsla(250, 30%, 50%, 0) 100%
              ),
              radial-gradient(35% 52% at 55% 20%, #00e0ffcc 0%, #170d2700 100%),
              radial-gradient(100% 100% at 50% 50%, #9b5effff 1%, #170d2700 76%),
              conic-gradient(from 124deg at 50% 50%, #6b21ff 0%, #00e0ff 40%, #00e0ff 60%, #6b21ff 100%)`}
              innerGradient="linear-gradient(145deg, #1E293B88 0%, #3B82F64D 50%, #8B5CF64D 100%)"
              onContactClick={() => {
                window.location.href = 'mailto:catur@xsia.com';
              }}
            />
          </div>

          {/* CEO Bio */}
          <div className="ceo-bio space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <FaUserTie className="text-2xl text-blue-400" />
                </div>
                <div>
                  <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                    Leadership
                  </p>
                  <p className="text-gray-400 text-sm">
                    Founder & Chief Executive Officer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With a strong background in{' '}
                  <strong className="text-white">Artificial Intelligence</strong> and{' '}
                  <strong className="text-white">Software Engineering</strong>, Catur
                  Diantono earned his Doctorate in Quantum Science and Energy Engineering
                  at{' '}
                  <strong className="text-cyan-400">
                    Tohoku University, Japan
                  </strong>
                  . He has worked at leading Japanese software companies such as ATL
                  Systems, KLab, and Growth xPartners.
                </p>
                <p>
                  In <strong className="text-cyan-400">2009</strong>, driven by his passion
                  to contribute to Indonesia&apos;s digital transformation, he returned home
                  and founded{' '}
                  <strong className="text-white">PT xSiA Sistem</strong> in{' '}
                  <strong className="text-cyan-400">2013</strong>. Today, he leads the
                  company&apos;s mission to develop intelligent and accessible IT systems
                  that empower industries and communities.
                </p>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              className="relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border-l-4 border-cyan-400 rounded-r-2xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-3 -left-3 text-6xl text-cyan-400/30">&ldquo;</div>
              <blockquote className="text-cyan-300 italic text-lg relative z-10">
                Technology should empower people — not complicate their work.
              </blockquote>
              <div className="absolute -bottom-3 -right-3 text-6xl text-cyan-400/30 rotate-180">&ldquo;</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
