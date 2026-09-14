"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { Workflow } from "@/components/ui/Workflow";
import { followUpTimeline } from "@/content/shared";

const timelineSteps = followUpTimeline.map((item, i) => ({
  id: `step-${i}`,
  label: item.when,
  description: item.action,
}));

export default function FollowUpsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Task Designation", href: "/task-designation/assigning-oms" },
        { label: "Follow-ups" },
      ]}
    >
      <PageHeader
        title="Follow Up Early"
        description="Proactive follow-up timeline for OMs."
      />
      <Prose>
        <p>
          OMs should not wait until the deadline to discover that a task is unfinished. The timeline
          below shows examples of a healthy workflow.
        </p>
      </Prose>

      <div className="my-8">
        <SectionLabel>Follow-Up Timeline</SectionLabel>
        <Workflow steps={timelineSteps} direction="vertical" />
      </div>

      <Callout variant="info" className="mt-8" label="example">
        These are examples of a healthy workflow and should not be presented as rigid official
        deadlines unless the organization formally adopts them.
      </Callout>
    </PageShell>
  );
}
