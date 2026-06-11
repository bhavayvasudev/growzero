"use client";

import { processContent } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Process() {
  return (
    <section id="process" className="pt-16 md:pt-20 pb-32 md:pb-40 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionLabel>{processContent.label}</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-24 md:mb-32">
          <div className="lg:col-span-7">
            <AnimatedText
              text={processContent.headline}
              as="h2"
              className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-tight text-[#1A1A1A]"
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <ScrollReveal>
              <p className="text-[17px] leading-[1.8] text-[#6B6560]">
                {processContent.description}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {processContent.steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="group flex flex-col h-full">
                <div className="mb-8">
                  <span className="text-[clamp(56px,7vw,80px)] font-serif text-[#E8E5E0] group-hover:text-[#1A1A1A] transition-colors duration-500 leading-none">
                    {step.number}
                  </span>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-[20px] md:text-[22px] font-serif text-[#1A1A1A] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#6B6560]">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}