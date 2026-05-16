"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { WordStaggerHeading } from "@/components/shared/WordStaggerHeading";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";

export function BookPageContent() {
  return (
    <section className="relative isolate min-h-[calc(100vh-5rem)] bg-ink text-white">
      <div className="absolute inset-0 hero-gradient opacity-90" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pt-44">
        <motion.p
          className="mb-6 text-xs font-semibold uppercase tracking-label text-amber"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Book
        </motion.p>

        <WordStaggerHeading
          text="Book a free call"
          className="max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl xl:text-[5rem]"
          as="h1"
        />

        <motion.p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 1.0,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Pick a time that works for you and we will figure out exactly what
          your business needs. No pitch. No pressure. Just a conversation.
        </motion.p>

        <motion.div
          className="mt-10 lg:mt-12"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <CalendlyEmbed
            variant="full"
            title="Book a free 30-minute call — Calendly"
            className="border-white/10 shadow-card-lg"
          />
        </motion.div>
      </Container>
    </section>
  );
}
