"use client";

import { useReducedMotion } from "framer-motion";

import { motionVariants } from "@/lib/animations";

export function useAnimation(variant = "fadeUp") {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }

  return motionVariants[variant] ?? motionVariants.fadeUp;
}
