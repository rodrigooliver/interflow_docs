# Run on a message

Run an AI Agent from **one message** in the chat, without starting a flow.

> Changelog: [v2026.8.23](/en/changelog/2026/08/2026.8.23)

## What it is for

- Classify or extract data from a single audio, email, or text
- Update the profile, tags, or funnel with the agent's tools
- Reply in the chat only if the agent is set to send messages

**Where to open it:** message menu (three-dot icon) → **Run AI agent**.

## How it differs from a flow

| In a flow | In this action |
|-----------|----------------|
| The agent reads the last N messages of the chat | Reads **only the selected message** |
| Creates or continues a flow session | **Does not** create a session and **does not** change a flow already active |
| Moves on to the next node | Stops when the agent finishes |

Date, channel, customer data, skills, knowledge base, and ready-made tools stay the same as on the prompt.

## How to use

1. Open the conversation
2. In the **customer** or **agent** message menu, click **Run AI agent**
3. Search for the agent (list is alphabetical)
4. Select and confirm

The action does **not** appear on a private note, a system event, or a scheduled chat.

## Sending messages

The prompt decides whether anything goes to the customer:

- **Send messages from the agent** on — the reply is posted in the chat
- Off — the agent only acts on the customer and the conversation (CRM, tags, transfer, create chat, and so on)

## Permission

Same rule as **starting a flow**: admin and owner always can. If the organization blocks flows while attending, other users also cannot run the agent in that case.

## Limits

- It does not walk flow nodes (`go to node`). The **Start flow** action, if present on the prompt, can still start a real flow
- Transfer to team or “unable to answer” does **not** pause a flow already active on the chat
