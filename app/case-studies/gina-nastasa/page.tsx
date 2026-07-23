import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { CaseStudyDetail } from "@/components/case-studies/CaseStudyDetail";
import { FinalCTA } from "@/components/home/FinalCTA";

const SLUG = "gina-nastasa";

export const metadata: Metadata = {
  title: "Gina-Cristina Năstasă",
  description:
    "How Gina-Cristina Năstasă automated LinkedIn outreach with a post generator that publishes three times a week without her writing or uploading each post.",
  alternates: { canonical: `/case-studies/${SLUG}` },
  openGraph: {
    title: "Gina-Cristina Năstasă | Case Study",
    description:
      "LinkedIn Post Generator — scheduled outreach without the weekly writing load.",
    url: `/case-studies/${SLUG}`,
    type: "article",
  },
};

export default function GinaNastasaCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);
  if (!study) notFound();

  return (
    <>
      <CaseStudyDetail study={study} />
      <FinalCTA />
    </>
  );
}
