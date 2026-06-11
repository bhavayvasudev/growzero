"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { workContent } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Work() {
  return (
    <section id="work" className="py-32 md:py-40 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionLabel>{workContent.label}</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-6">
          <div className="lg:col-span-7">
            <AnimatedText
              text={workContent.headline}
              as="h2"
              className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-tight text-[#1A1A1A]"
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <ScrollReveal>
              <p className="text-[17px] leading-[1.8] text-[#6B6560]">
                {workContent.description}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Concept project disclaimer */}
        <ScrollReveal>
          <div className="mb-16 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#E8E5E0] bg-[#F3F1ED]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4A] flex-shrink-0" />
            <p className="text-[12px] font-mono uppercase tracking-[0.15em] text-[#6B6560]">
              {workContent.conceptNote}
            </p>
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workContent.items.map((project, i) => (
            <PortfolioCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PortfolioCardProps {
  project: (typeof workContent.items)[number];
  index: number;
}

function PortfolioCard({ project, index }: PortfolioCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`group relative overflow-hidden rounded-2xl ${
        index === 0 || index === 3 ? "md:col-span-2" : ""
      }`}
    >
      {/* Colour swatch / visual */}
      <div
        className="aspect-[16/10] w-full relative overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute w-[55%] h-[55%] rounded-full opacity-10 bg-white"
            style={{ filter: "blur(60px)" }}
          />
          {/* Large initial letter */}
          <div className="relative z-10 text-white/15 select-none">
            <div className="text-[clamp(80px,12vw,160px)] font-serif leading-none tracking-tighter">
              {project.title.charAt(0)}
            </div>
          </div>
        </div>

        {/* Concept badge */}
        {project.isConceptProject && (
          <div className="absolute top-5 left-5 z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-[11px] font-mono uppercase tracking-[0.12em]">
              Concept
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
          <div className="p-6 md:p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <p className="text-white/85 text-[14px] leading-relaxed max-w-[480px] mb-4">
              {project.description}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/60 text-[11px] font-mono uppercase tracking-[0.1em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="p-5 md:p-6 bg-white border-t border-[#E8E5E0]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[17px] md:text-[19px] font-serif text-[#1A1A1A] mb-0.5">
              {project.title}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.15em] font-mono text-[#6B6560]">
              {project.category}
            </p>
          </div>
          <div className="w-9 h-9 rounded-full border border-[#E8E5E0] flex items-center justify-center flex-shrink-0 group-hover:border-[#4A5D4A] group-hover:bg-[#4A5D4A] transition-all duration-300">
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#6B6560] group-hover:text-white transition-colors duration-300"
            >
              <path
                d="M1 13L13 1M13 1H5M13 1V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
