import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const signals = [
  { title: "Reach & Impressions", description: "How many people saw your content." },
  { title: "Engagement Rate", description: "Reactions, comments, shares relative to reach." },
  { title: "Follower Growth", description: "Net change in followers over the month." },
  { title: "Top Posts", description: "Which content performed best and why." },
  { title: "Underperforming Posts", description: "Which content did not perform as expected." },
  { title: "Content Type Mix", description: "How different formats (Reels, carousels, etc.) compare." },
];

export default function WhatToMonitorPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Analytics", href: "/analytics/monthly" },
        { label: "What to Monitor" },
      ]}
    >
      <PageHeader
        title="What to Monitor"
        description="Metrics and signals to watch during monthly analytics review."
      />
      <Prose>
        <p>
          During the monthly review, focus on trends and patterns rather than daily fluctuations.
          Look for what worked, what didn&apos;t, and what to try next month.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Key Signals</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signals.map((signal) => (
            <Card key={signal.title}>
              <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{signal.title}</h3>
              <p className="text-sm text-navy-700 dark:text-blue-200/80">{signal.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
