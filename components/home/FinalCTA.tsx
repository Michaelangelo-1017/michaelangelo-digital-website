"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="relative bg-navy text-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div
        className="absolute -top-32 -left-20 w-[40rem] h-[40rem] rounded-full bg-amber/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-20 w-[40rem] h-[40rem] rounded-full bg-amber/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <motion.h2
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-white text-balance leading-[1.05]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          Ready to get your time back?
        </motion.h2>
        <motion.p
          className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.1 }}
        >
          Book a free call and we will figure out exactly what your business
          needs.
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.2 }}
        >
          <CTAButton href="/book" variant="amber" size="lg" withArrow>
            Book a Free Call
          </CTAButton>
        </motion.div>
      </Container>
    </section>
  );
}
