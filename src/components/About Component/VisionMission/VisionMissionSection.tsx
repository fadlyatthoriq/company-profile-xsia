'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VisionMissionSection() {
    const visionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // === VISION & MISSION (FIXED) ===
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
            className="relative px-6 md:px-12 lg:px-32 py-24 bg-[#141426]/60 backdrop-blur-sm border-y border-white/5"
        >
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
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

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="vision-card bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <span className="text-2xl">🎯</span>
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
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Mission</h3>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            {[
                                { icon: '💻', title: 'Product Development', desc: 'Create secure, efficient, and user-friendly software to meet modern business needs.' },
                                { icon: '⚡', title: 'Quality & Innovation', desc: 'Deliver continuous innovation through research and development, ensuring top-tier service quality.' },
                                { icon: '🤝', title: 'Customer Service', desc: 'Offer responsive and personalized technical support to guarantee customer satisfaction.' },
                                { icon: '🌐', title: 'Strategic Partnerships', desc: 'Build strong collaborations with clients, partners, and communities to create mutual growth.' },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <span className="text-xl mt-0.5">{item.icon}</span>
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