"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { LinkedinIcon } from "@/components/shared/BrandIcons";
import { CONTACT_DETAILS } from "@/data/navigation";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";

export function LinkedInSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-amber/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={fadeUp}
        >
          <div className="mx-auto mb-8 flex justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <LinkedinIcon className="h-8 w-8 text-amber" />
            </span>
          </div>

          <h2 className="font-display text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            Follow on LinkedIn
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Founder updates, lessons learned, and behind the scenes posts three
            times a week.
          </p>

          <motion.div
            className="mt-10 flex justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <CTAButton
              href={CONTACT_DETAILS.linkedin}
              external
              variant="amber"
              size="lg"
              withArrow
              className="min-w-[14rem]"
            >
              Follow on LinkedIn
            </CTAButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
