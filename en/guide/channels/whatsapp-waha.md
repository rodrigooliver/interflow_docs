# WhatsApp WAHA

Connect your WhatsApp via QR Code for simplified service.

## Overview

WAHA integration allows you to use your regular WhatsApp number on the Interflow platform. It's a practical solution for small and medium businesses.

## Requirements

- [x] Active WhatsApp number
- [x] Phone with WhatsApp installed (for initial scanning)

## Advantages

| Feature | Description |
|---------|-------------|
| **Simple** | Connect via QR Code in minutes |
| **No Meta costs** | No per-conversation charges |
| **Groups** | WhatsApp groups support |
| **Full media** | Images, videos, audios, documents |
| **Sync** | Recover historical messages |

## Limitations

::: warning ATTENTION
This integration is not official from Meta and may be subject to blocks. Use in moderation and follow best practices.
:::

- Does not support approved templates
- Risk of blocking if used for spam
- Needs to keep session active

## Configuration

### Step 1: Add Channel

1. In Interflow, go to **Settings** → **Channels**
2. Click **"Add channel"**
3. Select **WhatsApp (WAHA)**

### Step 2: Scan QR Code

A QR Code will be displayed. Scan with your WhatsApp:

1. Open WhatsApp on your phone
2. Go to **Settings** → **Linked devices**
3. Click **"Link a device"**
4. Scan the QR Code

### Step 3: Confirm Connection

After scanning, status will change to **Connected**. You can now receive and send messages through Interflow.

## Keeping Session Active

To avoid disconnections:

- ✅ Keep phone connected to internet
- ✅ Don't manually disconnect the device
- ✅ Avoid using same number on other services
- ❌ Don't logout from WhatsApp on phone

## Message Sync

Recover historical WhatsApp messages that didn't enter automatically.

### How to use

1. Open a WAHA chat
2. Click on menu (⋮) → **"Sync Messages"**
3. Configure the period:
   - **Start Date** and **End Date**
   - Maximum limit: 3 days per sync
4. Click **"Sync"**

### What happens

- ✅ Fetches messages from selected period
- ✅ Syncs with original timestamp
- ⏭️ Ignores existing messages
- ✅ Updates correct status (sent, delivered, read)

::: tip 💡 When to use
Useful when you reconnected the channel and want to recover conversations that happened while disconnected.
:::

## WhatsApp Groups

Receive and respond to messages from WhatsApp groups.

### How it works

- 💬 Groups appear in conversation list
- 👤 Identifies who sent in the group
- ↩️ Respond directly to group
- 📊 Complete history preserved

### Permissions

| Setting | Description |
|---------|-------------|
| **Enable groups** | Admin can enable/disable per channel |
| **Restrict agents** | Agents can be blocked from groups |

### Limitations

- Only messages received after connection
- Cannot create groups through platform
- Admin needs to add number to group

## Best Practices

To avoid WhatsApp blocks:

### ✅ Do

- Send messages only to those who authorized
- Respond quickly to customers
- Use professional language
- Have a service schedule

### ❌ Avoid

- Sending unsolicited mass messages
- Using aggressive promotional language
- Sending many messages in sequence
- Starting conversations with strangers

## Reconnection

If channel disconnects:

1. Check status in **Channels**
2. Click on disconnected channel
3. Scan new QR Code
4. Wait for reconnection

::: tip TIP
If disconnections are frequent, check phone's internet connection and consider migrating to WhatsApp Business API.
:::

## Troubleshooting

### QR Code doesn't appear

- Clear browser cache
- Try in incognito window
- Check for firewall blocks

### Frequent disconnection

- Check phone's internet
- Update WhatsApp to latest version
- Avoid multiple connected sessions

### Messages don't arrive

- Confirm number is correct
- Verify channel is connected
- Check if webhooks are configured

## Next Steps

- [Chat Interface](/en/guide/chat/interface) - Use Quick WhatsApp Button
- [Flow Automation](/en/guide/flows/builder) - Automate services
- [AI Agents](/en/guide/ai-agents/) - AI to respond to groups
- [WhatsApp Business](/en/guide/channels/whatsapp-business) - Migrate to official API
