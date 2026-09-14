import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const steps = [
  "Update the task status to reflect current progress",
  "Write a brief comment describing what was completed",
  "Attach or upload the required document or output file",
  "Confirm the output matches the task requirements",
  "Post a short notification in the Production GC if the next stage needs to act",
];

export default function SubmittingOutputsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "Submitting Outputs" },
      ]}
    >
      <PageHeader
        title="Submitting Outputs"
        description="How department members submit finished work through ClickUp task comments."
      />
      <Prose>
        <p>
          Task comments are where outputs and relevant task information should be submitted. Final
          files should always be submitted in ClickUp — not sent through Messenger as a replacement.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>How to Submit</SectionLabel>
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

      <div className="mt-8">
        <SectionLabel>Example Comment</SectionLabel>
        <Card>
          <p className="text-sm text-navy-800 dark:text-blue-100">
            &ldquo;Caption completed and ready for review.&rdquo;
          </p>
          <p className="mt-2 text-xs text-navy-500 dark:text-blue-300/60">
            [Attached: final document or output file]
          </p>
        </Card>
      </div>

      <Callout variant="info" className="mt-8" label="recommended">
        After updating ClickUp, the member can post a short production notification in Messenger to
        notify the next department — but the official output must remain in the task comment.
      </Callout>
    </PageShell>
  );
}
