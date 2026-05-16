"use client";

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

// Row pixel heights (also used as viewBox y-units so SVG path math is 1:1 with layout)
const ROW_DT = 220;
const TAIL_DT = 220;

const DT_HEIGHT = ITEMS.length * ROW_DT + TAIL_DT;

// Desktop path: alternating S-curve through left (x=32) and right (x=68) points
function buildDesktopPath(): string {
  const points = ITEMS.map((_, i) => ({
    x: i % 2 === 0 ? 32 : 68,
    y: i * ROW_DT + ROW_DT / 2,
  }));
  const startY = 0;
  const startX = 50;
  let d = `M ${startX} ${startY}`;
  d += ` C ${startX} ${ROW_DT * 0.3}, ${points[0].x} ${points[0].y - ROW_DT * 0.3}, ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    d += ` C ${a.x} ${a.y + ROW_DT * 0.5}, ${b.x} ${b.y - ROW_DT * 0.5}, ${b.x} ${b.y}`;
  }
  const last = points[points.length - 1];
  d += ` C ${last.x} ${last.y + ROW_DT * 0.5}, ${startX} ${last.y + TAIL_DT * 0.5}, ${startX} ${last.y + TAIL_DT * 0.85}`;
  return d;
}

const DESKTOP_PATH = buildDesktopPath();

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
  return (
    <div
      className="relative mx-auto max-w-5xl"
      style={{ height: `${DT_HEIGHT}px` }}
      aria-label="Michaelangelo Digital milestones timeline"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 100 ${DT_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d={DESKTOP_PATH}
          stroke="#1B2E5E"
          strokeWidth={7}
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      {ITEMS.map((item, i) => {
        const isLeft = i % 2 === 0;
        const y = i * ROW_DT + ROW_DT / 2;
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
          top: `${ITEMS.length * ROW_DT + TAIL_DT * 0.9}px`,
          transform: "translateY(-50%)",
        }}
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

function MobileTimeline() {
  const completedItems = ITEMS.filter((item) => item.kind === "completed");
  const futureItems = ITEMS.filter((item) => item.kind === "future");

  return (
    <div
      className="relative pb-4"
      aria-label="Michaelangelo Digital milestones timeline (mobile)"
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
