# June 2026

Updates for June 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.6.4](/en/changelog/2026/06/2026.6.4) | 06/23 | **Improved Internal Chats** — last message preview, unified unread badge, single Realtime data source, shortcut to conversations, mobile and message type fixes |
| [2026.6.3](/en/changelog/2026/06/2026.6.3) | 06/09 | **"My Tasks" page** — all your tasks in one place, regardless of project; grouping and sorting in the list view; quick edit of status, priority and due date directly in the list |
| [2026.6.2](/en/changelog/2026/06/2026.6.2) | 06/09 | **Automatic customer deletion by usage limit** — configurable in Limits, with "Run now" button and real-time progress; customers with POS orders can now be deleted |
| [2026.6.1](/en/changelog/2026/06/2026.6.1) | 06/08 | **WhatsApp Official template buttons now saved in history** — quick reply, URL and phone buttons correctly displayed in the chat after manual or bulk send |

---

## Monthly Summary

### ✨ New Features (9)
- **Last message preview in Internal Chats** (v2026.6.4) — listing shows content, media or sender of the last message
- **Unified unread badge** (v2026.6.4) — counter synced in real time on mobile navbar, conversations header and compact menu
- **Shortcut to Conversations** (v2026.6.4) — button in Internal Chats listing to go to `/app/chats`
- **"My Tasks" page** (v2026.6.3) — all tasks assigned to you across all projects, with list and calendar views, project name on each task, filters and a refresh button
- **Grouping in the list view** (v2026.6.3) — by stage, project, due date (Overdue, Yesterday, Today, Tomorrow, This week, Next week, Future, No date), assignee, status or priority
- **Sorting in the list view** (v2026.6.3) — default, due date, priority, title, creation date or status, applied within each group
- **Quick edit in the list** (v2026.6.3) — change status, priority and due date directly on the task row, with notifications and history preserved
- **Automatic customer deletion by usage limit** (v2026.6.2) — configurable deletion in Settings > Limits (trigger %, target %, order by last contact or registration, linked conversations, run time), processed by the existing deletion queue
- **"Run now" button for automatic cleanups** (v2026.6.2) — triggers Customers or Storage cleanup immediately, with an "In progress..." state that blocks duplicate triggers

### 🔄 Changes (4)
- **Single data source for Internal Chats** (v2026.6.4) — global list with Realtime, no duplicate fetch/subscription on the page
- **Keyboard in the message field** (v2026.6.4) — Enter sends; Cmd/Ctrl+Enter inserts line break
- **Visual improvements in the task list** (v2026.6.3) — "Due date" header without wrapping, status and dates no longer wrap, overdue date in red only, grouping/sorting controls in their own bar
- **Customers with POS orders can now be deleted** (v2026.6.2) — orders preserved in the sales history, only unlinked from the customer

### 🐛 Bug Fixes (4)
- **Internal messages saved as email** (v2026.6.4) — correct types (`text`, `image`, etc.) for chats without a linked channel
- **Message input hidden on mobile in internal chat** (v2026.6.4) — bottom navigation bar hidden when opening a conversation
- **Line break with Cmd/Ctrl+Enter** (v2026.6.4) — correct insertion in controlled textarea
- **WhatsApp Official template buttons not displayed in chat** (v2026.6.1) — template buttons (quick reply, URL, phone) are now saved in the message `metadata` and rendered in the chat history; fixes both manual send and bulk campaign dispatch

---

::: info 📝 Total
**4 releases** this month!
:::
