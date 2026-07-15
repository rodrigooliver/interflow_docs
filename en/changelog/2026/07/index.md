# July 2026

Updates for July 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.7.8](/en/changelog/2026/07/2026.7.8) | 07/14 | **Internal chats** — audio, mark read/unread, seen status in DMs, and settings permission fix |
| [2026.7.7](/en/changelog/2026/07/2026.7.7) | 07/10 | **Funnel search** — search customers by name, see stage/position, and open the record |
| [2026.7.6](/en/changelog/2026/07/2026.7.6) | 07/10 | **Hide closed in the Funnel** — checkbox to hide customers whose last conversation is closed/resolved |
| [2026.7.5](/en/changelog/2026/07/2026.7.5) | 07/10 | **Restrict channels when starting a conversation** — control by role or user, hide auxiliary channels, and server-side validation |
| [2026.7.4](/en/changelog/2026/07/2026.7.4) | 07/08 | **Sequence Shortcuts** — multiple messages with configurable interval per shortcut, admin step builder and review modal in chat before sending |
| [2026.7.3](/en/changelog/2026/07/2026.7.3) | 07/07 | **Checkpoint Node** — explicit volume and response rate tracking in flows, with filterable report (period, channel, agent) and sales funnel indicator |
| [2026.7.2](/en/changelog/2026/07/2026.7.2) | 07/03 | **DeepSeek Support** — new AI provider (V4 Flash/Pro models) available with your own key, in the AI Agent, Test Prompt, and Improve Text, with configurable Thinking Mode |
| [2026.7.1](/en/changelog/2026/07/2026.7.1) | 07/01 | **Flow Test Chat** — side panel in FlowBuilder to simulate conversations in real time, with active node indicator, debounce override and split mode with agent view |

---

## Month Summary

### ✨ New Features (14)
- **Audio in internal chats** (v2026.7.8) — record and send audio in internal DMs and groups via the message field microphone
- **Mark as read / unread in internal chats** (v2026.7.8) — list menu and automatic mark when opening the conversation
- **Seen status in internal DMs** (v2026.7.8) — received messages show as read for the sender when opening a direct chat
- **Customer search in the Sales Funnel** (v2026.7.7) — search by name at the top of the funnel, see stage and position, and open the edit modal
- **Hide closed customers in the Sales Funnel** (v2026.7.6) — funnel checkbox to hide customers with a closed/resolved last conversation, keeping history intact
- **Restrict channels when starting a conversation** (v2026.7.5) — who can see each channel when starting a conversation (everyone, by role, or users), no auxiliary channels in the list, and server-side block
- **Message Shortcut Sequences** (v2026.7.4) — shortcuts with up to 10 messages, configurable interval per step (0.5s–30s), list badge, and compatibility with legacy shortcuts
- **Sequence Composer in Chat** (v2026.7.4) — review modal when using a sequence shortcut: edit texts, remove attachments, adjust intervals, and send with one click or Enter
- **Checkpoint Node** (v2026.7.3) — non-blocking node in the Statistics category to measure passage volume and/or response rate, with per-node configurable window (default 48h) and optional variable snapshot
- **Follow-up Analytics Report** (v2026.7.3) — refreshed panel with filters (period, channel, agent), manual refresh, design system, and per-checkpoint scoped report
- **DeepSeek Support** (v2026.7.2) — new AI provider (DeepSeek V4 Flash/Pro) available with your own key, with configurable Thinking Mode (High/Maximum)
- **Flow Test Chat** (v2026.7.1) — complete environment in FlowBuilder for testing flows with a real customer, side panel, split view, real-time node indicator, and debounce override
- **Test Channel Badge** (v2026.7.1) — amber visual identifier in the chat header when the conversation is on a `test` type channel
- **Floating active node indicator** (v2026.7.1) — badge below the flow button in the agent header showing node name, debounce state, and time tooltip

### 🔄 Improvements (7)
- **Shortcut menu in chat** (v2026.7.4) — visuals aligned with the design system, with stable positioning via portal
- **Compatibility with existing shortcuts** (v2026.7.4) — automatic normalization from legacy format to the step model
- **Automatic tracking removed** (v2026.7.3) — tracker coupled to Wait for Response timeout and AI Agent reschedule removed; metrics now depend only on explicit Checkpoints
- **Test using unpublished draft** (v2026.7.3) — testing from the Flow Builder uses draft nodes/edges; via AI Agent, it keeps using the published version
- **More thorough test reset** (v2026.7.3) — removes the previous flow session from the chat when restarting a test
- **Notifications disabled during testing** (v2026.7.3) — test messages no longer notify the team
- **Visual progress indicator** (v2026.7.3) — animated edge leading to the active node during testing

### 🐛 Bug Fixes (6)
- **Mark as unread undone while chat is open** (v2026.7.8) — auto mark-as-read only when opening the internal conversation
- **Organization settings for agents** (v2026.7.8) — settings GET allowed without Settings module; avoids errors and repeated chat requests
- **Timeout checker performance** (v2026.7.3) — batch processing with concurrency, eliminating delays of up to 20-30 minutes
- **Node incorrectly highlighted** (v2026.7.3) — fixed leftover data that kept more than one node with a green border in the Flow Builder
- **FK error when deleting test chat** (v2026.7.1) — deletion in correct order to avoid constraint violation between chats and flow sessions
- **Debounce override not propagated** (v2026.7.1) — debounce override configured in the test is now respected during flow execution

### 🔒 Security (1)
- **Validation when creating a conversation** (v2026.7.5) — channel permission checked on the server when starting a conversation

---

::: info 📝 Total
**8 releases** this month!
:::
