# July 2026

Updates for July 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.7.12](/en/changelog/2026/07/2026.7.12) | 07/18 | **WhatsApp WAHA** — passkey verification when connecting the channel |
| [2026.7.11](/en/changelog/2026/07/2026.7.11) | 07/17 | **HR / Time clock** — punches, schedule, calendar, absences, daily payroll, and push |
| [2026.7.10](/en/changelog/2026/07/2026.7.10) | 07/16 | **Query API** — external API tool, generate routes with AI, and test before publishing |
| [2026.7.9](/en/changelog/2026/07/2026.7.9) | 07/15 | **Contact, address & CRM** — contact/address tools (with GPS), addresses on the record, and first-message context |
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

### New Features (30)
- **Passkey verification for WhatsApp WAHA** (v2026.7.12) — passkey flow with browser extension and optional 4-digit confirmation
- **HR / Time clock module** (v2026.7.11) — clock-in, break, return, and clock-out with photo, GPS, and audit trail
- **Workplaces and geofence** (v2026.7.11) — sites with radius and per-employee rules (including home office)
- **Weekly schedule per employee** (v2026.7.11) — variable days and hours (e.g. Mon–Fri 8h, Saturday 4h)
- **HR calendar** (v2026.7.11) — holidays and non-working days (optional yearly recurrence)
- **Medical certificates and individual days off** (v2026.7.11) — absences with attachment reflected in payroll
- **Hour bank and managerial payroll** (v2026.7.11) — balance, preview, **hours per day**, and period/daily CSV
- **Push on punch** (v2026.7.11) — configurable recipients per employee (OneSignal)
- **My HR profile** (v2026.7.11) — employee view without photo/IP/notifications
- **Punch details with on-demand photo** (v2026.7.11) — light list; photo/IP/GPS in the Details modal
- **Query API** (v2026.7.10) — ready-made AI Agent tool to query/run operations on external APIs (encrypted key + allowlist)
- **Generate API routes with AI** (v2026.7.10) — builds routes from description, docs, or curl; only the routes you need
- **Test API routes** (v2026.7.10) — server-side test with OK/Error/Untested status before publishing
- **Update Customer Contact** (v2026.7.9) — ready-made AI Agent tool to save/update phone, WhatsApp, or email
- **Update Customer Address** (v2026.7.9) — ready-made AI Agent tool to save/update address (text or GPS) during the conversation
- **Addresses on the customer record** (v2026.7.9) — CRM section to list, create, edit, and delete addresses with coordinates
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

### Improvements (14)
- **Punch without a webcam** (v2026.7.11) — upload a photo file when there is no camera
- **Mirrored camera preview** (v2026.7.11) — selfie-style framing; saved photo keeps normal orientation
- **Loading on HR screens** (v2026.7.11) — avoids an empty flash while loading
- **Day status on payroll** (v2026.7.11) — work, holiday, certificate, or day-off badge on hours per day
- **Dedicated modal and Query API name** (v2026.7.10) — own configuration modal and clearer name (was “Configurable API”)
- **Address in customer context** (v2026.7.9) — saved addresses included in Customer info on the prompt’s first message
- **GPS coordinates and reverse geocoding** (v2026.7.9) — location pin fills the address automatically (Google Maps or Nominatim)
- **Shortcut menu in chat** (v2026.7.4) — visuals aligned with the design system, with stable positioning via portal
- **Compatibility with existing shortcuts** (v2026.7.4) — automatic normalization from legacy format to the step model
- **Automatic tracking removed** (v2026.7.3) — tracker coupled to Wait for Response timeout and AI Agent reschedule removed; metrics now depend only on explicit Checkpoints
- **Test using unpublished draft** (v2026.7.3) — testing from the Flow Builder uses draft nodes/edges; via AI Agent, it keeps using the published version
- **More thorough test reset** (v2026.7.3) — removes the previous flow session from the chat when restarting a test
- **Notifications disabled during testing** (v2026.7.3) — test messages no longer notify the team
- **Visual progress indicator** (v2026.7.3) — animated edge leading to the active node during testing

### Bug Fixes (6)
- **Mark as unread undone while chat is open** (v2026.7.8) — auto mark-as-read only when opening the internal conversation
- **Organization settings for agents** (v2026.7.8) — settings GET allowed without Settings module; avoids errors and repeated chat requests
- **Timeout checker performance** (v2026.7.3) — batch processing with concurrency, eliminating delays of up to 20-30 minutes
- **Node incorrectly highlighted** (v2026.7.3) — fixed leftover data that kept more than one node with a green border in the Flow Builder
- **FK error when deleting test chat** (v2026.7.1) — deletion in correct order to avoid constraint violation between chats and flow sessions
- **Debounce override not propagated** (v2026.7.1) — debounce override configured in the test is now respected during flow execution

### Security (1)
- **Validation when creating a conversation** (v2026.7.5) — channel permission checked on the server when starting a conversation

---

::: info Total
**12 releases** this month!
:::
