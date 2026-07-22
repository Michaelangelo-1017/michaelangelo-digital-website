import type { Metadata } from "next";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real cleaning businesses in the UK — enquiry automation systems and modern Next.js websites.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Michaelangelo Digital",
    description:
      "Real businesses. Real problems. Real results.",
    url: "/case-studies",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <FinalCTA />
    </>
  );
}
