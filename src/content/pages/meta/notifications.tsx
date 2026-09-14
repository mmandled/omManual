import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";

const notificationTypes = [
  { title: "New Comments", description: "Users comment on published posts." },
  { title: "New Messages", description: "Direct messages from users on Facebook or Instagram." },
  { title: "Post Published", description: "Confirmation that scheduled content went live." },
  { title: "Mentions & Tags", description: "When SAS Bulletin is mentioned or tagged." },
];

export default function MetaNotificationsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Meta Business Suite", href: "/meta/overview" },
        { label: "Notifications" },
      ]}
    >
      <PageHeader
        title="Notifications"
        description="Managing Meta Business Suite notifications as an OM."
      />
      <Prose>
        <p>
          OMs should regularly check notifications in Meta Business Suite. This helps you stay on top
          of comments, messages, and account activity after publishing.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Common Notification Types</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          {notificationTypes.map((type) => (
            <Card key={type.title}>
              <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{type.title}</h3>
              <p className="text-sm text-navy-700 dark:text-blue-200/80">{type.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <ScreenshotPlaceholder label="[Insert current Meta Business Suite screenshot here]" />
      </div>

      <Callout variant="info" className="mt-8" label="recommended">
        Check notifications after publishing and during regular monitoring shifts. Respond promptly
        but always verify before answering uncertain questions.
      </Callout>
    </PageShell>
  );
}
