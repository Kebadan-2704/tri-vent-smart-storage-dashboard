export const pageContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardHover = {
  hover: {
    y: -10,
    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 },
  },
};

export const pulse = {
  animate: {
    scale: [1, 1.04, 1],
    transition: {
      duration: 2.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
