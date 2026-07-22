import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  href?: string | null;
};

/**
 * Text-based wordmark for Clophy.
 *
 * Replace this component's internals (or the rendered children) with
 * an <Image /> tag pointing at a real logo file when ready. The colour
 * variants and sizing remain consistent across the rest of the site.
 */
export function Logo({ variant = "dark", className, href = "/" }: LogoProps) {
  const colour = variant === "dark" ? "text-navy" : "text-white";

  const content = (
    <span
      className={cn(
        "font-display font-semibold leading-none tracking-tight inline-flex items-baseline gap-1",
        colour,
        className,
      )}
    >
      <span className="text-xl sm:text-[1.35rem]">Clophy</span>
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      aria-label="Clophy — Home"
      className="inline-flex items-center"
    >
      {content}
    </Link>
  );
}
