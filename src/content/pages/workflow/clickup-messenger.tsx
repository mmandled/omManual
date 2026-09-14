import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { CopyButton } from "@/components/ui/CopyButton";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const gcExamples = [
  {
    situation: "Task has no assignee",
    message: "@[Head] — This task has no assignee. Could someone be assigned? [Task link]",
  },
  {
    situation: "Output is overdue",
    message: "@[Member] — Checking in on this task. Is the output on track for the due date? [Task link]",
  },
  {
    situation: "Status not updated",
    message: "@[Member] — The output looks ready. Could you update the status to Ready to Publish? [Task link]",
  },
];

export default function ClickUpMessengerPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflow", href: "/workflow/overall" },
        { label: "ClickUp → Messenger Workflow" },
      ]}
    >
      <PageHeader
        title="ClickUp → Messenger Workflow"
        description="How OMs coordinate between ClickUp and the Production GC."
      />

      <Callout variant="principle" title="CLICKUP FIRST → MESSENGER SECOND" className="mb-8" label="official">
        Always check ClickUp first. Use Messenger (Production GC) only when coordination is needed —
        never as a substitute for updating ClickUp.
      </Callout>

      <Prose>
        <p>
          ClickUp holds the official record of every task. The Production GC (group chat) is for
          coordination and follow-ups when something in ClickUp needs attention.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>When to Use Each</SectionLabel>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="mb-3 font-semibold text-navy-900 dark:text-blue-50">ClickUp (First)</h3>
            <ul className="space-y-2 text-sm text-navy-700 dark:text-blue-200/80">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Check task status, assignees, due dates
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Review submitted outputs in comments
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Update status after publishing
              </li>
            </ul>
          </Card>
          <Card>
            <h3 className="mb-3 font-semibold text-navy-900 dark:text-blue-50">Production GC (Second)</h3>
            <ul className="space-y-2 text-sm text-navy-700 dark:text-blue-200/80">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Tag Head when assignee is missing
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Follow up on overdue tasks
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Coordinate urgent production issues
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <SectionLabel>SAS Bulletin Production Updates GC</SectionLabel>
        <Prose>
          <p>
            This GC is dedicated to production workflow updates and publication-related notifications.
            Use it to notify the next department/member when a task is ready for the next stage.
          </p>
        </Prose>

        <div className="mt-4 space-y-3">
          {[
            "Caption for Affinity Week – Pasadahan is ready for posting. @OMs",
            "August – Classes Start is ready for caption. @Writers",
            "Visual for Recruitment is ready for posting. @OMs",
          ].map((msg) => (
            <div key={msg} className="rounded-lg bg-blue-50 px-4 py-3 dark:bg-navy-800">
              <p className="font-mono text-xs text-navy-800 dark:text-blue-100">{msg}</p>
              <CopyButton text={msg} className="mt-2" />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-navy-900 dark:text-blue-50">Guidelines</h3>
          <ul className="space-y-2 text-sm text-navy-700 dark:text-blue-200/80">
            {[
              "Keep updates short.",
              "Keep messages related to production.",
              "Tag only the person/department that needs to act.",
              "Do not use the GC for general conversations.",
              "Revisions and discussions should happen through the appropriate channels.",
              "Do not send final files/outputs as a replacement for ClickUp submission.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-sm font-semibold text-navy-900 dark:text-blue-50">Follow-Up Examples</h3>
          {gcExamples.map((ex) => (
            <Card key={ex.situation}>
              <h4 className="mb-2 text-sm font-semibold text-navy-900 dark:text-blue-50">{ex.situation}</h4>
              <div className="rounded-lg bg-blue-50 px-4 py-3 dark:bg-navy-800">
                <p className="font-mono text-xs text-navy-800 dark:text-blue-100">{ex.message}</p>
                <CopyButton text={ex.message} className="mt-2" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Callout variant="info" className="mt-8" label="example">
        Production GC link: [To be added]
      </Callout>
    </PageShell>
  );
}
