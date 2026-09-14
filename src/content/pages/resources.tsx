import { PageShell } from "@/components/layout/PageShell";
import { PageHeader, SectionLabel } from "@/components/ui/PageHeader";
import { ResourceCard } from "@/components/ui/ResourceCard";

const GOOGLE_DRIVE_URL =
  "https://drive.google.com/drive/folders/1OXamkPH3SOWDkwI8ia1LYyD9ucRasdYn?usp=drive_link";

export default function ResourcesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources" },
      ]}
    >
      <PageHeader
        title="Resources"
        description="Important links and tools for Online Managers."
      />

      <SectionLabel>Official Links</SectionLabel>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ResourceCard
          title="SASB Google Drive — AY 2026–2027"
          description="Official SAS Bulletin Google Drive for the current academic year."
          href={GOOGLE_DRIVE_URL}
        />
        <ResourceCard
          title="ClickUp Workspace"
          description="Production task management and source of truth."
          placeholder
        />
        <ResourceCard
          title="Meta Business Suite"
          description="Scheduling, publishing, and managing social media."
          placeholder
        />
        <ResourceCard
          title="SAS Bulletin Facebook"
          description="Official Facebook page."
          placeholder
        />
        <ResourceCard
          title="SAS Bulletin Instagram"
          description="Official Instagram account."
          placeholder
        />
        <ResourceCard
          title="Production GC"
          description="Messenger group chat for production updates."
          placeholder
        />
      </div>
    </PageShell>
  );
}
