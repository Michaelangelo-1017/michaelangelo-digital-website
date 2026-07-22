import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { OriginStory } from "@/components/home/OriginStory";
import { SocialProofStrip } from "@/components/home/SocialProofStrip";
import { MilestonesTeaser } from "@/components/home/MilestonesTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Clophy builds enquiry automation systems and websites for small business owners in the UK. Save time, stop missing leads, and focus on the work that matters.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Clophy",
    description:
      "Automation systems and websites for small business owners who are tired of manual work.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OriginStory />
      <SocialProofStrip />
      <MilestonesTeaser />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
