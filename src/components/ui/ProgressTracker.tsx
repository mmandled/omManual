"use client";

import { progressSections } from "@/content/navigation";
import { useProgress } from "@/components/providers/ProgressProvider";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export function ProgressTracker({ compact = false }: { compact?: boolean }) {
  const { visited, percentage, isHydrated } = useProgress();

  if (!isHydrated) return null;

  if (compact) {
    return (
      <div className="rounded-xl bg-blue-50/80 px-3 py-2 dark:bg-navy-800/60">
        <div className="mb-1 flex items-center justify-between text-xs">
          <span className="font-medium text-navy-700 dark:text-blue-200">OM Manual Progress</span>
          <span className="font-semibold text-blue-600 dark:text-blue-400">{percentage}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-blue-100 dark:bg-navy-700">
          <motion.div
            className="h-full rounded-full bg-blue-500"
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 card-shadow dark:border-navy-700 dark:bg-navy-900/80">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-navy-900 dark:text-blue-50">Your OM Manual Progress</h3>
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{percentage}%</span>
      </div>
      <div className="mb-4 h-2 overflow-hidden rounded-full bg-blue-100 dark:bg-navy-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <ul className="space-y-2">
        {progressSections.map((section) => (
          <li key={section.key}>
            <Link
              href={section.href}
              className="flex items-center gap-2 text-sm text-navy-800 transition-colors hover:text-blue-600 dark:text-blue-100/80 dark:hover:text-blue-400"
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                  visited[section.key]
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "border border-blue-200 dark:border-navy-600"
                }`}
              >
                {visited[section.key] && <Check className="h-3 w-3" />}
              </span>
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
