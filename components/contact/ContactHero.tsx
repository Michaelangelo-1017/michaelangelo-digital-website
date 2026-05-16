"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { WordStaggerHeading } from "@/components/shared/WordStaggerHeading";

export function ContactHero() {
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
        className="relative z-10 pt-36 sm:pt-44 pb-16 sm:pb-24 lg:pt-52"
      >
        <motion.p
          className="mb-6 text-xs font-semibold uppercase tracking-label text-amber"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.p>

        <WordStaggerHeading
          text="Get in touch!"
          className="max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          as="h1"
        />
      </Container>

      <div className="relative z-10">
        <svg
          className="block h-12 w-full text-cream sm:h-16"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,30 C300,55 600,5 900,30 C1050,42 1150,55 1200,55 L1200,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
