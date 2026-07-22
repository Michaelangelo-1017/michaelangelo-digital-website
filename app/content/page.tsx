import type { Metadata } from "next";
import { ContentHero } from "@/components/content/ContentHero";
import { YouTubeFeed } from "@/components/content/YouTubeFeed";
import { LinkedInSection } from "@/components/content/LinkedInSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { fetchLatestVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Content",
  description:
    "Follow the Clophy journey on YouTube and LinkedIn — cold calls, installs, lessons, and builds documented as they happen.",
  alternates: { canonical: "/content" },
  openGraph: {
    title: "Content | Clophy",
    description:
      "The journey in public — latest videos from Michaelangelo Builds plus founder updates on LinkedIn.",
    url: "/content",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content | Clophy",
    description:
      "Latest from YouTube and updates on LinkedIn — building Clophy in public.",
  },
};

export default async function ContentPage() {
  const videos = await fetchLatestVideos(6);

  return (
    <>
      <ContentHero />
      <YouTubeFeed videos={videos} />
      <LinkedInSection />
      <FinalCTA />
    </>
  );
}
