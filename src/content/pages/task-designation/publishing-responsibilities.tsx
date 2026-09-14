import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose } from "@/components/ui/PageHeader";

export default function PublishingResponsibilitiesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Task Designation", href: "/task-designation/assigning-oms" },
        { label: "Publishing Responsibilities" },
      ]}
    >
      <PageHeader
        title="Publishing Responsibilities"
        description="One post, one assigned OM."
      />

      <Callout variant="principle" title="ONE POST = ONE ASSIGNED OM" className="mb-8" label="official">
        The assigned OM handles the publishing task. Avoid racing to publish.
      </Callout>

      <Prose>
        <p>If the assigned OM is unavailable:</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Coordinate with the OM Head.</li>
          <li>Another available OM may take over.</li>
          <li>Update the assignment so everyone knows who is handling it.</li>
        </ol>
        <p className="mt-4 font-medium text-navy-900 dark:text-blue-50">
          The goal is: organized publishing, not competition.
        </p>
      </Prose>
    </PageShell>
  );
}
