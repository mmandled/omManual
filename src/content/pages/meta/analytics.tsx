import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import Link from "next/link";

export default function MetaAnalyticsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Meta Business Suite", href: "/meta/overview" },
        { label: "Basic Analytics" },
      ]}
    >
      <PageHeader
        title="Basic Analytics"
        description="Insights available in Meta Business Suite."
      />
      <Prose>
        <p>
          Meta Business Suite provides basic analytics and insights for Facebook and Instagram. These
          are useful for quick checks, but SAS Bulletin&apos;s formal analytics review happens monthly
          — see the Analytics section for details.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Available Insights</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Post reach and impressions</li>
            <li>Engagement (reactions, comments, shares)</li>
            <li>Follower count and growth</li>
            <li>Top-performing posts</li>
            <li>Audience demographics (where available)</li>
          </ul>
        </Prose>
      </div>

      <div className="mt-8">
        <ScreenshotPlaceholder label="[Insert current Meta Business Suite screenshot here]" />
      </div>

      <Callout variant="info" className="mt-8" label="recommended">
        Use Meta insights for quick post-performance checks. For formal monthly reviews, refer to the{" "}
        <Link href="/analytics/monthly" className="font-medium text-blue-600 underline dark:text-blue-400">
          Monthly Analytics
        </Link>{" "}
        section.
      </Callout>
    </PageShell>
  );
}
