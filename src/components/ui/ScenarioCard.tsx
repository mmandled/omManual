"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ScenarioOption {
  label: string;
  correct?: boolean;
}

interface ScenarioCardProps {
  scenario: string;
  correctAction: string;
  options?: ScenarioOption[];
  number?: number;
}

export function ScenarioCard({ scenario, correctAction, options, number }: ScenarioCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const hasOptions = options && options.length > 0;
  const showResult = revealed || selected !== null;

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 card-shadow dark:border-navy-700 dark:bg-navy-900/80">
      {number && (
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-blue-500">
          Scenario {number}
        </span>
      )}
      <p className="mb-4 text-sm font-medium leading-relaxed text-navy-900 dark:text-blue-50">{scenario}</p>

      {hasOptions ? (
        <>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-blue-300/60">
            What would you do?
          </p>
          <ul className="space-y-2">
            {options.map((option, i) => {
              const isSelected = selected === i;
              const showFeedback = isSelected && showResult;
              return (
                <li key={option.label}>
                  <button
                    type="button"
                    disabled={showResult && !isSelected}
                    onClick={() => {
                      setSelected(i);
                      setRevealed(true);
                    }}
                    className={cn(
                      "w-full rounded-xl px-4 py-2.5 text-left text-sm transition-colors",
                      !showFeedback &&
                        "bg-blue-50 text-blue-900 hover:bg-blue-100 dark:bg-navy-800 dark:text-blue-100 dark:hover:bg-navy-700",
                      showFeedback &&
                        option.correct &&
                        "bg-emerald-50 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200",
                      showFeedback &&
                        !option.correct &&
                        isSelected &&
                        "bg-red-50 text-red-900 dark:bg-red-900/30 dark:text-red-200",
                      showResult && !isSelected && "opacity-50",
                    )}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="overflow-hidden"
              >
                <p className="mt-4 rounded-lg bg-emerald-50/80 px-4 py-3 text-sm leading-relaxed text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200">
                  <span className="font-semibold">Recommended: </span>
                  {correctAction}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setRevealed(!revealed)}
            className={cn(
              "flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
              revealed
                ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                : "bg-blue-50 text-blue-800 hover:bg-blue-100 dark:bg-navy-800 dark:text-blue-200 dark:hover:bg-navy-700",
            )}
          >
            {revealed ? "Recommended Action" : "What would you do?"}
          </button>
          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="mt-3 rounded-lg bg-emerald-50/80 px-4 py-3 text-sm leading-relaxed text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200">
                  {correctAction}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
