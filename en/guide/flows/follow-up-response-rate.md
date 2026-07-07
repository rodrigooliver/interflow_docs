# Follow-up Response Rate

Track the effectiveness of the automatic follow-ups sent by your flows.

## What is it?

When a customer doesn't reply in time, Interflow can automatically trigger a **follow-up** in two ways:

- **"Wait for Response" node timeout**: the Input node has a configured wait time; if the customer doesn't reply within it, the flow continues through the **timeout** output, which usually sends a follow-up message
- **AI Agent reschedule**: an AI Agent action (`changeReturnDate`) reschedules the flow to resume at a future date/time, usually to attempt a new contact

As of v2026.7.3, every follow-up triggered by these two mechanisms is automatically recorded, and Interflow tracks whether the customer replied (and how long it took) within a configurable **response window**.

## What is it for?

- Know whether your follow-ups are actually **working** (generating replies) or being ignored
- Compare response rates **across flows** and **across nodes** within the same flow
- Track how the response rate evolves **over time** (daily/weekly/monthly)
- Get a **summarized indicator** on the sales funnel, without opening detailed reports

## What counts as a "response"?

Any message sent by the customer **after the follow-up was dispatched**, as long as it's within the configured **response window** (48 hours by default). If the customer doesn't reply within the window, the follow-up is marked as **expired** (no response).

| Status | Meaning |
|--------|---------|
| **Sent** | Follow-up dispatched, waiting for the customer to reply within the window |
| **Responded** | Customer sent a message within the response window |
| **Expired** | The response window ended without a reply from the customer |

## Configuring the response window

The response window can be set at two levels:

### 1. Global default (organization)

1. Go to **Settings → Organization**
2. Find the **Follow-up response window** field
3. Set the time in hours (default: **48 hours**)

This value is used for **all flows** that don't have a specific window configured.

### 2. Override per flow

1. Open the desired flow in the **Flow Builder**
2. Click the **gear icon** (⚙️) to open the flow settings
3. Fill in the **Follow-up response window** field with the desired value (in hours)
4. Leave it blank to use the organization's global default

::: tip 💡 When to override?
Flows with more urgent follow-ups (e.g., same-day appointment confirmation) can use a shorter window (e.g., 6h), while sales re-engagement flows can use longer windows (e.g., 72h).
:::

## Viewing the reports

### Detailed report per flow

1. Open the flow in the **Flow Builder**
2. Click **"Follow-up Analytics"** at the top of the editor
3. The panel shows:
   - The flow's **overall response rate** (responded ÷ sent)
   - **Distribution** by status (sent, responded, expired)
   - **Response rate by origin node** — to identify which points in the flow generate more effective follow-ups
   - **Evolution over time** — a chart with the response rate per period

### Sales Funnel indicator

In **CRM → Sales Funnel**, a summary card shows the organization-wide follow-up response rate, along with the total follow-ups sent and responded to in the period.

## Limitations and notes

- The follow-up must be triggered by one of the supported mechanisms (Input node timeout or AI Agent reschedule) to be counted — messages sent manually by an agent aren't included in this metric
- Changing the response window **doesn't affect** follow-ups already dispatched, only new ones
- Follow-ups triggered during a **flow test** (Flow Builder) are also tracked normally, letting you validate the behavior before publishing

## Next Steps

- [Flow Builder](/en/guide/flows/builder)
- [Node: Wait for Response](/en/guide/flows/nodes/input)
- [AI Agent](/en/guide/flows/nodes/agenteia)
- [Sales Funnel (CRM)](/en/guide/crm/customers)
