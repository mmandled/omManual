import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";

const publishSteps = [
  "Confirm ClickUp task is Ready to Publish",
  "Verify final output and approved caption in task comments",
  "Open Meta Business Suite and select the correct account",
  "Create the post with approved media and caption",
  "Review the preview carefully",
  "Publish immediately or schedule for the correct date/time",
  "Confirm the post appears in Content Planner or on the page",
  "Update ClickUp status to Published / Complete",
  "Monitor comments, messages, and notifications",
];

export default function MetaPublishingPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Meta Business Suite", href: "/meta/overview" },
        { label: "Publishing Posts" },
      ]}
    >
      <PageHeader
        title="Publishing Posts"
        description="Publishing approved content through Meta Business Suite."
      />
      <Prose>
        <p>
          Publishing should only happen when content is fully approved and verified in ClickUp. The
          assigned OM handles the publishing task — avoid duplicate publishing efforts.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Publishing Steps</SectionLabel>
        <ol className="space-y-3">
          {publishSteps.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-sm text-navy-800 dark:text-blue-100/90">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white dark:bg-blue-500">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8">
        <ScreenshotPlaceholder label="[Insert current Meta Business Suite screenshot here]" />
      </div>

      <Callout variant="principle" title="ONE POST = ONE ASSIGNED OM" className="mt-8" label="official">
        The assigned OM handles the publishing task. Avoid racing to publish. If the assigned OM is
        unavailable, coordinate with the OM Head and reassign before proceeding.
      </Callout>
    </PageShell>
  );
}
