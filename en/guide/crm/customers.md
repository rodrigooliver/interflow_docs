# Customer Management

Manage all your customers centrally in Interflow CRM.

## Overview

Interflow CRM allows you to manage all your contacts in one place, with complete interaction history, custom fields, and tag segmentation.

## Accessing Customers

1. In the main menu, click **Customers**
2. You'll see the list of all registered customers
3. Use filters to find specific customers

## Customer Registration

### Standard Fields

| Field | Description | Required |
|-------|-------------|----------|
| **Name** | Customer's full name | Yes |
| **Email** | Contact email | No |
| **Phone** | Main number | No |
| **WhatsApp** | WhatsApp number | No |

### Creating a Customer Manually

1. Click **"New customer"**
2. Fill in the fields
3. Add tags (optional)
4. Click **"Save"**

### Automatic Creation

Customers are created automatically when:
- They start a conversation on any channel
- They are imported via spreadsheet
- They are created via API

### Duplicate Customer Blocking

The system automatically detects and blocks duplicate customer creation.

**How it works:**

1. When trying to create a customer with existing data
2. System checks existing records
3. If duplicate found, shows alert
4. Option to view existing customer
5. Or merge data into existing

**Detection criteria:**

| Field | Detection |
|-------|-----------|
| Phone | ✅ Exact (ignores formatting) |
| Email | ✅ Exact (case insensitive) |
| WhatsApp | ✅ Exact (normalized) |

**Options when duplicate found:**

- 🚫 New creation is blocked
- 🔗 Link to existing record shown
- 🔄 Option to merge data
- ✏️ Option to update existing

::: tip 💡 Configuration
Automatic merge can be disabled in **Settings → Customers → "Allow duplicates"**.
:::

## Customer Profile

When clicking on a customer, you access their complete profile:

### Information

- Contact data
- Custom fields
- Tags
- Registration date
- Last interaction

### Addresses

In customer edit, the **Addresses** section lets you manage one or more delivery or billing addresses.

**What you can do:**
- List saved addresses (with default indication)
- Create, edit, and delete addresses
- Enter street, number, complement, city, state, ZIP, and country
- Save GPS coordinates (latitude/longitude) and open in Google Maps

**How to add one:**
1. Open the customer and go to the **Addresses** section
2. Click **Add**
3. Fill in the fields and, optionally, the coordinates
4. Save

