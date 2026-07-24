"use client";

import { motion } from "framer-motion";

export default function AnimatedCounter({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[22px] border border-[var(--color-border)] bg-[rgba(10,16,30,0.92)] px-6 py-5 shadow-[0_25px_70px_rgba(4,10,21,0.36)]"
    >
      <div className="text-[2rem] font-semibold leading-none tracking-[-0.04em] text-white">
        {value}
      </div>
      <p className="mt-2 text-sm text-[var(--color-muted)]">{label}</p>
    </motion.div>
  );
}
