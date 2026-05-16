"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { cardSpringUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const href = `/case-studies/${study.slug}`;
  const num = String(study.number).padStart(2, "0");

  return (
    <motion.article variants={cardSpringUp} className="h-full">
      <Link
        href={href}
        className={cn(
          "group flex flex-col h-full rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-lg",
        )}
      >
        <div className="flex items-start justify-between gap-6">
          <span className="font-display text-7xl sm:text-8xl leading-none text-navy/90 tabular-nums">
            {num}
          </span>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-muted transition group-hover:border-navy group-hover:text-navy group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-5 w-5" strokeWidth={1.6} />
          </span>
        </div>

        <h2 className="mt-8 font-display text-3xl sm:text-4xl text-ink leading-tight text-balance">
          {study.clientName}
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full bg-amber/15 px-3 py-1 text-[10px] uppercase tracking-label font-semibold text-navy border border-amber/35">
            {study.serviceDelivered}
          </span>
          <span className="inline-flex rounded-full bg-navy/5 px-3 py-1 text-[10px] uppercase tracking-label font-semibold text-muted border border-border">
            {study.industry}
          </span>
          <span className="inline-flex rounded-full bg-ink px-3 py-1 text-[10px] uppercase tracking-label font-semibold text-white border border-white/10">
            {study.status}
          </span>
        </div>

        <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed flex-grow">
          {study.summary}
        </p>

        <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-label font-semibold text-navy">
          Read the full case study
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.article>
  );
}
