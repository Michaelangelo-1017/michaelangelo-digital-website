"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { FadeInView } from "@/components/shared/FadeInView";
import { CAREPATH360 } from "@/data/services";
import { VIEWPORT_ONCE, fadeUp } from "@/lib/animations";

export function CarePath360() {
  return (
    <section
      id="carepath360"
      className="relative bg-cream py-24 sm:py-28 lg:py-32 overflow-hidden"
    >
      <Container size="wide">
        <FadeInView>
          <p className="text-xs uppercase tracking-label font-semibold text-amber mb-6">
            Service two
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.h2
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02] text-balance"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              CarePath360
            </motion.h2>

            <motion.p
              className="mt-8 text-lg sm:text-xl leading-relaxed text-muted max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              transition={{ delay: 0.1 }}
            >
              {CAREPATH360.oneLiner}
            </motion.p>

            <motion.p
              className="mt-6 text-base sm:text-lg leading-relaxed text-muted max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              transition={{ delay: 0.15 }}
            >
              {CAREPATH360.description}
            </motion.p>

            <motion.p
              className="mt-6 text-base sm:text-lg leading-relaxed text-ink/80 max-w-2xl font-medium"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              transition={{ delay: 0.2 }}
            >
              {CAREPATH360.audience}
            </motion.p>
          </div>

          <motion.aside
            className="lg:col-span-5 lg:sticky lg:top-24 rounded-3xl bg-navy text-white p-8 sm:p-10 shadow-card-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <p className="text-xs uppercase tracking-label font-semibold text-amber">
              Pricing
            </p>
            <p className="mt-4 font-display text-4xl sm:text-5xl text-white leading-tight text-balance">
              {CAREPATH360.pricingLabel}
            </p>
            <p className="mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
              {CAREPATH360.pricingNote}
            </p>

            <div className="mt-8">
              <CTAButton
                href="https://calendly.com/jennifer-carepath360/30min"
                external
                variant="amber"
                size="lg"
                withArrow
                className="w-full"
              >
                Book a Call to Discuss
              </CTAButton>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
