# June 2026

Updates for June 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
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

### ✨ New Features (23)
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

### 🔄 Changes (7)
- **Round-robin flow node** (v2026.6.9) — triggers automatic distribution for current or selected team
- **Notification template form** (v2026.6.8) — all notification triggers re-enabled in the UI (previously only "Before appointment" was available)
- **Enriched timeline events** (v2026.6.5) — CRM stage changes, conversation closure and chat assignment logged automatically
- **Single data source for Internal Chats** (v2026.6.4) — global list with Realtime, no duplicate fetch/subscription on the page
- **Keyboard in the message field** (v2026.6.4) — Enter sends; Cmd/Ctrl+Enter inserts line break
- **Visual improvements in the task list** (v2026.6.3) — "Due date" header without wrapping, status and dates no longer wrap, overdue date in red only, grouping/sorting controls in their own bar
- **Customers with POS orders can now be deleted** (v2026.6.2) — orders preserved in the sales history, only unlinked from the customer

### 🐛 Bug Fixes (7)
- **Before-appointment reminders with confirmed status** (v2026.6.8) — reminders now sent for confirmed appointments as well
- **Pending reminder cancellation** (v2026.6.8) — future reminders automatically canceled when the appointment is canceled
- **Conversation query with additive filter** (v2026.6.6) — fixed error loading list with "Include collaborating" enabled
- **Internal messages saved as email** (v2026.6.4) — correct types (`text`, `image`, etc.) for chats without a linked channel
- **Message input hidden on mobile in internal chat** (v2026.6.4) — bottom navigation bar hidden when opening a conversation
- **Line break with Cmd/Ctrl+Enter** (v2026.6.4) — correct insertion in controlled textarea
- **WhatsApp Official template buttons not displayed in chat** (v2026.6.1) — template buttons (quick reply, URL, phone) are now saved in the message `metadata` and rendered in the chat history; fixes both manual send and bulk campaign dispatch

---

::: info 📝 Total
**9 releases** this month!
:::
