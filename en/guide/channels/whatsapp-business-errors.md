# WhatsApp Business API Errors — healthy ecosystem engagement and experiment

Error codes returned by Meta for Official WhatsApp (Cloud API). Interflow surfaces the message received from the API; the cause and resolution follow Meta's rules.

This page covers common send and delivery failures. Start from the code or the English message shown in the message status.

## Error index

| Code | Message (Meta) | Summary |
|------|----------------|---------|
| [130472](#130472--users-phone-number-is-part-of-an-experiment) | `Failed to send message because this user's phone number is part of an experiment` | Recipient is in Meta's marketing experiment |
| [131049](#131049--this-message-was-not-delivered-to-maintain-healthy-ecosystem-engagement) | `This message was not delivered to maintain healthy ecosystem engagement.` | Per-user marketing template limit |

Back to [WhatsApp Business API](/en/guide/channels/whatsapp-business).

## 130472 — User's phone number is part of an experiment

**Message:** `Failed to send message because this user's phone number is part of an experiment`

### What causes this error?

Meta periodically runs experiments to measure how messaging affects WhatsApp user experience and engagement. These experiments have **no fixed end date**, and businesses **cannot opt out**.

As part of this experiment, a **very small percentage** of WhatsApp users (earlier Meta documentation referenced about 1%) may be placed in a test group that **cannot receive Marketing templates** from businesses — unless an eligible conversation window is already open.

In those cases, the message is not delivered and the API returns error code **130472**.

::: warning Important
This error does **not** mean your WhatsApp account is blocked or has low quality. It only affects recipients who are in Meta's experimental group.
:::

### When is sending allowed?

Marketing templates can be sent normally if **one** of the following conditions is met:

- An open **customer service window (24 hours)** exists between the business and the customer
- An open **marketing conversation** already exists between the business and the customer
- An open **free entry point** conversation exists (for example, a Click-to-WhatsApp ad or equivalent entry flow)

### What happens when this error occurs?

| Effect | Detail |
|--------|--------|
| Delivery | The message is **not** delivered |
| Conversation | No conversation is created |
| Billing | Usually **not** charged when nothing is delivered |
| Webhook | Status `failed` with code `130472` |
| Retry | Resending the same template **without** an eligible window returns the same error |

### How to resolve it?

This restriction is enforced by Meta. **There is no Interflow setting** that bypasses the block.

If you must deliver the message:

1. Contact the customer through **another channel** (phone, email, SMS, etc.)
2. Ask them to **send a WhatsApp message** to your business
3. Once the 24-hour window is open, **resend** the template (or continue the conversation normally)

::: tip TIP
Do not keep retrying the same template in a loop: while the number remains in the experiment and no eligible window is open, error 130472 will repeat.
:::

### Official Meta references

- [WhatsApp Cloud API experiments](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/experiments)
- [WhatsApp error codes](https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes)

---

## 131049 — This message was not delivered to maintain healthy ecosystem engagement

**Message:** `This message was not delivered to maintain healthy ecosystem engagement.`

### What causes this error?

Meta enforces **per-user marketing template limits**: how many marketing messages a WhatsApp user can receive from **any business** in a period when they are less likely to engage.

The limit is **adaptive** and considers factors such as:

- Recent marketing message read rate
- How many messages are already in the user's inbox (personal and business)
- Overall engagement with marketing on WhatsApp

When the recipient is at the limit (or after excessive retries to a user who already hit the limit), the message is **not delivered** and the API / webhook returns code **131049**.

::: warning Important
- Mainly affects templates in the **Marketing** category
- Can happen on the **first** send from your business — the limit is recipient-level across all businesses
- Does **not** mean your WABA is banned or has low quality
- In some regions Meta may restrict marketing further (e.g. rules for users in the United States — check current Meta docs)
:::

### What happens when this error occurs?

| Effect | Detail |
|--------|--------|
| Delivery | The message is **not** delivered |
| Webhook | Status `failed` with code `131049` |
| Immediate retry | Likely fails again; repeated retries within 24h may extend unavailability for that user |
| Other customers | You can usually still send marketing to other numbers |
| 24h window | If the user replies to a marketing message, a customer service window opens; marketing **inside** that window **does not count** toward the limit |

### How to resolve it?

This decision is made by Meta. **There is no Interflow setting** that bypasses the per-user limit.

Recommendations:

1. **Wait at least 24 hours** before resending the same marketing template to that number (Meta's official guidance)
2. **Do not retry in a loop** — that can make delivery unavailable for that user for up to 24 hours
3. If the content is genuinely utility or authentication, use the correct template category (**Utility** / **Authentication**) — do **not** recategorize promo content as utility just to dodge the error
4. Ask the customer to **start the chat** (or reply) to open the 24-hour window
5. Segment campaigns toward engaged contacts and avoid excessive cold blasts

::: tip TIP
A `200` on the send call does **not** guarantee delivery. Always check the webhook status (`failed` + `131049`).
:::

### How to prevent it

- Space marketing sends to the same contact
- Prioritize leads with engagement (reads/replies)
- Keep opt-in hygiene and template quality high
- Monitor `131049` failure rates in campaigns

### Official Meta references

- [Per-user marketing template message limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits)
- [WhatsApp error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Next Steps

- [WhatsApp Business API](/en/guide/channels/whatsapp-business)
- [WhatsApp Templates](/en/guide/channels/whatsapp-templates)
- [Automation with Flows](/en/guide/flows/builder)
