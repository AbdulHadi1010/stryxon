import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Software Development Contract Generator - Instant PDF | Stryxon",
  description:
    "Generate professional software development contracts instantly. Free contract generator with scope creep protection, IP clauses, and instant PDF download. No signup required. 100% client-side and secure.",
  keywords: [
    "software development contract",
    "contract generator",
    "free contract template",
    "software contract template",
    "development agreement",
    "freelance contract",
    "scope of work",
    "IP protection clause",
    "scope creep protection",
    "PDF contract generator",
    "client contract",
    "service agreement",
    "development contract template",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/free-tools/contract-generator",
  },
  openGraph: {
    title: "Free Software Development Contract Generator",
    description:
      "Create professional software development contracts in minutes. Free, instant, and secure - all in your browser.",
    url: "https://www.stryxon.com/free-tools/contract-generator",
    type: "website",
  },
};

export default function ContractGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
