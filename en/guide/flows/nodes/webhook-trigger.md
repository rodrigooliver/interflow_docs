# Node: Webhook Trigger

Receives events from external systems and automatically starts a flow.

## Overview

The **Webhook Trigger** node is the entry point for a flow activated by an external system via HTTP. Unlike the Start node (which requires user interaction), the Webhook Trigger is activated by an API call — from sales platforms, ERPs, CRMs or any service that sends data.

Use cases:

- Create or update a customer when a new order arrives from a store
- Start a welcome flow when a lead registers
- Route different actions based on the received event type
- Integrate with services like **Kiwify**, **Hotmart**, **Shopify** or any custom webhook

## How to add to a flow

1. In the flow builder, drag the **Webhook Trigger** node onto the canvas
2. Click the node to open the configuration panel
3. A unique URL will be generated automatically — copy it and set it up in the external system

## Configuration tabs

### Tab: General

#### Webhook URL

The URL is automatically generated in the format:

```
https://api.yourapp.com/webhooks/flow/{id}
```

Copy this URL and configure it in the external system as the webhook destination.

#### Variable Mappings

Map payload fields to flow variables:

| Body Field | Flow Variable |
|------------|---------------|
| `body.user.name` | `customer_name` |
| `body.order.total` | `order_amount` |
| `body.event` | `event_type` |

Use dot notation for nested fields and `[0]` for arrays:
- `body.data[0].email`
- `body.customer.address.city`

#### Save full body as JSON

Enable this option to save the entire payload to an `object` type variable. Useful for dynamic payloads or for inspecting the full content.

---

### Tab: Security

#### Authentication Type

| Type | Description |
|------|-------------|
| **Bearer** | Token in the `Authorization: Bearer <token>` header |
| **Custom header** | Token in a user-defined header name |
| **Query param** | Token as a URL parameter (`?token=xxx`) |
| **HMAC** | Cryptographic signature in the payload (see below) |
| **Public** | No authentication — accepts any call |

**Managing the token:**

- Click **Generate new token** to create a secure token automatically
- Or enter your own value in the text field and click **Save token**
- The token is stored **encrypted** in the database
- Click the eye icon to reveal the original token (admins only)

#### HMAC Authentication

Use when the external system sends a **cryptographic signature** of the payload (e.g. Kiwify, Hotmart):

| Field | Description |
|-------|-------------|
| **Algorithm** | SHA-1, SHA-256 or SHA-512 |
| **Signature source** | `query` (URL parameter) or `header` |
| **Parameter name** | Name of the query param or header containing the signature |
| **Secret** | The shared secret key with the external service |

Example for Kiwify:
- Algorithm: `SHA-1`
- Source: `query`
- Parameter: `signature`

#### IP Allowlist

List the allowed IPs (one per line). Calls from other IPs will be rejected with `403`. Leave empty to accept any IP.

#### Origin Allowlist

List the allowed domains. E.g. `https://app.kiwify.com.br`. Leave empty to accept any origin.

---

### Tab: Customer & Chat

Configure automatic creation/update of customers and chats based on webhook data.

#### Customer Binding

Enable the toggle and add customer fields:

1. Click **Add** to add a new mapping row
2. Select the **customer field** (Name, Email, Document, WhatsApp, etc.)
3. Enter the **body path** (e.g. `body.customer.email`)
4. Click the **search icon** 🔍 on fields used to **find** the customer

**Search logic (OR):** the system looks for any customer matching *at least one* of the fields with the search icon active. Enable the search icon on at least one field.

**Update rules when a customer is found:**

| Field | Rule |
|-------|------|
| **Name** | Always updated |
| **Email / Phone** | Updates the direct column if empty; otherwise adds to `customer_contacts` |
| **Document** | Updated only if currently empty |
| **WhatsApp, Instagram, Telegram** | Always added to `customer_contacts` (without overwriting) |

If no customer is found, a new one is created automatically with the mapped data.

#### Chat Binding

