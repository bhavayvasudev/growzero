export interface Testimonial {
  quote: string;
  name: string;
  business: string;
}

export const testimonialsContent = {
  label: "Testimonials",
  headline: "What they say.",
  description:
    "We let our initial showcases and design language speak for our standard of work. Future partner feedback will be showcased here soon.",
  items: [
    {
      quote:
        "We are currently partnering with brands to build premium digital experiences. Client success stories and project feedback will be showcased here.",
      name: "Future Partner",
      business: "Coming Soon",
    },
    {
      quote:
        "Our focus remains on delivering scalable, aesthetically driven results. We let our initial showcases and design language speak for our standard of work.",
      name: "Future Partner",
      business: "Coming Soon",
    },
  ] as Testimonial[],
};