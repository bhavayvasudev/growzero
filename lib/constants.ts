export const siteConfig = {
  name: "GrowZero",
  tagline: "A creative growth studio.",
  email: "infogrowzero@gmail.com",
  url: "https://growzero.studio",
  description:
    "GrowZero is a creative growth studio that crafts premium digital experiences — websites, brands, content, and everything in between — for businesses ready to stand out.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  headline: "Your business deserves more than a template.",
  subheadline:
    "GrowZero is a creative growth studio that crafts premium digital experiences \u2014 websites, brands, content, and everything in between \u2014 for businesses ready to stand out.",
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
    { value: "2", label: "Founders" },
    { value: "100%", label: "Custom \u2014 always" },
    { value: "\u221e", label: "Attention to detail" },
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
  tags: string[];
  color: string;
  isConceptProject: boolean;
}

export const workContent = {
  label: "Work",
  headline: "Concept showcase.",
  description:
    "A curated look at the type of work we craft \u2014 across brand, web, and content. These are concept projects that demonstrate our creative direction and capabilities.",
  conceptNote:
    "Concept projects \u2014 illustrating our creative direction and the depth of thinking we bring to every engagement.",
  items: [
    {
      title: "Apex Fitness",
      category: "Brand Identity + Web Design",
      description:
        "A performance-first fitness studio needed a brand that matched its intensity. We designed a bold visual identity and a high-speed website built around conversion \u2014 booking classes, showcasing trainers, and communicating a premium member experience.",
      tags: ["Brand System", "Web Design", "UI/UX", "Copywriting"],
      color: "#3A4D3A",
      isConceptProject: true,
    },
    {
      title: "Bloom Caf\u00e9",
      category: "Social Media + Content Strategy",
      description:
        "A beloved neighbourhood caf\u00e9 with loyal regulars but no social presence. We built a content strategy rooted in warmth, ritual, and community \u2014 turning daily moments into shareable stories that attract new guests.",
      tags: ["Content Strategy", "Social Media", "Reels", "Brand Voice"],
      color: "#5D4A4A",
      isConceptProject: true,
    },
    {
      title: "Luminary Salon",
      category: "Website + Brand Identity",
      description:
        "A luxury salon repositioning itself for a premium clientele. We crafted a refined visual identity, an editorial website, and a short-form video content system that communicated elegance without saying a word.",
      tags: ["Brand Identity", "Web Design", "Reels", "Photography Direction"],
      color: "#5D5A4A",
      isConceptProject: true,
    },
    {
      title: "Aryan Singh \u2014 Life Coach",
      category: "Personal Brand + Website",
      description:
        "A certified life coach building credibility in a crowded market. We developed a personal brand strategy, a conversion-focused website, and a content framework that positioned him as a genuine authority in his niche.",
      tags: ["Personal Branding", "Web Design", "Content Framework", "Copywriting"],
      color: "#4A5D55",
      isConceptProject: true,
    },
    {
      title: "The Corner Kitchen",
      category: "Content Creation + Social",
      description:
        "A local restaurant wanted to fill seats and build a community online. We built a visual content system around their food, their people, and their story \u2014 creating a consistent social presence that turned followers into regulars.",
      tags: ["Content Creation", "Social Strategy", "Reels", "Community"],
      color: "#5D4A55",
      isConceptProject: true,
    },
    {
      title: "FlowSpace",
      category: "Digital Presence + Web Design",
      description:
        "A boutique co-working studio with a strong local community but a weak digital presence. We designed a minimal, elegant website and a social content strategy that communicated the feeling of the space as much as the features.",
      tags: ["Web Design", "Brand Direction", "Social Strategy", "Copywriting"],
      color: "#4A4D5D",
      isConceptProject: true,
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

export interface Founder {
  name: string;
  role: string;
  responsibilities: string[];
  bio: string;
}

export const foundersContent = {
  label: "Founders",
  headline: "The people behind GrowZero.",
  description:
    "Two founders. Two disciplines. One shared belief that great design and smart strategy can change the trajectory of any business.",
  items: [
    {
      name: "Bhavay Vasudev",
      role: "Co-Founder",
      responsibilities: [
        "Website Design & Development",
        "Technical Implementation",
        "Digital Experiences",
        "Product & Technology",
      ],
      bio: "Bhavay leads the technical and design side of GrowZero. He builds the digital experiences \u2014 from the first wireframe to the final line of code \u2014 ensuring every website is fast, beautiful, and built with intention.",
    },
    {
      name: "Nipun Goel",
      role: "Co-Founder",
      responsibilities: [
        "Social Media Strategy",
        "Content Planning",
        "Brand Growth",
        "Community Building",
        "Creative Marketing",
      ],
      bio: "Nipun leads the creative and growth side of GrowZero. He shapes the strategy behind every brand story \u2014 from content systems to social presence \u2014 turning attention into lasting relationships.",
    },
  ] as Founder[],
};

export const contactContent = {
  label: "Contact",
  headline: "Let\u2019s build something exceptional.",
  description:
    "Every great project starts with a conversation. Tell us about your business, your vision, and where you want to go \u2014 we\u2019ll take it from there.",
  email: "infogrowzero@gmail.com",
};

export const footerContent = {
  tagline: "A creative growth studio.",
  copyright: `\u00a9 ${new Date().getFullYear()} GrowZero. All rights reserved.`,
  crafted: "Designed with intention.",
  social: [
    { label: "Instagram", href: "#", comingSoon: true },
    { label: "LinkedIn", href: "#", comingSoon: true },
    { label: "Twitter\u00a0/\u00a0X", href: "#", comingSoon: true },
  ],
};
