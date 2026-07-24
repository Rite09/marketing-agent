"use client";

import { motion } from "framer-motion";

import { motionViewport } from "@/lib/animations";
import { cn } from "@/lib/helpers";
import { useAnimation } from "@/hooks/useAnimation";

export default function Reveal({
  as: Component = motion.div,
  variant = "fadeUp",
  delay = 0,
  className,
  children,
}) {
  const variants = useAnimation(variant);

  return (
    <Component
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
