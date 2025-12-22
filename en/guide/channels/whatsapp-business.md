# WhatsApp Business API

Integrate the official Meta WhatsApp Business API for professional customer support.

## Overview

WhatsApp Business API is Meta's official solution for companies that need support at scale. It is recommended for operations with high message volume.

## Requirements

Before you begin, you need:

- [x] **Verified Meta Business account**
- [x] **Dedicated phone number** (cannot be in use on regular WhatsApp)
- [x] **Company document** (Business registration or equivalent)

## Advantages

| Feature | Description |
|---------|-----------|
| **Official** | Meta-approved integration |
| **Stable** | High availability |
| **Templates** | Proactive messages for customers who haven't started a conversation |
| **Payments** | WhatsApp payments integration |
| **Multi-agent** | Multiple simultaneous agents |

## Configuration

### Step 1: Create Account on Meta Business Suite

1. Go to [business.facebook.com](https://business.facebook.com)
2. Create a Meta Business account
3. Complete business verification

<!-- Placeholder for screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Meta Business Suite</p>
</div>

### Step 2: Configure WhatsApp Business

1. In Meta Business Suite, go to **Accounts** → **WhatsApp Accounts**
2. Add a new WhatsApp Business account
3. Register your phone number
4. Complete verification

### Step 3: Connect on Interflow

1. In the left sidebar, click on **Channels**
2. Click on **"Add channel"**
3. Select the type **Official WhatsApp**
4. Follow the authentication flow
5. Select the number you want to connect

<!-- Placeholder for video -->
<div style="background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 48px;">▶️</span>
  <p style="color: white; margin-top: 8px; font-size: 18px;">Video: Configuring WhatsApp Business API (coming soon)</p>
</div>

## Message Templates

To start conversations with customers who haven't messaged you in the last 24 hours, you need to use approved templates.

### Accessing Templates

Templates are available within the channel editing. To access them:

1. In the left sidebar, click on **Channels**
2. Click on the WhatsApp channel you want to edit
3. In the page header, click on **Templates**

### Creating a Template

1. In the **Templates** tab of the channel
2. Click on **"New template"**
3. Fill in the fields:
   - Template name
   - Category (Marketing, Utility, Authentication)
   - Language
   - Message content
4. Submit for approval

### Template Example

```
Hello {{1}},

Your order #{{2}} has been confirmed and will be shipped soon.

Track it at: {{3}}

Thank you for shopping with us!
```

**Variables:**
- `{{1}}` = Customer name
- `{{2}}` = Order number
- `{{3}}` = Tracking link

### Approval Status

| Status | Meaning |
|--------|-------------|
| 🟡 **Pending** | Under review by Meta |
| 🟢 **Approved** | Ready to use |
| 🔴 **Rejected** | Needs adjustments |

::: tip TIP
Templates are approved faster when they follow Meta's policies. Avoid excessive promotional language.
:::

## 24-Hour Window

WhatsApp Business API has a service window rule:

- **Within 24h**: You can send any message
- **Outside 24h**: Only approved templates

```
Customer sends message → 24h window opens → Free conversation
                                          ↓
                              24h pass without response
                                          ↓
                              Window closes → Templates only
```

## Costs

WhatsApp Business API has per-conversation costs. Check the updated pricing table at [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing).

## Troubleshooting

### Number won't connect

1. Check if the number is not on another WhatsApp
2. Confirm that business verification is complete
3. Wait up to 24h after the request

### Rejected templates

Common reasons:
- Excessive promotional content
- Lack of clarity in purpose
- Use of prohibited language

### Messages not delivering

- Check if the recipient's number is correct
- Confirm that the customer has active WhatsApp
- Check if you're respecting the 24h window

## Next Steps

- [Automation with Flows](/en/guide/flows/builder)
- [Support Metrics](/en/guide/reports/support)
