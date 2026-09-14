import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const stages = [
  {
    title: "Task Creation",
    description: "Content is planned and tasks are created in ClickUp with assignees, due dates, and requirements.",
  },
  {
    title: "Production",
    description: "Assigned members from each department create the required content according to task specifications.",
  },
  {
    title: "Review",
    description: "Content goes through the required review process before it is approved for publishing.",
  },
  {
    title: "Ready to Publish",
    description: "The member updates the ClickUp status and submits the final output in the task comment.",
  },
];

export default function ProductionWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflow", href: "/workflow/overall" },
        { label: "Production Workflow" },
      ]}
    >
      <PageHeader
        title="Production Workflow"
        description="How content moves through departments from planning to ready-to-publish."
      />
      <Prose>
        <p>
          Production happens in ClickUp. OMs monitor this stage — they do not create the content, but
          they track progress and follow up when tasks fall behind.
        </p>
      </Prose>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {stages.map((stage, i) => (
          <Card key={stage.title}>
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-blue-500">
              Stage {i + 1}
            </span>
            <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{stage.title}</h3>
            <p className="text-sm text-navy-700 dark:text-blue-200/80">{stage.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <SectionLabel>OM Role During Production</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Monitor task statuses in ClickUp regularly</li>
            <li>Check due dates — flag tasks that are Due Soon, Due Today, or Overdue</li>
            <li>Follow up with responsible members when progress is behind</li>
            <li>Tag the respective Head in Production GC if a task has no assignee</li>
            <li>Do not publish until status is Ready to Publish and output is submitted</li>
          </ul>
        </Prose>
      </div>

      <Callout variant="warning" title="Do Not Publish Early" className="mt-8" label="official">
        If the output isn&apos;t ready or the caption isn&apos;t approved, do not publish. Wait for
        the proper process to complete.
      </Callout>
    </PageShell>
  );
}
