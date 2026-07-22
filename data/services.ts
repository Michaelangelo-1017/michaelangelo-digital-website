/**
 * Services page content.
 *
 * To update website pricing:
 *   - Edit WEBSITE_BUILD.priceFrom.
 *
 * To update the assessment CTA form:
 *   - Edit TALLY_FORM_URL.
 */

export const TALLY_FORM_URL = "https://tally.so/r/A7O4pN";

export const ASSESSMENT_STEPS: { step: string; title: string; description: string }[] = [
  {
    step: "01",
    title: "Apply",
    description:
      "Fill in a short qualifying form so I understand your industry, team, and the result you are after.",
  },
  {
    step: "02",
    title: "Assessment Call",
    description:
      "A free 15 to 30 minute call to map the operational bottlenecks costing you time or money.",
  },
  {
    step: "03",
    title: "Your Report and Walkthrough",
    description:
      "A full written report delivered and explained on a follow-up call which is a standalone deliverable you can act on.",
  },
];

export const CAREPATH360 = {
  oneLiner:
    "A compliance and onboarding platform built for care providers with small admin teams.",
  description:
    "CarePath360 acts as a dedicated staff compliance officer. It keeps staff documents compliant and up to date automatically, gives employees direct access to their own compliance documents so they can manage their own compliance, and simplifies onboarding for new starters in the CarePath360 network.",
  audience:
    "Built for UK care providers with small admin teams who need a reliable way to stay compliant without adding headcount.",
  pricingLabel: "Custom pricing",
  pricingNote: "Book a call to discuss what fits your organisation.",
};

export const WEBSITE_BUILD = {
  priceFrom: "£300",
};
