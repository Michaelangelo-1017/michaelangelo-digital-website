import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { OperationsSystemsAssessment } from "@/components/services/OperationsSystemsAssessment";
import { CarePath360 } from "@/components/services/CarePath360";
import { WebsiteBuildSection } from "@/components/services/WebsiteBuildSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Operations Systems Assessment Call, CarePath360, and Website Design and Build: systems and platforms for small business owners in the UK.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Clophy",
    description:
      "Three services. One goal. Give you your time back.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <OperationsSystemsAssessment />
      <CarePath360 />
      <WebsiteBuildSection />
      <FinalCTA />
    </>
  );
}
