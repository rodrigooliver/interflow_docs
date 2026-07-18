# Update Customer Address

Allows the AI to **save or update the customer address** in the record when they provide the details in the conversation (street, number, city, state, ZIP code, etc.) or send a **GPS location**.

**When to use:**
- Customer provides a delivery or billing address
- Customer sends a location pin on WhatsApp
- Update of an existing default address
- Address collection in order or visit flows

**What the AI can save:**
- Street and number (or full address line)
- Complement, city, state, and ZIP code
- Country and optional address label
- Latitude and longitude (GPS)
- Delivery/access instructions (e.g. intercom, gate)
- Address marked as default (updates the existing one or creates a new one)

**GPS location:**
- Accepts separate coordinates (`latitude` / `longitude`) or the location-message format (e.g. `-3.03, -59.98`)
- If only GPS arrives, the system tries to complete street, city, and related fields via reverse geocoding (Google Maps with a configured key, or Nominatim)

**Usage example:**
```text
👤 Customer: My address is 120 Flower St, apt 3, São Paulo - SP, ZIP 01310-100
🤖 AI: Done! I've saved that address to your record. Anything else you need?
```

```text
👤 Customer: [sends map location]
🤖 AI: Got your location — I've updated the address on your record.
```

::: tip 💡 Automatic context
Saved addresses are also included in the agent’s first **Customer info** context message, so the AI does not need to ask again.
:::

::: info ⚠️ Unique
This action can be added only once per agent.
:::

