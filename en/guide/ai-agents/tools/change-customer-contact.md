# Update Customer Contact

Allows the AI to **save or update the customer’s phone, WhatsApp, or email** when they share the contact in the conversation.

**When to use:**
- Customer provides an additional phone or WhatsApp
- Update of the email shared in chat
- Contact collection in onboarding or confirmation flows

**Configuration:**
1. Add the **Update Customer Contact** action
2. Select the allowed types: phone, WhatsApp, and/or email
3. Save the prompt

::: tip 💡 Email
When the type is email, the value also updates the customer’s main email field.
:::

**Usage example:**
```text
👤 Customer: My WhatsApp is (11) 98888-7777
🤖 AI: Perfect! I've saved that WhatsApp to your record.
```

::: info ⚠️ Unique
This action can be added only once per agent.
:::

