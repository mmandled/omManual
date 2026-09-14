"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface WorkflowStep {
  id: string;
  label: string;
  description: string;
}

interface WorkflowProps {
  steps: WorkflowStep[];
  direction?: "horizontal" | "vertical";
  className?: string;
}

export function Workflow({ steps, direction = "horizontal", className }: WorkflowProps) {
  const [active, setActive] = useState<string | null>(steps[0]?.id ?? null);
  const activeStep = steps.find((s) => s.id === active);

  if (direction === "vertical") {
    return (
      <div className={cn("space-y-2", className)}>
        {steps.map((step, i) => (
          <div key={step.id}>
            <button
              type="button"
              onClick={() => setActive(step.id)}
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-left transition-all",
                active === step.id
                  ? "border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-navy-800"
                  : "border-blue-100 bg-white hover:border-blue-200 dark:border-navy-700 dark:bg-navy-900/60 dark:hover:border-navy-600",
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">{step.label}</span>
              {active === step.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-2 text-sm text-navy-800 dark:text-blue-100/90"
                >
                  {step.description}
                </motion.p>
              )}
            </button>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <span className="text-blue-300 dark:text-navy-600" aria-hidden>
                  ↓
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-1">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center">
            <button
              type="button"
              onClick={() => setActive(step.id)}
              className={cn(
                "rounded-xl px-3 py-2 text-xs font-bold tracking-wide transition-all md:px-4 md:text-sm",
                active === step.id
                  ? "bg-blue-600 text-white shadow-md dark:bg-blue-500"
                  : "bg-white text-navy-800 hover:bg-blue-50 dark:bg-navy-900 dark:text-blue-100 dark:hover:bg-navy-800",
              )}
            >
              {step.label}
            </button>
            {i < steps.length - 1 && (
              <span className="mx-1 hidden text-blue-300 sm:inline dark:text-navy-600" aria-hidden>
                →
              </span>
            )}
          </div>
        ))}
      </div>
      {activeStep && (
        <motion.div
          key={activeStep.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-2xl border border-blue-100 bg-white p-5 card-shadow dark:border-navy-700 dark:bg-navy-900/80"
        >
          <h3 className="mb-2 text-lg font-semibold text-navy-900 dark:text-blue-50">{activeStep.label}</h3>
          <p className="text-sm leading-relaxed text-navy-800 dark:text-blue-100/90">{activeStep.description}</p>
        </motion.div>
      )}
    </div>
  );
}
