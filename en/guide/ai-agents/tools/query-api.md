# Query API

Lets the AI **query and run operations on an external API** during support (base URL, encrypted authentication, and an allowlist of routes). Each route becomes a tool whose **name is the slug id** (e.g. `get_order`).

**When to use:**
- Look up order status, charges, inventory, or customer data in external systems
- Create/update records via REST API
- Expose only safe endpoints (allowlist), without open web search

**Setup:**
1. Add the **Query API** action
2. Set **Base URL** and auth type (Bearer, header, or query)
3. Save the key (**encrypted**, same pattern as Integrations)
4. Add routes: `id` (slug), description, method, path, and parameters — or use **Generate with AI**
5. Optional: **test each route** on the server before publishing

#### Generate routes with AI

When you add a new action (still without routes), the assistant **opens automatically**. You can:

- Describe in natural language what the agent should do
- Provide a **documentation URL** (optional)
- Paste **docs excerpts** or sample calls (`curl`)

AI builds **only the routes you need**, plus the action name, description, and slug. Review, adjust, and test before going live.

```text
Example description + curl:

I want to connect the Stripe API for support.
The agent should look up a customer by email and list open invoices.

curl -X GET "https://api.stripe.com/v1/customers?email=user@email.com" \
  -H "Authorization: Bearer $STRIPE_API_KEY"
```

::: tip 💡 Assistant with web search
**Generate with AI** uses web search **only while configuring**. In live chats the agent only calls the routes you allowed.
:::

#### Test routes

On each route, use **Test route**, fill sample parameters, and run. The test runs on the **server** (the key never goes to the browser). Last-test status shows as OK, Error, or Untested.

::: warning ⚠️ POST / PUT
Create or update tests may **create real data** in the external system. Testing every route is not required.
:::

::: info ⚠️ Secrets
The key never enters the tool schema or the model’s tool result. In the UI it appears masked (`••••`).
:::

**Example:**
```text
👤 Customer: What's the status of order 12345?
🤖 AI: [calls get_order] Your order 12345 is in transit.
```

> Changelog: [v2026.7.10](/en/changelog/2026/07/2026.7.10)

