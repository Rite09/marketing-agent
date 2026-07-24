"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { motionViewport, motionVariants } from "@/lib/animations";
import { cn } from "@/lib/helpers";

export default function Reveal({
  as: Component = motion.div,
  variant = "fadeUp",
  delay = 0,
  className,
  children,
}) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
