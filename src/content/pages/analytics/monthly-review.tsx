"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/Badge";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { MetricCard } from "@/components/ui/MetricCard";
import { PageHeader, SectionLabel } from "@/components/ui/PageHeader";

const sampleReach = [
  { month: "Apr", value: 62 },
  { month: "May", value: 74 },
  { month: "Jun", value: 68 },
  { month: "Jul", value: 81 },
  { month: "Aug", value: 77 },
  { month: "Sep", value: 89 },
];

const sampleEngagement = [
  { month: "Apr", value: 45 },
  { month: "May", value: 52 },
  { month: "Jun", value: 48 },
  { month: "Jul", value: 58 },
  { month: "Aug", value: 55 },
  { month: "Sep", value: 63 },
];

const sampleFollowers = [
  { month: "Apr", value: 30 },
  { month: "May", value: 35 },
  { month: "Jun", value: 38 },
  { month: "Jul", value: 42 },
  { month: "Aug", value: 45 },
  { month: "Sep", value: 48 },
];

const topContent = [
  { title: "Event Announcement — Sample Post A", engagement: "4.2%" },
  { title: "Recruitment Visual — Sample Post B", engagement: "3.8%" },
  { title: "Affinity Week — Sample Post C", engagement: "3.1%" },
];

const contentTypes = [
  { type: "Reels", value: 72 },
  { type: "Carousels", value: 58 },
  { type: "Single Image", value: 45 },
  { type: "Links", value: 32 },
];

function BarChart({ data, label }: { data: { month: string; value: number }[]; label: string }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div>
      <p className="mb-4 text-sm font-medium text-navy-700 dark:text-blue-200">{label}</p>
      <div className="flex items-end gap-2" style={{ height: 120 }}>
        {data.map((d) => (
          <div key={d.month} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300"
              style={{ height: `${(d.value / max) * 100}%`, minHeight: 4 }}
              title={`${d.month}: ${d.value}`}
            />
            <span className="text-[10px] text-navy-500 dark:text-blue-300/60">{d.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MonthlyReviewPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Analytics", href: "/analytics/monthly" },
        { label: "Monthly Review" },
      ]}
    >
      <PageHeader
        title="Monthly Review"
        description="Analytics dashboard and review questions for OMs."
        badge="Sample Data"
      />

      <div className="mb-6 flex items-center gap-2">
        <Badge variant="warning">SAMPLE DATA</Badge>
        <span className="text-sm text-navy-600 dark:text-blue-300/70">
          All values below are placeholders — not actual SAS Bulletin statistics.
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Monthly Reach" value="12.4K" change="+8% vs last month" sample />
        <MetricCard label="Engagement Rate" value="4.1%" change="+0.3% vs last month" sample />
        <MetricCard label="New Followers" value="+186" change="Sample growth" sample />
        <MetricCard label="Total Posts" value="24" sample />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <BarChart data={sampleReach} label="Monthly Reach Trend" />
        </Card>
        <Card>
          <BarChart data={sampleEngagement} label="Engagement Trend" />
        </Card>
        <Card>
          <BarChart data={sampleFollowers} label="Follower Growth" />
        </Card>
        <Card>
          <SectionLabel>Content Type Performance</SectionLabel>
          <div className="mt-4 space-y-3">
            {contentTypes.map((ct) => (
              <div key={ct.type}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-navy-700 dark:text-blue-200">{ct.type}</span>
                  <span className="font-medium text-navy-900 dark:text-blue-50">{ct.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-blue-100 dark:bg-navy-800">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${ct.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <SectionLabel>Top Performing Content</SectionLabel>
        <div className="space-y-3">
          {topContent.map((post, i) => (
            <Card key={post.title}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600 dark:bg-navy-800 dark:text-blue-400">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-navy-900 dark:text-blue-50">{post.title}</span>
                </div>
                <span className="text-sm text-blue-600 dark:text-blue-400">{post.engagement}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <SectionLabel>What did we learn?</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { q: "What worked?", hint: "Identify top-performing content and why it resonated." },
            { q: "What didn't?", hint: "Review underperforming posts and possible reasons." },
            { q: "Which content performed best?", hint: "Compare formats, topics, and timing." },
            { q: "What should we improve next month?", hint: "Set actionable goals for the next cycle." },
          ].map((item) => (
            <Card key={item.q}>
              <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{item.q}</h3>
              <p className="text-sm text-navy-600 dark:text-blue-200/70">{item.hint}</p>
            </Card>
          ))}
        </div>
      </div>

      <Callout variant="info" className="mt-8" label="example">
        This dashboard uses sample data for demonstration. Replace with actual analytics during monthly
        reviews.
      </Callout>
    </PageShell>
  );
}
