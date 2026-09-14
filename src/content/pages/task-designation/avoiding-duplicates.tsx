import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose } from "@/components/ui/PageHeader";

export default function AvoidingDuplicatesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Task Designation", href: "/task-designation/assigning-oms" },
        { label: "Avoiding Duplicate Work" },
      ]}
    >
      <PageHeader
        title="Avoiding Duplicate Work"
        description="Prevent two OMs from publishing the same content."
      />
      <Prose>
        <p>
          Avoid duplicate publishing. Avoid two OMs working on the same post without coordination.
          When in doubt, check ClickUp for the assigned OM and confirm in the Production GC.
        </p>
        <p>If two OMs are trying to publish the same thing:</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Stop immediately</li>
          <li>Coordinate with each other and the OM Head</li>
          <li>Only one OM should handle the publishing task</li>
          <li>Update the assignment so it is clear going forward</li>
        </ol>
      </Prose>

      <Callout variant="principle" title="Organized Publishing" className="mt-8" label="official">
        The goal is organized publishing, not competition. Check who is assigned before you publish.
      </Callout>
    </PageShell>
  );
}
