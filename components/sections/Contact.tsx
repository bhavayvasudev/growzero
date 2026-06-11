"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactContent } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build a mailto link with the form data as the email body
    const subject = encodeURIComponent(
      `New project enquiry from ${formState.name}${formState.business ? ` — ${formState.business}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nBusiness: ${formState.business || "Not provided"}\n\nMessage:\n${formState.message}`
    );
    const mailtoUrl = `mailto:${contactContent.email}?subject=${subject}&body=${body}`;

    // Small delay for UX, then open mailto
    await new Promise((resolve) => setTimeout(resolve, 800));

    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", business: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const inputBaseStyles =
    "w-full bg-transparent border-b border-[#E8E5E0] py-4 text-[16px] text-[#1A1A1A] placeholder:text-[#6B6560]/40 focus:border-[#4A5D4A] focus:outline-none transition-colors duration-300";

  return (
    <section id="contact" className="py-32 md:py-40 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionLabel>{contactContent.label}</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <AnimatedText
              text={contactContent.headline}
              as="h2"
              className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-tight text-[#1A1A1A] mb-8"
            />
            <ScrollReveal>
              <p className="text-[17px] leading-[1.8] text-[#6B6560] mb-10">
                {contactContent.description}
              </p>

              {/* Direct email */}
              <div className="p-5 rounded-xl border border-[#E8E5E0] bg-[#F3F1ED] space-y-1">
                <p className="text-[11px] uppercase tracking-[0.18em] font-mono text-[#6B6560]">
                  Email us directly
                </p>
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-[15px] text-[#4A5D4A] hover:text-[#3A4D3A] transition-colors duration-300 font-medium break-all"
                >
                  {contactContent.email}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center h-full min-h-[420px]"
                  aria-live="polite"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#D4DDD4] flex items-center justify-center mx-auto mb-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 13L9 17L19 7"
                          stroke="#4A5D4A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[24px] font-serif text-[#1A1A1A] mb-3">
                      Your email client should open.
                    </h3>
                    <p className="text-[16px] text-[#6B6560] max-w-[320px] mx-auto leading-relaxed">
                      If it didn&apos;t, email us directly at{" "}
                      <a
                        href={`mailto:${contactContent.email}`}
                        className="text-[#4A5D4A] underline underline-offset-2"
                      >
                        {contactContent.email}
                      </a>
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-1">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      className={inputBaseStyles}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      className={inputBaseStyles}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="sr-only">
                      Business name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      placeholder="Business name (optional)"
                      value={formState.business}
                      onChange={handleChange}
                      className={inputBaseStyles}
                      autoComplete="organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="What can we help with?"
                      value={formState.message}
                      onChange={handleChange}
                      className={`${inputBaseStyles} resize-none`}
                    />
                  </div>
                  {/* Cleaned up Submit Button Area */}
                  <div className="pt-6 md:pt-8 flex">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Opening email...
                        </span>
                      ) : (
                        "Send message"
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}