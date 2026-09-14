"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { Workflow } from "@/components/ui/Workflow";
import { omWorkflowSteps } from "@/content/shared";

export default function OverallWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflow", href: "/workflow/overall" },
        { label: "Overall Workflow" },
      ]}
    >
      <PageHeader
        title="Overall Workflow"
        description="The end-to-end flow from content planning to monthly analytics review."
      />
      <Prose>
        <p>
          Every piece of SAS Bulletin content follows this workflow. Click each step below to learn
          what happens at that stage.
        </p>
      </Prose>

      <div className="my-8">
        <SectionLabel>Production & Publishing Flow</SectionLabel>
        <Workflow steps={omWorkflowSteps} direction="horizontal" />
      </div>

      <Callout variant="principle" title="ClickUp First" className="mt-8" label="official">
        ClickUp is the source of truth at every stage. Verify task status, assignees, due dates, and
        outputs in ClickUp before scheduling or publishing.
      </Callout>
    </PageShell>
  );
}
