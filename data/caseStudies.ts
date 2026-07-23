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
  link: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "komiklean",
    number: 1,
    clientName: "Komiklean Multiservice",
    status: "Live",
    industry: "Cleaning",
    serviceDelivered: "Enquiry Automation System",
    summary:
      "From basic contact form to a fully automated quote pipeline built for a newly established cleaning company owner.",
    problem:
      "Samuel's enquiry process was entirely manual with no system to capture or follow up on quote requests.",
    onboarding:
      "Samuel was onboarded via an in-person meeting where we discussed his business and his needs. We then built a custom quote form that was integrated with his existing website.",
    result: "Samuel now has a fully automated quote pipeline that allows him to focus on growing his business rather than chasing enquiries.",
    link: "https://www.komiklean.com/contact",
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
      "Paul's website had expired hosting and was completely offline with no way to recover it through the original platform except to pay a monthly fee to keep it online.",
    onboarding:
      "Paul was onboarded via an in-person meeting where we discussed his business and his needs. We rebuilt the website, then built a custom quote form integrated with the new site.",
    result:
      "The website was rebuilt while salvaging the existing content, redeployed for free, and the domain was reconnected successfully. The site is now live, faster than the original, and costs the client nothing in hosting.",
    link: "https://www.ampsaccleaning.com/",
  },
  {
    slug: "ampsac-city",
    number: 3,
    clientName: "AMPSAC City Clean",
    status: "Live",
    industry: "Cleaning",
    serviceDelivered: "Enquiry Automation",
    summary:
      "A fully automated quote pipeline was built for a cleaning company so enquiries no longer fall through the cracks.",
    problem:
      "Paul's enquiry process was entirely manual with no system to capture or follow up on quote requests.",
    onboarding:
      "Paul was onboarded via an in-person meeting where we discussed his business and his needs. We built a custom quote form integrated with the new site.",
    result:
      "Paul now has a fully automated quote pipeline so he can focus on growing the business rather than chasing enquiries.",
    link: "https://www.ampsaccleaning.com/contact",
  },
  {
    slug: "gina-nastasa",
    number: 4,
    clientName: "Gina-Cristina Năstasă - Cabinet Individual de Psihologie",
    status: "Live",
    industry: "Psychotherapy",
    serviceDelivered: "LinkedIn Post Generator",
    summary:
      "A LinkedIn post generator system was designed for Gina that allows her to post 3 times a week on LinkedIn at a set time without her having to write the post or upload it herself.",
    problem:
      "Gina wanted to increase her outreach on LinkedIn but didn’t have the time to make posts 3 times a week at a certain time.",
    onboarding:
      "Gina was onboarded via Skool conversations where we discussed what she needed and the barrier as to why she couldn’t do it. We built the generator using her experience and background in Psychotherapy and her backstory.",
    result:
      "Her generator is now up and running and she’s happy with the results as she can now increase her outreach on LinkedIn without spending any time writing and uploading the posts.",
    link: "https://www.linkedin.com/in/gina-cristina-n%C4%83stas%C4%83-3234a5416",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
