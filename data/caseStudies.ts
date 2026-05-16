/**
 * Case study content for index cards and detail pages.
 *
 * Update Komiklean onboarding + result once client permission is confirmed.
 * Update AMPSAC onboarding once permission is confirmed.
 */

export type CaseStudy = {
  slug: string;
  /** Large index number shown on the card (01, 02). */
  number: number;
  clientName: string;
  status: string;
  industry: string;
  serviceDelivered: string;
  /** One-line summary on the index card. */
  summary: string;
  problem: string;
  onboarding: string;
  result: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "komiklean",
    number: 1,
    clientName: "Komiklean Multiservice",
    status: "Live",
    industry: "Cleaning",
    serviceDelivered: "BJS Done For You Install",
    summary:
      "From basic contact form to a fully automated quote pipeline built for a newly established cleaning company owner.",
    problem:
      "Their enquiry process was entirely manual with no system to capture or follow up on quote requests.",
    onboarding:
      "The client was onboarded via an in-person meeting where we discussed their business and their needs. We then built a custom quote form that was integrated with their existing website.",
    result: "The client now has a fully automated quote pipeline that allows them to focus on growing their business rather than chasing enquiries.",
  },
  {
    slug: "ampsac",
    number: 2,
    clientName: "AMPSAC City Clean",
    status: "Live",
    industry: "Cleaning",
    serviceDelivered: "Website Design and Build",
    summary:
      "A dead website brought back online rebuilt with a fresh design, and zero ongoing hosting cost.",
    problem:
      "The client's website had expired hosting and was completely offline with no way to recover it through the original platform except to pay a monthly fee to keep it online.",
    onboarding:
      "To be added once permission is confirmed.",
    result:
      "The website was rebuilt while salvaging the existing content, redeployed for free, and the domain was reconnected successfully. The site is now live, faster than the original, and costs the client nothing in hosting.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
