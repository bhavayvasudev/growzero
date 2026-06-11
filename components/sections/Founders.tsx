"use client";

import { motion } from "framer-motion";
import { foundersContent } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Founders() {
  return (
    <section id="founders" className="py-32 md:py-40 bg-[#F3F1ED]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionLabel>{foundersContent.label}</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          <div className="lg:col-span-7">
            <AnimatedText
              text={foundersContent.headline}
              as="h2"
              className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-tight text-[#1A1A1A]"
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <ScrollReveal>
              <p className="text-[17px] leading-[1.8] text-[#6B6560]">
                {foundersContent.description}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {foundersContent.items.map((founder, i) => (
            <FounderCard key={i} founder={founder} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FounderCardProps {
  founder: (typeof foundersContent.items)[number];
  index: number;
}

function FounderCard({ founder, index }: FounderCardProps) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <div className="group">
        {/* Photo placeholder */}
        <div className="relative mb-8 overflow-hidden rounded-2xl bg-[#E8E5E0] aspect-[4/3]">
          {/* Placeholder initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className="text-[clamp(48px,6vw,72px)] font-serif leading-none text-[#6B6560]/30 select-none"
                aria-hidden="true"
              >
                {founder.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          </div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/5 to-transparent" />

          {/* Drop-in photo note — visually hidden, for devs */}
          {/* Replace this div's background with a Next.js <Image> when photos are ready */}
        </div>

        {/* Info */}
        <div className="space-y-6">
          {/* Name + Role */}
          <div>
            <h3 className="font-serif text-[clamp(22px,3vw,30px)] text-[#1A1A1A] leading-tight mb-1">
              {founder.name}
            </h3>
            <p className="text-[12px] uppercase tracking-[0.2em] font-mono text-[#4A5D4A]">
              {founder.role}
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-[#E8E5E0]" />

          {/* Bio */}
          <p className="text-[16px] leading-[1.8] text-[#6B6560]">{founder.bio}</p>

          {/* Responsibilities */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] font-mono text-[#6B6560] mb-4">
              Focus areas
            </p>
            <div className="flex flex-wrap gap-2">
              {founder.responsibilities.map((item) => (
                <span
                  key={item}
                  className="inline-block px-3 py-1.5 rounded-full border border-[#E8E5E0] text-[12px] text-[#6B6560] font-mono tracking-wide bg-[#FAFAF8]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
