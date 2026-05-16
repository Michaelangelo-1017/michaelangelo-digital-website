import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
  size?: "default" | "narrow" | "wide";
};

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: ContainerProps) {
  const max =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-7xl"
        : "max-w-6xl";
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", max, className)}>
      {children}
    </Tag>
  );
}
