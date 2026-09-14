export const omWorkflowSteps = [
  {
    id: "plan",
    label: "PLAN",
    description: "Content is planned and tasks are created in ClickUp with assignees and due dates.",
  },
  {
    id: "produce",
    label: "PRODUCE",
    description: "Departments create the required content according to the task requirements.",
  },
  {
    id: "review",
    label: "REVIEW",
    description: "Content goes through the required review process before it is approved.",
  },
  {
    id: "ready",
    label: "READY",
    description: "The member updates ClickUp status and submits the output in the task comment.",
  },
  {
    id: "publish",
    label: "PUBLISH",
    description: "The assigned OM schedules or publishes the approved content via Meta Business Suite.",
  },
  {
    id: "monitor",
    label: "MONITOR",
    description: "OMs monitor the post, comments, messages, and notifications after publishing.",
  },
  {
    id: "analyze",
    label: "ANALYZE",
    description: "Social media performance is reviewed monthly — not as a daily publishing task.",
  },
];

export const needCards = [
  {
    title: "I need to manage a task",
    description: "Check assignees, statuses, due dates, and outputs in ClickUp.",
    href: "/clickup/overview",
    icon: "clipboard",
  },
  {
    title: "I need to publish content",
    description: "Schedule or publish approved content through Meta Business Suite.",
    href: "/meta/scheduling",
    icon: "calendar",
  },
  {
    title: "I need to check production",
    description: "Follow the production workflow and monitor task progress.",
    href: "/workflow/production",
    icon: "workflow",
  },
  {
    title: "I need to respond to users",
    description: "Handle comments and messages professionally.",
    href: "/social/responding",
    icon: "message",
  },
  {
    title: "I need to check performance",
    description: "Review monthly analytics and key metrics.",
    href: "/analytics/monthly",
    icon: "chart",
  },
  {
    title: "I'm not sure what to do",
    description: "Use the troubleshooting guide — ask first, don't guess.",
    href: "/workflow/troubleshooting",
    icon: "help",
  },
];

export const troubleshootingCards = [
  {
    problem: "The task has no assignee",
    action: "Tag the respective Head in the Production GC.",
    href: "/clickup/assignees",
  },
  {
    problem: "The output isn't ready",
    action: "Do not publish. Follow up with the responsible member.",
    href: "/clickup/submitting-outputs",
  },
  {
    problem: "The caption isn't ready",
    action: "Wait for the proper caption/review process.",
    href: "/clickup/task-comments",
  },
  {
    problem: "The assigned OM isn't available",
    action: "Coordinate with OM Head and reassign if necessary.",
    href: "/task-designation/availability",
  },
  {
    problem: "Two OMs are trying to publish the same thing",
    action: "Stop and coordinate. Only one OM should handle the publishing task.",
    href: "/task-designation/avoiding-duplicates",
  },
  {
    problem: "I don't know how to respond to a user",
    action: "Do not guess. Ask the appropriate person.",
    href: "/social/responding",
  },
  {
    problem: "I made a publishing mistake",
    action: "Stop, verify, inform the OM Head, and follow the proper correction process.",
    href: "/quick-reference/if-something-goes-wrong",
  },
  {
    problem: "I don't know what to do",
    action: "ASK FIRST. DON'T GUESS.",
    href: "/quick-reference/if-unsure",
  },
];

export const clickupStatusFlow = [
  { label: "TO DO", description: "Task is created but work has not started." },
  { label: "IN PROGRESS", description: "Assigned member is actively working on the task." },
  { label: "FOR REVIEW", description: "Output is submitted and awaiting review." },
  { label: "READY TO PUBLISH", description: "Content is approved and ready for the assigned OM." },
  { label: "PUBLISHED / COMPLETE", description: "Content has been published and the task is complete." },
];

export const newOmChecklist = [
  "I understand the OM workflow",
  "I can navigate ClickUp",
  "I can check task status",
  "I can submit/check outputs",
  "I can use Meta Business Suite",
  "I know how to schedule a post",
  "I understand the Production GC",
  "I know when to ask for help",
];

export const beforeSchedulingChecklist = [
  "Confirm the ClickUp task",
  "Confirm the output is final",
  "Confirm the caption is final/approved",
  "Check the correct social media account",
  "Check the date",
  "Check the time",
  "Check tags/mentions",
  "Check links if applicable",
  "Check formatting",
];

export const afterSchedulingChecklist = [
  "Confirm the post appears in the planner",
  "Update ClickUp accordingly",
  "Monitor the scheduled post",
];

export const followUpTimeline = [
  { when: "7 DAYS BEFORE", action: "Monitor task progress in ClickUp." },
  { when: "3 DAYS BEFORE", action: "Follow up if the task appears behind schedule." },
  { when: "1 DAY BEFORE", action: "Confirm readiness with the responsible member." },
  { when: "PUBLISHING DAY", action: "Final check before publishing." },
  { when: "AFTER PUBLISHING", action: "Monitor comments, messages, and notifications." },
];

export const analyticsMetrics = [
  "Reach",
  "Engagement",
  "Reactions",
  "Comments",
  "Shares",
  "Video views",
  "Link clicks",
  "Follower growth",
  "Top-performing posts",
  "Lowest-performing posts",
];

export const beforePublishingChecklist = [
  "Check ClickUp",
  "Check status",
  "Check final output",
  "Check caption",
  "Check approval",
  "Check date/time",
  "Check account",
  "Check tags/links",
];

export const afterPublishingChecklist = [
  "Confirm publication",
  "Update ClickUp",
  "Monitor comments/messages",
  "Check notifications",
];

export const errorRecoveryFlow = ["STOP", "VERIFY", "ASK", "FIX", "DOCUMENT"];

export const productionGcExamples = [
  "Caption for Affinity Week – Pasadahan is ready for posting. @OMs",
  "August – Classes Start is ready for caption. @Writers",
  "Visual for Recruitment is ready for posting. @OMs",
];

export const metaFunctions = [
  { title: "Scheduling", description: "Schedule approved content for future publishing.", href: "/meta/scheduling" },
  { title: "Publishing", description: "Publish content immediately when ready.", href: "/meta/publishing" },
  { title: "Content Planner", description: "View and manage your content calendar.", href: "/meta/content-planner" },
  { title: "Comments", description: "Monitor and respond to post comments.", href: "/meta/comments" },
  { title: "Messages", description: "Handle direct messages from users.", href: "/meta/messages" },
  { title: "Notifications", description: "Stay updated on account activity.", href: "/meta/notifications" },
  { title: "Insights / Analytics", description: "Review basic performance metrics.", href: "/meta/analytics" },
];

export const responseScenarios = [
  {
    scenario: "A student asks something you don't know.",
    action: "Verify first. Ask the appropriate Head/Execomm if necessary.",
  },
  {
    scenario: "A user becomes angry in the comments.",
    action: "Remain professional. Do not argue publicly. Escalate if necessary.",
  },
  {
    scenario: "A user asks for sensitive information.",
    action: "Do not provide unverified information. Consult the appropriate authority.",
  },
  {
    scenario: "You accidentally published something incorrectly.",
    action: "Stop → Verify → Inform OM Head → Correct according to the proper process.",
  },
];
