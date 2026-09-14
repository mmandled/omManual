import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSlug(segments: string[] | undefined): string {
  if (!segments || segments.length === 0) return "";
  return segments.join("/");
}

export function titleFromSlug(slug: string): string {
  return slug
    .split("/")
    .pop()!
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
