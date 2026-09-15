# September 2026

Updates for September 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.9.10](/en/changelog/2026/09/2026.9.10) | 09/15 | **Receivables, payables, and posted entries** — open obligations, statement, and posting a payment or receipt |
| [2026.9.9](/en/changelog/2026/09/2026.9.9) | 09/15 | **Team-to-team rotation** — the channel picks the team; transfer or leave can send to the queue |
| [2026.9.8](/en/changelog/2026/09/2026.9.8) | 09/14 | **Exclude tags in bulk send** — skip contacts with tags such as stop messages or opt out |
| [2026.9.7](/en/changelog/2026/09/2026.9.7) | 09/10 | **Cost centers** — expenses by area, entry filtering, and CSV reporting |
| [2026.9.6](/en/changelog/2026/09/2026.9.6) | 09/10 | **Financial reports** — cash flow, categories, and aging on cash registers you can access |
| [2026.9.5](/en/changelog/2026/09/2026.9.5) | 09/10 | **Audio on the AI Agent** — reply with a system voice, without TTS nodes |
| [2026.9.4](/en/changelog/2026/09/2026.9.4) | 09/10 | **List and day in columns** — by professional or schedule, with compact cards |
| [2026.9.3](/en/changelog/2026/09/2026.9.3) | 09/10 | **24-hour window and templates in flows** — official-channel condition and approved template sending |
| [2026.9.2](/en/changelog/2026/09/2026.9.2) | 09/10 | **Menu by module and search** — workspaces in the sidebar and ⌘K / Ctrl+K |
| [2026.9.1](/en/changelog/2026/09/2026.9.1) | 09/09 | **WAHA channel disconnected** — push to owner and admins with the name and number |

---

## Month summary

### New Features (15)
- **Receivables, payables, and posted entries** (v2026.9.10) — open obligations separate from the statement, with overdue, upcoming, and quick filters
- **Post a payment or receipt** (v2026.9.10) — paid amount, payment details, cash register, and who posted
- **Recurring series with an automatic buffer** (v2026.9.10) — initial occurrences and edits on all upcoming items not yet posted
- **Automatic team-to-team rotation** (v2026.9.9) — channel team queue on inbound chats and when transferring or leaving
- **Exclude tags in bulk messages** (v2026.9.8) — suppress recipients with opt-out tags, even if they match include filters
- **Cost centers** (v2026.9.7) — management, optional expense assignment, filtering, and a dedicated CSV report
- **Financial reports** (v2026.9.6) — cash flow, categories, receivables/payables, and per-register comparison, only for cash registers you can access
- **Audio on the AI Agent** (v2026.9.5) — system-voice reply, with audio, link, and probability rules
- **List and day in columns** (v2026.9.4) — split by professional or schedule, with compact cards and a hover panel
- **Start an unconfirmed appointment** (v2026.9.4) — skip confirmation and go straight to in progress
- **24-hour window in flows** (v2026.9.3) — route based on the customer's latest message on WhatsApp Official
- **WhatsApp Template node** (v2026.9.3) — templates and variables mapped per official channel
- **Menu by module** (v2026.9.2) — Inbox, Finance, POS, Billing, HR, and Medical records in the sidebar switcher
- **Menu search** (v2026.9.2) — ⌘K / Ctrl+K for pages and settings options
- **Alert when WhatsApp WAHA stays disconnected** (v2026.9.1) — push to owner and admins if the active session drops; ignores short restarts, QR, and manual disconnect

### Fixes (4)
- **Overdue by date** (v2026.9.10) — a late obligation appears under overdue even if the status is still pending
- **Totals and loading on filters** (v2026.9.10) — a date shortcut loads and totals follow the period
- **Audio and text in the same reply** (v2026.9.5) — the customer gets only the audio, with the transcription on the audio itself
- **Split columns remembered after refresh** (v2026.9.4) — the chosen professionals or schedules stay in the browser
