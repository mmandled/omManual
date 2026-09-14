import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

export default function AssigneesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "Assignees" },
      ]}
    >
      <PageHeader
        title="Assignees"
        description="How members are assigned to tasks and what to do when assignees are missing."
      />
      <Prose>
        <p>
          The assignee field indicates who is responsible for producing the content. Every active task
          should have an assignee. If it doesn&apos;t, that needs to be resolved before production can
          proceed.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Assignee vs. Assigned OM</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Assignee</strong> — the department member who creates the content
            </li>
            <li>
              <strong>Assigned OM</strong> — the Online Manager who publishes the content
            </li>
          </ul>
          <p>Both fields should be filled before a task reaches Ready to Publish.</p>
        </Prose>
      </div>

      <Callout variant="success" title="Good Practice" className="mt-8" label="recommended">
        If a task has no assignee, tag the respective Head in the Production GC. Include the task link
        so they can assign someone quickly.
      </Callout>

      <div className="mt-8">
        <SectionLabel>Example Production GC Message</SectionLabel>
        <p className="rounded-lg bg-blue-50 px-4 py-3 font-mono text-xs text-navy-800 dark:bg-navy-800 dark:text-blue-100">
          @[Head] — This task has no assignee. Could someone be assigned? [Task link]
        </p>
      </div>
    </PageShell>
  );
}
