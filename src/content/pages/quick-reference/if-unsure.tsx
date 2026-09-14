import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose } from "@/components/ui/PageHeader";
import Link from "next/link";

const helpLinks = [
  { title: "What To Do If...", href: "/workflow/troubleshooting", description: "Common troubleshooting situations" },
  { title: "OM Cheat Sheet", href: "/quick-reference/cheat-sheet", description: "Quick-reference checklists" },
  { title: "ClickUp Overview", href: "/clickup/overview", description: "Verify tasks in ClickUp first" },
  { title: "Responding to Users", href: "/social/responding", description: "How to handle user interactions" },
];

export default function IfUnsurePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Quick Reference", href: "/quick-reference/cheat-sheet" },
        { label: "If You're Unsure" },
      ]}
    >
      <PageHeader
        title="If You're Unsure"
        description="Ask first. Don't guess."
      />

      <Callout variant="principle" title="ASK FIRST. DON'T GUESS." className="mb-8" label="official">
        If you don&apos;t know what to do, stop and ask the OM Head or the appropriate department
        Head before taking action.
      </Callout>

      <Prose>
        <p>Use these resources when you need guidance:</p>
      </Prose>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {helpLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Card hover className="h-full">
              <h3 className="mb-1 font-semibold text-navy-900 dark:text-blue-50">{link.title}</h3>
              <p className="text-sm text-navy-600 dark:text-blue-200/70">{link.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
