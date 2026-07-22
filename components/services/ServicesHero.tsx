"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { WordStaggerHeading } from "@/components/shared/WordStaggerHeading";

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 hero-gradient" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/60"
        aria-hidden="true"
      />

      <Container
        size="wide"
        className="relative z-10 pt-36 sm:pt-44 pb-24 sm:pb-32 lg:pt-52"
      >
        <motion.p
          className="text-xs uppercase tracking-label font-semibold text-amber mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.p>

        <WordStaggerHeading
          text="The systems we build."
          className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] max-w-4xl"
          as="h1"
        />

        <motion.p
          className="mt-8 text-lg sm:text-xl text-white/75 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Three services with One goal. To give you your time back.
        </motion.p>
      </Container>
    </section>
  );
}
