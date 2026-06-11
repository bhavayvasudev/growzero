"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8]"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8] via-[#FAFAF8] to-[#F3F1ED] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-40 w-full">
        <div className="max-w-[900px]">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-[clamp(40px,7vw,80px)] leading-[1.05] tracking-tight text-[#1A1A1A] mb-8"
          >
            {heroContent.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[clamp(16px,2vw,19px)] leading-relaxed text-[#6B6560] max-w-[600px] mb-12"
          >
            {heroContent.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleScrollTo("#contact")}
            >
              {heroContent.cta}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleScrollTo("#work")}
            >
              {heroContent.secondaryCta}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#E8E5E0] to-[#6B6560]"
        />
      </motion.div>
    </section>
  );
}
