'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/About Component/Hero/HeroSection';
import HistorySection from '@/components/About Component/History/HistorySection';
import VisionMissionSection from '@/components/About Component/VisionMission/VisionMissionSection';
import CeoSection from '@/components/About Component/CEO/CeoSection';

export default function AboutPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#170D27] text-white">
            <HeroSection mounted={mounted} />
            <HistorySection />
            <VisionMissionSection />
            <CeoSection />
        </main>
    );
}