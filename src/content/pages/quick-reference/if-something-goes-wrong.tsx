import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { errorRecoveryFlow } from "@/content/shared";

export default function IfSomethingGoesWrongPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Quick Reference", href: "/quick-reference/cheat-sheet" },
        { label: "If Something Goes Wrong" },
      ]}
    >
      <PageHeader
        title="If Something Goes Wrong"
        description="Follow this process when something goes wrong."
      />

      <div className="flex flex-col items-center gap-2 rounded-2xl border border-blue-100 bg-white p-8 card-shadow dark:border-navy-700 dark:bg-navy-900/80">
        {errorRecoveryFlow.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <span className="rounded-xl bg-blue-600 px-6 py-3 text-base font-bold text-white dark:bg-blue-500">
              {step}
            </span>
            {i < errorRecoveryFlow.length - 1 && (
              <span className="py-2 text-xl text-blue-300 dark:text-navy-600" aria-hidden>
                ↓
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <SectionLabel>Common Situations</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Published incorrect content → Stop, inform OM Head, follow correction process</li>
            <li>Scheduled wrong date/time → Update in Meta Business Suite, notify team</li>
            <li>Wrong caption or media → Do not leave live — escalate immediately</li>
            <li>Duplicate post published → Coordinate with OM Head to resolve</li>
          </ul>
        </Prose>
      </div>

      <Callout variant="principle" className="mt-8" label="official">
        Document what happened in ClickUp after the issue is resolved.
      </Callout>
    </PageShell>
  );
}
