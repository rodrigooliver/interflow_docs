# April 2026

Updates for April 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.4.3](/en/changelog/2026/04/2026.4.3) | 04/16 | **Automatic flow on bulk campaigns** (wait for customer reply); **flow on WAHA call rejection** (immediate or wait for reply, rejection message now optional) |
| [2026.4.2](/en/changelog/2026/04/2026.4.2) | 04/03 | **Fix** false "channel disconnected" on bulk queue; **queue shortcuts** (distinct icons, Cmd/Ctrl new tab, realtime) |
| [2026.4.1](/en/changelog/2026/04/2026.4.1) | 04/01 | **AI Agent tools for customer data** (email, document, country, person type); system actions modal grouped by section; system context includes email, document and country |

---

## Monthly Summary

### 🐛 Bug Fixes (1)
- **Bulk send — disconnected channel** — channel connection status is re-checked on send and the queue query matches settings

### ✨ New Features (4)
- **AI Agent tools for customer profile data** (v2026.4.1) — system actions to change email, document (tax ID with parameters and digit-only storage), country and person type; **Add action** modal organized by section (Customer, Service, Scheduling, Flow, Agent); customer context JSON for the model includes email, document and country
- **Bulk campaign queue shortcuts** (v2026.4.2) — distinct icons, Cmd/Ctrl to open in a new tab, realtime queue updates
- **Automatic flow on bulk message campaigns** (v2026.4.3) — when creating a text or media campaign, configure a flow that waits for the customer's reply to activate automatically
- **Flow on WAHA call rejection** (v2026.4.3) — two modes (immediate or wait for reply), rejection message is now optional, context instruction for AI agent supported in immediate mode

---

::: info 📝 Total
**3 releases** this month!
:::
