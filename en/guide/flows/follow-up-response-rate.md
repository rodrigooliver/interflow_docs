# Checkpoint Node

Measure passage volume and response rate at specific points in your flow.

## What is it?

The **Checkpoint** node is a non-blocking node you explicitly place in the flow to record analytics events. Unlike the previous model (which tried to infer follow-ups automatically from the session timeout), the Checkpoint gives you full control over **where** and **what** to measure.

The node lives in the **📊 Statistics** category of the Flow Builder's side panel. When a conversation passes through it, the flow **continues immediately** to the next node — registration happens in the background without blocking the conversation.

## What is it for?

- Know **how many conversations pass** through a specific point in the flow (volume)
- Measure whether the customer **replies** within a configurable window after passing that point
- Capture a **snapshot of flow variables** at the moment of passage
- Compare performance **across different points** within the same flow
- Get a **summarized indicator** on the sales funnel without opening detailed reports

## Configuring the node

1. In the **Flow Builder**, open the **📊 Statistics** category
2. Drag the **Checkpoint** node onto the canvas
3. Connect the input (left) and output (right) in the flow
4. Click the node body to open settings:

| Option | Description | Default on create |
|--------|-------------|-------------------|
| **Track passage (volume)** | Records each passage as a volume event (`passed`) | Enabled |
| **Track customer response** | Starts the response window countdown; customer messages within the window mark as responded | Enabled |
| **Response window** | Time in minutes (fixed value) or numeric flow variable | 2880 min (48h) |
| **Save flow variables** | Stores a snapshot of variables at the moment of passage | Disabled |

::: tip 💡 Where to place it?
Place the Checkpoint **after** the node that sends the follow-up (or re-engagement) message and **before** the next branch in the flow. That way you measure exactly the impact of that message.
:::

### Response window

The window defines how long the system waits for the customer's reply after passing the checkpoint. It can be configured at three levels (in cascade):

1. **On the node itself** — fixed value in minutes or numeric flow variable (recommended)
2. **On the flow** — legacy `followup_response_window_hours` field (still accepted by the backend, but removed from the UI)
3. **On the organization** — in **Settings → Organization**, **Follow-up response window** field (default: 48h)

If no value is configured, the system uses **48 hours (2880 minutes)**.

## What counts as a "response"?

Any message sent by the customer **after passing the Checkpoint**, as long as it's within the configured **response window**. If the customer doesn't reply within the window, the event is marked as **expired** (no response).

| Status | Meaning |
|--------|---------|
| **Passed** (`passed`) | Volume recorded without tracking response (only "Track passage" enabled) |
| **Waiting** (`waiting`) | Checkpoint with response tracking active; waiting for customer message |
| **Responded** (`responded`) | Customer sent a message within the response window |
| **Expired** (`expired`) | The response window ended without a reply from the customer |

## Viewing reports

### Full flow report

1. Open the flow in the **Flow Builder**
2. Click **Follow-up Analytics** in the top bar
3. The panel shows:
   - **Recorded passages** and **follow-ups sent** (checkpoints with response tracking)
   - **Response rate** and **average response time**
   - **Evolution over time** — chart with the rate over the period
   - **By node** — table with node name, sent, responded, expired, and rate

### Single checkpoint report

1. On the **Checkpoint** node itself, click **View report for this point**
2. The panel opens already scoped to that node (the "By node" table is hidden)

### Available filters

- **Start / end date** — restricts the analyzed period
- **Service channel** — filters by specific channel
- **Assigned agent** — filters by agent assigned to the chat
- **Refresh** — button to manually reload data

### Sales Funnel indicator

In **CRM → Sales Funnel**, a summary card shows the organization-wide response rate with total events in the period.

## Change from the previous model

In v2026.7.3, automatic tracking coupled to **"Wait for Response" timeouts** and **AI Agent reschedules** was **removed**. That mechanism produced incorrect records by conflating response timeouts with other internal flow processes.

As of this version, **only explicitly placed Checkpoints** generate metrics. If you were using automatic follow-ups and want to keep measuring effectiveness, add a Checkpoint after each re-engagement message.

## Limitations and notes

- The node must be **published** in the flow to record events in production
- Changing the response window **does not affect** already recorded events, only new ones
- Events recorded during **flow testing** also count toward metrics
- Registration is **best-effort**: database failures never block the flow

## Next Steps

- [Flow Builder](/en/guide/flows/builder)
- [Node: Wait for Response](/en/guide/flows/nodes/input)
- [Sales Funnel (CRM)](/en/guide/crm/customers)
- [Changelog v2026.7.3](/en/changelog/2026/07/2026.7.3)
