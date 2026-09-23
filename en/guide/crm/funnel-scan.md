# Funnel scan

The scan reads the conversation and decides whether the customer stays in the current stage or moves to an allowed stage.

::: tip Access
**CRM** → **Funnels** → **Scan**.
:::

> Changelog: [v2026.9.13](/en/changelog/2026/09/2026.9.13)

## What the read uses

Each decision receives:

- **Business context** — what the company sells and what counts as interest
- **Rules** — for example, interest only counts for this business; another topic goes to a named stage
- Today’s date and the date of each message
- The current stage
- Recent messages, in the mode you choose

The possible outcomes are **keep** or one of the **destination stages**. An automatic move happens only when the suggested stage is different, the probability clears the minimum, and the read is allowed to change that customer.

The interest line and the move reason use the organization’s model. Choosing the stage is a separate decision, limited to the configured options.

## Who enters the routine

The daily routine includes only customers who:

- Are in a selected **source stage**. With none selected, nobody enters
- Match the customer type and the minimum interactions, if those filters are on
- Had a new message since the last read **or** passed the **Review again after** delay

The default delay is **7 days**. The clock restarts after each read and also after a manual stage change. Leave the field empty to include only customers with a new message.

A recent manual change is not undone right away. On the routine, after the delay, that person is read again and can change stage.

## Message context

Next to the message count:

| Option | What is included |
|--------|------------------|
| Customer only | Customer messages only. The count uses those messages. This is the default |
| Customer and the last agent reply | Customer messages plus the newest agent reply |
| Customer and agent | Both sides, up to the limit |

## Queue

At the configured hour, the routine builds the queue from the saved filter and then reads **one customer at a time**. The filter is not applied again in the middle of the queue.

If several organizations share the same hour, they run in sequence. The one waiting shows **Waiting**. When one finishes, pauses, or fails, the next one starts. A manual start joins the same sequence.

On the queue you can:

- **Pause** and **Continue** without waiting for the next day
- **Retry failures** — only failed rows return; moved and kept stay as they are until a future routine
- Filter **Ready to transfer** — people with a chat, a suggested stage, and not yet moved
- **Transfer** after you confirm
- Open the **chat** and the **customer** in a modal
- **Reload**. The filter and page stay in the page address

Creating a queue for one stage uses that stage, even if it is not a routine source. **Start** on a row reads only that person.

## Limitations

- Without a source stage and a destination stage, the daily routine cannot be turned on
- The automatic read cannot pick a stage outside the destination list
- Someone already moved or kept in that queue returns only on a future routine, with a new message or after the delay
