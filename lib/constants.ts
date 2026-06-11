export const siteConfig = {
  name: "GrowZero",
  tagline: "A creative growth studio.",
  email: "hello@growzero.studio",
  url: "https://growzero.studio",
  description:
    "GrowZero is a creative growth studio that crafts premium digital experiences — websites, brands, content, and everything in between — for businesses ready to stand out.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  headline: "Your business deserves more than a template.",
  subheadline:
    "GrowZero is a creative growth studio that crafts premium digital experiences — websites, brands, content, and everything in between — for businesses ready to stand out.",
  cta: "Start a project",
  secondaryCta: "See our work",
};

export const marqueeWords = [
  "Design",
  "Growth",
  "Branding",
  "Websites",
  "Content",
  "Strategy",
  "Reels",
  "Social",
  "Identity",
  "Craft",
];

export const aboutContent = {
  label: "About",
  headline:
    "We\u2019re a creative growth studio for businesses that refuse to blend in.",
  paragraphs: [
    "GrowZero was founded on a simple belief: every business \u2014 from a neighborhood caf\u00e9 to a growing fitness brand \u2014 deserves a digital presence that\u2019s genuinely exceptional.",
    "We\u2019re not a traditional marketing agency. We don\u2019t sell packages or push templates. We partner with ambitious businesses to craft custom digital experiences that look stunning, feel authentic, and actually drive growth.",
    "Every website we build, every brand we shape, every piece of content we create is designed with intention. Because your audience notices the difference \u2014 even when they can\u2019t explain why.",
  ],
  stats: [
    { value: "50+", label: "Projects delivered" },
    { value: "3+", label: "Years of craft" },
    { value: "100%", label: "Custom \u2014 always" },
  ],
};

export interface Service {
  title: string;
  description: string;
}

export const servicesContent = {
  label: "Services",
  headline: "Everything your brand needs to grow. Nothing it doesn\u2019t.",
  description:
    "We offer a focused set of creative services \u2014 each one tailored to your business, your audience, and your goals. No packages, no tiers. Just exceptional work.",
  items: [
    {
      title: "Web Design & Development",
      description:
        "From first wireframe to final deploy. We design and build websites that are fast, beautiful, and built to convert. Every site is custom \u2014 because your business is.",
    },
    {
      title: "Brand Identity",
      description:
        "Logo, typography, color systems, brand guidelines \u2014 everything you need to look and feel like the business you\u2019re becoming. Consistent, cohesive, unforgettable.",
    },
    {
      title: "Social Media Management",
      description:
        "Strategy, content calendars, posting, and community growth. We handle your social presence so you can focus on running your business.",
    },
    {
      title: "Short-Form Video & Reels",
      description:
        "Scroll-stopping content designed for Instagram, YouTube Shorts, and TikTok. Shot, edited, and optimized for engagement and reach.",
    },
    {
      title: "Content Creation",
      description:
        "Photography, graphics, copywriting, and visual content that tells your story with clarity and style. Every piece designed to build trust and drive action.",
    },
    {
      title: "Digital Strategy",
      description:
        "A clear roadmap for your online presence. We analyze, plan, and execute \u2014 so every effort compounds into real, measurable growth.",
    },
  ] as Service[],
};

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

export const workContent = {
  label: "Work",
  headline: "Selected projects.",
  description:
    "A curated look at recent work across brand, web, and content. Every project starts with a conversation \u2014 and ends with something we\u2019re both proud of.",
  items: [
    {
      title: "Apex Fitness",
      category: "Brand Identity + Website",
      description:
        "A bold brand identity and high-performance website for a premium fitness studio.",
      image: "/images/portfolio-1.jpg",
      color: "#3A4D3A",
    },
    {
      title: "Bloom Caf\u00e9",
      category: "Social Media + Content",
      description:
        "Warm, inviting social content that tripled engagement in three months.",
      image: "/images/portfolio-2.jpg",
      color: "#5D4A4A",
    },
    {
      title: "Studio Nine",
      category: "Web Design + Development",
      description:
        "A sleek, conversion-focused website for a modern co-working space.",
      image: "/images/portfolio-3.jpg",
      color: "#4A4D5D",
    },
    {
      title: "The Craft Salon",
      category: "Brand Identity + Reels",
      description:
        "Elevated brand positioning and scroll-stopping reels for a luxury salon.",
      image: "/images/portfolio-4.jpg",
      color: "#5D5A4A",
    },
    {
      title: "Coach Arjun",
      category: "Digital Strategy + Website",
      description:
        "A personal brand and website that positioned a coach as an industry authority.",
      image: "/images/portfolio-5.jpg",
      color: "#4A5D55",
    },
    {
      title: "Neighborhood Eats",
      category: "Content Creation + Social",
      description:
        "Mouth-watering content and social strategy for a beloved local restaurant.",
      image: "/images/portfolio-6.jpg",
      color: "#5D4A55",
    },
  ] as PortfolioItem[],
};

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processContent = {
  label: "Process",
  headline: "How we work.",
  description:
    "Every project follows a clear, collaborative process. No surprises, no guesswork \u2014 just focused creative work with you at the center.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by listening. Understanding your business, your audience, your goals, and what success looks like for you.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We translate insights into a clear creative direction \u2014 defining the approach, the channels, and the milestones.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "This is where it comes to life. We design, prototype, and refine until every detail feels right.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "We build, launch, and hand over everything you need. Then we stick around to make sure it\u2019s working.",
    },
  ] as ProcessStep[],
};

export interface Testimonial {
  quote: string;
  name: string;
  business: string;
}

export const testimonialsContent = {
  label: "Testimonials",
  headline: "What our partners say.",
  items: [
    {
      quote:
        "GrowZero completely transformed how our brand shows up online. The website alone doubled our inquiries in the first month.",
      name: "Priya Sharma",
      business: "Bloom Caf\u00e9",
    },
    {
      quote:
        "They didn\u2019t just build us a website \u2014 they gave us a brand we\u2019re genuinely proud of. The quality is unmatched.",
      name: "Arjun Mehta",
      business: "Coach Arjun",
    },
    {
      quote:
        "Working with GrowZero feels like having a creative team in-house. They get it \u2014 every time.",
      name: "Nisha Patel",
      business: "The Craft Salon",
    },
  ] as Testimonial[],
};

export const contactContent = {
  label: "Contact",
  headline: "Let\u2019s build something exceptional.",
  description:
    "Every great project starts with a conversation. Tell us about your business, your vision, and where you want to go \u2014 we\u2019ll take it from there.",
  email: "hello@growzero.studio",
};

export const footerContent = {
  tagline: "A creative growth studio.",
  copyright: `\u00a9 ${new Date().getFullYear()} GrowZero. All rights reserved.`,
  crafted: "Designed with intention.",
  social: [
    { label: "Instagram", href: "https://instagram.com/growzero" },
    { label: "Twitter / X", href: "https://x.com/growzero" },
    { label: "LinkedIn", href: "https://linkedin.com/company/growzero" },
  ],
};
