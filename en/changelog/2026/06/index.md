# June 2026

Updates for June 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.6.14](/en/changelog/2026/06/2026.6.14) | 06/30 | **Overdue Customers List — Billing** — new dedicated tab with per-customer grouping, summary cards, search, sorting, expandable installments and payment registration directly on screen |
| [2026.6.13](/en/changelog/2026/06/2026.6.13) | 06/30 | **Manage Customer Tags via AI Agent** — new ready action to add or remove customer tags; permission control by mode (None, All or Selected); restricted enum in OpenAI tool |
| [2026.6.12](/en/changelog/2026/06/2026.6.12) | 06/30 | **Granular per-user permissions** — individual module access control; exclusive hierarchy: custom > group > role; Owner always has full access; direct navigation to single available submenu |
| [2026.6.11](/en/changelog/2026/06/2026.6.11) | 06/26 | **Push reminders before appointments** — push alerts for the team in app and web, configurable per schedule (15 min to 2 h + custom times) |
| [2026.6.10](/en/changelog/2026/06/2026.6.10) | 06/26 | **Silent flows by appointment status** — internal automations per stage, dedicated tab in schedule management, status changes centralized through the API |
| [2026.6.9](/en/changelog/2026/06/2026.6.9) | 06/25 | **Team round-robin** — order-based distribution, locked pending reservation, round-robin status panel, list badge and system messages |
| [2026.6.8](/en/changelog/2026/06/2026.6.8) | 06/24 | **Appointment event notifications** — automatic sending on create, confirm, cancel, start and complete; status summary and "Operational today" preset on the list |
| [2026.6.7](/en/changelog/2026/06/2026.6.7) | 06/24 | **Pause AI on external replies** — per-channel setting (WAHA, Official, Instagram, Facebook) to control automatic AI pause when replying outside Interflow |
| [2026.6.6](/en/changelog/2026/06/2026.6.6) | 06/24 | **"Include collaborating" filter** — expands the conversation list with active collaborations without restricting other filters; available in filter panel and quick filters |
| [2026.6.5](/en/changelog/2026/06/2026.6.5) | 06/23 | **Lead Timeline** — unified customer journey, automatic external contact logging via personal WhatsApp, mandatory blocking feedback and manager view |
| [2026.6.4](/en/changelog/2026/06/2026.6.4) | 06/23 | **Improved Internal Chats** — last message preview, unified unread badge, single Realtime data source, shortcut to conversations, mobile and message type fixes |
| [2026.6.3](/en/changelog/2026/06/2026.6.3) | 06/09 | **"My Tasks" page** — all your tasks in one place, regardless of project; grouping and sorting in the list view; quick edit of status, priority and due date directly in the list |
| [2026.6.2](/en/changelog/2026/06/2026.6.2) | 06/09 | **Automatic customer deletion by usage limit** — configurable in Limits, with "Run now" button and real-time progress; customers with POS orders can now be deleted |
| [2026.6.1](/en/changelog/2026/06/2026.6.1) | 06/08 | **WhatsApp Official template buttons now saved in history** — quick reply, URL and phone buttons correctly displayed in the chat after manual or bulk send |

---

## Monthly Summary

