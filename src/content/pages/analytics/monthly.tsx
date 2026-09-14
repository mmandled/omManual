import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { MetricCard } from "@/components/ui/MetricCard";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { analyticsMetrics } from "@/content/shared";
import Link from "next/link";

export default function MonthlyAnalyticsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Analytics", href: "/analytics/monthly" },
        { label: "Monthly Analytics" },
      ]}
    >
      <PageHeader
        title="Monthly Analytics"
        description="Social media performance is reviewed monthly — not as a daily publishing task."
      />
      <Prose>
        <p>
          Analytics help the team understand what content performs well and what to improve. OMs
          participate in the monthly review process rather than treating analytics as a daily
          responsibility.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>What to Review</SectionLabel>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {analyticsMetrics.map((metric) => (
            <MetricCard key={metric} label={metric} value="—" sample />
          ))}
        </div>
      </div>

      <Callout variant="info" className="mt-8" label="recommended">
        For a sample analytics dashboard and review questions, see{" "}
        <Link href="/analytics/monthly-review" className="font-medium text-blue-600 underline dark:text-blue-400">
          Monthly Review
        </Link>
        .
      </Callout>
    </PageShell>
  );
}
