"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { BJS_FEATURES } from "@/data/services";
import { VIEWPORT_ONCE, fadeUp } from "@/lib/animations";

export function SystemFeaturesList() {
  return (
    <section className="bg-cream py-24 sm:py-28 lg:py-32">
      <Container size="wide">
        <SectionTitle
          label="What the system does"
          heading="Every quote request, captured and followed up automatically."
          description="No more leads falling through the cracks. The whole loop runs without you needing to touch your inbox."
        />

        <motion.ul
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {BJS_FEATURES.map((f) => (
            <motion.li
              key={f.title}
              variants={fadeUp}
              className="flex items-start gap-4 bg-white border border-border rounded-2xl p-5 sm:p-6 shadow-card hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="flex-shrink-0 mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber/15 text-amber border border-amber/30">
                <Check className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <p className="text-ink text-base sm:text-lg leading-relaxed">
                {f.title}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
