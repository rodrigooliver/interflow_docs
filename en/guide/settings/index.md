# Settings

Manage all settings for your Interflow account.

## Overview

The Settings module centralizes all platform customization options, from personal preferences to global organization settings.

## Accessing Settings

1. In the main menu, click **Settings** (⚙️)
2. Navigate through available tabs
3. Changes are saved automatically or when clicking "Save"

## General Settings

### Organization Information

| Field | Description |
|-------|-------------|
| **Name** | Company/organization name |
| **Logo** | Logo displayed on platform |
| **Timezone** | Timezone for dates and times |
| **Default language** | Interface language |

### AI and Automation

Controls for artificial intelligence features:

| Option | Description |
|--------|-------------|
| **Disable AI Summary on Resolution** | Doesn't generate automatic summary when closing |
| **Disable AI Summary on Transfer** | Doesn't generate automatic summary when transferring |

::: tip 💡 Savings
Disabling automatic summaries saves API tokens. Summary field remains available for manual filling.
:::

## Service Settings

### Pause Flow When Attending

When an agent clicks "Attend" on a chat with active flow:

**Options:**
- **Enabled** ✅ = Always pauses automatically (no prompt)
- **Disabled** ❌ = Asks what to do when there's active flow

**Options modal (when disabled):**

| Option | What happens |
|--------|--------------|
| 🟡 **Pause Flow and Attend** | Pauses flow, agent takes over |
| 🔵 **Continue Flow and Attend** | Keeps flow active |
| ⚪ **Cancel** | Doesn't attend |

::: warning ⚠️ Attention
"Continue Flow" = Customer receives messages from agent AND flow!
:::

### Quick WhatsApp Button

Button to open customer's WhatsApp directly from chat, with automatic actions.

**How to configure:**

1. In **Settings** → **Service**, locate **"Quick WhatsApp Button"**
2. Enable toggle
3. Configure in modal:
   - **Default message** (use `{{customerName}}` for customer name)
   - **Custom field** to update (optional)
   - **Funnel stage** to move (optional)
   - **Tag** to add (optional)
4. Click **"Save"**

### Field Suggestions on Close

When agent closes service, system suggests unfilled fields.

**Configuration:**

1. Access **Settings** → **Service**
2. Locate **"Field Suggestions on Close"**
3. Select which fields should be suggested
4. Define which are required
5. Save

## Permissions and Security

### User Profiles

| Profile | Description |
|---------|-------------|
| `owner` | Account owner, full access |
| `admin` | Administrator, almost all access |
| `manager` | Manager, access to reports and supervision |
| `agent` | Standard agent |
| `agent_limited` | Agent with restrictions |
| `financial` | Access to financial module |
| `sales` | Salesperson |
| `medical_doctor` | Doctor (for clinics) |
| `medical_assistant` | Medical assistant |

### Hide Sensitive Data from Agents

Global setting to hide customer contact information from agents.

**How to configure:**

1. Access **Settings** → **General**
2. Locate **"Hide Contact Data from Agents"**
3. Enable toggle
4. Setting applied immediately

**Who sees data:**

| Profile | Access |
|---------|--------|
| Superadmin | ✅ Full access |
| Owner | ✅ Full access |
| Admin | ✅ Full access |
| **Agent** | ❌ Data hidden |

**What's hidden from agents:**

- ❌ Email, Phone, WhatsApp
- ❌ Contacts in export (CSV, Excel, JSON)
- ❌ Contacts in search results
- ❌ Contacts when starting chat
- ❌ External IDs from chat and messages
- ❌ Contacts section when editing customer

**What agents CAN do:**

- ✅ View and edit customer name
- ✅ View and manage tags
- ✅ View and edit custom fields
- ✅ Attend chats normally
- ✅ Send and receive messages

### Restricted Customer Visibility

Agents see only customers from teams they're assigned to.

**Affected areas:**
- 📋 Customer list
- 🔍 Customer search
- 📊 Reports (filtered data)
- 📤 Exports (respects visibility)

### Restricted Financial Menu

Financial menu is hidden for non-administrative profiles.

**Who has access to Financial module:**

| Profile | Access |
|---------|--------|
| `owner` | ✅ Full access |
| `admin` | ✅ Full access |
| `manager` | ✅ Read-only |
| `financial` | ✅ Full access |

## Team Settings

Manage teams, members, and **automatic round-robin distribution** under **Settings → Teams**.

Full guide: [Teams — Round-robin](/en/guide/teams/#automatic-round-robin-distribution)

### Agent Assignment by Administrator

Admins and owners can manage agent assignment in conversations without entering each one.

**What you can do:**
- ✅ Transfer conversation to another **team**
- ✅ Assign a **specific agent**
- ✅ Remove agent and leave conversation **pending** in queue
- ✅ Manage service directly from list

**Where to access:**

1. **Conversation List** - Three dots menu (⋮)
2. **Customer History** - Actions menu
3. **Inside Conversation** - Menu in top right corner

## Preference Settings

### Configurable Default Tab

Choose which tab opens first when entering the system.

1. Access **Settings** → **Preferences**
2. Locate **"Default Tab"**
3. Select preferred option:
   - 💬 Chats
   - 👥 Customers
   - 📅 Appointments
   - 📊 Dashboard
4. Save

::: tip 💡 Tip
This is a per-user setting. Each team member can configure their own.
:::

## Next Steps

- [Teams](/en/guide/teams/) - Round-robin and member management
- [AI Agents](/en/guide/ai-agents/) - Configure AI
- [Channels](/en/guide/channels/) - Configure service channels
- [Reports](/en/guide/reports/) - View metrics




