import { cn } from "@/lib/utils";

export type CalendlyEmbedProps = {
  className?: string;
  /** Visible iframe title for accessibility */
  title?: string;
  /** default: contact sidebar height · full: tall embed for /book */
  variant?: "default" | "full";
};

/** Inline Calendly embed via iframe — same booking URL site-wide. */
export function CalendlyEmbed({
  className,
  title = "Book a call — Calendly scheduler",
  variant = "default",
}: CalendlyEmbedProps) {
  const iframeHeight =
    variant === "full"
      ? "min-h-[calc(100vh-18rem)] h-[820px] sm:h-[880px] lg:h-[920px]"
      : "h-[680px] sm:h-[720px]";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-white shadow-card",
        className,
      )}
    >
      <iframe
        src="https://calendly.com/michael-michaelangelo-digital/15-minute-meeting-clone"
        title={title}
        className={cn("w-full border-0", iframeHeight)}
        loading="lazy"
      />
    </div>
  );
}
