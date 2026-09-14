import type { ComponentType } from "react";

import WelcomePage from "./pages/getting-started/welcome";
import WhatIsOmPage from "./pages/getting-started/what-is-om";
import ResponsibilitiesPage from "./pages/getting-started/responsibilities";
import TeamStructurePage from "./pages/getting-started/team-structure";

import OverallWorkflowPage from "./pages/workflow/overall";
import ProductionWorkflowPage from "./pages/workflow/production";
import ClickUpMessengerPage from "./pages/workflow/clickup-messenger";
import PublishingWorkflowPage from "./pages/workflow/publishing";
import TroubleshootingPage from "./pages/workflow/troubleshooting";

import ClickUpOverviewPage from "./pages/clickup/overview";
import ProjectStructurePage from "./pages/clickup/project-structure";
import TasksPage from "./pages/clickup/tasks";
import AssigneesPage from "./pages/clickup/assignees";
import DueDatesPage from "./pages/clickup/due-dates";
import PriorityPage from "./pages/clickup/priority";
import StatusesPage from "./pages/clickup/statuses";
import TaskCommentsPage from "./pages/clickup/task-comments";
import SubmittingOutputsPage from "./pages/clickup/submitting-outputs";
import OmMonitoringPage from "./pages/clickup/om-monitoring";

import MetaOverviewPage from "./pages/meta/overview";
import SchedulingPage from "./pages/meta/scheduling";
import MetaPublishingPage from "./pages/meta/publishing";
import ContentPlannerPage from "./pages/meta/content-planner";
import MetaNotificationsPage from "./pages/meta/notifications";
import MetaCommentsPage from "./pages/meta/comments";
import MetaMessagesPage from "./pages/meta/messages";
import MetaAnalyticsPage from "./pages/meta/analytics";

import FacebookPage from "./pages/social/facebook";
import InstagramPage from "./pages/social/instagram";
import PostingGuidelinesPage from "./pages/social/posting-guidelines";
import CommunityManagementPage from "./pages/social/community-management";
import RespondingPage from "./pages/social/responding";
import EscalationPage from "./pages/social/escalation";

import AssigningOmsPage from "./pages/task-designation/assigning-oms";
import PublishingResponsibilitiesPage from "./pages/task-designation/publishing-responsibilities";
import AvailabilityPage from "./pages/task-designation/availability";
import AvoidingDuplicatesPage from "./pages/task-designation/avoiding-duplicates";
import FollowUpsPage from "./pages/task-designation/follow-ups";

import MonthlyAnalyticsPage from "./pages/analytics/monthly";
import WhatToMonitorPage from "./pages/analytics/what-to-monitor";
import KeyMetricsPage from "./pages/analytics/key-metrics";
import MonthlyReviewPage from "./pages/analytics/monthly-review";

import CheatSheetPage from "./pages/quick-reference/cheat-sheet";
import BeforePublishingPage from "./pages/quick-reference/before-publishing";
import AfterPublishingPage from "./pages/quick-reference/after-publishing";
import IfSomethingGoesWrongPage from "./pages/quick-reference/if-something-goes-wrong";
import IfUnsurePage from "./pages/quick-reference/if-unsure";

import ResourcesPage from "./pages/resources";

export interface PageEntry {
  component: ComponentType;
  title: string;
  description: string;
}

