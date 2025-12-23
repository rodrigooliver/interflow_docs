# AI Tools

Configure the actions your AI Agent can perform during conversations.

## Overview

Tools allow the AI to perform actions beyond simply responding to messages. With them, the agent can update records, transfer calls, create appointments, and much more.

## Types of Tools

There are two types of tools available:

### 1. Ready Actions (System)
Pre-configured Interflow actions, ready to use.

### 2. Custom Actions
Custom tools you create for specific integrations.

## Ready Actions

Ready actions are system tools that come pre-configured. Just add and customize according to your needs.

### Change Customer Name

Allows the AI to update the customer's name in the record during conversation.

**When to use:**
- Customer provides a different name than registered
- First interaction where the name is collected
- Correction of misspelled names

**Usage example:**
```text
👤 Customer: My name is John Smith, not John Santos
🤖 AI: Done, John! I've updated your record. How can I help you?
```

::: info ⚠️ Unique
This action can only be added once per agent.
:::

---

### Update Customer Data

Updates custom fields in the customer record.

**Configuration:**
1. Select the fields the AI can update
2. Define if they are required or optional
3. Save

**Available fields:**
- Custom fields created in Settings
- Standard system fields

**Usage example:**
```text
👤 Customer: My email is john@email.com
🤖 AI: Perfect! I've saved your email. I can send confirmations there now.
```

---

### Transfer to Team

Forwards the service to a human team.

**Configuration options:**

| Option | Description |
|--------|-------------|
| **Allowed teams** | Select which teams the AI can transfer to |
| **Pause agent** | Pauses the AI after transfer |
| **Skip related flow** | Doesn't execute flows linked to the team |
| **Generate summary** | Creates automatic conversation summary |

**Automatic Summary:**

When enabled, the summary includes:
- Reason for contact
- Main customer questions
- Steps already taken by AI
- Data collected during conversation

**Usage example:**
```text
👤 Customer: I need to speak to a human about a technical issue
🤖 AI: Got it! I'll transfer you to our technical support team. 
       One moment, please...

[System: Chat transferred to "Technical Support" with summary]
```

---

### Schedule

Creates new appointments directly through conversation.

**Configuration:**

| Field | Description |
|-------|-------------|
| **Calendar** | Select which calendar to use |
| **Services** | All or specific |
| **Professionals** | All or specific |
| **Operations** | Allowed operation types |

**Appointment flow:**
1. Customer requests appointment
2. AI checks available times
3. Customer chooses date/time
4. AI confirms and registers the appointment

**Usage example:**
```text
👤 Customer: I want to schedule an appointment
🤖 AI: Sure! We have availability Monday through Friday.
       What day and time do you prefer?

👤 Customer: Thursday at 2pm
🤖 AI: ✅ Appointment confirmed!
       📅 Thursday, December 26, 2025 at 2:00 PM
       I'll send a reminder 24h before!
```

---

### Confirm Appointment

Confirms existing customer appointments.

**Configuration:**
- **Calendar**: Select which calendar to query

**Behavior:**
- AI identifies customer's pending appointments
- Presents details for confirmation
- Marks as confirmed after acceptance

**Usage example:**
```text
🤖 AI: Hello! I see you have an appointment tomorrow at 10am.
       Can I confirm your attendance?

👤 Customer: Yes, confirmed
🤖 AI: Perfect! Your appointment is confirmed. See you tomorrow! ✅
```

---

### Change Funnel

Moves the customer between sales/service funnel stages.

**Configuration:**

| Field | Description |
|-------|-------------|
| **Source stages** | Which stages the customer can leave from |
| **Target stages** | Which stages they can be moved to |

**When to use:**
- Customer shows interest (move to "Qualified")
- Customer closes deal (move to "Sold")
- Customer asks not to be contacted (move to "Not interested")

**Usage example:**
```text
👤 Customer: I want to close the Pro plan
🤖 AI: Excellent choice! I'll record your decision and a consultant 
       will contact you to finalize.

[System: Customer moved to "Closing" stage]
```

---

### When Unable to Answer

Defines AI behavior when the answer isn't found in context.

**Options:**

| Option | Description |
|--------|-------------|
| **Pause agent** | Pauses AI and awaits human intervention |
| **Save question** | Records the question for later analysis |

**Why use:**
- Identify gaps in agent training
- Avoid made-up answers
- Collect FAQs to improve context

**Viewing saved questions:**
1. In the Context tab, click **"Questions"**
2. See all unanswered questions
3. Use to improve agent context

