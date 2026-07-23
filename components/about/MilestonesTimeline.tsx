"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import {
  COMPLETED_MILESTONES,
  FUTURE_MILESTONES,
  type CompletedMilestone,
  type FutureMilestone,
} from "@/data/milestones";
import { VIEWPORT_ONCE } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Item =
  | ({ kind: "completed" } & CompletedMilestone)
  | ({ kind: "future" } & FutureMilestone);

const ITEMS: Item[] = [
  ...COMPLETED_MILESTONES.map((m) => ({ kind: "completed" as const, ...m })),
  ...FUTURE_MILESTONES.map((m) => ({ kind: "future" as const, ...m })),
];

// Layout + SVG share the same Y units so nodes and the stroke stay aligned.
const ROW_H = 220;
const TAIL_H = 220;
const SVG_W = 1000;
const LEFT_X = SVG_W * 0.32;
const RIGHT_X = SVG_W * 0.68;
const CENTER_X = SVG_W * 0.5;

const DT_HEIGHT = ITEMS.length * ROW_H + TAIL_H;
const COMPLETED_COUNT = COMPLETED_MILESTONES.length;

function nodeX(index: number) {
  return index % 2 === 0 ? LEFT_X : RIGHT_X;
}

function nodeY(index: number) {
  return index * ROW_H + ROW_H / 2;
}

/**
 * Build an S-curve through every completed milestone, then ease toward
 * the first future node and stop short of it. Futures are never on the path.
 *
 * Uses a wide viewBox (1000×height) so X/Y scales stay reasonable — Framer's
 * pathLength on a 100×tall viewBox with preserveAspectRatio="none" was
 * clipping the stroke early.
 */
