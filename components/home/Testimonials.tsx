"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TESTIMONIALS } from "@/data/testimonials";
import {
  staggerContainer,
  cardSpringUp,
  VIEWPORT_ONCE,
} from "@/lib/animations";

export function Testimonials() {
  return (
    <section className="bg-ink text-white py-24 sm:py-28 lg:py-32">
      <Container size="wide">
        <SectionTitle
          label="What clients say"
          heading="Real businesses. Real outcomes."
          tone="dark"
          description="Testimonials from the first wave of installs are on the way. These cards are placeholders styled exactly as the real ones will appear."
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.id}
              variants={cardSpringUp}
              className="relative rounded-3xl p-8 sm:p-10 bg-white/[0.04] border border-white/10 transition hover:-translate-y-1 duration-300"
            >
              <span
                aria-hidden="true"
                className="font-display text-7xl sm:text-8xl leading-none text-amber/90 block"
              >
                “
              </span>
              <blockquote className="mt-2 font-display text-2xl sm:text-[1.65rem] leading-snug text-white text-balance">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs uppercase tracking-label text-white/55 mt-1">
                  {t.company}
                </p>
              </figcaption>
              {t.isPlaceholder ? (
                <span className="absolute top-6 right-6 text-[10px] uppercase tracking-label font-semibold text-amber/80 border border-amber/30 rounded-full px-2.5 py-1">
                  Placeholder
                </span>
              ) : null}
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
