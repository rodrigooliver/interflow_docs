# August 2026

Updates for August 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.8.12](/en/changelog/2026/08/2026.8.12) | 08/25 | **Move or remove customers** — leave the funnel or move the batch to another stage |
| [2026.8.11](/en/changelog/2026/08/2026.8.11) | 08/25 | **Task templates** — reusable draft, automations/macros, and list columns |
| [2026.8.10](/en/changelog/2026/08/2026.8.10) | 08/25 | **WAHA new-contact protection** — channel stays connected, only first contact stops |
| [2026.8.9](/en/changelog/2026/08/2026.8.9) | 08/18 | **AI Agent signature** — same format as the text node, without the model reading it |
| [2026.8.8](/en/changelog/2026/08/2026.8.8) | 08/13 | **AI Agent by channel** — origin context and conditions in prompt, extras, and tools |
| [2026.8.7](/en/changelog/2026/08/2026.8.7) | 08/13 | **Expanded editor** — long messages full screen and Enter on mobile inserts a new line |
| [2026.8.6](/en/changelog/2026/08/2026.8.6) | 08/13 | **Channel by team** — who can start a conversation limited to selected teams |
| [2026.8.5](/en/changelog/2026/08/2026.8.5) | 08/13 | **Online / Away status** — pause support with optional automatic message |
| [2026.8.4](/en/changelog/2026/08/2026.8.4) | 08/12 | **Customer macros** — automation buttons and lead/client kind |
| [2026.8.3](/en/changelog/2026/08/2026.8.3) | 08/12 | **Schedule and hour bank** — real clock times, weekly overtime, and close to the bank |
| [2026.8.2](/en/changelog/2026/08/2026.8.2) | 08/11 | **Teams on invite** — select teams in the same user invite step |
| [2026.8.1](/en/changelog/2026/08/2026.8.1) | 08/07 | **Connections / Meta Lead Ads** — ad-level attribution, leads and customers per ad, forms without campaign mapping, pixels on the ad account |

---

## Month summary

### New Features (21)
- **Empty or move customers from a stage** (v2026.8.12) — column menu removes from the funnel or moves the batch to another stage
- **Task templates** (v2026.8.11) — per-project draft fills title, relative due date, assignees, and checklist
- **Templates in automations and macros** (v2026.8.11) — create a task from the draft; condition by template
- **Optional list columns** (v2026.8.11) — customer, stage, labels, and checklist; refresh button
- **Protection against WhatsApp new-contact blocks on WAHA** (v2026.8.10) — amber badge, warm chats continue, campaign pauses
- **Signature on AI Agent send** (v2026.8.9) — header or footer in metadata, without the model copying the text
- **Origin channel and conditions on the AI Agent** (v2026.8.8) — channel identifier in context, if/else in the prompt, conditional extras and ready-made tools
- **Expanded editor for long messages** (v2026.8.7) — larger field with formatting and AI; full screen on mobile
- **Restrict a channel by team** (v2026.8.6) — start a conversation only with the teams marked on the channel
- **Online / Away status** (v2026.8.5) — pause support, leave rotation, optional automatic message
- **Customer macros** (v2026.8.4) — buttons on the profile: actions, visibility, and ask on click
- **Lead or client kind** (v2026.8.4) — list filter and macro conditions/actions
- **Real schedule and 44h load** (v2026.8.3) — clock-in/lunch/clock-out times and 1 weekly overtime hour on close
- **Hour bank on period close** (v2026.8.3) — configurable policy (offset, bank, or pay OT)
- **HR settings and 4 punches** (v2026.8.3) — org settings, daily table with lunch punches and lateness
- **Teams when inviting a user** (v2026.8.2) — select and suggest teams in the same invite step
- **Connections hub as the main path** (v2026.8.1) — Meta Lead Ads centered in UTM
- **Lead attribution by ad** (v2026.8.1) — lead and customer tied to the ad, not the campaign
- **Leads and customers per ad** (v2026.8.1) — paginated pages from the ads list
- **Instant Forms without campaign mapping** (v2026.8.1) — fields and actions only; ad comes with the lead
- **Pixels on the ad account** (v2026.8.1) — sync and CAPI token at Ad Account level

### Fixes (4)
- **Enter on mobile sent the message** (v2026.8.7) — Enter inserts a new line; send with the button
- **Empty space in the AI improve modal** (v2026.8.7) — height follows the content on desktop
- **Customer not found when changing stage** (v2026.8.4) — funnel stage updates work again
- **Overtime showing as zero on a 9-hour day** (v2026.8.3) — 8:00–12:00 / 13:30–18:30 now yields 1 overtime hour per week
