"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const quickActions = [
  { label: "ClickUp First", href: "/workflow/clickup-messenger" },
  { label: "Check Task", href: "/clickup/tasks" },
  { label: "Check Output", href: "/clickup/submitting-outputs" },
  { label: "Check Caption", href: "/clickup/task-comments" },
  { label: "Schedule", href: "/meta/scheduling" },
  { label: "Update ClickUp", href: "/clickup/statuses" },
  { label: "Monitor", href: "/clickup/om-monitoring" },
];

export function FloatingQuickAction() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full border border-blue-100 bg-white p-3 shadow-lg transition-colors hover:bg-blue-50 dark:border-navy-700 dark:bg-navy-900 dark:hover:bg-navy-800"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {panelOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="w-64 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl dark:border-navy-700 dark:bg-navy-900"
          >
            <div className="border-b border-blue-50 bg-blue-50/50 px-4 py-3 dark:border-navy-800 dark:bg-navy-800/50">
              <p className="text-sm font-semibold text-navy-900 dark:text-blue-50">OM Quick Reference</p>
            </div>
            <ul className="p-2">
              {quickActions.map((action) => (
                <li key={action.label}>
                  <Link
                    href={action.href}
                    onClick={() => setPanelOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-navy-800 transition-colors hover:bg-blue-50 dark:text-blue-100 dark:hover:bg-navy-800"
                  >
                    {action.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-blue-50 p-2 dark:border-navy-800">
              <Link
                href="/quick-reference/cheat-sheet"
                onClick={() => setPanelOpen(false)}
                className="block rounded-lg px-3 py-2 text-center text-sm font-medium text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-navy-800"
              >
                Full Cheat Sheet →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setPanelOpen(!panelOpen)}
        className={cn(
          "flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-400",
          panelOpen && "ring-2 ring-blue-300 ring-offset-2 dark:ring-blue-600 dark:ring-offset-navy-950",
        )}
        aria-expanded={panelOpen}
        aria-label="OM Quick Reference"
      >
        <Zap className="h-4 w-4" />
        <span className="hidden sm:inline">OM Quick Reference</span>
      </button>
    </div>
  );
}
