"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { Workflow } from "@/components/ui/Workflow";
import { clickupStatusFlow } from "@/content/shared";

const statusSteps = clickupStatusFlow.map((s, i) => ({
  id: `status-${i}`,
  label: s.label,
  description: s.description,
}));

export default function StatusesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "Statuses" },
      ]}
    >
      <PageHeader
        title="Statuses"
        description="The task status flow from creation to published."
      />
      <Prose>
        <p>
          Task status tells you where content is in the production pipeline. Click each status below to
          see what it means.
        </p>
      </Prose>

      <div className="my-8">
        <SectionLabel>Status Flow</SectionLabel>
        <Workflow steps={statusSteps} direction="horizontal" />
      </div>

      <Callout variant="info" className="mb-8" label="example">
        Actual statuses should follow the organization&apos;s ClickUp setup. The flow above illustrates
        a typical production pipeline — confirm your workspace configuration with the OM Head.
      </Callout>

      <Callout variant="principle" title="Only Publish at Ready to Publish" className="mt-8" label="official">
        OMs should only schedule or publish content when the task status is Ready to Publish and the
        final output is submitted in the task comment.
      </Callout>
    </PageShell>
  );
}
