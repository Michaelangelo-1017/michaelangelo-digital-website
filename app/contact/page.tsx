import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetailsPanel } from "@/components/contact/ContactDetails";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Michaelangelo Digital — phone, email, WhatsApp, contact form, or book a call with Calendly.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Michaelangelo Digital",
    description:
      "Reach Michaelangelo Digital by phone, email, WhatsApp, or schedule a free call.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Michaelangelo Digital",
    description:
      "Reach Michaelangelo Digital by phone, email, WhatsApp, or schedule a free call.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-cream py-20 sm:py-24 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
            <ContactForm />
            <ContactDetailsPanel />
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
