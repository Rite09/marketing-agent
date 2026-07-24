export const motionViewport = {
  once: true,
  amount: 0.25,
};

export const motionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  },
  stagger: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  },
};
