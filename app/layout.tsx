import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrowZero — Creative Growth Studio",
  description:
    "GrowZero is a creative growth studio that crafts premium digital experiences — websites, brands, content, and everything in between — for businesses ready to stand out.",
  keywords: [
    "creative agency",
    "growth studio",
    "web design",
    "brand identity",
    "digital experiences",
    "social media management",
    "content creation",
    "GrowZero",
  ],
  authors: [{ name: "GrowZero", url: "mailto:infogrowzero@gmail.com" }],
  openGraph: {
    title: "GrowZero — Creative Growth Studio",
    description:
      "We craft premium digital experiences for businesses ready to stand out.",
    url: "https://growzero.studio",
    siteName: "GrowZero",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowZero — Creative Growth Studio",
    description:
      "We craft premium digital experiences for businesses ready to stand out.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
