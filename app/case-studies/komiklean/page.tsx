import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { CaseStudyDetail } from "@/components/case-studies/CaseStudyDetail";
import { FinalCTA } from "@/components/home/FinalCTA";

const SLUG = "komiklean";

export const metadata: Metadata = {
  title: "Komiklean Multiservice",
  description:
    "How Komiklean Multiservice moved from a manual enquiry process to a done-for-you Booked Job System install.",
  alternates: { canonical: `/case-studies/${SLUG}` },
  openGraph: {
    title: "Komiklean Multiservice | Case Study",
    description:
      "BJS Done For You Install — capturing and following up on quote requests automatically.",
    url: `/case-studies/${SLUG}`,
    type: "article",
  },
};

export default function KomikleanCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);
  if (!study) notFound();

  return (
    <>
      <CaseStudyDetail study={study} />
      <FinalCTA />
    </>
  );
}