::: tip 💡 AI Agent
Addresses can also be written automatically by the **Update Customer Address** tool — see [AI Tools](/en/guide/ai-agents/tools#update-customer-address).
:::

### History

- All conversations
- Appointments
- Purchases/transactions
- Internal notes

### Actions

- Start new conversation
- Schedule task
- Add note
- Edit registration

## Search and Filters

### Quick Search

Type in search field to find customers by:
- Name
- Email
- Phone
- Tags

### Advanced Filters

| Filter | Description |
|--------|-------------|
| **Tags** | Filter by specific tags |
| **Channel** | By origin channel |
| **Date** | By registration period |
| **Fields** | By custom field values |
| **Status** | Active, inactive, etc. |

### Saving Filters

1. Configure desired filters
2. Click **"Save filter"**
3. Name the filter
4. Access quickly via selector

### Restricted Visibility for Agents

Agents see only customers from teams they're assigned to.

**Affected areas:**
- 📋 Customer list
- 🔍 Customer search
- 📊 Reports (filtered data)
- 📤 Exports (respects visibility)

::: warning ⚠️ Security
Administrators continue seeing all customers. This setting protects sensitive data between teams.
:::

## Customer Import

### Via Spreadsheet (CSV/Excel)

1. Go to **Customers** → **Import**
2. Download template spreadsheet
3. Fill with your data
4. Upload the file
5. Map fields
6. Confirm import

## Customer Export

1. Apply desired filters
2. Click **"Export"**
3. Select format (CSV, Excel, JSON)
4. Download file

::: warning ⚠️ Sensitive Data
If "Hide Contact Data from Agents" option is active, agents won't see email, phone and WhatsApp in exports.
:::

## Advanced Customer Reports

Generate reports with custom groupings and subdivisions:

1. In **Customers** → click **"Advanced Reports"** 📊
2. Click **"New Configuration"**
3. Follow the 5-step wizard:
   - **Step 1**: Upload JSON (export from customer list)
   - **Step 2**: Configure groupings (e.g., by Source, Status)
   - **Step 3**: Configure total column
   - **Step 4**: Configure subdivisions (e.g., reasons for not buying)
   - **Step 5**: Review and save

**Features:**
- Smart normalization (unifies variations)
- Real-time preview
- CSV export
- Reusable saved templates

See more in [Reports](/en/guide/reports/).

## Bulk Customer Deletion

Administrators and owners can delete multiple customers simultaneously, with the option to also delete all linked chats.

### How to use

1. Go to **Customers** and select the desired customers using the checkboxes
2. Click **"Delete selected"**
3. In the confirmation modal, check **"Also delete all linked chats"** (visible only to admin and owner)
4. Confirm the deletion

::: warning ⚠️ Irreversible
Messages, files, and flow sessions of all chats for the selected customers will be permanently deleted. POS orders are kept.
:::

### Items per Page

Choose how many customers to display per page in the listing:

- At the bottom of the list, select **10 per page** (default) or **50 per page**
- The list automatically reloads when you change the value

---


## Sales Funnel

In **CRM → Sales Funnel**, track customers by stage on a kanban board.

### Search customer by name

Use the search field at the top of the funnel to find a customer in any stage:

1. Type the name in **Search customer by name...**
2. Review results with **stage** (badge) and **position** (`#N of T`)
3. Click a result to open the customer **edit modal**
4. If the card is already loaded in the column, it is also highlighted on the board

::: tip 💡
Search covers the entire current funnel (not only loaded cards) and respects **Only mine** and **Hide closed**.
:::

> Changelog: [v2026.7.7](/en/changelog/2026/07/2026.7.7)

### Hide closed

Use **Hide closed** at the top of the funnel to hide customers whose **last conversation** is Closed (or marked as resolved).

1. Open the desired funnel
2. Enable **Hide closed**
3. Columns show only pending, in-progress, or no-conversation customers
4. Turn it off to see everyone again

::: tip 💡
This option does not delete data — it only filters the view. It works with **Only mine**.
:::

> Changelog: [v2026.7.6](/en/changelog/2026/07/2026.7.6)

## CRM Access Control

Granular control over who can see and access each customer in the CRM.

### Team Visibility (Agents)

Agents see only customers from teams they are assigned to:

- 📋 Customer list
- 🔍 Customer search
- 📊 Reports (filtered data)
- 📤 Exports (respects visibility)

::: info ℹ️ Administrators
Administrators continue to see all customers. This setting protects sensitive data between teams.
:::

### Permission-based Query

The multi-level security ensures that:
- Agents only query customers they have access permission to
- Reports are automatically filtered according to user profile
- Exports respect the same visibility rules as the interface

### Sensitive Data (Privacy)

Protect customer contact information for agents:

1. Go to **Settings → Customers**
2. Enable **"Hide customer contact data from agents"**
3. Agents won't see phone, email, and WhatsApp in lists and exports

---

## Customer Merge

When identifying duplicates:

1. Select duplicate customers
2. Click **"Merge"**
3. Choose which record to keep as primary
4. Confirm merge

::: tip TIP
Merge keeps complete history from both records.
:::

## Custom Fields

### Cascade Update in Select Fields

When renaming a custom field option of select type, all records are automatically updated.

**How it works:**

1. Access a customer → **Custom Fields**
2. Click ✏️ next to the field
3. Click ✏️ next to the option you want to rename
4. Type new value
5. Click **"Update"**

**What gets updated:**
- ✅ Field definition
- ✅ All customers using that option
- ✅ Shows how many records were affected

**Protections:**
- 🔒 Detects concurrent edits
- 🚫 Blocks duplicates
- ⚠️ Warns about conflicts

## Notes and Tasks

### Adding Notes

1. In customer profile, go to **Notes**
2. Click **"New note"**
3. Type content
4. Save

Notes are visible only to your team.

### Creating Tasks

1. In customer profile, click **"New task"**
2. Define:
   - Title
   - Description
   - Due date
   - Responsible
   - Priority
3. Save

## Next Steps

- [Reports](/en/guide/reports/) - Advanced customer reports
- [Settings](/en/guide/settings/) - Permissions and visibility
- [Chat](/en/guide/chat/interface) - Integrated service