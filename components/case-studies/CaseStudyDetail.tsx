"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { FadeInView } from "@/components/shared/FadeInView";
import type { CaseStudy } from "@/data/caseStudies";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type CaseStudyDetailProps = {
  study: CaseStudy;
};

function EditorialSection({
  eyebrow,
  title,
  body,
  variant,
}: {
  eyebrow: string;
  title: string;
  body: string;
  variant: "light" | "muted";
}) {
  const isPlaceholder =
    body.includes("to be added") ||
    body.includes("Outcome details to be added");

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={fadeUp}
      className={cn(
        "rounded-3xl border p-8 sm:p-12 lg:p-14",
        variant === "light"
          ? "bg-white border-border shadow-card"
          : "bg-navy/[0.03] border-border",
      )}
    >
      <p className="text-xs uppercase tracking-label font-semibold text-amber">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.08] text-balance">
        {title}
      </h2>
      <div
        className={cn(
          "mt-6 text-lg sm:text-xl leading-relaxed text-pretty max-w-prose",
          variant === "light" ? "text-body" : "text-muted",
        )}
      >
        <p>{body}</p>
      </div>
      {isPlaceholder ? (
        <p className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-label font-semibold text-amber border border-amber/35 rounded-full px-3 py-1 bg-amber/10">
          Pending client approval
        </p>
      ) : null}
    </motion.section>
  );
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const num = String(study.number).padStart(2, "0");

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 hero-gradient opacity-90" aria-hidden="true" />
        <div className="absolute inset-0 noise-overlay" aria-hidden="true" />
        <Container size="wide" className="relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28 lg:pt-40">
          <FadeInView>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-label font-semibold text-white/65 hover:text-white transition mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              All case studies
            </Link>
          </FadeInView>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-8xl sm:text-9xl leading-none text-white/10 tabular-nums select-none">
              {num}
            </p>
            <h1 className="-mt-6 sm:-mt-10 font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] text-balance max-w-4xl">
              {study.clientName}
            </h1>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="inline-flex rounded-full bg-amber px-3 py-1 text-[10px] uppercase tracking-label font-semibold text-ink">
                {study.serviceDelivered}
              </span>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-label font-semibold text-white/85 border border-white/15">
                {study.industry}
              </span>
              <span className="inline-flex rounded-full bg-white text-ink px-3 py-1 text-[10px] uppercase tracking-label font-semibold">
                {study.status}
              </span>
            </div>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed">
              {study.summary}
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24 lg:py-28">
        <Container size="narrow" className="space-y-8 lg:space-y-10">
          <EditorialSection
            eyebrow="Chapter one"
            title="The Problem"
            body={study.problem}
            variant="light"
          />
          <EditorialSection
            eyebrow="Chapter two"
            title="The Onboarding Experience"
            body={study.onboarding}
            variant="light"
          />
          <EditorialSection
            eyebrow="Chapter three"
            title="The Result"
            body={study.result}
            variant="light"
          />
          <Container size="narrow">
            <div className="mt-10 flex justify-center">
              <Link
                href={study.link}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-label font-semibold text-ink hover:text-white transition mb-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="amber"
                  size="default"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-label font-semibold text-white hover:text-white transition duration-300"
                >
                  See The System In Action <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>  
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
}
