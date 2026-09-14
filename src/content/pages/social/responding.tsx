"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ScenarioCard } from "@/components/ui/ScenarioCard";
import { responseScenarios } from "@/content/shared";

const scenarioOptions = [
  [
    { label: "Reply immediately with your best guess" },
    { label: "Verify first. Ask the appropriate Head/Execomm if necessary.", correct: true },
    { label: "Ignore the message until someone else responds" },
  ],
  [
    { label: "Argue back publicly to defend the organization" },
    { label: "Delete the comment without telling anyone" },
    { label: "Remain professional. Do not argue publicly. Escalate if necessary.", correct: true },
  ],
  [
    { label: "Share what you think is correct based on context" },
    { label: "Do not provide unverified information. Consult the appropriate authority.", correct: true },
    { label: "Direct them to Google for answers" },
  ],
  [
    { label: "Quickly edit or delete without informing anyone" },
    { label: "Stop → Verify → Inform OM Head → Correct according to the proper process.", correct: true },
    { label: "Hope nobody noticed and move on" },
  ],
];

export default function RespondingPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Social Media", href: "/social/facebook" },
        { label: "Responding to Users" },
      ]}
    >
      <PageHeader
        title="Responding to Users"
        description="How to respond professionally to comments and messages."
      />
      <Prose>
        <p>When responding to users, OMs should:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Be polite and clear</li>
          <li>Use confirmed information</li>
          <li>Keep responses professional</li>
          <li>Avoid arguments</li>
          <li>Avoid making unofficial statements</li>
        </ul>
      </Prose>

      <Callout variant="principle" title="Do Not Guess" className="mt-8" label="official">
        For uncertain or sensitive questions: <strong>VERIFY → ASK THE APPROPRIATE PERSON → RESPOND</strong>
      </Callout>

      <div className="mt-8">
        <SectionLabel>Response Scenarios</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          {responseScenarios.map((s, i) => (
            <ScenarioCard
              key={s.scenario}
              number={i + 1}
              scenario={s.scenario}
              correctAction={s.action}
              options={scenarioOptions[i]}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
