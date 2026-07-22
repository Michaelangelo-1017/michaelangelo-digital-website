"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Layout } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { FadeInView } from "@/components/shared/FadeInView";
import { WEBSITE_BUILD } from "@/data/services";
import { VIEWPORT_ONCE, fadeUp } from "@/lib/animations";

const PILLARS = [
  {
    icon: Layout,
    title: "Built to represent",
    description:
      "Designed properly. Not a template. Looks like a real business.",
  },
  {
    icon: Zap,
    title: "Built to load fast",
    description:
      "Next.js, static rendering, modern image optimisation. Quick on mobile.",
  },
  {
    icon: Sparkles,
    title: "Built to convert",
    description:
      "Clear calls to action. Easy quote requests. Visitors become customers.",
  },
];

export function WebsiteBuildSection() {
  return (
    <section
      id="website-build"
      className="relative bg-cream pt-32 sm:pt-36 lg:pt-40 pb-24 sm:pb-28 lg:pb-32 overflow-hidden border-t-8 border-amber/30"
    >

      <Container size="wide">
        <FadeInView>
          <p className="text-xs uppercase tracking-label font-semibold text-amber mb-6">
            Service three
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
              Website Design and Build
            </motion.h2>

            <motion.p
              className="mt-8 text-lg sm:text-xl leading-relaxed text-muted max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              transition={{ delay: 0.1 }}
            >
              Clean, fast, modern websites for small businesses. Built in
              Next.js for performance and easy future updates. Every site is
              designed to represent your business properly and convert
              visitors into customers.
            </motion.p>

            <motion.ul
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.li
                    key={p.title}
                    variants={fadeUp}
                    className="rounded-2xl bg-white border border-border p-5 shadow-card"
                  >
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-amber/15 text-amber border border-amber/30">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-4 font-display text-lg text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {p.description}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ul>
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
            <p className="mt-4 font-display text-2xl sm:text-3xl text-white/80">
              Starting from
            </p>
            <p className="font-display text-6xl sm:text-7xl text-white leading-none mt-2">
              {WEBSITE_BUILD.priceFrom}
            </p>

            <div className="mt-8">
              <CTAButton
                href="/book"
                variant="amber"
                size="lg"
                withArrow
                className="w-full"
              >
                Book a Website Build
              </CTAButton>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
