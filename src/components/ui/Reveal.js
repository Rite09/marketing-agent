"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

import { motionViewport, motionVariants } from "@/lib/animations";
import { cn } from "@/lib/helpers";

const subscribe = () => () => {};

export default function Reveal({
  as: Component = motion.div,
  variant = "fadeUp",
  delay = 0,
  className,
  children,
}) {
  const reduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  const variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : (motionVariants[variant] ?? motionVariants.fadeUp);

  if (!mounted) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <Component
      className={cn(className)}
      variants={variants}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={motionViewport}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
