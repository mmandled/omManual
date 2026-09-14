"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Checklist } from "@/components/ui/Checklist";
import { PageHeader, SectionLabel } from "@/components/ui/PageHeader";
import {
  afterPublishingChecklist,
  beforePublishingChecklist,
  errorRecoveryFlow,
} from "@/content/shared";

export default function CheatSheetPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Quick Reference", href: "/quick-reference/cheat-sheet" },
        { label: "OM Cheat Sheet" },
      ]}
    >
      <PageHeader
        title="OM Cheat Sheet"
        description="Quick-reference checklists for everyday OM tasks."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Checklist id="cheat-before-publishing" title="Before Publishing" items={beforePublishingChecklist} />
        <Checklist id="cheat-after-publishing" title="After Publishing" items={afterPublishingChecklist} />
      </div>

      <div className="mt-8">
        <SectionLabel>If Something Is Wrong</SectionLabel>
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-white p-6 card-shadow dark:border-navy-700 dark:bg-navy-900/80">
          {errorRecoveryFlow.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white dark:bg-blue-500">
                {step}
              </span>
              {i < errorRecoveryFlow.length - 1 && (
                <span className="text-blue-300 dark:text-navy-600" aria-hidden>
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Callout variant="principle" title="ASK FIRST. DON'T GUESS." className="mt-8" label="official">
        When unsure, stop and ask the OM Head or appropriate authority before taking action.
      </Callout>
    </PageShell>
  );
}
