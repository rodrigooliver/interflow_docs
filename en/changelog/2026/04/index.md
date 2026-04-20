# April 2026

Updates for April 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.4.8](/en/changelog/2026/04/2026.4.8) | 04/20 | **Revenue split on already-paid installments** — 3 retroactive application modes; load splits from template; dedicated edit modal |
| [2026.4.7](/en/changelog/2026/04/2026.4.7) | 04/20 | **Schedule notifications for providers** — templates with recipient setting (client / provider / both); automatic creation and WhatsApp/email contact sync on every send |
| [2026.4.6](/en/changelog/2026/04/2026.4.6) | 04/20 | **Multiselect custom field** (multiple-choice list); **searchable dropdown** for all custom field selects; multiselect in the Update Customer node and AI Agent tool |
| [2026.4.5](/en/changelog/2026/04/2026.4.5) | 04/17 | **Attach files to customer notes** — images, PDFs, videos and documents linked to each note, with file gallery and automatic deletion |
| [2026.4.4](/en/changelog/2026/04/2026.4.4) | 04/17 | **"Call Another Flow" node** in the chatbot builder — modular flows with variable mapping and entry node selection |
| [2026.4.3](/en/changelog/2026/04/2026.4.3) | 04/16 | **Automatic flow on bulk campaigns** (wait for customer reply); **flow on WAHA call rejection** (immediate or wait for reply, rejection message now optional) |
| [2026.4.2](/en/changelog/2026/04/2026.4.2) | 04/03 | **Fix** false "channel disconnected" on bulk queue; **queue shortcuts** (distinct icons, Cmd/Ctrl new tab, realtime) |
| [2026.4.1](/en/changelog/2026/04/2026.4.1) | 04/01 | **AI Agent tools for customer data** (email, document, country, person type); system actions modal grouped by section; system context includes email, document and country |

---

## Monthly Summary

### 🐛 Bug Fixes (2)
- **Bulk send — disconnected channel** — channel connection status is re-checked on send and the queue query matches settings
- **Missing `installment_id` when adding an expense** (v2026.4.8) — fixed TypeScript type error when creating an expense on a contract

### ✨ New Features (13)
- **AI Agent tools for customer profile data** (v2026.4.1) — system actions to change email, document (tax ID with parameters and digit-only storage), country and person type; **Add action** modal organized by section (Customer, Service, Scheduling, Flow, Agent); customer context JSON for the model includes email, document and country
- **Bulk campaign queue shortcuts** (v2026.4.2) — distinct icons, Cmd/Ctrl to open in a new tab, realtime queue updates
- **Automatic flow on bulk message campaigns** (v2026.4.3) — when creating a text or media campaign, configure a flow that waits for the customer's reply to activate automatically
- **Flow on WAHA call rejection** (v2026.4.3) — two modes (immediate or wait for reply), rejection message is now optional, context instruction for AI agent supported in immediate mode
- **"Call Another Flow" node** (v2026.4.4) — new node in the chatbot builder to invoke an existing flow, with variable mapping between flows (`{{variable}}`), entry node selection, and automatic session transition
- **Multiselect custom field** (v2026.4.6) — new field type for selecting multiple options; normalized table storage for high performance; customer filters support multiselect via RPC `search_customers_v7`
- **Searchable dropdown for custom fields** (v2026.4.6) — single and multi-select fields replaced with a searchable component with visual tags on the customers screen and flow editor
- **Multiselect support in the "Update Customer" flow node** (v2026.4.6) — the visual flow editor recognizes multiselect fields and shows a searchable multi-select dropdown
- **Multiselect support in the AI Agent tool** (v2026.4.6) — the AI model can read and update multiselect fields; valid options are passed as an enum in the tool schema
- **Attach files to customer notes** (v2026.4.5) — upload any file type (images, PDFs, videos, documents) directly to customer notes; per-note file gallery with preview, text insertion and individual deletion; files are automatically removed when the note is deleted

- **Schedule notifications for providers** (v2026.4.7) — templates with recipient field (client / provider / both); notification customer auto-linked to the member on first run; WhatsApp and email synced on every cron execution if the provider changes their contact
- **Revenue split on already-paid installments** (v2026.4.8) — configure or fix splits even after payments are recorded; 3 retroactive application modes (all paid, paid without split, open only); load splits from template; dedicated edit modal

---

::: info 📝 Total
**8 releases** this month!
:::
