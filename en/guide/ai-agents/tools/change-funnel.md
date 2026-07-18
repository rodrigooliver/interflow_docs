# Change Funnel

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

