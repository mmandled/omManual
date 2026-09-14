import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const taskFields = [
  { field: "Task Name", description: "Identifies the content — usually describes the post or event." },
  { field: "Assignee", description: "The department member responsible for producing the content." },
  { field: "Assigned OM", description: "The OM responsible for publishing this post." },
  { field: "Due Date", description: "Target publishing date — monitor for Due Soon, Today, and Overdue." },
  { field: "Priority", description: "Indicates urgency level for the task." },
  { field: "Status", description: "Current stage — from To Do through Published / Complete." },
  { field: "Description", description: "Requirements, specifications, and context for the content." },
  { field: "Comments", description: "Where outputs, captions, and updates are submitted." },
];

export default function TasksPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "Tasks" },
      ]}
    >
      <PageHeader
        title="Tasks"
        description="Understanding production tasks and their key fields in ClickUp."
      />
      <Prose>
        <p>
          Each task represents one piece of content moving through the production workflow. OMs should
          be familiar with every field on a task.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Key Task Fields</SectionLabel>
        <div className="grid gap-3">
          {taskFields.map((item) => (
            <Card key={item.field}>
              <h3 className="mb-1 font-semibold text-navy-900 dark:text-blue-50">{item.field}</h3>
              <p className="text-sm text-navy-700 dark:text-blue-200/80">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <Callout variant="info" title="Before Publishing" className="mt-8" label="official">
        Always open the full task and verify all fields — especially status, assignee, due date, and
        submitted output — before scheduling or publishing.
      </Callout>
    </PageShell>
  );
}
