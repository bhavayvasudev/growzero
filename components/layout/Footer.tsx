"use client";

import { navLinks, siteConfig, footerContent, contactContent } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  const handleNavClick = (href: string) => {
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
    <footer className="bg-[#F3F1ED] border-t border-[#E8E5E0]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand Column */}
            <div className="md:col-span-2 space-y-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-[20px] font-semibold tracking-tight text-[#1A1A1A] hover:opacity-70 transition-opacity duration-300"
              >
                {siteConfig.name}
              </a>
              <p className="text-[14px] text-[#6B6560] leading-relaxed max-w-[280px]">
                {footerContent.tagline}
              </p>
              <a
                href={`mailto:${contactContent.email}`}
                className="inline-block text-[13px] font-mono text-[#4A5D4A] hover:text-[#3A4D3A] transition-colors duration-300"
              >
                {contactContent.email}
              </a>
            </div>

            {/* Navigation Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#6B6560] mb-4">
                Navigation
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-[14px] text-[#1A1A1A] hover:text-[#4A5D4A] transition-colors duration-300 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#6B6560] mb-4">
                Connect
              </h4>
              <nav className="flex flex-col gap-3">
                {footerContent.social.map((social) => (
                  <span
                    key={social.label}
                    className="group inline-flex items-center gap-2"
                  >
                    <span className="text-[14px] text-[#6B6560]/50 cursor-default select-none">
                      {social.label}
                    </span>
                    {social.comingSoon && (
                      <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#6B6560]/40">
                        Soon
                      </span>
                    )}
                  </span>
                ))}
              </nav>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#E8E5E0] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#6B6560]">{footerContent.copyright}</p>
          <p className="text-[12px] text-[#6B6560] italic">{footerContent.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
