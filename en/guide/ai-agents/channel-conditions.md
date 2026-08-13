# Channel and conditions on the AI Agent

The same AI Agent can serve several channels and adapt the prompt, extra contexts, and ready-made tools based on the **conversation origin**, the **funnel stage**, and the customer's **tags**.

Changelog: [v2026.8.8](/en/changelog/2026/08/2026.8.8)

---

## Channel in context

On every turn, the agent receives the current channel in the system context message:

- name (e.g. Sales WhatsApp)
- type (WhatsApp, Instagram, email, etc.)
- ID
- identifier (phone number, Instagram handle, email…)

The AI can tell conversations apart and adapt tone, offers, and transfers.

---

## Condition rules

The same rules apply to the prompt, extra contexts, and ready-made tools.

| Setup | Result |
|-------|--------|
| No filter | Always included |
| Several channels (or stages, or tags) | OR — one match is enough |
| Channel **and** funnel **and** tags | AND — every filled type must match |

Example: channels A and B + VIP tag → the condition holds if the channel is A or B **and** the customer has the VIP tag.

---

## If / else in the prompt text

On the **Context** tab, the editor has a branch button to insert a conditional block.

1. Pick channel, stage, and/or tags
2. Fill in the **if true** text
3. (Optional) fill in **if false**
4. The block is inserted; in the editor, `{{#if}}`, `{{else}}`, and `{{/if}}` are highlighted

Only the matching branch is sent to the AI. Without **if false**, the block is omitted when the condition does not match.

---

## Extra contexts

Each extra context can have **Show when**. Matching blocks are concatenated into **one text** at the end.

- No condition = always included
- WhatsApp list remains available as a template
- Blank type is for conditional texts (tone, rules, offers per channel)

---

## Ready-made tools

On each system action, use **Available when**. The tool is sent to the AI only if the condition matches.

Custom tools and the knowledge base **do not** use this filter in this version.

---

## Test

On the **Test** tab, open **Simulate context** and pick channel, stage, and tags. The test applies the same rules as a live conversation (if / else blocks and extra contexts).

---

## Limitations

- No nested if / else (several blocks in sequence are fine)
- Conditions do not apply to custom tools or the knowledge base yet
- The agent is still tied to channels through the **flow / trigger**; this feature does not create a direct prompt↔channel binding
