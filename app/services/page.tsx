import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { BookedJobSystem } from "@/components/services/BookedJobSystem";
import { SystemFeaturesList } from "@/components/services/SystemFeaturesList";
import { WebsiteBuildSection } from "@/components/services/WebsiteBuildSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The Booked Job System and Website Design and Build — automation systems and modern websites for small business owners in the UK.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Michaelangelo Digital",
    description:
      "Two services. One goal. Give you your time back.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <BookedJobSystem />
      <SystemFeaturesList />
      <WebsiteBuildSection />
      <FinalCTA />
    </>
  );
}
