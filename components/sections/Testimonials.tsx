"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsContent } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const items = testimonialsContent.items;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-32 md:py-40 bg-[#F3F1ED]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionLabel>{testimonialsContent.label}</SectionLabel>

        <AnimatedText
          text={testimonialsContent.headline}
          as="h2"
          className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-tight text-[#1A1A1A] mb-16 md:mb-20"
        />

        {/* Testimonial Display */}
        <div className="relative min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-[800px]"
            >
              <blockquote className="mb-10">
                <p className="text-[clamp(22px,3.5vw,32px)] font-serif leading-[1.4] text-[#1A1A1A]">
                  &ldquo;{items[current].quote}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-[#4A5D4A]" />
                <div>
                  <p className="text-[15px] font-medium text-[#1A1A1A]">
                    {items[current].name}
                  </p>
                  <p className="text-[13px] text-[#6B6560] font-mono">
                    {items[current].business}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center gap-3 mt-12">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group cursor-pointer p-1"
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <div
                className={`h-[2px] transition-all duration-500 ${
                  i === current
                    ? "w-8 bg-[#4A5D4A]"
                    : "w-4 bg-[#E8E5E0] group-hover:bg-[#6B6560]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
