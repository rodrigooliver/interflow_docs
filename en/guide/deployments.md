---
title: Requests
description: How to ask for a product change, pick an urgency, and follow credits, deadline, and status through to release.
---

# Requests

Ask for a new feature, an improvement, or a fix for a system error, and follow the request until it goes live.

::: tip Access
**Requests** menu.
:::

> Related: [Copilot](/en/guide/copilot)

## What it is

Each request becomes a card with status, deadline, and credits. The organization balance appears at the top of the page. Unused credits accumulate.

## How to create one

1. On **Requests**, click **New request**
2. Describe what you need in plain language
3. Click **Continue in the copilot**

The copilot must be in **Agent** or **Direct agent** mode to save. In **Ask** mode it only explains the path.

In the chat, the flow is:

1. It checks the documentation to see whether the product already does that
2. It looks for a similar request, finished or in progress. If it finds one, it tells you and continues only if you want
3. It checks the balance
4. It classifies the request and shows four urgency options, each with credits and a deadline
5. You pick the urgency in the chat
6. If the open screen shows the problem or the interface that will change, it takes a screenshot. A request that does not depend on the screen continues without one
7. It saves the request and returns the **See your request** link

You can also start from the copilot on any screen, without the button. The open page is stored on the request so the team knows where it came from.

If the balance does not cover the chosen urgency, the copilot opens credit purchase on the same page (**Buy**).

## Categories

The copilot picks the category from what you described.

| Category | When it applies |
|----------|-----------------|
| New feature | Something the system does not do yet |
| Improvement | A change to something that already exists |
| Bug fix | An error in a screen, button, or behavior of the system itself |
| Integration | Connecting to an outside system |
| Create AI agent | A new agent |
| Update AI agent | Changing an agent or a flow, including when it answers incorrectly |
| Interface | Look and use of a screen |
| Performance | Slowness |
| Security | Data protection |
| Other | Anything that does not fit above |

::: warning Bug fix
A bug fix covers an error in the system itself. An agent or flow that answers incorrectly goes under **Update AI agent**. Only a bug fix skips spending credits.
:::

A vague request, such as "I want to improve everything", is treated as a medium-sized improvement. Describe the result you expect and, when you can, a day-to-day example.

## Urgency

| Urgency | Effect |
|---------|--------|
| Low | Longer deadline and fewer credits |
| Medium | Reference deadline and credits |
| High | Faster delivery and more credits |
| Urgent | The fastest option and the highest cost |

The deadline also stretches when many requests are already in progress. The date shown in the chat is the estimate at quote time.

For a bug fix the amount is compensation: low urgency returns more credits when the team approves; high urgency returns less, because the fix goes to the front of the queue.

## Credits

The number at the top of **Requests** is the balance. Click it to open the history.

- **Available** = real balance minus what is already reserved on **pending** requests. A bug fix does not reserve
- On create, the system checks that available credits cover the chosen urgency
- Credits leave the balance when the team **approves**
- While the request is pending, the card shows the amount as an estimate
- If a request that was already charged is rejected, the amount returns to the balance
- A bug fix does not deduct. On approval, the team can **add** compensation credits
- Short on balance: use **Buy** on the same page

The plan deposits credits over time. The balance does not reset at the end of the month.

## Status

| Status | Meaning |
|--------|---------|
| Pending | Sent, waiting for the team to review |
| Approved | Accepted. Credits were charged, or added in the case of a bug fix |
| In development | The team is building it |
| In testing | Being validated |
| Deployed | Live. If there are usage notes, the card shows **View instructions** |
| Rejected | It will not be done. The reason appears in the details |

You are notified when the request is approved or rejected.

## After you send it

The list can be filtered by status, searched by text, and sorted by newest, most voted, or deadline.

On the card and in the details:

- **Vote** supports a request from the organization
- Comments live in the details, next to the description and attachments
- While it is **pending** and yours, you can **delete** it or **adjust the urgency**. Title, description, and category stay as they were sent
- You can attach a file (image, PDF, spreadsheet, video, and others, up to 50 MB each)

A screenshot taken by the copilot starts visible to you and the team. The team can release the image to everyone else.

## What happens after sending

Sending puts the request in the review queue. The change reaches the product after the team approves and finishes the work. The deadline on the card is the estimate for the urgency chosen at that moment.
