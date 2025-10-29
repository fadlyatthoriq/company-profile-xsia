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
            // === TIMELINE ===
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
        <section ref={historyRef} className="relative px-6 md:px-12 lg:px-32 py-24">
            {/* Decorative line */}
            <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="max-w-5xl mx-auto">
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

                <div className="space-y-6 text-gray-300 relative">
                    {/* Timeline decoration */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50 hidden md:block" />

                    <div
                        ref={(el) => {
                            if (el) timelineItemsRef.current[0] = el;
                        }} className="relative pl-0 md:pl-8"
                    >
                        <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 hidden md:block" style={{ left: '-6px' }} />
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <p className="leading-relaxed">
                                PT xSiA Sistem was founded in <span className="text-cyan-400 font-semibold">2013</span> following years of experience developing systems for
                                Indonesia&apos;s maritime industry. It began in 2014 with a web-based <strong className="text-white">Ship Layout and Weekly Reporting System</strong> for one of Jakarta&apos;s
                                largest shipyards.
                            </p>
                        </div>
                    </div>

                    <div
                        ref={(el) => {
                            if (el) timelineItemsRef.current[1] = el;
                        }} className="relative pl-0 md:pl-8"
                    >
                        <div className="absolute left-0 top-2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 hidden md:block" style={{ left: '-6px' }} />
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <p className="leading-relaxed">
                                The company&apos;s expertise later expanded through collaboration with the <strong className="text-white">Directorate General of Land Transportation</strong>, developing a
                                <strong className="text-white"> Vessel Tracking System</strong> for the <strong className="text-white">Merak–Bakauheni</strong> route, providing real-time monitoring and automated analytics
                                for ship operations. The system has since been implemented across several major ferry ports in Indonesia.
                            </p>
                        </div>
                    </div>

                    <div
                        ref={(el) => {
                            if (el) timelineItemsRef.current[2] = el;
                        }} className="relative pl-0 md:pl-8"
                    >
                        <div className="absolute left-0 top-2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 hidden md:block" style={{ left: '-6px' }} />
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <p className="leading-relaxed">
                                PT xSiA Sistem then launched <strong className="text-white">Dock-Rp</strong>, an ERP system designed for shipyard production management to maximize project profit and
                                minimize waste. Expanding beyond shipyards, the company created <strong className="text-white">Shop-Rp</strong> — a mini ERP for inventory and retail operations — and
                                <strong className="text-white"> School-Rp</strong>, a complete digital administration platform for educational institutions.
                            </p>
                        </div>
                    </div>

                    <div
                        ref={(el) => {
                            if (el) timelineItemsRef.current[3] = el;
                        }} className="relative pl-0 md:pl-8"
                    >
                        <div className="absolute left-0 top-2 w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50 hidden md:block" style={{ left: '-6px' }} />
                        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300">
                            <p className="leading-relaxed font-medium text-white">
                                From industrial systems to educational software, PT xSiA Sistem continues to transform real-world challenges into digital innovations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}