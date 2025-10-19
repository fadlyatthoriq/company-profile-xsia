import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -15, x: -40 },
  visible: {
    opacity: 1,
    rotate: 0,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};
