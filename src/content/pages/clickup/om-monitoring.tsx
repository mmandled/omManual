import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const monitoringChecks = [
  {
    title: "Task Status",
    description: "Are tasks moving through the expected status flow? Flag tasks stuck in one stage.",
  },
  {
    title: "Due Dates",
    description: "Check for Due Soon, Due Today, and Overdue tasks. Follow up proactively.",
  },
  {
    title: "Assignees",
    description: "Every active task should have an assignee. Tag Head in Production GC if missing.",
  },
  {
    title: "Submitted Outputs",
    description: "Verify final outputs and captions are submitted in task comments before publishing.",
  },
  {
    title: "Ready to Publish",
    description: "Confirm tasks marked Ready to Publish have complete, approved content.",
  },
];

export default function OmMonitoringPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "OM Monitoring" },
      ]}
    >
      <PageHeader
        title="OM Monitoring"
        description="How Online Managers monitor ClickUp to keep production on track."
      />
      <Prose>
        <p>
          OMs regularly check ClickUp to monitor production progress. This is not a one-time check —
          it should be part of your regular workflow, especially as publishing dates approach.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>What to Monitor</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          {monitoringChecks.map((check) => (
            <Card key={check.title}>
              <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{check.title}</h3>
              <p className="text-sm text-navy-700 dark:text-blue-200/80">{check.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <Callout variant="principle" title="Follow Up Early" className="mt-8" label="recommended">
        Do not wait until the deadline to discover that a task is unfinished. Monitor progress days
        before the due date and follow up when needed.
      </Callout>
    </PageShell>
  );
}
