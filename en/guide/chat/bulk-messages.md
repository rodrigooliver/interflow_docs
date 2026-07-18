# Bulk Messages

Run campaigns for customer segments: direct message, WAHA flow, or **silent flow** on the last chat.

::: tip Access
Sidebar → **Bulk messages**. Requires `bulkMessages`.
:::

## Send modes

| Mode | Behavior | Notes |
|------|-----------|------------|
| `message` | Send text/template | Official templates must be **APPROVED** |
| `flow` | Start a `general` flow via WAHA | Delay ≥ 20s recommended |
| `silent_flow` | Run `bulk_silent` on the customer's **last chat** with **no** outbound message | Delay ≥ 5s; media/text/input nodes blocked |

## Create a campaign

1. Open **Bulk messages** → **New**
2. Choose send mode and audience filters (channel, tags, CRM stages, status…)
3. Configure message/template/flow and interval
4. Start — you can pause or cancel later

::: warning Silent flows
`bulk_silent` does not talk to the contact. Use it for CRM updates, tasks, webhooks, etc.
:::

## Related

- [WhatsApp templates](/en/guide/channels/whatsapp-templates)
- [Tags](/en/guide/chat/tags)
- [CRM funnels](/en/guide/crm/funnels)
