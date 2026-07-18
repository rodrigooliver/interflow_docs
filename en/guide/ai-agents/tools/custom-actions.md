# Custom Actions

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
