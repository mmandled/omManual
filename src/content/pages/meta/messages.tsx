import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";

export default function MetaMessagesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Meta Business Suite", href: "/meta/overview" },
        { label: "Messages" },
      ]}
    >
      <PageHeader
        title="Messages"
        description="Handling direct messages through Meta Business Suite."
      />
      <Prose>
        <p>
          OMs may receive direct messages from users on Facebook and Instagram. Handle these with the
          same professionalism as public comments.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Best Practices</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond clearly and professionally</li>
            <li>Do not share sensitive or unverified information</li>
            <li>Consult the appropriate authority for uncertain questions</li>
            <li>Escalate difficult or sensitive messages to the OM Head</li>
          </ul>
        </Prose>
      </div>

      <div className="mt-8">
        <ScreenshotPlaceholder label="[Insert current Meta Business Suite screenshot here]" />
      </div>

      <Callout variant="warning" className="mt-8" label="official">
        Do not provide unverified information in messages. When in doubt, verify first and ask the
        appropriate person before responding.
      </Callout>
    </PageShell>
  );
}
