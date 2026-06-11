"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesContent } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-32 md:py-40 bg-[#F3F1ED]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionLabel>{servicesContent.label}</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          <div className="lg:col-span-7">
            <AnimatedText
              text={servicesContent.headline}
              as="h2"
              className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-tight text-[#1A1A1A]"
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <ScrollReveal>
              <p className="text-[17px] leading-[1.8] text-[#6B6560]">
                {servicesContent.description}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Service Accordion */}
        <div className="border-t border-[#E8E5E0]">
          {servicesContent.items.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="border-b border-[#E8E5E0]">
                <button
                  onClick={() => toggleService(i)}
                  className="w-full flex items-center justify-between py-7 md:py-8 text-left group cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[12px] font-mono text-[#6B6560] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[20px] md:text-[24px] font-serif text-[#1A1A1A] group-hover:text-[#4A5D4A] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 ml-4"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1V15M1 8H15"
                        stroke="#6B6560"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-[42px] md:pl-[54px] max-w-[600px]">
                        <p className="text-[16px] leading-[1.8] text-[#6B6560]">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
