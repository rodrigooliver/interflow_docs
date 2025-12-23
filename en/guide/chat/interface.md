# Chat Interface

Learn about the Interflow service interface and how to use all features.

## Overview

The Interflow chat interface is designed to maximize your service team's productivity, centralizing all conversations in a single screen.

## Interface Layout

The chat screen is divided into three main areas:

| Area | Location | Function |
|------|----------|----------|
| **Conversation List** | Left | All active conversations |
| **Message Area** | Center | Message history and sending |
| **Customer Panel** | Right | Customer information and actions |

## Conversation List

### Available Filters

- **All** - All conversations
- **Mine** - Assigned to you
- **Unassigned** - Waiting for agent
- **On hold** - Waiting for customer response
- **Closed** - Finished conversations

### Custom Filters

Create custom filters to organize your conversations:

1. Click ⚙️ in the filter bar
2. Click **"New Filter"** or duplicate an existing one
3. Configure criteria:
   - **Teams**: Select one or multiple teams
   - **Tags**: Filter by specific tags
   - **Channel**: WhatsApp, Instagram, etc.
   - **Status**: In progress, pending, etc.
4. Customize name, icon and **color** (expanded palette available!)
5. Save

::: tip 💡 Tip
You can filter by **multiple teams** simultaneously! Useful for supervisors managing several teams.
:::

### Conversation Search

Search conversations by customer's **phone number**:

- ✅ `5511999999999` (complete with country code)
- ✅ `11999999999` (with area code)
- ✅ `999999999` (number only)
- ✅ `+55 11 99999-9999` (formatted)

### Page Navigation

Navigate directly to a specific page:

1. At the bottom of the list, click on the page number field
2. Type the desired page number
3. Press Enter

### Conversation Status

| Icon | Status |
|------|--------|
| 🟢 | Active - waiting for service |
| 🟡 | On hold - waiting for customer |
| 🔵 | In service |
| ⚪ | Finished |

### Multiple Chats Indicator

When a customer has multiple active conversations:

- 🔴 Badge appears next to customer name
- Shows number of parallel chats
- Click to see list of active conversations
- Quick navigation between chats

### Sorting

- By last message date
- By wait time
- By priority

## Message Area

### Components

- **Header** - Customer name, channel, status, Quick WhatsApp button
- **Pinned Messages** - Important messages at the top
- **History** - All exchanged messages
- **Text field** - For typing messages
- **Attachments** - Send files
- **Emojis** - Emoji selector
- **Quick replies** - Message shortcuts
- **AI Commands** - AI shortcuts (Ctrl+J)

### Pinned Messages

Highlight important information by pinning messages at the top of the chat:

**How to pin:**
1. Hover over the message
2. Click on three dots (⋮)
3. Select **"Pin message"**

**Features:**
- 📌 Messages appear at the top of the chat
- 🔢 Pinned message counter
- 🟡 Yellow background for pinned private notes
- ➜ "Go to message" button (navigates to original)
- 🔄 Real-time updates

**How to unpin:**
- Click **X** in the pinned list, or
- Message menu → **"Unpin message"**

### Message Indicators

| Indicator | Meaning |
|-----------|---------|
| ✓ | Sent |
| ✓✓ | Delivered |
| ✓✓ (blue) | Read |
| ⏳ | Sending |
| ❌ | Send error |

## Customer Panel

### Displayed Information

- Name and photo
- Contact channels
- Tags
- Custom fields
- Conversation history
- Internal notes
- **Field indicator** - Shows which fields are filled

### Registration Field Indicator

Visual showing field fill status:

- ✅ Green icon = Filled field
- ⚠️ Yellow icon = Missing field
- 🔴 Red icon = Required and missing

### Available Actions

- **Edit customer** - Update data
- **Add tag** - Apply tags
- **New note** - Add annotation
- **View history** - Previous conversations
- **Create task** - Schedule follow-up

## Service Actions

### Take Conversation

To serve an unassigned conversation:
1. Click on the conversation
2. Click **"Take"**
3. Conversation will be assigned to you

**If there's an active flow**, you can choose:
- 🟡 **Pause Flow and Attend** - Pauses flow, you take over
- 🔵 **Continue Flow and Attend** - Keeps flow active (duplicate messages!)
- ⚪ **Cancel** - Don't attend

### Assignment by Administrator

Admins can manage assignments without entering each conversation:

1. In conversation list, click menu (⋮)
2. Select **"Transfer Agent/Team"**
3. Choose:
   - **No agent**: Conversation stays pending in queue
   - **Specific agent**: Directly assigned

### Transfer Conversation

To pass a conversation to another agent:
1. Click transfer icon
2. Select destination (agent or team)
3. Add a note (optional)
4. Confirm

### Archive Conversation

You can archive conversations that are **"In progress"**:

- Archive active conversations to organize your list
- When customer sends new message, conversation is **automatically unarchived**
- No important message is lost

### Close Service

When completing a service:
1. Click **"Close"**
2. Select closure reason
3. **Field suggestion**: System suggests unfilled fields
4. Fill suggested fields (optional or required)
5. Add notes (optional)
6. Confirm

## Internal Notes

Add annotations visible only to the team:

1. In customer panel, click **"Note"**
2. Type annotation
3. Save

Notes appear in history with visual highlight.

### Deleting Private Notes

You can delete notes sent by mistake:

1. Hover over the note
2. Click menu (⋮)
3. Select **"Delete message"**
4. Confirm

**Rules:**
- ✅ Only author can delete
- ✅ Admins can delete any note
- ❌ Customer messages cannot be deleted
- 🕐 Log preserved for audit

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Send message |
| `Shift+Enter` | New line |
| `Esc` | Close conversation |
| `/` | Open quick replies |
| `Ctrl+K` | Search conversation |
| `Ctrl+J` | Open AI commands |

## Text Enhancer (Ctrl+J)

Improve your messages with AI directly from text field:

1. Press `Ctrl+J` or type `/`
2. Select desired action (improve, formalize, translate, etc.)
3. AI processes and inserts result

**Available actions:**
- **Improve** - Improves clarity and grammar
- **Formalize** - Makes text more professional
- **Simplify** - Simplifies complex texts
- **Translate** - Translates to another language

::: tip 💡 Custom Commands
Create your own AI commands! See full documentation at [Text Enhancer](/en/guide/chat/text-enhancer).
:::

## Quick WhatsApp Button

Open customer's WhatsApp directly from chat with automatic actions:

1. In chat header, click green WhatsApp button
2. New tab opens with pre-configured message
3. Automatic actions are executed (field, funnel, tag)

::: warning ⚠️ Important
Button only appears in WhatsApp channel chats (WAHA, W-API, Official WhatsApp).
:::

Configure in **Settings > Service > Quick WhatsApp Button**.

## Next Steps

- [Text Enhancer](/en/guide/chat/text-enhancer) - Custom AI commands
- [AI Agents](/en/guide/ai-agents/) - Autonomous AI for service
- [Schedule](/en/guide/schedule/) - Integrated appointments
- [Settings](/en/guide/settings/) - Customize interface