function buildCompletedPath(): string {
  if (COMPLETED_COUNT === 0) return "";

  const points = Array.from({ length: COMPLETED_COUNT }, (_, i) => ({
    x: nodeX(i),
    y: nodeY(i),
  }));

  const first = points[0];
  let d = `M ${CENTER_X} 0`;
  d += ` C ${CENTER_X} ${ROW_H * 0.35}, ${first.x} ${first.y - ROW_H * 0.35}, ${first.x} ${first.y}`;

  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    const midY = (a.y + b.y) / 2;
    // Keep control points on each column so the curve always hits each node.
    d += ` C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`;
  }

  const last = points[points.length - 1];

  if (FUTURE_MILESTONES.length > 0) {
    const next = { x: nodeX(COMPLETED_COUNT), y: nodeY(COMPLETED_COUNT) };
    const endX = last.x + (next.x - last.x) * 0.4;
    const endY = last.y + (next.y - last.y) * 0.4;
    const midY = (last.y + endY) / 2;
    d += ` C ${last.x} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
  } else {
    d += ` C ${last.x} ${last.y + ROW_H * 0.4}, ${CENTER_X} ${last.y + TAIL_H * 0.55}, ${CENTER_X} ${last.y + TAIL_H * 0.85}`;
  }

  return d;
}

function CompletedMarker() {
  return (
    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-navy ring-4 ring-cream shadow-card">
      <span className="block h-2 w-2 rounded-full bg-white" />
    </span>
  );
}

function FutureMarker() {
  return (
    <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream ring-4 ring-cream">
      <span
        className="absolute inset-0 rounded-full border-2 border-dashed border-amber animate-soft-pulse"
        aria-hidden="true"
      />
      <span
        className="absolute inset-0 rounded-full bg-amber/25 animate-pulse-ring"
        aria-hidden="true"
      />
      <span className="relative block h-3 w-3 rounded-full bg-amber" />
    </span>
  );
}

function MilestoneCard({
  item,
  align,
}: {
  item: Item;
  align: "left" | "right";
}) {
  if (item.kind === "completed") {
    return (
      <div
        className={cn(
          "p-6 sm:p-7 bg-white border border-border rounded-2xl shadow-card max-w-md",
          align === "right" ? "text-right" : "text-left",
        )}
      >
        <p className="text-xs uppercase tracking-label text-muted font-semibold">
          {item.date}
        </p>
        <h3 className="mt-2 font-display text-2xl sm:text-3xl text-ink leading-tight text-balance">
          {item.title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "relative p-6 sm:p-7 bg-amber-50/60 border-2 border-dashed border-amber/60 rounded-2xl max-w-md",
        align === "right" ? "text-right" : "text-left",
      )}
    >
      <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-label font-semibold text-amber-600 bg-amber-50 border border-amber/40 rounded-full px-2.5 py-1">
        <span className="block h-1.5 w-1.5 rounded-full bg-amber animate-soft-pulse" />
        Coming Soon
      </span>
      <h3 className="mt-3 font-display text-xl sm:text-2xl text-navy/80 leading-tight text-balance">
        {item.title}
      </h3>
    </div>
  );
}

function JourneyContinues() {
  return (
    <p className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-navy/80 text-balance">
      The journey continues…
    </p>
  );
}

function DesktopTimeline() {
  const pathD = useMemo(() => buildCompletedPath(), []);

  return (
    <div
      className="relative mx-auto max-w-5xl"
      style={{ height: `${DT_HEIGHT}px` }}
      aria-label="Clophy milestones timeline"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${SVG_W} ${DT_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {pathD ? (
          <motion.path
            d={pathD}
            stroke="#1B2E5E"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : null}
      </svg>

      {ITEMS.map((item, i) => {
        const isLeft = i % 2 === 0;
        const y = nodeY(i);
        return (
          <div
            key={item.id}
            className="absolute inset-x-0"
            style={{ top: `${y}px`, transform: "translateY(-50%)" }}
          >
            <div
              className="absolute"
              style={{
                left: isLeft ? "32%" : "68%",
                transform: "translate(-50%, 0)",
              }}
            >
              {item.kind === "future" ? <FutureMarker /> : <CompletedMarker />}
            </div>
            <div
              className={cn(
                "absolute flex",
                isLeft ? "justify-end" : "justify-start",
              )}
              style={
                isLeft
                  ? { left: 0, right: "70%" }
                  : { left: "70%", right: 0 }
              }
            >
              <MilestoneCard item={item} align={isLeft ? "right" : "left"} />
            </div>
          </div>
        );
      })}

      <motion.div
        className="absolute left-0 right-0 text-center"
        style={{
          top: `${ITEMS.length * ROW_H + TAIL_H * 0.9}px`,
          transform: "translateY(-50%)",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <JourneyContinues />
      </motion.div>
    </div>
  );
}

function MobileTimeline() {
  const completedItems = ITEMS.filter((item) => item.kind === "completed");
  const futureItems = ITEMS.filter((item) => item.kind === "future");

  return (
    <div
      className="relative pb-4"
      aria-label="Clophy milestones timeline (mobile)"
    >
      {/* Navy spine only spans the *completed* milestones — future rows sit below without this track. */}
      <div className="relative">
        {completedItems.length > 0 ? (
          <div
            className="pointer-events-none absolute left-0 top-3 bottom-0 z-0 flex w-10 justify-center"
            aria-hidden="true"
          >
            <motion.div
              className="h-full w-[6px] rounded-full bg-navy"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top center" }}
            />
          </div>
        ) : null}

        <div className="relative z-10 flex flex-col gap-12">
          {completedItems.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="relative z-10 flex w-10 shrink-0 justify-center pt-1">
                <CompletedMarker />
              </div>
              <div className="min-w-0 flex-1 pr-1">
                <MilestoneCard item={item} align="left" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {futureItems.length > 0 ? (
        <div className="relative z-10 mt-12 flex flex-col gap-12">
          {futureItems.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="relative z-10 flex w-10 shrink-0 justify-center pt-1">
                <FutureMarker />
              </div>
              <div className="min-w-0 flex-1 pr-1">
                <MilestoneCard item={item} align="left" />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <motion.div
        className="relative z-10 mt-16 px-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <JourneyContinues />
      </motion.div>
    </div>
  );
}

export function MilestonesTimeline() {
  return (
    <section className="bg-cream py-24 sm:py-28 lg:py-32 overflow-hidden">
      <Container size="wide">
        <SectionTitle
          label="The journey"
          heading="Every step so far. And what is coming next."
          align="center"
        />

        <div className="mt-16 hidden md:block">
          <DesktopTimeline />
        </div>
        <div className="mt-12 md:hidden">
          <MobileTimeline />
        </div>
      </Container>
    </section>
  );
}
