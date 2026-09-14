"use client";

import { ProgressTracker } from "@/components/ui/ProgressTracker";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { Workflow } from "@/components/ui/Workflow";
import { needCards, omWorkflowSteps } from "@/content/shared";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  ClipboardList,
  HelpCircle,
  MessageSquare,
  Workflow as WorkflowIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  clipboard: ClipboardList,
  calendar: Calendar,
  workflow: WorkflowIcon,
  message: MessageSquare,
  chart: BarChart3,
  help: HelpCircle,
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/80 to-blue-100/40 p-8 md:p-12 dark:border-navy-700 dark:from-navy-900 dark:via-navy-900 dark:to-navy-800">
        <div className="relative z-10 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400"
          >
            SAS BULLETIN
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-3 text-4xl font-bold tracking-tight text-navy-900 md:text-5xl dark:text-blue-50"
          >
            Online Managing Editor Manual
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400"
          >
            AY 2026–2027
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8 text-lg leading-relaxed text-navy-700/90 dark:text-blue-200/80"
          >
            Everything you need to manage production, publishing, communication, and social media for
            SAS Bulletin.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <Link href="/getting-started/welcome">
              <Button size="lg">Start Here</Button>
            </Link>
            <Link href="/quick-reference/cheat-sheet">
              <Button size="lg" variant="outline">
                OM Quick Reference
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Abstract animated visual */}
        <div className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-48 w-48"
          >
            <div className="absolute inset-0 rounded-2xl bg-blue-200/40 dark:bg-blue-500/10" />
            <div className="absolute left-4 top-4 h-16 w-24 rounded-lg bg-white shadow-lg dark:bg-navy-800" />
            <div className="absolute bottom-6 right-4 h-12 w-20 rounded-lg bg-blue-500/80" />
            <div className="absolute left-8 top-20 h-8 w-8 rounded-full bg-blue-400/60" />
            <div className="absolute bottom-12 left-12 h-6 w-6 rounded-full bg-cyan-400/50" />
          </motion.div>
        </div>
      </section>

      {/* What do you need? */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-navy-900 dark:text-blue-50">What do you need?</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {needCards.map((card, i) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] ?? HelpCircle;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link href={card.href}>
                  <Card hover className="group h-full">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-navy-800">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="mb-1 font-semibold text-navy-900 dark:text-blue-50">{card.title}</h3>
                    <p className="mb-3 text-sm text-navy-600 dark:text-blue-200/70">{card.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400">
                      Go <ArrowRight className="h-4 w-4" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quick OM Workflow */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-navy-900 dark:text-blue-50">Quick OM Workflow</h2>
        <Workflow steps={omWorkflowSteps} direction="horizontal" />
      </section>

      {/* ClickUp First principle */}
      <section className="mt-12">
        <Callout variant="principle" title="CLICKUP FIRST → MESSENGER SECOND" label="official">
          <p className="mb-3">ClickUp is the main source of truth for production.</p>
          <p className="mb-2 font-medium">When a member finishes a task:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Update the ClickUp status.</li>
            <li>Submit the output in the task comment.</li>
            <li>Post a short update in the Production GC.</li>
            <li>Tag the appropriate person/department if action is needed.</li>
          </ol>
          <p className="mt-3">
            Messenger is primarily used for quick production notifications and coordination. Do not make
            Messenger replace ClickUp.
          </p>
        </Callout>
      </section>

      {/* Progress */}
      <section className="mt-12">
        <ProgressTracker />
      </section>

      {/* Closing */}
      <section className="mt-12 rounded-3xl border border-blue-100 bg-white p-8 text-center dark:border-navy-700 dark:bg-navy-900/80">
        <h2 className="mb-3 text-2xl font-bold text-navy-900 dark:text-blue-50">KEEP THE WORKFLOW MOVING.</h2>
        <p className="mx-auto mb-6 max-w-xl text-navy-700 dark:text-blue-200/80">
          Good online management is not about being the fastest person to publish. It&apos;s about making
          sure the right content reaches the right audience, at the right time, through an organized
          workflow.
        </p>
        <Link href="/quick-reference/cheat-sheet">
          <Button variant="secondary">
            Open OM Quick Reference <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
