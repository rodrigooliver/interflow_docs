---
title: Copilot
description: In-app assistant for the signed-in user. It reads the current screen, the docs, and the data you can already see, and it only changes data in agent mode.
---

# Copilot

The copilot is your assistant inside Interflow. It answers how-to questions, reads what is on the screen, and, in agent mode, runs actions with the same permission as your account.

It does not talk to the customer in place of the [AI Agent](/en/guide/ai-agents/). The AI Agent handles the channel. The copilot helps the person operating the system.

::: tip Access
**Copilot** button, at the edge of the screen, on any app page.
:::

> Changelog: [v2026.9.14](/en/changelog/2026/09/2026.9.14)

## How to open it

1. Click **Copilot**
2. Pick the mode in the selector next to the message field
3. Write the request in plain language

If you are already in a conversation, that attendance is attached. You can remove the attachment. Outside a chat, ask by the customer name to find the conversation.

## Modes

| Mode | What it does |
|------|----------------|
| **Ask** | Read only. It does not save, send, or move a stage |
| **Agent** | It can change data, but the action stays proposed until you confirm it in the panel |
| **Direct agent** | It changes data immediately, without asking |

In ask mode, if you request a write or a send, it explains what it would do and asks you to switch modes. It does not claim the action already ran.

## What it can look up

- The open page: list, record, visible fields, and buttons
- Product documentation, with the page link
- Conversations by customer name, and messages on the attached attendance
- Tasks on projects you belong to, the schedule, funnels, tags, and customer fields

Lookups follow your access. What you cannot see in the system, it does not show.

When the answer is already on the screen, it points at the control instead of changing pages. If the path is in the menu, it indicates the item or opens the screen.

## What it can change

Only in **Agent** and **Direct agent**, and only if your account has that permission:

- Create, update, or delete a task. If there is more than one project or stage, it asks which one
- Look up, create, update, or delete an appointment
- Update customer data, including sale value and custom fields
- Add or remove a tag. It lists tags before saving
- Move the customer to a funnel stage, after matching what you said to funnel and stage names
- Send or schedule a message on the attached attendance
- Build and save an [AI agent](/en/guide/ai-agents/#create-with-copilot) with guided questions in the panel
- Open a [request](/en/guide/deployments) with a dedicated assistant that checks similar requests, quotes urgency, and saves the request
- Click and fill fields on the current screen. Passwords are not filled

Organization name, email, or WhatsApp change only for a superadmin.

If several customers share a similar name, it asks which one before opening.

## Dictate

Next to send, the microphone turns speech into text in the field. Usage is billed on AI credits as transcription and requires the ElevenLabs integration.

## Model and balance

In the menu next to the mode you can choose:

- The **model** (Interflow models, or DeepSeek and Gemini when the organization has that integration)
- Reasoning effort: **Low**, **Medium**, or **High**
- Who pays the call: **Interflow balance** or one of your integrations

On the Interflow balance, the conversation stops when AI credits run out. Usage shows in **Settings** → AI credits, as **Copilot**.

## Questions in the panel

When it needs a choice from you, the copilot shows options **below the chat** in a simple block. Tap an option or type your answer. One option may show a **Recommended** badge; you can follow it or pick another.

It asks **one question at a time**. Short text above the form only guides you; the question and buttons stay in the block.

## Create an AI agent

In **Agent** or **Direct agent** mode, say you want a new agent or describe the business and what it should do. An internal assistant handles only that:

1. Uses what you already said and asks only what is missing (business, audience, tone, what the agent may do on its own)
2. Builds the agent text
3. Summarizes the plan and asks you to confirm before saving
4. Creates the agent and its linked flow
5. Returns the **View agent** link

Answer from the panel questions or by typing in the chat. Step by step: [AI Agents — Create with copilot](/en/guide/ai-agents/#create-with-copilot).

## Create a change request

New features, improvements, or product fixes use another internal assistant. Full flow: [Requests](/en/guide/deployments#how-to-create). In short: it checks the docs, tells you if a similar request exists, and lets you follow, comment, or open a new request before saving.

## Saved conversations

At the top of the panel you can open recent chats, resume an old one, or delete. Deleting asks for confirmation **inside the copilot panel**.

## Limits

- It does not invent a task, appointment, project, stage, tag, or assignee
- It does not fill passwords
- It does not act beyond your account permission
- A very detailed record (customer, task board, schedule) may be opened on screen instead of edited field by field
- Large lists are read in parts. It does not dump a whole history at once
