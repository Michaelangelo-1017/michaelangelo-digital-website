import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { FounderProfile } from "@/components/about/FounderProfile";
import { FullOriginStory } from "@/components/about/FullOriginStory";
import { MilestonesTimeline } from "@/components/about/MilestonesTimeline";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Michaelangelo Digital is built by Michaelangelo Agbodike — a 22-year-old self-taught founder in Luton, England, building automation systems for small business owners in public.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Michaelangelo Digital",
    description:
      "Solo founder. Self-taught. Building in public. The story behind Michaelangelo Digital.",
    url: "/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderProfile />
      <FullOriginStory />
      <MilestonesTimeline />
      <FinalCTA />
    </>
  );
}
