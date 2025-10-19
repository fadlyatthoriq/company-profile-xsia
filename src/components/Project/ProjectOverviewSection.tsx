'use client';

import { useEffect, useState } from 'react';
import CardSwap, { Card } from '@/components/Project/CardSwap';

export default function ProjectOverviewSection() {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const updateWidth = () => setScreenWidth(window.innerWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const cardSwapProps = {
        width:
            screenWidth > 1024
                ? 720
                : screenWidth > 768
                    ? 520
                    : screenWidth > 640
                        ? 420
                        : 350,
        cardDistance:
            screenWidth > 768 ? 35 : screenWidth > 640 ? 28 : 22,
        verticalDistance:
            screenWidth > 768 ? 55 : screenWidth > 640 ? 45 : 38,
        delay: 3500,
        skewAmount: screenWidth > 640 ? 5 : 3,
        pauseOnHover: true,
        easing: 'elastic' as const,
    };


    return (
        <section
            id="projects-overview"
            data-parallax
            className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden 
            bg-[#1E293B] px-8 md:px-16 lg:px-20 py-32 text-[#F8FAFC]"
        >
            {/* Parallax Background */}
            <div className="parallax-bg absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00FFFF]/10 via-transparent to-transparent blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#38BDF8]/10 via-transparent to-transparent blur-3xl" />
            </div>

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Text */}
            <div className="reveal-group relative z-10 flex-1 text-center md:text-left space-y-6 max-w-xl md:pr-12 parallax-content mb-12 md:mb-0">
                <div className="reveal-item inline-block">
                    <span className="px-4 py-2 rounded-full bg-[#0F172A]/60 border border-[#38BDF8]/20 text-sm text-[#38BDF8] font-medium">
                        Our Services
                    </span>
                </div>

                <h2 className="reveal-item text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-[#00FFFF] via-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">
                        Powerful Solutions
                    </span>
                    <br />
                    <span className="text-[#F8FAFC]/90">For Your Business</span>
                </h2>

                <p className="reveal-item text-[#94A3B8] text-lg leading-relaxed">
                    Discover the range of solutions we craft to elevate your digital presence — from strategy to design, built with precision and creativity.
                </p>
            </div>

            {/* Cards */}
            <div className="project-cards relative z-10 flex-1 w-full flex items-center justify-center lg:pl-8" style={{ minHeight: '500px', maxHeight: '75vh' }}>
                <CardSwap {...cardSwapProps}>
                    {[1, 2, 3].map((num) => (
                        <Card key={num}>
                            <div className="absolute inset-0 flex flex-col overflow-hidden 
                    bg-[#0F172A]/90 border border-[#38BDF8]/10 rounded-3xl backdrop-blur-2xl 
                    shadow-[0_0_40px_rgba(0,255,255,0.1)] p-10 flex justify-center items-center text-center space-y-6">
                                <h3 className="text-7xl font-bold bg-gradient-to-r from-[#00FFFF] to-[#38BDF8] bg-clip-text text-transparent">
                                    {num}
                                </h3>
                                <p className="text-[#94A3B8] text-base leading-relaxed">
                                    Futuristic solution {num} crafted with efficiency and precision for your business growth.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 rounded-full bg-[#00FFFF]/10 border border-[#00FFFF]/30 text-xs text-[#00FFFF]">Cyan Flow</span>
                                    <span className="px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs text-[#38BDF8]">Adaptive</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </CardSwap>
            </div>
        </section>
    );
}