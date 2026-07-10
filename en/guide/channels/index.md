# Support Channels

Configure and manage your communication channels in Interflow.

## Overview

Interflow supports multiple communication channels, allowing you to centralize all customer support in a single platform.

## Available Channels

### 📱 WhatsApp

| Integration | Description | Recommended for |
|------------|-----------|---------------|
| [WhatsApp Business API](/en/guide/channels/whatsapp-business) | Official Meta integration | High volume companies |
| [WhatsApp WAHA](/en/guide/channels/whatsapp-waha) | Via QR Code session | Small businesses |

### 📷 Instagram

| Integration | Description |
|------------|-----------|
| [Instagram Direct](/en/guide/channels/instagram) | Instagram direct messages |

### 💬 Facebook

| Integration | Description |
|------------|-----------|
| [Facebook Messenger](/en/guide/channels/facebook) | Facebook page messages |

### 📧 Email

| Integration | Description |
|------------|-----------|
| [Email IMAP/SMTP](/en/guide/channels/email) | Email server integration |

---

## Channel Comparison

| Feature | WhatsApp API | WhatsApp WAHA | Instagram | Facebook | Email |
|---------|--------------|---------------|-----------|----------|-------|
| Text messages | ✅ | ✅ | ✅ | ✅ | ✅ |
| Images | ✅ | ✅ | ✅ | ✅ | ✅ |
| Videos | ✅ | ✅ | ✅ | ✅ | ✅ |
| Audio | ✅ | ✅ | ❌ | ✅ | ❌ |
| Documents | ✅ | ✅ | ❌ | ✅ | ✅ |
| Location | ✅ | ✅ | ❌ | ❌ | ❌ |
| Templates | ✅ | ❌ | ❌ | ❌ | ❌ |
| Groups | ❌ | ✅ | ❌ | ❌ | ❌ |

---

## Adding a Channel

### General Step by Step

1. In the left sidebar, click on **Channels**
2. Click on **"Add channel"**
3. Select the desired channel type
4. Follow the specific instructions for each type
5. Test the connection

![Add channel](/images/guide/channels/add_channel_en.png)

---

## Channel Status

Each channel has status indicators:

| Status | Meaning |
|--------|-------------|
| 🟢 **Connected** | Channel working normally |
| 🟡 **Reconnecting** | Trying to reestablish connection |
| 🔴 **Disconnected** | Channel offline, needs action |

---

## Visibility when starting a conversation

Define **who can use each channel** when starting a new conversation with a customer (everyone, by role, or specific users). Auxiliary channels are not included in that list.

> Full guide: [Restrict channels when starting a conversation](/en/guide/channels/start-chat-visibility)

---

## Next Steps

Choose the channel you want to configure:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/en/guide/channels/whatsapp-business" style="text-decoration: none;">
  <div style="background: #25D366; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📱</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">WhatsApp Business</p>
  </div>
</a>

<a href="/en/guide/channels/whatsapp-waha" style="text-decoration: none;">
  <div style="background: #128C7E; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📲</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">WhatsApp WAHA</p>
  </div>
</a>

<a href="/en/guide/channels/instagram" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📷</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Instagram</p>
  </div>
</a>

<a href="/en/guide/channels/facebook" style="text-decoration: none;">
  <div style="background: #1877F2; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">💬</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Facebook</p>
  </div>
</a>

<a href="/en/guide/channels/email" style="text-decoration: none;">
  <div style="background: #EA4335; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📧</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Email</p>
  </div>
</a>

</div>
