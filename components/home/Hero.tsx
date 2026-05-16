"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/shared/CTAButton";
import { Container } from "@/components/shared/Container";
import { WordStaggerHeading } from "@/components/shared/WordStaggerHeading";

export function Hero() {
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
        className="relative z-10 pt-36 sm:pt-44 pb-24 sm:pb-32 lg:pt-56 lg:pb-40"
      >
        <motion.p
          className="text-xs uppercase tracking-label font-semibold text-amber mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Michaelangelo Digital
        </motion.p>

        <div className="relative">
          <div
            className="pointer-events-none absolute -left-[18%] -right-[10%] -top-[12%] -bottom-[38%] md:-bottom-[28%]"
            style={{
              background:
                "radial-gradient(ellipse 82% 72% at 42% 38%, rgba(38, 62, 118, 0.28) 0%, rgba(17, 17, 17, 0) 68%)",
            }}
            aria-hidden="true"
          />
          <WordStaggerHeading
            text="Making business easier, one process at a time."
            className="relative z-[1] text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] max-w-5xl"
            as="h2"
          />
        </div>

        <motion.p
          className="mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Michaelangelo Digital builds automation systems and websites for
          small business owners who are tired of spending their <em className="text-amber">precious time</em> on manual
          tasks.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-start gap-3 md:flex-row md:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <CTAButton
            href="/services"
            variant="amber"
            size="lg"
            withArrow
            className="shrink-0"
          >
            See Our Services
          </CTAButton>
          <CTAButton
            href="/book"
            variant="secondary"
            size="lg"
            className="w-[220px] shrink-0"
          >
            Book a Call
          </CTAButton>
        </motion.div>
      </Container>
    </section>
  );
}