::: info ⚠️ Unique
This action can only be added once per agent.
:::

---

### Change Return Date

Reschedules the customer's automatic follow-up.

**Configuration:**
1. Select the return **Flow**
2. Select the return starting **Node**
3. Save

**When to use:**
- Customer mentions future date ("Call me next week")
- Customer can't talk now ("I'm busy")
- Follow-up rescheduling

**Usage example:**
```text
👤 Customer: Not now, call me Thursday
🤖 AI: No problem! I'll get in touch on Thursday. 
       Have a great day! 👋

[System: Follow-up rescheduled for Thursday]
```

---

## Custom Actions

Create customized tools for your business's specific needs.

### Tool Structure

Each custom tool has:

| Field | Description |
|-------|-------------|
| **Description** | What the tool does (used by AI to decide when to use it) |
| **Name** | Technical identifier (auto-generated) |
| **Parameters** | Data the AI should collect |
| **Actions** | What to execute when the tool is triggered |

### Creating a Tool

1. In the **Tools** tab, click **"Custom Action"**
2. Fill in the description (e.g., "Checks order status")
3. Name will be auto-generated (e.g., `checks_order_status`)
4. Add necessary parameters

### Configuring Parameters

Each parameter has:

| Field | Description |
|-------|-------------|
| **Name** | Parameter identifier |
| **Type** | string, number, boolean, etc. |
| **Description** | Explains what the parameter represents |
| **Required** | Whether the AI must always collect this data |
| **Allowed values** | List of valid options (optional) |

**Parameter example:**
```json
{
  "order_number": {
    "type": "string",
    "description": "Customer's order number",
    "required": true
  },
  "query_type": {
    "type": "string",
    "enum": ["status", "tracking", "invoice"],
    "description": "Type of information desired"
  }
}
```

### Configuring Actions

In the tool's **Actions** tab, define what happens when it's executed:

- **Go to flow node**: Directs to a specific node
- **HTTP Request**: Calls an external API
- **Update variable**: Modifies a flow variable

### Viewing JSON

Click the **JSON** button to see the tool in OpenAI format:

```json
{
  "name": "check_order_status",
  "description": "Checks customer order status",
  "strict": true,
  "parameters": {
    "type": "object",
    "properties": {
      "order_number": {
        "type": "string",
        "description": "Order number"
      }
    },
    "required": ["order_number"],
    "additionalProperties": false
  }
}
```

## Best Practices

### ✅ Do

- Use clear and specific descriptions
- Define parameters with correct types
- Test each tool before publishing
- Limit allowed values when possible
- Configure fallback actions

### ❌ Avoid

- Vague descriptions that confuse the AI
- Too many similar tools
- Unnecessary parameters
- Tools without defined actions

## Practical Examples

### Balance Inquiry

```json
{
  "name": "balance_inquiry",
  "description": "Checks available balance in customer account",
  "parameters": {
    "type": "object",
    "properties": {
      "balance_type": {
        "type": "string",
        "enum": ["available", "blocked", "total"],
        "description": "Type of balance to query"
      }
    },
    "required": []
  }
}
```

### Invoice Duplicate

```json
{
  "name": "invoice_duplicate",
  "description": "Generates duplicate invoice for payment",
  "parameters": {
    "type": "object",
    "properties": {
      "reference_month": {
        "type": "string",
        "description": "Invoice reference month (e.g., 01/2025)"
      },
      "send_via": {
        "type": "string",
        "enum": ["whatsapp", "email"],
        "description": "How to send the invoice"
      }
    },
    "required": ["reference_month"]
  }
}
```

### Address Update

```json
{
  "name": "update_address",
  "description": "Updates customer's delivery address",
  "parameters": {
    "type": "object",
    "properties": {
      "zip_code": {
        "type": "string",
        "description": "New address ZIP code"
      },
      "number": {
        "type": "string",
        "description": "House/building number"
      },
      "additional_info": {
        "type": "string",
        "description": "Additional info (apt, suite, etc.)"
      }
    },
    "required": ["zip_code", "number"]
  }
}
```

## Next Steps

- [AI Agents](/en/guide/ai-agents/) - Back to overview
- [Flows](/en/guide/flows/builder) - Configure agent flow
- [HTTP Request](/en/guide/flows/nodes/request) - Integrate with external APIs
- [Variables](/en/guide/flows/nodes/variable) - Manipulate collected data

