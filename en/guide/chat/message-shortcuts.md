# Message Shortcut Sequences

Send multiple messages in order with a single shortcut, setting intervals between each for a natural conversation pace.

## What is it?

A **sequence shortcut** groups 2 to 10 messages that are sent automatically, one after another, respecting the configured interval between them. Each step can have its own text, attachments, and agent signature.

Shortcuts with **only one message** still work exactly as before.

## What is it for?

| Scenario | Example |
|----------|---------|
| Step-by-step greeting | Welcome message → introduction → opening question |
| Sending material | Intro text → PDF → usage instructions |
| Structured follow-up | Confirmation → details → call-to-action |

## Where to find it

| Area | Path |
|------|------|
| **Configure shortcuts** | Organization → Message Shortcuts |
| **Use in chat** | Type `/` in the message field and select the shortcut |

## Configure a sequence shortcut

1. Go to **Organization** → **Message Shortcuts**
2. Click **New Shortcut** or edit an existing one
3. In the **Messages** section, fill in the first step (text and attachments)
4. Click **Add message** to include more steps
5. In each step (except the last), set the **interval before the next**:
   - Options: 0.5s, 1s, 2s, 3s, 5s, 10s, 15s, or 30s
6. Check or uncheck **Sign message** per step if needed
7. Reorder with the move up/down buttons
8. Save

In the list, shortcuts with more than one message show a badge (e.g. `3 msgs`).

::: tip 💡 Compatibility
Shortcuts created before this version are automatically converted to the step format. No need to recreate them.
:::

## Use in chat

1. During a conversation, type `/` and choose the shortcut
2. If the shortcut has **more than one message**, a **review modal** opens:
   - Edit the text of any step
   - Remove attachments from specific steps (without changing the saved shortcut)
   - Adjust intervals between messages
3. Click **Send Sequence** or press **Enter**
4. Messages appear in chat in sequence, with the configured intervals

To cancel, use **Cancel sequence**, **ESC**, or click outside the modal.

::: info 📌 Message field
The normal typing field **stays visible** while the modal is open, so you keep conversation context.
:::

## Limitations

- Maximum of **10 messages** per shortcut
- Available intervals: 0.5s to 30s (fixed values)
- Editing in the modal **does not change** the saved shortcut — only the current send

## Related

- [Chat Interface](/en/guide/chat/interface) — support overview
- [Changelog v2026.7.4](/en/changelog/2026/07/2026.7.4) — details for this release
