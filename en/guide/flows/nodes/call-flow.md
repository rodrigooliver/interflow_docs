# Node: Call Another Flow

End the current flow and automatically start another flow, maintaining the conversation context.

## Overview

The **Call Another Flow** node allows you to modularize your chatbot flows, dividing large flows into smaller, reusable parts. When this node is reached, the current flow session ends and another flow starts automatically — without the customer noticing the transition.

**Use cases:**

- Reuse a greeting, triage, or closing flow in multiple contexts
- Divide a complex flow into independent modules
- Pass data collected from one flow to another

## How to Add to a Flow

1. In the flow builder, drag the **Call Another Flow** node to the canvas (category **Actions**)
2. Click the node to open the configuration modal
3. Configure in 3 steps

## Configuration

### Step 1 — Flow

Select the flow you want to trigger. Use the search field to filter by name.

### Step 2 — Start Node

Choose which node the destination flow should start from. If not selected, the flow will start from the default node (`start`).

::: tip 💡 Flexibility
You can start the destination flow at any node, not necessarily the beginning. This allows creating different entry points for the same flow based on context.
:::

### Step 3 — Variables (optional)

Map variables you want to pass to the destination flow:

| Column | Description |
|--------|-------------|
| **Left** | Variable in the destination flow that will receive the value |
| **Right** | Value to be sent: fixed text or variable from the current flow |

**Mapping examples:**

```
customer_name  ←  {{customer_name}}      (passes current flow variable)
origin         ←  whatsapp               (fixed value)
description    ←  Order #{{order_id}}    (interpolates multiple variables)
```

## Behavior

When this node is reached during a conversation:

1. The current flow session is **automatically ended**
2. The destination flow is **started** with the mapped variables already available
3. The conversation continues seamlessly for the customer

::: warning ⚠️ Note
This node has no output — it is always a terminal node. After it, the destination flow takes over completely.
:::

## Practical Example

```
Main Flow (General Service)
├── Greeting → Triage
├── Customer wants technical support?
│   └── "Call Another Flow" node
│       └── Flow: "Technical Support"
│           └── Start node: "Collect problem data"
│           └── Variables: reason = "{{contact_reason}}"
└── Customer wants sales?
    └── "Call Another Flow" node
        └── Flow: "Sales Qualification"
```

## Best Practices

- ✅ Create modular flows for greeting, triage, and closing
- ✅ Use variable mapping to maintain context between flows
- ✅ Choose the correct entry node to avoid repeating steps
- ❌ Avoid creating loops (flow A calls B, which calls A again)

## Next Steps

- [Flow Builder](/en/guide/flows/builder) - Flow builder overview
- [Node Types](/en/guide/flows/nodes/) - All available nodes
- [Variables](/en/guide/flows/nodes/variable) - Working with variables
