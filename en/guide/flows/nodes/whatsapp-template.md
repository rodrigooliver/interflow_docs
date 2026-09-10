# Node: WhatsApp Template

Send approved templates from flows running on WhatsApp Official channels.

## When to use it

WhatsApp Official allows direct messages for 24 hours after the customer's latest message. Outside this window, use an approved template.

Use the **Condition** node to choose the path:

1. Add the **WhatsApp 24-hour window** condition type
2. Choose **Is open** or **Is closed**
3. Connect each output to the appropriate action

This condition is evaluated only for **WhatsApp Official** channels. It is not applicable to other channel types.

## Configure the node

1. Drag **WhatsApp Template** from the **Send** category
2. Click the node to open its settings
3. Add a mapping
4. Select a WhatsApp Official channel
5. Select an approved template from that channel
6. Fill every template variable
7. Save the configuration

## Mappings by channel

Templates belong to the channel where they were registered. If the same flow can run on multiple official channels, add one mapping per channel.

At runtime, the node identifies the conversation channel and sends only its mapped template. If no mapping exists or the template is not approved, the flow uses the **Error** output when connected.

## Variables

Each `{{1}}`, `{{2}}`, and subsequent parameter accepts:

- Fixed text
- Flow variables
- Customer data available in the variable picker

Example:

```text
{{1}} = {{customer.name}}
{{2}} = {{order_number}}
```

## Example flow

```text
Condition: channel = WhatsApp Official
  └─ Condition: 24-hour window is open
       ├─ Yes → Text Message
       └─ Else → WhatsApp Template
```

## Restrictions

- Available only for WhatsApp Official channels
- Lists only approved templates
- Each template must belong to the conversation channel
- Not available in bulk silent campaign flows

## Next steps

- [Condition node](/en/guide/flows/nodes/condition)
- [Node Types](/en/guide/flows/nodes/)
- [WhatsApp Templates](/en/guide/channels/whatsapp-templates)
- [Changelog v2026.9.3](/en/changelog/2026/09/2026.9.3)
