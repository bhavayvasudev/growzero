"use client";

import { motion } from "framer-motion";
import { marqueeWords } from "@/lib/constants";

export default function Marquee() {
  const repeatedWords = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <section className="py-6 border-y border-[#E8E5E0] bg-[#FAFAF8] overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: ["-25%", "0%"] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {repeatedWords.map((word, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-[14px] md:text-[16px] tracking-[0.15em] uppercase text-[#6B6560]/60 font-mono">
                {word}
              </span>
              <span className="text-[#E8E5E0] text-[8px]">●</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
