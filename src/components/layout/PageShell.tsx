"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageShellProps {
  breadcrumbs: { label: string; href?: string }[];
  children: ReactNode;
  lastUpdated?: string;
}

export function PageShell({ breadcrumbs, children, lastUpdated = "September 2026" }: PageShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-4xl"
    >
      <Breadcrumb items={breadcrumbs} />
      {children}
      <footer className="mt-12 border-t border-blue-100 pt-6 text-xs text-navy-500 dark:border-navy-800 dark:text-blue-300/50">
        Last updated: {lastUpdated} · SAS Bulletin Online Management · AY 2026–2027
      </footer>
    </motion.div>
  );
}
