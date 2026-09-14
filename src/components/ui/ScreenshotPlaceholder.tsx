import { ImageIcon } from "lucide-react";

interface ScreenshotPlaceholderProps {
  label?: string;
  aspect?: "video" | "square" | "wide";
}

export function ScreenshotPlaceholder({
  label = "[Insert current Meta Business Suite screenshot here]",
  aspect = "video",
}: ScreenshotPlaceholderProps) {
  return (
    <figure
      className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-8 text-center dark:border-navy-600 dark:bg-navy-900/40 ${
        aspect === "video" ? "aspect-video" : aspect === "square" ? "aspect-square max-w-sm" : "aspect-[21/9]"
      }`}
    >
      <ImageIcon className="mb-3 h-8 w-8 text-blue-300 dark:text-navy-600" aria-hidden />
      <figcaption className="max-w-md text-sm font-medium text-navy-600 dark:text-blue-300/60">{label}</figcaption>
    </figure>
  );
}
