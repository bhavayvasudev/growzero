"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  children: string;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="inline-block text-[11px] uppercase tracking-[0.2em] font-mono text-[#6B6560] mb-6"
    >
      {children}
    </motion.span>
  );
}
