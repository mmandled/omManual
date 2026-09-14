import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const steps = [
  "Confirm the ClickUp task is Ready to Publish",
  "Verify the final output is submitted in the task comment",
  "Confirm the caption is final and approved",
  "Check the assigned OM for this post",
  "Schedule or publish via Meta Business Suite",
  "Confirm the post appears in the Content Planner",
  "Update ClickUp status to Published / Complete",
  "Monitor comments, messages, and notifications",
];

export default function PublishingWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflow", href: "/workflow/overall" },
        { label: "Publishing Workflow" },
      ]}
    >
      <PageHeader
        title="Publishing Workflow"
        description="From approved content in ClickUp to a live post on Meta."
      />
      <Prose>
        <p>
          Publishing only happens after content is fully approved and the assigned OM has confirmed
          everything is ready. Never skip the verification steps.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Publishing Steps</SectionLabel>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-sm text-navy-800 dark:text-blue-100/90">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white dark:bg-blue-500">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <Callout variant="principle" title="One Post = One Assigned OM" className="mt-8" label="official">
        Each post should have exactly one assigned OM responsible for publishing. Do not duplicate
        publishing efforts — coordinate if two OMs are assigned to the same task.
      </Callout>
    </PageShell>
  );
}
