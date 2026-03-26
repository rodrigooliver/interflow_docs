# March 2026

Updates for March 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.3.7](/en/changelog/2026/03/2026.3.7) | 03/25 | **Forward messages and typed initial message** – Forward from chat to a new service; API accepts text or media by URL; auto-attendance when creating with initial message; toast to open the new conversation |
| [2026.3.6](/en/changelog/2026/03/2026.3.6) | 03/24 | **Knowledge Base for AI Agent** – Register internal documents the AI automatically consults during service interactions, reducing tokens and improving accuracy |
| [2026.3.5](/en/changelog/2026/03/2026.3.5) | 03/24 | **Block Media in Groups** – Configure to not store photos, videos, audio and documents in WhatsApp groups and save space |
| [2026.3.4](/en/changelog/2026/03/2026.3.4) | 03/23 | **Volume Reports** – Track messages by agent and by team, with chart, period filters and printing |
| [2026.3.3](/en/changelog/2026/03/2026.3.3) | 03/20 | **Team Selection** – Choose the team when starting individual conversations, campaigns or via API |
| [2026.3.2](/en/changelog/2026/03/2026.3.2) | 03/16 | **WhatsApp Groups (WAHA)** – Add participant as customer, delete messages, group picture, participants list |
| [2026.3.1](/en/changelog/2026/03/2026.3.1) | 03/12 | **Billing Module** – Contracts, splits, payees, templates, Asaas gateway and manual payment recording |

---

## Monthly Summary

### ✨ New Features (7)
- **Forward messages and typed initial message** – Forward messages from chat to a new contact/channel; `POST /chat/create` accepts `initialMessage` as a string or object (text, image, video, audio, document with HTTPS URL); when creating with an initial message, the system may auto-attend or add you as collaborator; on forward, a toast with **Go to conversation** instead of an immediate redirect
- **Knowledge Base for AI Agent** – Dedicated space to register internal documents (policies, hours, FAQs, etc.) the AI automatically consults during service interactions via hybrid RAG (vector embeddings + keyword search). Each document becomes an automatic tool with no additional configuration
- **Block Media in Groups** – Option to not store photos, videos, audio and documents in WhatsApp groups, saving plan space and reducing risk of extra costs
- **Message Volume Reports** – New module with view by agent and by team: bar/line chart, flexible period filters (day/week/month/year/specific), clickable summary cards, and printing with automatic header. Access restricted to owners, admins, and managers
- **Team Selection When Starting a Conversation** – Choose the responsible team at the moment the service is created, whether individually, in campaigns or via API. The system follows an automatic fallback order when no team is selected
- **WhatsApp Groups (WAHA)** – Full experience in external groups: add as customer (message menu and participants list), delete messages (including from others), group picture, and participants modal
- **Billing Module** – Complete financial system with contracts, automatic revenue splits, templates, payees, payout report and Asaas integration

---

::: info 📝 Total
**7 releases** with **7 features** this month!
:::
