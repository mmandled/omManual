import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";

export default function ContentPlannerPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Meta Business Suite", href: "/meta/overview" },
        { label: "Content Planner" },
      ]}
    >
      <PageHeader
        title="Content Planner"
        description="View and manage your scheduled content calendar."
      />
      <Prose>
        <p>
          The Content Planner in Meta Business Suite shows all scheduled posts across Facebook and
          Instagram. Use it to verify scheduled content, check dates and times, and avoid scheduling
          conflicts.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>What to Check</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Scheduled posts appear on the correct date and time</li>
            <li>The correct account is selected for each post</li>
            <li>No duplicate posts are scheduled for the same content</li>
            <li>Preview looks correct before the publish date</li>
          </ul>
        </Prose>
      </div>

      <div className="mt-8">
        <ScreenshotPlaceholder label="[Insert current Meta Business Suite screenshot here]" />
      </div>

      <Callout variant="info" className="mt-8" label="recommended">
        After scheduling, always confirm the post appears in the Content Planner before updating
        ClickUp.
      </Callout>
    </PageShell>
  );
}
