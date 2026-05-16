"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { CTAButton } from "@/components/shared/CTAButton";
import { COMPLETED_MILESTONES } from "@/data/milestones";
import { staggerContainer, cardSpringUp, VIEWPORT_ONCE } from "@/lib/animations";

export function MilestonesTeaser() {
  const firstFour = COMPLETED_MILESTONES.slice(0, 4);

  return (
    <section className="bg-cream py-24 sm:py-28 lg:py-32">
      <Container size="wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionTitle
            label="The journey"
            heading="From an idea to a real business."
            className="lg:max-w-2xl"
          />
          <div className="hidden lg:block">
            <CTAButton href="/about" variant="ghost-light" withArrow>
              See the full journey
            </CTAButton>
          </div>
        </div>

        <motion.ol
          className="mt-14 flex gap-5 overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-thin"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {firstFour.map((m, i) => (
            <motion.li
              key={m.id}
              variants={cardSpringUp}
              className="snap-start flex-shrink-0 w-[18rem] sm:w-[20rem] bg-white border border-border rounded-2xl p-6 shadow-card"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-label font-semibold text-muted">
                <span className="text-amber font-display text-base normal-case tracking-normal">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-border" />
                <span>{m.shortDate}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl sm:text-3xl text-ink leading-tight">
                {m.title}
              </h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {m.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-10 lg:hidden">
          <CTAButton href="/about" variant="ghost-light" withArrow>
            See the full journey
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
