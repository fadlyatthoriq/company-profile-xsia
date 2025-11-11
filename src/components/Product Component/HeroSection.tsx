'use client';

import { motion } from 'framer-motion';
import {
  GiSatelliteCommunication,
  GiAnchor,
  GiCompass,
  Gi3dHammer,
  GiBrain,
} from 'react-icons/gi';
import {
  FiSettings,
  FiSmartphone,
  FiBarChart,
  FiDollarSign,
  FiFileText,
  FiPackage,
  FiSearch,
  FiUsers,
  FiMessageSquare,
  FiCheck,
  FiArrowRight,
  FiPlay,
} from 'react-icons/fi';
import { MdStore } from 'react-icons/md';
import {
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaRocket,
} from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GiSatelliteCommunication,
  GiAnchor,
  GiCompass,
  Gi3dHammer,
  GiBrain,
  FiSettings,
  FiSmartphone,
  FiBarChart,
  FiDollarSign,
  FiFileText,
  FiPackage,
  FiSearch,
  FiUsers,
  FiMessageSquare,
  FiCheck,
  FaRocket,
  MdStore,
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FiArrowRight,
  FiPlay,
};

import AnimatedOrbs from './AnimatedOrbs';
import HeroGridOverlay from './HeroGridOverlay';

type HeroSectionProps = {
  title: string;
  subtitle: string;
};

// 🔹 Helper: Render Icon
const renderIcon = (iconName: string, className = 'text-5xl') => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};

// 🔹 Hero Section
export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0">
        <AnimatedOrbs />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0">
        <HeroGridOverlay />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            {renderIcon(title.split(' ')[0], 'text-6xl md:text-8xl text-cyan-400')}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              {title.split(' ').slice(1).join(' ')}
            </h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.9, duration: 1.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto max-w-md"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-2xl md:text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-4xl text-slate-400"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
