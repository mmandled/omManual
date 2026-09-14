import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";

const areas = [
  { title: "Feed Posts", description: "Standard image and carousel posts on the Instagram feed." },
  { title: "Reels", description: "Short-form video content published as Reels." },
  { title: "Captions", description: "Post text, hashtags, and mentions included with each post." },
  { title: "Mentions", description: "Tags and @mentions in posts and stories." },
  { title: "Comments", description: "User comments on published posts." },
  { title: "Direct Messages", description: "Private messages from users." },
  { title: "Notifications", description: "Activity alerts for the Instagram account." },
  { title: "Insights", description: "Performance metrics for posts and the account." },
];

export default function InstagramPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Social Media", href: "/social/facebook" },
        { label: "Instagram" },
      ]}
    >
      <PageHeader
        title="Instagram"
        description="Guide to managing SAS Bulletin on Instagram."
      />
      <Prose>
        <p>
          Instagram publishing is managed through Meta Business Suite alongside Facebook. Familiarize
          yourself with the different content types and where to find each feature.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Key Areas</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <Card key={area.title}>
              <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{area.title}</h3>
              <p className="text-sm text-navy-700 dark:text-blue-200/80">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <ScreenshotPlaceholder label="[Insert current Meta Business Suite screenshot here]" />
      </div>
    </PageShell>
  );
}
