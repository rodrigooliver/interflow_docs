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

### Step 2: Scan QR Code or use phone number

On the channel screen you can connect in two ways:

- **QR Code** — scan with WhatsApp on your phone
- **Phone number** — request a pairing code and enter it in WhatsApp

For QR Code:

1. Open WhatsApp on your phone
2. Go to **Settings** → **Linked devices**
3. Click **"Link a device"**
4. Scan the QR Code

### Step 2.1: Passkey verification (when WhatsApp asks)

Some WhatsApp accounts require a **passkey** when linking a new device. In that case, after the QR Code or pairing code, Interflow shows the verification step on the channel screen itself.

#### Browser extension

Verification uses a browser extension (required because confirmation must happen on the WhatsApp Web origin). Install it **before** connecting if the banner appears:

- [Chrome / Edge / Brave](https://chromewebstore.google.com/detail/ghpdcgnjffaaekflfpcgkgpbafmjldcp)
- [Firefox](https://addons.mozilla.org/firefox/addon/whatsapp-browser-extension/)

#### How to finish

1. When the screen asks for security verification, click **Confirm connection**
2. A WhatsApp Web tab opens with a confirmation card — click and use your device authenticator (Touch ID, Windows Hello, security key, etc.)
3. In some cases WhatsApp shows a **4-digit** code on the phone: check that it matches the screen and click **The code matches**
4. Wait until the status changes to **Connected**

::: tip Tip
Not every account asks for a passkey. If the channel connects with only the QR Code or pairing code, no extra step is needed.
:::

### Step 3: Confirm Connection

After scanning (and completing the passkey step, if requested), status will change to **Connected**. You can now receive and send messages through Interflow.

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

### Advanced Group Features

#### Add Participant as Customer

1. Open the group chat
2. Find a message from a participant (left side)
3. Click the **menu (⋯)** on the message
4. Select **"Add as customer"**
5. Complete registration and start a private conversation

#### Delete Messages from Others

Group administrators can delete inappropriate messages from other participants:

1. Click the menu (⋯) on the message
2. Select **"Delete message"**

#### Group Photo

The group photo is automatically displayed in the chat header.

#### Participant List

1. In the group chat header, click **"Participants"**
2. View all members
3. Use **"Add as customer"** for those with available numbers

::: info ℹ️ Privacy (Meta)
Some participants appear only with an identifier (@lid due to Meta policies). In those cases, use the message menu when the participant sends something in the group.
:::

### Block Media in Groups

Prevent receiving media (images, videos, etc.) in groups:

1. Go to **Settings** → **Channels** → your WAHA channel
2. Enable **"Block media in groups"**

### Close Group Conversation

You can close/resolve group conversations the same way as individual chats.

### Permissions

| Setting | Description |
|---------|-------------|
| **Enable groups** | Admin can enable/disable per channel |
| **Block media** | Prevents receiving files in groups |

### Limitations

- Only messages received after connection
- Cannot create groups through platform
- Admin needs to add number to group

---

## Auxiliary Channel for WhatsApp Official

If you use WhatsApp Official (Meta API), configure a WAHA auxiliary channel to overcome its natural limitations.

### What it's for

| Official Limitation | Solution via Auxiliary Channel |
|---------------------|--------------------------------|
| Doesn't record messages sent from phone | Captures echoes (`fromMe=true`) and records in history |
| 24h window expires and blocks free messages | "Send via Auxiliary Channel" button appears in chat footer |
| Doesn't support groups | Auxiliary channel can receive/reply to groups |
| Doesn't expose contact profile photos | WAHA fetches the photo automatically |

### How to configure

1. Go to **WhatsApp Official** channel settings
2. Scroll to **WAHA Auxiliary Channel** section
3. Click **"Add WAHA auxiliary channel"**
4. Scan the QR code with the phone's WhatsApp — **must be the same number as the official channel, in Coexistence Mode**
5. Adjust settings:
   - **Listen to customer messages** — disabled by default (avoids duplication with official)
   - **Listen to my messages** — enabled by default to capture echoes
   - **Enable groups** and **Block media in groups**

### Sending outside the 24h window

1. When the window expires, the chat footer shows **"Use Template"** and **"Send via Auxiliary Channel"**
2. Click **"Send via Auxiliary Channel"**
3. The full message input appears (text, files, audio, emoji)
4. The message is sent via WAHA and recorded normally in the chat history

::: tip 💡 Note
The auxiliary channel **doesn't appear in the general channel listing** — it's only visible inside the official channel settings.
:::

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

### The screen asks for a passkey, but the button is disabled

- Install the browser extension shown in the banner
- Reload the channel page after installing
- Use Chrome, Edge, Brave, or Firefox (extension detection depends on the browser)

### Passkey confirmation failed

- Complete the step in the WhatsApp Web tab (user interaction is required)
- Do not close the tab before authenticating
- If WhatsApp shows a 4-digit code, confirm it matches Interflow

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