Enable the toggle and configure:

| Field | Description |
|-------|-------------|
| **Channel** | Channel to create the chat on (WhatsApp, email, Instagram, etc.) |
| **Contact path** | Where the number/email is in the body (e.g. `body.customer.phone`) |
| **Contact type** | `whatsapp`, `phone`, `email`, `instagram`, etc. |

The chat will be found or created automatically. The contact is also registered in `customer_contacts` if it doesn't exist yet.

::: tip
With Customer + Chat binding configured, the flow runs in **full mode** — able to send messages, wait for responses, etc. Without binding (or incomplete binding), the flow runs in **headless mode** (only nodes that don't depend on a chat are executed).
:::

---

### Tab: Events

Configure conditional routing based on a payload field.

#### Event Path

Enter where the event type is in the payload (e.g. `body.event`, `body.type`, `body.trigger`).

#### Cases

Add a case for each expected event type:

| Field | Description |
|-------|-------------|
| **Label** | Descriptive name (e.g. "Purchase approved") |
| **Value** | Exact event value (e.g. `purchase.approved`) — supports `{{variable}}` |

Each case generates an **orange output handle** on the node. A **gray (else) handle** is always created for unmapped events.

**Routing example:**

```
body.event = "purchase.approved"  →  handle "Purchase approved"
body.event = "purchase.refunded"  →  handle "Refund"
body.event = (anything else)      →  handle "else"
```

---

## "Listen" Mode — Real-Time Testing

The **Listen** mode waits for a real webhook to arrive and displays the data to make setup easier.

1. Click **Listen** in the node panel
2. Trigger a test webhook from the external system
3. Data appears in real time: body, headers, query params
4. The caller's IP and origin are shown as allowlist suggestions
5. Click **Map** next to any field to automatically add it to the variable mappings
6. Click the **copy** icon to copy the field path (e.g. `body.data[0].name`)

The **Logs** tab shows the history of recent incoming calls and also lets you map variables from previous calls.

---

## Behavior in the flow

### With Customer + Chat binding configured

The flow runs in **full mode**:
- All nodes execute normally
- The customer and chat are linked to the flow session
- You can send messages, wait for responses, etc.

### Without binding (or incomplete binding)

The flow runs in **headless mode**:
- Nodes that depend on a chat (send text, wait for input, etc.) are **skipped**
- Independent nodes (Variable, Update Customer, HTTP Request, etc.) **execute normally**

### Event-based routing

When the **Events** tab is configured:

1. The backend extracts the event field value from the payload
2. Compares it with the configured cases (interpolating variables if needed)
3. Routes to the matching handle
4. If no case matches, uses the **else** handle

---

## Usage Examples

### Kiwify Integration (HMAC SHA-1)

```
Authentication: HMAC
Algorithm: SHA-1
Source: query
Parameter: signature
Event path: body.event

Cases:
  "order_approved"  →  Start onboarding
  "order_refunded"  →  Cancel access
  else              →  Log unknown event
```

### New lead from a form

```
Mappings:
  body.name   → name
  body.email  → email
  body.phone  → phone

Customer Binding:
  Email ← body.email  [🔍 search]
  Name  ← body.name
  WhatsApp ← body.phone

Chat Binding:
  Channel: WhatsApp Official
  Contact: body.phone
  Type: whatsapp
```

---

## Tips

- Use **multiple search fields** (search icon) to avoid creating duplicate customers when the external system may send an email in one event and a phone number in another
- **Listen mode** is the fastest way to map variables — no need to manually edit paths
- Combine with the **Condition** node after the Webhook Trigger for more complex logic beyond simple event routing
- For public webhooks (no token), use the **IP allowlist** to ensure only the external server can trigger the flow

## Next Steps

- [Flow Builder](/en/guide/flows/builder)
- [Node Types](/en/guide/flows/nodes/)
- [Variables](/en/guide/flows/variables)
- [HTTP Request](/en/guide/flows/nodes/request)
