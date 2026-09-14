import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

export default function TeamStructurePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Getting Started", href: "/getting-started/welcome" },
        { label: "OM Team Structure" },
      ]}
    >
      <PageHeader
        title="OM Team Structure"
        description="How the Online Manager team is organized within SAS Bulletin."
      />
      <Prose>
        <p>
          The OM team works under the OM Head and coordinates with department Heads and Execomm as
          needed. Each OM may be assigned specific publishing tasks based on availability and workload.
        </p>
      </Prose>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Card>
          <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">OM Head</h3>
          <p className="text-sm text-navy-700 dark:text-blue-200/80">
            Oversees the OM team, handles escalations, and coordinates publishing assignments.
          </p>
          <p className="mt-2 text-xs text-navy-500 dark:text-blue-300/60">[To be added]</p>
        </Card>
        <Card>
          <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">Online Managers</h3>
          <p className="text-sm text-navy-700 dark:text-blue-200/80">
            Handle assigned publishing tasks, monitor ClickUp, and manage community interactions.
          </p>
          <p className="mt-2 text-xs text-navy-500 dark:text-blue-300/60">[To be added]</p>
        </Card>
        <Card>
          <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">Department Heads</h3>
          <p className="text-sm text-navy-700 dark:text-blue-200/80">
            Responsible for production within their department. Tag in Production GC when coordination
            is needed.
          </p>
          <p className="mt-2 text-xs text-navy-500 dark:text-blue-300/60">[To be added]</p>
        </Card>
      </div>

      <div className="mt-8">
        <SectionLabel>Reporting & Escalation</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Day-to-day OM questions → OM Head</li>
            <li>Production or assignee issues → Tag respective Head in Production GC</li>
            <li>Publishing mistakes → Stop, verify, inform OM Head</li>
            <li>Unclear editorial decisions → Ask appropriate Head/Execomm</li>
          </ul>
        </Prose>
      </div>

      <Callout variant="info" className="mt-8" label="example">
        Team roster and specific role assignments for AY 2026–2027: [To be added]
      </Callout>
    </PageShell>
  );
}
