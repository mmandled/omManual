import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/Badge";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

export default function ClickUpOverviewPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "ClickUp Overview" },
      ]}
    >
      <PageHeader
        title="ClickUp Overview"
        description="ClickUp is the source of truth for all SAS Bulletin production tasks."
      />

      <Callout variant="principle" title="ClickUp is the Source of Truth" className="mb-8" label="official">
        All task information — assignees, due dates, statuses, outputs, and comments — lives in ClickUp.
        Always verify here before taking action.
      </Callout>

      <Prose>
        <p>
          Every piece of content has a corresponding task in ClickUp. OMs use ClickUp to monitor
          production, verify readiness, and update statuses after publishing.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Sample Task View</SectionLabel>
        <Card className="mt-4">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-navy-900 dark:text-blue-50">
              [Sample] Event Announcement Post
            </h3>
            <Badge variant="success">READY TO PUBLISH</Badge>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Assignee</span>
              <p className="text-sm text-navy-800 dark:text-blue-100">[Department Member]</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Assigned OM</span>
              <p className="text-sm text-navy-800 dark:text-blue-100">[OM Name]</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Due Date</span>
              <p className="text-sm text-navy-800 dark:text-blue-100">[Publishing Date]</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Priority</span>
              <p className="text-sm text-navy-800 dark:text-blue-100">Normal</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Status</span>
              <p className="text-sm text-navy-800 dark:text-blue-100">Ready to Publish</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Platform</span>
              <p className="text-sm text-navy-800 dark:text-blue-100">Facebook / Instagram</p>
            </div>
          </div>
          <div className="mt-4 border-t border-blue-100 pt-4 dark:border-navy-700">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Latest Comment</span>
            <p className="mt-1 text-sm text-navy-700 dark:text-blue-200/80">
              Output submitted — final graphic and approved caption attached.
            </p>
          </div>
        </Card>
      </div>

      <Callout variant="info" className="mt-8" label="example">
        ClickUp workspace link: [To be added]
      </Callout>
    </PageShell>
  );
}
