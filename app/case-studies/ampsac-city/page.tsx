import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { CaseStudyDetail } from "@/components/case-studies/CaseStudyDetail";
import { FinalCTA } from "@/components/home/FinalCTA";

const SLUG = "ampsac-city";

export const metadata: Metadata = {
  title: "AMPSAC City Clean",
  description:
    "AMPSAC City Clean — website rebuilt in Next.js on Vercel after expired hosting took the old site offline.",
  alternates: { canonical: `/case-studies/${SLUG}` },
  openGraph: {
    title: "AMPSAC City Clean | Case Study",
    description:
      "Website Design and Build — faster site, free hosting, domain reconnected.",
    url: `/case-studies/${SLUG}`,
    type: "article",
  },
};

export default function AmpsacCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);
  if (!study) notFound();

  return (
    <>
      <CaseStudyDetail study={study} />
      <FinalCTA />
    </>
  );
}
