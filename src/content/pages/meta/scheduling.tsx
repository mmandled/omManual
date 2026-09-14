"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Checklist } from "@/components/ui/Checklist";
import { PageHeader, SectionLabel } from "@/components/ui/PageHeader";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import { afterSchedulingChecklist, beforeSchedulingChecklist } from "@/content/shared";

const scheduleSteps = [
  "Open Meta Business Suite.",
  "Select the correct account.",
  "Create the post.",
  "Add the approved media.",
  "Add the caption.",
  "Check the preview.",
  "Confirm date and time.",
  "Schedule.",
];

export default function SchedulingPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Meta Business Suite", href: "/meta/overview" },
        { label: "Scheduling Posts" },
      ]}
    >
      <PageHeader
        title="Scheduling Posts"
        description="Step-by-step guide to scheduling approved content."
      />

      <Checklist id="before-scheduling" title="Before Scheduling" items={beforeSchedulingChecklist} />

      <div className="mt-8">
        <SectionLabel>Schedule</SectionLabel>
        <ol className="space-y-3">
          {scheduleSteps.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-sm text-navy-800 dark:text-blue-100/90">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white dark:bg-blue-500">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8">
        <ScreenshotPlaceholder label="[Insert current Meta Business Suite screenshot here]" />
      </div>

      <div className="mt-8">
        <Checklist id="after-scheduling" title="After Scheduling" items={afterSchedulingChecklist} />
      </div>

      <Callout variant="warning" className="mt-8" label="official">
        Do not schedule if the output or caption is not final. Wait for the proper review process to
        complete.
      </Callout>
    </PageShell>
  );
}
