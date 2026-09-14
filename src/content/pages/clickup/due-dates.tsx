import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/Badge";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

export default function DueDatesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "Due Dates" },
      ]}
    >
      <PageHeader
        title="Due Dates"
        description="Target publishing dates and how OMs should monitor deadlines."
      />
      <Prose>
        <p>
          Due dates represent the target publishing date for each task. OMs should regularly check for
          tasks approaching or past their due dates.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Deadline Badges</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <Badge variant="warning" className="mb-3">Due Soon</Badge>
            <p className="text-sm text-navy-700 dark:text-blue-200/80">
              Task is approaching its due date. Monitor progress and follow up if needed.
            </p>
          </Card>
          <Card>
            <Badge variant="danger" className="mb-3">Due Today</Badge>
            <p className="text-sm text-navy-700 dark:text-blue-200/80">
              Task is due today. Confirm readiness — output submitted, status updated, OM assigned.
            </p>
          </Card>
          <Card>
            <Badge variant="danger" className="mb-3">Overdue</Badge>
            <p className="text-sm text-navy-700 dark:text-blue-200/80">
              Task has passed its due date. Follow up immediately with the assignee or tag Head in
              Production GC.
            </p>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <SectionLabel>OM Monitoring Actions</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Review due dates during regular ClickUp checks</li>
            <li>Follow up proactively — don&apos;t wait until the due date</li>
            <li>Do not publish if the task is not Ready to Publish, regardless of due date pressure</li>
          </ul>
        </Prose>
      </div>

      <Callout variant="info" className="mt-8" label="recommended">
        Use ClickUp filters to view tasks by due date — sort by Due Soon or Overdue for quick monitoring.
      </Callout>
    </PageShell>
  );
}