export const pageRegistry: Record<string, PageEntry> = {
  "getting-started/welcome": {
    component: WelcomePage,
    title: "Welcome to OM",
    description: "Introduction for new Online Managers",
  },
  "getting-started/what-is-om": {
    component: WhatIsOmPage,
    title: "What is an Online Manager?",
    description: "Role overview and expectations",
  },
  "getting-started/responsibilities": {
    component: ResponsibilitiesPage,
    title: "OM Responsibilities",
    description: "Core duties of Online Managers",
  },
  "getting-started/team-structure": {
    component: TeamStructurePage,
    title: "OM Team Structure",
    description: "How the OM team is organized",
  },
  "workflow/overall": {
    component: OverallWorkflowPage,
    title: "Overall Workflow",
    description: "End-to-end production and publishing flow",
  },
  "workflow/production": {
    component: ProductionWorkflowPage,
    title: "Production Workflow",
    description: "How content moves through departments",
  },
  "workflow/clickup-messenger": {
    component: ClickUpMessengerPage,
    title: "ClickUp → Messenger Workflow",
    description: "ClickUp first, Messenger second",
  },
  "workflow/publishing": {
    component: PublishingWorkflowPage,
    title: "Publishing Workflow",
    description: "From approved content to published post",
  },
  "workflow/troubleshooting": {
    component: TroubleshootingPage,
    title: "What To Do If...",
    description: "Troubleshooting guide",
  },
  "clickup/overview": {
    component: ClickUpOverviewPage,
    title: "ClickUp Overview",
    description: "ClickUp is the source of truth",
  },
  "clickup/project-structure": {
    component: ProjectStructurePage,
    title: "Project Structure",
    description: "How ClickUp projects are organized",
  },
  "clickup/tasks": {
    component: TasksPage,
    title: "Tasks",
    description: "Understanding production tasks",
  },
  "clickup/assignees": {
    component: AssigneesPage,
    title: "Assignees",
    description: "How members are assigned to tasks",
  },
  "clickup/due-dates": {
    component: DueDatesPage,
    title: "Due Dates",
    description: "Target publishing dates",
  },
  "clickup/priority": {
    component: PriorityPage,
    title: "Priority",
    description: "Task priority levels",
  },
  "clickup/statuses": {
    component: StatusesPage,
    title: "Statuses",
    description: "Task status flow",
  },
  "clickup/task-comments": {
    component: TaskCommentsPage,
    title: "Task Comments",
    description: "Submitting outputs in comments",
  },
  "clickup/submitting-outputs": {
    component: SubmittingOutputsPage,
    title: "Submitting Outputs",
    description: "How to submit finished work",
  },
  "clickup/om-monitoring": {
    component: OmMonitoringPage,
    title: "OM Monitoring",
    description: "How OMs monitor ClickUp",
  },
  "meta/overview": {
    component: MetaOverviewPage,
    title: "Meta Business Suite Overview",
    description: "Primary publishing tool",
  },
  "meta/scheduling": {
    component: SchedulingPage,
    title: "Scheduling Posts",
    description: "Step-by-step scheduling guide",
  },
  "meta/publishing": {
    component: MetaPublishingPage,
    title: "Publishing Posts",
    description: "Publishing approved content",
  },
  "meta/content-planner": {
    component: ContentPlannerPage,
    title: "Content Planner",
    description: "View scheduled content",
  },
  "meta/notifications": {
    component: MetaNotificationsPage,
    title: "Notifications",
    description: "Managing Meta notifications",
  },
  "meta/comments": {
    component: MetaCommentsPage,
    title: "Comments",
    description: "Managing comments",
  },
  "meta/messages": {
    component: MetaMessagesPage,
    title: "Messages",
    description: "Handling messages",
  },
  "meta/analytics": {
    component: MetaAnalyticsPage,
    title: "Basic Analytics",
    description: "Insights in Meta Business Suite",
  },
  "social/facebook": {
    component: FacebookPage,
    title: "Facebook",
    description: "Facebook page guide",
  },
  "social/instagram": {
    component: InstagramPage,
    title: "Instagram",
    description: "Instagram page guide",
  },
  "social/posting-guidelines": {
    component: PostingGuidelinesPage,
    title: "Posting Guidelines",
    description: "Social media posting guidelines",
  },
  "social/community-management": {
    component: CommunityManagementPage,
    title: "Community Management",
    description: "Managing the online community",
  },
  "social/responding": {
    component: RespondingPage,
    title: "Responding to Users",
    description: "Professional user responses",
  },
  "social/escalation": {
    component: EscalationPage,
    title: "Escalation",
    description: "When to escalate issues",
  },
  "task-designation/assigning-oms": {
    component: AssigningOmsPage,
    title: "Assigning OMs",
    description: "Publishing task assignment",
  },
  "task-designation/publishing-responsibilities": {
    component: PublishingResponsibilitiesPage,
    title: "Publishing Responsibilities",
    description: "One post, one OM",
  },
  "task-designation/availability": {
    component: AvailabilityPage,
    title: "Availability",
    description: "Managing OM availability",
  },
  "task-designation/avoiding-duplicates": {
    component: AvoidingDuplicatesPage,
    title: "Avoiding Duplicate Work",
    description: "Prevent duplicate publishing",
  },
  "task-designation/follow-ups": {
    component: FollowUpsPage,
    title: "Follow-ups",
    description: "Proactive follow-up timeline",
  },
  "analytics/monthly": {
    component: MonthlyAnalyticsPage,
    title: "Monthly Analytics",
    description: "Monthly performance review",
  },
  "analytics/what-to-monitor": {
    component: WhatToMonitorPage,
    title: "What to Monitor",
    description: "Metrics to watch",
  },
  "analytics/key-metrics": {
    component: KeyMetricsPage,
    title: "Key Metrics",
    description: "Important analytics metrics",
  },
  "analytics/monthly-review": {
    component: MonthlyReviewPage,
    title: "Monthly Review",
    description: "Analytics dashboard and review",
  },
  "quick-reference/cheat-sheet": {
    component: CheatSheetPage,
    title: "OM Cheat Sheet",
    description: "Quick-reference checklist",
  },
  "quick-reference/before-publishing": {
    component: BeforePublishingPage,
    title: "Before Publishing",
    description: "Pre-publish checklist",
  },
  "quick-reference/after-publishing": {
    component: AfterPublishingPage,
    title: "After Publishing",
    description: "Post-publish checklist",
  },
  "quick-reference/if-something-goes-wrong": {
    component: IfSomethingGoesWrongPage,
    title: "If Something Goes Wrong",
    description: "Stop, verify, ask, fix, document",
  },
  "quick-reference/if-unsure": {
    component: IfUnsurePage,
    title: "If You're Unsure",
    description: "Ask first, don't guess",
  },
  resources: {
    component: ResourcesPage,
    title: "Resources",
    description: "Important links and tools",
  },
};

export function getPage(slug: string): PageEntry | undefined {
  return pageRegistry[slug];
}

export function getAllPageSlugs(): string[] {
  return Object.keys(pageRegistry);
}
