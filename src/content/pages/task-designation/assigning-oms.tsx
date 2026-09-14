"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { Workflow } from "@/components/ui/Workflow";

const assignmentFlow = [
  { id: "content", label: "CONTENT", description: "Approved content is ready in ClickUp with final output and caption." },
  { id: "assigned", label: "ASSIGNED OM", description: "One OM is assigned to handle the publishing task for this post." },
  { id: "schedule", label: "SCHEDULE", description: "The assigned OM schedules or prepares the post in Meta Business Suite." },
  { id: "publish", label: "PUBLISH", description: "The assigned OM publishes the content at the correct date and time." },
  { id: "monitor", label: "MONITOR", description: "The assigned OM monitors comments, messages, and notifications after publishing." },
];

export default function AssigningOmsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Task Designation", href: "/task-designation/assigning-oms" },
        { label: "Assigning OMs" },
      ]}
    >
      <PageHeader
        title="OM Task Designation"
        description="How publishing responsibilities are assigned to Online Managers."
      />
      <Prose>
        <p>
          Responsibilities should be clearly assigned so every post has one OM responsible for
          publishing and monitoring. This prevents duplicate work and confusion.
        </p>
      </Prose>

      <div className="my-8">
        <SectionLabel>Assignment Flow</SectionLabel>
        <Workflow steps={assignmentFlow} direction="vertical" />
      </div>

      <Callout variant="info" className="mt-8" label="example">
        Assignment process details: [To be added]
      </Callout>
    </PageShell>
  );
}
