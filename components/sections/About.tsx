"use client";

import { aboutContent } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionLabel>{aboutContent.label}</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <AnimatedText
              text={aboutContent.headline}
              as="h2"
              className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-tight text-[#1A1A1A] mb-10"
            />

            <div className="space-y-6">
              {aboutContent.paragraphs.map((paragraph, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <p className="text-[17px] leading-[1.8] text-[#6B6560]">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <div className="grid grid-cols-3 gap-8 lg:gap-6 w-full">
              {aboutContent.stats.map((stat, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                  <div className="text-center lg:text-left">
                    <div className="text-[clamp(28px,4vw,40px)] font-serif text-[#1A1A1A] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[12px] uppercase tracking-[0.15em] font-mono text-[#6B6560]">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
