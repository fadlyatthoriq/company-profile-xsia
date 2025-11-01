'use client';
import { motion } from 'framer-motion';

export default function AnimatedOrbs() {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 1.4, 1], x: [0, 120, 0], y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -100, 0], y: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-violet-500/40 to-purple-500/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gradient-to-tr from-indigo-500/30 to-pink-500/30 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl"
      />
    </>
  );
}
