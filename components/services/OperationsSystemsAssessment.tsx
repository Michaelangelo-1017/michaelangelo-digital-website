"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { FadeInView } from "@/components/shared/FadeInView";
import { ASSESSMENT_STEPS, TALLY_FORM_URL } from "@/data/services";
import { VIEWPORT_ONCE, fadeUp } from "@/lib/animations";

export function OperationsSystemsAssessment() {
  return (
    <section
      id="operations-systems-assessment"
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
          Free Operations Systems Assessment Call
        </motion.h2>

        <motion.p
          className="mt-8 text-lg sm:text-xl leading-relaxed text-white/80 max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.1 }}
        >
          A <strong className="text-amber/100">free 15 to 30 minute call</strong> where I learn about the specific
          operational constraints in your business including bottlenecks, manual admin, lead handling gaps, follow-up gaps, whatever is costing you time or money. After the call, I build a full written report mapping exactly what needs to be implemented or reviewed to <strong className="text-amber/100">make your operations more effective, efficient or of a higher quality</strong>. I deliver and walk through that report on a follow-up call. The <strong className="text-amber/100">report itself is a real, standalone deliverable</strong> which is valuable on its own, whether or not we build anything together afterwards.
        </motion.p>

        <motion.ol
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {ASSESSMENT_STEPS.map((item) => (
            <motion.li
              key={item.step}
              variants={fadeUp}
              className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-9"
            >
              <span className="font-display text-4xl text-amber/80 leading-none">
                {item.step}
              </span>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl text-white text-balance">
                {item.title}
              </h3>
              <p className="mt-4 text-white/65 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.15 }}
        >
          <CTAButton
            href={TALLY_FORM_URL}
            external
            variant="amber"
            size="lg"
            withArrow
            className="w-full sm:w-auto"
          >
            Apply for Your Free Operations Systems Assessment
          </CTAButton>
        </motion.div>
      </Container>
    </section>
  );
}
