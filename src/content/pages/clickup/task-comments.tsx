import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

export default function TaskCommentsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ClickUp", href: "/clickup/overview" },
        { label: "Task Comments" },
      ]}
    >
      <PageHeader
        title="Task Comments"
        description="How outputs, captions, and updates are submitted through task comments."
      />
      <Prose>
        <p>
          Task comments are where department members submit their finished work — graphics, videos,
          captions, and other outputs. OMs check comments to verify content is ready before publishing.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>What to Look For in Comments</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">Final Output</h3>
            <p className="text-sm text-navy-700 dark:text-blue-200/80">
              The approved graphic, video, or media file attached or linked in the comment.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">Approved Caption</h3>
            <p className="text-sm text-navy-700 dark:text-blue-200/80">
              The final caption text, reviewed and approved through the proper process.
            </p>
          </Card>
        </div>
      </div>

      <Callout variant="warning" title="Caption Not Ready?" className="mt-8" label="official">
        If the caption isn&apos;t ready or hasn&apos;t gone through review, do not publish. Wait for
        the proper caption/review process to complete.
      </Callout>

      <div className="mt-8">
        <SectionLabel>Example Comment</SectionLabel>
        <Card>
          <p className="mb-2 text-xs text-navy-500 dark:text-blue-300/60">[Department Member] — [Date]</p>
          <p className="text-sm text-navy-800 dark:text-blue-100">
            Output submitted. Final graphic attached. Caption approved below:
          </p>
          <p className="mt-2 rounded-lg bg-blue-50 px-3 py-2 text-sm italic text-navy-700 dark:bg-navy-800 dark:text-blue-200">
            [Approved caption text here]
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
