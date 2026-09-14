import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";

const areas = [
  { title: "Published Posts", description: "View all live posts on the SAS Bulletin Facebook page." },
  { title: "Scheduled Posts", description: "Check upcoming scheduled content in Meta Business Suite." },
  { title: "Comments", description: "Monitor and respond to comments on posts." },
  { title: "Notifications", description: "Stay updated on page activity and alerts." },
  { title: "Messages", description: "Handle direct messages from users." },
  { title: "Insights", description: "Review basic page performance metrics." },
];

export default function FacebookPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Social Media", href: "/social/facebook" },
        { label: "Facebook" },
      ]}
    >
      <PageHeader
        title="Facebook"
        description="Beginner-friendly guide to managing SAS Bulletin on Facebook."
      />
      <Prose>
        <p>
          Most Facebook publishing and management happens through Meta Business Suite. Use this guide
          to know where to find key features.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Where to Find</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Card key={area.title}>
              <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{area.title}</h3>
              <p className="text-sm text-navy-700 dark:text-blue-200/80">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <ScreenshotPlaceholder label="[Insert current Meta Business Suite screenshot here]" />
      </div>
    </PageShell>
  );
}
