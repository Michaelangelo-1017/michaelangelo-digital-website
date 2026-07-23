"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TestimonialCard } from "@/components/home/TestimonialCard";
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
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.id} variants={cardSpringUp} className="h-full">
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
