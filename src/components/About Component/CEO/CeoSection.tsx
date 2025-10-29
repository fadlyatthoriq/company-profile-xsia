'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Tambahkan import untuk ProfileCard dari React Bits
// Asumsikan Anda telah menginstal atau menyalin kode React Bits
import ProfileCard from '@/components/ProfileCard'; // Sesuaikan path jika berbeda

gsap.registerPlugin(ScrollTrigger);

export default function CeoSection() {
    const ceoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // === CEO SECTION ===
            const ceoImage = ceoRef.current?.querySelector('.ceo-image'); // Sekarang merujuk ke root ProfileCard
            const ceoBio = ceoRef.current?.querySelector('.ceo-bio');

            if (ceoImage) {
                gsap.from(ceoImage, {
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
        <section ref={ceoRef} className="relative px-6 md:px-12 lg:px-32 py-28">
            {/* Ambient background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />

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
                    {/* CEO IMAGE - Diganti dengan ProfileCard dari React Bits */}
                    <div className="ceo-image">
                        <ProfileCard
                            name="Catur Diantono"
                            title="Founder & Chief Executive Officer"
                            avatarUrl="/images/profile.jpg"
                            iconUrl="/images/profile.jpg"
                            showUserInfo={false}
                            enableTilt={true}
                            enableMobileTilt={false}
                        />
                    </div>

                    {/* CEO BIO */}
                    <div className="ceo-bio space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <span className="text-2xl">👨‍💼</span>
                                </div>
                                <div>
                                    <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Leadership</p>
                                    <p className="text-gray-400 text-sm">Founder & Chief Executive Officer</p>
                                </div>
                            </div>

                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    With a strong background in <strong className="text-white">Artificial Intelligence</strong> and <strong className="text-white">Software Engineering</strong>, Catur Diantono earned his
                                    Doctorate in Quantum Science and Energy Engineering at <strong className="text-cyan-400">Tohoku University, Japan</strong>. He has worked at leading Japanese software
                                    companies such as ATL Systems, KLab, and Growth xPartners.
                                </p>
                                <p>
                                    In <strong className="text-cyan-400">2009</strong>, driven by his passion to contribute to Indonesia&apos;s digital transformation, he returned home and founded{' '}
                                    <strong className="text-white">PT xSiA Sistem</strong> in <strong className="text-cyan-400">2013</strong>. Today, he leads the company&apos;s mission to develop intelligent and accessible IT systems
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
