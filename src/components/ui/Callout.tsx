import { cn } from "@/lib/utils";
import { AlertCircle, BookOpen, Info, Lightbulb } from "lucide-react";
import type { ContentLabel } from "@/content/types";
import type { ReactNode } from "react";

interface CalloutProps {
  title?: string;
  children: ReactNode;
  variant?: "info" | "warning" | "success" | "principle";
  label?: ContentLabel;
  className?: string;
}

const labelText: Record<ContentLabel, string> = {
  official: "Official Workflow",
  recommended: "Recommended Practice",
  example: "Example",
};

export function Callout({ title, children, variant = "info", label, className }: CalloutProps) {
  const icons = {
    info: Info,
    warning: AlertCircle,
    success: Lightbulb,
    principle: BookOpen,
  };
  const Icon = icons[variant];

  return (
    <aside
      className={cn(
        "rounded-2xl border p-5",
        variant === "info" && "border-blue-200 bg-blue-50/80 dark:border-blue-500/30 dark:bg-blue-950/30",
        variant === "warning" && "border-amber-200 bg-amber-50/80 dark:border-amber-500/30 dark:bg-amber-950/20",
        variant === "success" && "border-emerald-200 bg-emerald-50/80 dark:border-emerald-500/30 dark:bg-emerald-950/20",
        variant === "principle" &&
          "border-blue-400/50 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:border-blue-500/40 dark:from-navy-900 dark:to-navy-800",
        className,
      )}
    >
      <div className="flex gap-3">
        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden />
        <div className="min-w-0 flex-1">
          {label && (
            <span className="mb-2 inline-block rounded-md bg-white/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy-700 dark:bg-navy-950/60 dark:text-blue-300">
              {labelText[label]}
            </span>
          )}
          {title && <h3 className="mb-2 text-lg font-semibold text-navy-900 dark:text-blue-50">{title}</h3>}
          <div className="text-sm leading-relaxed text-navy-800/90 dark:text-blue-100/90">{children}</div>
        </div>
      </div>
    </aside>
  );
}
