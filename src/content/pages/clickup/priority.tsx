import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/Badge";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose } from "@/components/ui/PageHeader";

const priorities = [
  { level: "Urgent", variant: "danger" as const, description: "Requires immediate attention. Prioritize monitoring and follow-up." },
  { level: "High", variant: "warning" as const, description: "Important task — monitor closely and ensure timely completion." },
  { level: "Normal", variant: "default" as const, description: "Standard production task. Follow regular monitoring schedule." },
  { level: "Low", variant: "info" as const, description: "Lower urgency. Still monitor, but less time-sensitive." },
];

export default function PriorityPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "Priority" },
      ]}
    >
      <PageHeader
        title="Priority"
        description="Task priority levels and how OMs should respond to each."
      />
      <Prose>
        <p>
          Priority indicates how urgently a task needs attention. OMs should factor priority into their
          monitoring and follow-up decisions.
        </p>
      </Prose>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {priorities.map((p) => (
          <Card key={p.level}>
            <Badge variant={p.variant} className="mb-3">{p.level}</Badge>
            <p className="text-sm text-navy-700 dark:text-blue-200/80">{p.description}</p>
          </Card>
        ))}
      </div>

      <Callout variant="info" className="mt-8" label="recommended">
        When multiple tasks need attention, prioritize Urgent and High tasks first. Always verify status
        in ClickUp — priority alone does not mean a task is ready to publish.
      </Callout>
    </PageShell>
  );
}
