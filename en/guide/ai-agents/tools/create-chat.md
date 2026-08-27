# Create or continue chat

Opens a new conversation (or reuses the active chat) with the data the AI collected in the conversation.

> Changelog: [v2026.8.20](/en/changelog/2026/08/2026.8.20)

## What it is for

- A customer gives you a number to call — the AI opens WhatsApp (or continues the active chat) with the referral context
- An email arrives with name, phone, and other details — the AI starts the WhatsApp conversation from that data
- Qualify on Instagram and continue on WhatsApp, already with tags, funnel, and fields filled in

**Where to configure:** AI Agents → **Tools** tab → **Ready-made actions** → **Create or continue chat**.

## What is pre-set

| Field | Description |
|-------|-------------|
| **Channel** | Required. Defines the identifier the AI must collect (WhatsApp, email, Instagram, or Facebook) |
| **Team** | Optional. Team for the new conversation |
| **Start immediately** | Unofficial WhatsApp only (WAHA and similar). The flow starts as soon as the chat is created |
| **When the customer replies** | Any channel. The flow starts on the customer's first reply (on official WhatsApp, after the template) |
| **Context message** | Independent of the channel, funnel, and which flow you chose. Fixed text or written by the AI; the same text is used for both flows |
| **Funnel stage** | Optional. Moves the customer to the chosen stage after creating the chat |
| **Keep pending** | On by default. The new chat is not assigned automatically |
| **Initial message** | Unofficial WhatsApp channels (WAHA, EVO, W-API, Z-API). Fixed text or written by the AI |
| **Template** | Official WhatsApp. You pick an approved template from the channel (and its variables, if any) |

If an active chat already exists (`pending`, `in progress`, or `awaiting close`) for the same contact and channel, the system **reuses** that conversation.

## What the AI may ask

For each field (name, WhatsApp, email, phone, document, Instagram, Facebook, purchase value):

| Mode | Effect |
|------|--------|
| **Do not ask** | Not included in the tool |
| **Optional** | The AI may omit it; the tool still runs |
| **Required** | The AI must fill it before calling |

The identifier for the selected channel is **always required** (otherwise the chat cannot open).

The **context message** describes the new attendance. It does not depend on the channel or the funnel: you predefine the text or let the AI write it. With a flow, it contextualizes the immediate and/or reply flow; without a flow, it is stored on the chat as a note.

## Tags and custom fields

| Option | Effect |
|--------|--------|
| **Fixed tags** | Always applied; the AI does not choose |
| **AI chooses** | The AI picks from the tags you allow (or all organization tags) |
| **Field with a fixed value** | Written automatically; omitted from the AI schema |
| **Field set by the AI** | The AI fills it. For select / multi-select, only the configured options are valid |

## Examples

**Someone shares a number**

```text
👤 Customer: Please call John at +1 555 888 7777 — he decides
🤖 AI: Done — I opened John's WhatsApp conversation
       with the referral context.

[System: WhatsApp chat, context: "Referred by the current customer
 to talk about the Pro plan"]
```

**Email with customer details**

```text
📧 Subject: Quote — Maria Silva, +1 555 999 9999
🤖 AI: I registered Maria and started the WhatsApp conversation
       with the details from the email.

[System: WhatsApp chat, funnel "Qualified",
 context: "Email lead asked for a quote"]
```

## Limitations

- Initial message and immediate flow are only available on unofficial WhatsApp; official WhatsApp uses a template and, if you want, a reply flow
- Does not force a new ticket if an active chat already exists on the same channel and contact
- The model confirms the registration to the customer; the immediate flow starts in the background
