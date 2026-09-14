import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { MetricCard } from "@/components/ui/MetricCard";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { BarChart3, Eye, Heart, MessageCircle, Share2, TrendingUp, Users, Video } from "lucide-react";

const metrics = [
  { label: "Reach", value: "—", icon: <Eye className="h-4 w-4 text-blue-500" /> },
  { label: "Engagement", value: "—", icon: <Heart className="h-4 w-4 text-blue-500" /> },
  { label: "Reactions", value: "—", icon: <Heart className="h-4 w-4 text-blue-500" /> },
  { label: "Comments", value: "—", icon: <MessageCircle className="h-4 w-4 text-blue-500" /> },
  { label: "Shares", value: "—", icon: <Share2 className="h-4 w-4 text-blue-500" /> },
  { label: "Video Views", value: "—", icon: <Video className="h-4 w-4 text-blue-500" /> },
  { label: "Link Clicks", value: "—", icon: <BarChart3 className="h-4 w-4 text-blue-500" /> },
  { label: "Follower Growth", value: "—", icon: <Users className="h-4 w-4 text-blue-500" /> },
  { label: "Top Posts", value: "—", icon: <TrendingUp className="h-4 w-4 text-blue-500" /> },
];

export default function KeyMetricsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Analytics", href: "/analytics/monthly" },
        { label: "Key Metrics" },
      ]}
    >
      <PageHeader
        title="Key Metrics"
        description="Important analytics metrics for OMs to understand."
      />
      <Prose>
        <p>
          These metrics are reviewed during the monthly analytics session. Do not treat target numbers
          as official unless formally adopted by the organization.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Metrics Overview</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} sample />
          ))}
        </div>
      </div>

      <Callout variant="info" className="mt-8" label="example">
        Official target numbers: [To be added]
      </Callout>
    </PageShell>
  );
}
