"use client";

import { cn } from "@/lib/utils";
import { useLocalStorage } from "@/lib/use-local-storage";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ChecklistProps {
  id: string;
  items: string[];
  title?: string;
  showProgress?: boolean;
}

export function Checklist({ id, items, title, showProgress = true }: ChecklistProps) {
  const storageKey = `om-checklist-${id}`;
  const [checked, setChecked, hydrated] = useLocalStorage<Record<number, boolean>>(storageKey, {});
  const completed = items.filter((_, i) => checked[i]).length;
  const progress = Math.round((completed / items.length) * 100);

  const toggle = (index: number) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 card-shadow dark:border-navy-700 dark:bg-navy-900/80">
      {title && (
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="font-semibold text-navy-900 dark:text-blue-50">{title}</h3>
          {showProgress && hydrated && (
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{progress}%</span>
          )}
        </div>
      )}
      {showProgress && hydrated && (
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-blue-100 dark:bg-navy-800">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-blue-50 dark:hover:bg-navy-800/60"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all",
                  checked[index]
                    ? "border-blue-600 bg-blue-600 text-white dark:border-blue-400 dark:bg-blue-500"
                    : "border-blue-200 dark:border-navy-600",
                )}
                aria-hidden
              >
                {checked[index] && <Check className="h-3 w-3" />}
              </span>
              <span
                className={cn(
                  "text-sm leading-relaxed",
                  checked[index]
                    ? "text-navy-600 line-through dark:text-blue-300/60"
                    : "text-navy-900 dark:text-blue-100",
                )}
              >
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
