import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const responsibilities = [
  "Monitor comments on published posts",
  "Respond to direct messages",
  "Check notifications regularly",
  "Maintain a professional tone in all interactions",
  "Escalate sensitive or difficult situations",
];

export default function CommunityManagementPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Social Media", href: "/social/facebook" },
        { label: "Community Management" },
      ]}
    >
      <PageHeader
        title="Community Management"
        description="Managing the SAS Bulletin online community as an OM."
      />
      <Prose>
        <p>
          The OM role is not only posting. OMs also help manage the organization&apos;s online
          presence by monitoring and responding to audience interactions professionally.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>OM Responsibilities</SectionLabel>
        <div className="grid gap-3 sm:grid-cols-2">
          {responsibilities.map((item) => (
            <Card key={item}>
              <p className="text-sm text-navy-800 dark:text-blue-100/90">{item}</p>
            </Card>
          ))}
        </div>
      </div>

      <Callout variant="principle" title="VERIFY → ASK → RESPOND" className="mt-8" label="official">
        Always verify information before responding. If you don&apos;t know the answer, ask the
        appropriate Head or Execomm — do not guess.
      </Callout>
    </PageShell>
  );
}
