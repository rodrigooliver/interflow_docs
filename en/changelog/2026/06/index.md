# June 2026

Updates for June 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.6.2](/en/changelog/2026/06/2026.6.2) | 06/09 | **Automatic customer deletion by usage limit** — configurable in Limits, with "Run now" button and real-time progress; customers with POS orders can now be deleted |
| [2026.6.1](/en/changelog/2026/06/2026.6.1) | 06/08 | **WhatsApp Official template buttons now saved in history** — quick reply, URL and phone buttons correctly displayed in the chat after manual or bulk send |

---

## Monthly Summary

### ✨ New Features (2)
- **Automatic customer deletion by usage limit** (v2026.6.2) — configurable deletion in Settings > Limits (trigger %, target %, order by last contact or registration, linked conversations, run time), processed by the existing deletion queue
- **"Run now" button for automatic cleanups** (v2026.6.2) — triggers Customers or Storage cleanup immediately, with an "In progress..." state that blocks duplicate triggers

### 🔄 Changes (1)
- **Customers with POS orders can now be deleted** (v2026.6.2) — orders preserved in the sales history, only unlinked from the customer

### 🐛 Bug Fixes (1)
- **WhatsApp Official template buttons not displayed in chat** (v2026.6.1) — template buttons (quick reply, URL, phone) are now saved in the message `metadata` and rendered in the chat history; fixes both manual send and bulk campaign dispatch

---

::: info 📝 Total
**2 releases** this month!
:::
