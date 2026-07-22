"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";
import { CONTACT_DETAILS } from "@/data/navigation";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";

const LINK_ROW_CLASS =
  "group flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg";

export function ContactDetailsPanel() {
  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.p
        variants={fadeUp}
        className="mb-1 text-xs font-semibold uppercase tracking-label text-muted"
      >
        Direct contact
      </motion.p>

      <motion.a
        variants={fadeUp}
        href={`tel:${CONTACT_DETAILS.phoneInternational}`}
        className={LINK_ROW_CLASS}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
          <Phone className="h-5 w-5" aria-hidden />
        </span>
        <span>
          <span className="block text-xs font-semibold uppercase tracking-label text-muted">
            Phone
          </span>
          <span className="mt-1 block font-display text-xl text-ink transition-colors group-hover:text-navy">
            {CONTACT_DETAILS.phone}
          </span>
        </span>
      </motion.a>

      <motion.a
        variants={fadeUp}
        href={`mailto:${CONTACT_DETAILS.email}`}
        className={LINK_ROW_CLASS}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber text-ink">
          <Mail className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-label text-muted">
            Email
          </span>
          <span className="mt-1 block break-all font-display text-lg text-ink transition-colors group-hover:text-navy sm:text-xl">
            {CONTACT_DETAILS.email}
          </span>
        </span>
      </motion.a>

      <motion.a
        variants={fadeUp}
        href={CONTACT_DETAILS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_ROW_CLASS}
      >
        <Image src="/images/whatsapp.png" alt="WhatsApp" width={40} height={40} className="h-11 w-11" aria-hidden />
        <span>
          <span className="block text-xs font-semibold uppercase tracking-label text-muted">
            WhatsApp
          </span>
          <span className="mt-1 block text-base font-medium text-navy underline-offset-4 group-hover:underline">
            Chat on WhatsApp
          </span>
        </span>
      </motion.a>

      <motion.div variants={fadeUp} className="pt-4">
        <p className="mb-4 text-xs font-semibold uppercase tracking-label text-muted">
          Book online
        </p>
        <CalendlyEmbed title="Schedule a call — Clophy" />
      </motion.div>
    </motion.div>
  );
}