### New Features (30)
- **Overdue Customers List — Billing** (v2026.6.14) — new dedicated tab in the Billing module with per-customer grouping, total customers and total overdue cards, search, clickable column sorting, expandable installment rows and payment registration directly on screen; WhatsApp fetched from `customer_contacts`
- **Manage Customer Tags via AI Agent** (v2026.6.13) — new AI Agent ready action to add or remove customer tags; granular control by mode (None, All, Selected) with restricted enum in OpenAI tool
- **Granular per-user permissions** (v2026.6.12) — individual module access control; exclusive hierarchy: custom > group > role; Owner always has full access
- **Customer and CRM visibility control via permission** (v2026.6.12) — `canAccessAll` flag determines whether the user sees "my customers/pipelines" or all; sidebar and filters adapt automatically
- **Direct navigation to single submenu** (v2026.6.12) — when only one submenu is available due to permissions, clicking navigates directly without expanding the menu
- **Push reminders before appointments** (v2026.6.11) — push alerts for provider and notified users in app and web; preset times (15, 30, 60, 120 min) and custom; messages in profile language
- **Silent flows by appointment status** (v2026.6.10) — internal background automations on confirm, start, complete, cancel or no-show; dedicated tab in schedule management
- **Automatic round-robin distribution** (v2026.6.9) — per-team config with triggers, fallback, schedules, break and on-call per member
- **Locked reservation in pending mode** (v2026.6.9) — working/off hours minutes; only reserved agent can attend until expiry
- **Round-robin status on team card** (v2026.6.9) — next, last and queue order panel; "Set as next" action
- **Reservation badge in chat list** (v2026.6.9) — "Reserved for you" or "Reserved · {name}" on pending conversations
- **Round-robin system messages** (v2026.6.9) — `auto_assigned` and `user_start_auto` types in chat history
- **Appointment event notifications** (v2026.6.8) — templates for create, confirm, cancel, start, complete, reschedule, no-show and post-appointment follow-up via WhatsApp, email or flow
- **Status summary on the appointment list** (v2026.6.8) — clickable chips (To start, In progress, Completed, Canceled/no-show) with counters
- **"Operational today" preset** (v2026.6.8) — quick filter for today with grouping by operational phase
- **Pause AI on external replies** (v2026.6.7) — per-channel toggle to control automatic flow/AI pause when the agent replies via the native app (WAHA, WhatsApp Official, Instagram, Facebook); enabled by default
- **"Include collaborating" filter** (v2026.6.6) — expands the conversation list with collaborating conversations, combinable with status, team, tags and custom quick filters
- **Lead Timeline (Customer Journey)** (v2026.6.5) — Timeline tab in customer panel with CRM, conversations, notes, tasks, appointments and external contacts
- **Automatic external contact logging** (v2026.6.5) — Quick WhatsApp Button logs contact outside Interflow before opening the app
- **Mandatory feedback after external contact** (v2026.6.5) — blocking modal requires conversation documentation before resuming the chat
- **External feedback setting** (v2026.6.5) — "Require feedback after contact" toggle in WhatsApp button settings
- **Last message preview in Internal Chats** (v2026.6.4) — listing shows content, media or sender of the last message
- **Unified unread badge** (v2026.6.4) — counter synced in real time on mobile navbar, conversations header and compact menu
- **Shortcut to Conversations** (v2026.6.4) — button in Internal Chats listing to go to `/app/chats`
- **"My Tasks" page** (v2026.6.3) — all tasks assigned to you across all projects, with list and calendar views, project name on each task, filters and a refresh button
- **Grouping in the list view** (v2026.6.3) — by stage, project, due date (Overdue, Yesterday, Today, Tomorrow, This week, Next week, Future, No date), assignee, status or priority
- **Sorting in the list view** (v2026.6.3) — default, due date, priority, title, creation date or status, applied within each group
- **Quick edit in the list** (v2026.6.3) — change status, priority and due date directly on the task row, with notifications and history preserved
- **Automatic customer deletion by usage limit** (v2026.6.2) — configurable deletion in Settings > Limits (trigger %, target %, order by last contact or registration, linked conversations, run time), processed by the existing deletion queue
- **"Run now" button for automatic cleanups** (v2026.6.2) — triggers Customers or Storage cleanup immediately, with an "In progress..." state that blocks duplicate triggers

### Changes (13)
- **Role checks replaced by effective permissions** (v2026.6.12) — `isOwnerOrAdmin`, `req.isAdmin` and `req.isOwner` calculated from effective permissions on both frontend and backend
- **Backend route protection by module** (v2026.6.12) — middleware verifies effective permission for settings, integrations, billing, teams, UTM and permission groups
- **Auth middleware with access flags** (v2026.6.12) — `req.isOwner` and `req.isAdmin` populated directly, without extra database queries
- **Unified push on appointment creation** (v2026.6.11) — creation notification integrated into reminders service with translated messages (PT, EN, ES)
- **Status changes centralized through the API** (v2026.6.10) — list, arrival queue, slots and medical cancellations trigger notifications and silent flows consistently
- **Dedicated check-in route** (v2026.6.10) — `PATCH .../checkin` endpoint for arrival queue
- **Round-robin flow node** (v2026.6.9) — triggers automatic distribution for current or selected team
- **Notification template form** (v2026.6.8) — all notification triggers re-enabled in the UI (previously only "Before appointment" was available)
- **Enriched timeline events** (v2026.6.5) — CRM stage changes, conversation closure and chat assignment logged automatically
- **Single data source for Internal Chats** (v2026.6.4) — global list with Realtime, no duplicate fetch/subscription on the page
- **Keyboard in the message field** (v2026.6.4) — Enter sends; Cmd/Ctrl+Enter inserts line break
- **Visual improvements in the task list** (v2026.6.3) — "Due date" header without wrapping, status and dates no longer wrap, overdue date in red only, grouping/sorting controls in their own bar
- **Customers with POS orders can now be deleted** (v2026.6.2) — orders preserved in the sales history, only unlinked from the customer

### Bug Fixes (8)
- **Customer custom permissions ignored `canAccessAll: false`** (v2026.6.12) — without the flag checked, the user now correctly sees only the customers they serve
- **Before-appointment reminders with confirmed status** (v2026.6.8) — reminders now sent for confirmed appointments as well
- **Pending reminder cancellation** (v2026.6.8) — future reminders automatically canceled when the appointment is canceled
- **Conversation query with additive filter** (v2026.6.6) — fixed error loading list with "Include collaborating" enabled
- **Internal messages saved as email** (v2026.6.4) — correct types (`text`, `image`, etc.) for chats without a linked channel
- **Message input hidden on mobile in internal chat** (v2026.6.4) — bottom navigation bar hidden when opening a conversation
- **Line break with Cmd/Ctrl+Enter** (v2026.6.4) — correct insertion in controlled textarea
- **WhatsApp Official template buttons not displayed in chat** (v2026.6.1) — template buttons (quick reply, URL, phone) are now saved in the message `metadata` and rendered in the chat history; fixes both manual send and bulk campaign dispatch

---

::: info Total
**15 releases** this month!
:::
