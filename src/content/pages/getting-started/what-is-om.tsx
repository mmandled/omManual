import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

export default function WhatIsOmPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Getting Started", href: "/getting-started/welcome" },
        { label: "What is an Online Manager?" },
      ]}
    >
      <PageHeader
        title="What is an Online Manager?"
        description="Online Managers help keep SAS Bulletin's online workflow organized — from production monitoring to publishing and community management."
      />
      <Prose>
        <p>
          An Online Manager (OM) is not simply someone who posts content. OMs play a coordination role
          in the organization&apos;s online workflow, ensuring that approved content reaches the right
          audience at the right time.
        </p>
        <p>
          OMs work closely with departments through ClickUp, coordinate via the Production GC when
          needed, and use Meta Business Suite for scheduling and publishing.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>What OMs Are</SectionLabel>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "Coordinators", desc: "They monitor tasks, deadlines, and statuses across departments." },
          { title: "Publishers", desc: "They schedule and publish approved content through Meta Business Suite." },
          { title: "Monitors", desc: "They watch comments, messages, and notifications after content goes live." },
          { title: "Organizers", desc: "They help keep the workflow structured so nothing falls through the cracks." },
        ].map((item) => (
          <Card key={item.title}>
            <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{item.title}</h3>
            <p className="text-sm text-navy-700 dark:text-blue-200/80">{item.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <SectionLabel>What OMs Are Not</SectionLabel>
      </div>
      <Prose>
        <ul className="list-disc space-y-2 pl-5">
          <li>Content creators — departments produce the content</li>
          <li>Decision-makers on editorial direction — follow the review and approval process</li>
          <li>Guessers — when unsure, ask first</li>
        </ul>
      </Prose>

      <Callout variant="principle" title="Core Principle" className="mt-8" label="official">
        ClickUp is the source of truth. Always verify task status, assignees, and outputs in ClickUp
        before taking action.
      </Callout>
    </PageShell>
  );
}
