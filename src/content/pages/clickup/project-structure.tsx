import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

export default function ProjectStructurePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "Project Structure" },
      ]}
    >
      <PageHeader
        title="Project Structure"
        description="How ClickUp projects and lists are organized for SAS Bulletin production."
      />
      <Prose>
        <p>
          ClickUp is organized into projects and lists that mirror SAS Bulletin&apos;s departments and
          content types. Understanding this structure helps OMs find and monitor tasks efficiently.
        </p>
      </Prose>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">Workspace</h3>
          <p className="text-sm text-navy-700 dark:text-blue-200/80">
            The top-level container for all SAS Bulletin production work.
          </p>
          <p className="mt-2 text-xs text-navy-500 dark:text-blue-300/60">[To be added]</p>
        </Card>
        <Card>
          <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">Projects / Folders</h3>
          <p className="text-sm text-navy-700 dark:text-blue-200/80">
            Organized by department, content type, or publishing period.
          </p>
          <p className="mt-2 text-xs text-navy-500 dark:text-blue-300/60">[To be added]</p>
        </Card>
        <Card>
          <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">Lists</h3>
          <p className="text-sm text-navy-700 dark:text-blue-200/80">
            Collections of related tasks within a project — e.g., weekly posts, event content.
          </p>
          <p className="mt-2 text-xs text-navy-500 dark:text-blue-300/60">[To be added]</p>
        </Card>
        <Card>
          <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">Tasks</h3>
          <p className="text-sm text-navy-700 dark:text-blue-200/80">
            Individual content items with assignees, due dates, statuses, and outputs.
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <SectionLabel>Navigation Tips</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use the sidebar to browse projects and lists</li>
            <li>Filter tasks by status, assignee, or due date</li>
            <li>Use search to find specific tasks quickly</li>
            <li>Bookmark frequently used views for faster access</li>
          </ul>
        </Prose>
      </div>

      <Callout variant="info" className="mt-8" label="example">
        Detailed project/list map for AY 2026–2027: [To be added]
      </Callout>
    </PageShell>
  );
}
