import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const escalateWhen = [
  "A user asks for sensitive or confidential information",
  "A user becomes angry or hostile in comments or messages",
  "You are unsure how to respond to a question",
  "A publishing mistake has occurred",
  "A situation may affect the organization's reputation",
  "Two OMs are attempting to publish the same content",
];

export default function EscalationPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Social Media", href: "/social/facebook" },
        { label: "Escalation" },
      ]}
    >
      <PageHeader
        title="Escalation"
        description="When and how to escalate issues as an OM."
      />
      <Prose>
        <p>
          Not every situation should be handled alone. Know when to escalate to the OM Head or the
          appropriate department authority.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>When to Escalate</SectionLabel>
        <div className="space-y-3">
          {escalateWhen.map((item) => (
            <Card key={item}>
              <p className="text-sm text-navy-800 dark:text-blue-100/90">{item}</p>
            </Card>
          ))}
        </div>
      </div>

      <Callout variant="principle" title="Escalation Process" className="mt-8" label="recommended">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Stop — do not take further action if unsure</li>
          <li>Inform the OM Head or appropriate authority</li>
          <li>Wait for guidance before responding or correcting</li>
          <li>Document what happened in ClickUp if applicable</li>
        </ol>
      </Callout>
    </PageShell>
  );
}
