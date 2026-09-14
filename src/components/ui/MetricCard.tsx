import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  sample?: boolean;
  className?: string;
  icon?: ReactNode;
}

export function MetricCard({ label, value, change, sample = false, className, icon }: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-blue-100 bg-white p-4 card-shadow dark:border-navy-700 dark:bg-navy-900/80",
        className,
      )}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-navy-600 dark:text-blue-300/70">{label}</span>
        {icon}
        {sample && (
          <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            Sample
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-navy-900 dark:text-blue-50">{value}</p>
      {change && <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">{change}</p>}
    </div>
  );
}
