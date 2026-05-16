"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { FadeInView } from "@/components/shared/FadeInView";
import { PricingTable } from "@/components/services/PricingTable";
import { VIEWPORT_ONCE, cardSpringUp, fadeUp } from "@/lib/animations";

export function BookedJobSystem() {
  return (
    <section
      id="booked-job-system"
      className="relative bg-navy text-white py-24 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div
        className="absolute -top-32 -right-20 w-[40rem] h-[40rem] rounded-full bg-amber/10 blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <FadeInView>
          <p className="text-xs uppercase tracking-label font-semibold text-amber mb-6">
            Service one
          </p>
        </FadeInView>

        <motion.h2
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.02] text-balance max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          Booked Job System
        </motion.h2>

        <motion.p
          className="mt-8 text-lg sm:text-xl leading-relaxed text-white/80 max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.1 }}
        >
          The Booked Job System is a done-for-you enquiry automation system
          built specifically for small, owner-operated cleaning companies in
          the UK. When a customer submits a quote request through your
          website, the system captures their details automatically, sends
          them a confirmation email, notifies you instantly, and follows up
          on your behalf if you do not respond. No more missed enquiries. No
          more manual chasing. No more leads falling through the cracks.
        </motion.p>

        <motion.div
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Card 1 — Done For You */}
          <motion.article
            variants={cardSpringUp}
            className="relative flex flex-col rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-10 lg:p-12"
          >
            <span className="inline-flex items-center text-[10px] uppercase tracking-label font-semibold text-amber w-fit">
              Most popular
            </span>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl text-white text-balance">
              Done For You Install
            </h3>
            <p className="mt-4 text-white/70 text-base leading-relaxed">
              We build and install the entire system for you. You get a fully
              working automation system without touching a single line of
              code.
            </p>

            <PricingTable />

            <p className="mt-6 text-xs sm:text-sm text-white/45 leading-relaxed">
              Prices increase as demand grows. The free tier has one slot
              remaining.
            </p>

            <div className="mt-8">
              <CTAButton
                href="/book"
                variant="amber"
                size="lg"
                withArrow
                className="w-full sm:w-auto"
              >
                Book Your Install
              </CTAButton>
            </div>
          </motion.article>

          {/* Card 2 — Do It Yourself */}
          <motion.article
            variants={cardSpringUp}
            className="relative flex flex-col rounded-3xl bg-ink border border-white/5 p-8 sm:p-10 lg:p-12"
          >
            <span className="inline-flex items-center text-[10px] uppercase tracking-label font-semibold text-white/60 w-fit">
              Self-build
            </span>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl text-white text-balance">
              Do It Yourself Install
            </h3>
            <p className="mt-4 text-white/70 text-base leading-relaxed">
              Want full control of your own system? We guide you through
              building and installing the Booked Job System yourself so your
              team can manage it, update it, and troubleshoot it without
              relying on us.
            </p>

            <div className="mt-10 rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-7">
              <p className="text-xs uppercase tracking-label font-semibold text-white/55">
                Price
              </p>
              <p className="mt-2 font-display text-3xl sm:text-4xl text-white leading-tight">
                DFY install price{" "}
                <span className="text-amber">+ £349</span>
              </p>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">
                Pay the matching DFY tier above plus £349 for the guided DIY
                session, so your team can own the system end-to-end.
              </p>
            </div>

            <div className="mt-auto pt-8">
              <CTAButton
                href="/book"
                variant="secondary"
                size="lg"
                withArrow
                className="w-full sm:w-auto"
              >
                Book a DIY Session
              </CTAButton>
            </div>
          </motion.article>
        </motion.div>
      </Container>
    </section>
  );
}
