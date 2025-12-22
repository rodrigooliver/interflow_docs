# Quick Start

This guide will help you set up Interflow in just a few minutes.

::: tip ESTIMATED TIME
⏱️ **5-10 minutes** for basic setup
:::

## Step 1: Create Your Account

Go to [app.interflow.chat/signup](https://app.interflow.chat/signup) to start registration.

![Signup screen](/images/guide/dashboard/signup_en.png)

Fill in the following information:
- **Full name**
- **Organization name** (name that will appear on the platform)
- **Email** (will be used for login)
- **WhatsApp** (valid number for verification)
- **Password** (minimum 8 characters)

After confirming your email, you will have access to the dashboard.

## Step 2: Connect a Channel

Now let's connect your first communication channel.

### Available options:

::: details WhatsApp Business API (Recommended)
**Requirements:**
- Verified Meta Business account
- Dedicated phone number

**Advantages:**
- Official and stable
- Bulk messages (templates)
- Product catalog
- Payments

[See complete guide →](/en/guide/channels/whatsapp-business)
:::

::: details WhatsApp (WAHA)
**Requirements:**
- Regular WhatsApp number
- Active session maintained

**Advantages:**
- Quick setup
- No API costs
- Works with personal number

[See complete guide →](/en/guide/channels/whatsapp-waha)
:::

::: details Instagram
**Requirements:**
- Business or Creator account
- Linked Facebook Page

[See complete guide →](/en/guide/channels/instagram)
:::

::: details Facebook Messenger
**Requirements:**
- Facebook Page

[See complete guide →](/en/guide/channels/facebook)
:::

::: details Email
**Requirements:**
- IMAP/SMTP server
- Access credentials

[See complete guide →](/en/guide/channels/email)
:::

## Step 3: Configure AI Agent (Optional)

Set up an artificial intelligence agent to automate and assist with customer service.

1. Go to **AI Agent** in the sidebar
2. Choose one of the configuration options:

### Creation options:

| Method | Description |
|--------|-------------|
| **Manual Prompt** | Write the agent's instructions and behavior directly |
| **Guided Assistant** | Answer questions and let AI create the prompt automatically |

![AI Agent Configuration](/images/guide/agentIA/agent_ia_en.png)

::: info INCLUDED TOKENS
According to your plan, you have access to **tokens starting from 2 million per month**. If this limit is not enough for your operation, you can connect your own OpenAI account.

[Learn how to integrate your OpenAI account →](/en/guide/integrations/openai)
:::

## Step 4: Invite Your Team

Add team members to start serving customers.

1. Go to **Users** in the left sidebar
2. Click on **"Invite Team"**
3. Enter the email and select the access profile

### Available profiles:

| Profile | Permissions |
|---------|-------------|
| **Administrator** | Full access to the organization |
| **Manager** | Manages teams and views reports |
| **Agent** | Handles conversations and accesses CRM |
| **Custom** | Configurable permissions |

![Team invitation](/images/guide/users/users_en.png)

## Step 5: Customize Service

### Shortcuts (Quick Replies)

Set up ready-made messages to speed up customer service:

1. Go to **Shortcuts** in the left sidebar
2. Click on **"New shortcut"**
3. Define the **Shortcut** (e.g., `hello`) and the message **Content**

::: tip AVAILABLE VARIABLES
Use variables to automatically personalize your messages:

**System:**
- <code v-pre>{{greeting}}</code> - Greeting based on time (Good morning, Good afternoon, Good evening)

**Customer:**
- <code v-pre>{{customer.name}}</code> - Customer's full name
- <code v-pre>{{customer.firstName}}</code> - Customer's first name
:::

**Example:**
```txt
Shortcut: hello
Content: {{greeting}}, {{customer.firstName}}! 👋 
How can I help you today?
```

::: info ATTACHMENTS
You can also add media files to shortcuts: **images**, **videos**, **audio** and **PDFs**.
:::

## Step 6: Create Your First Flow

Automate customer service with a simple flow:

1. Go to **Flows** → **"New flow"**
2. Drag a **"Send text"** node to the canvas
3. Configure the welcome message
4. Use the **"Transform to list"** option inside the node to create a menu of options
5. Connect the paths to desired actions
6. **Save and activate** the flow

![Flow Builder](/images/guide/flows/flow_en.png)

## Final Checklist

Before you start serving customers, verify:

- [x] Account created and email confirmed
- [x] At least one channel connected
- [x] AI Agent configured (optional)
- [x] Team invited (if applicable)
- [x] Quick replies configured
- [x] Welcome flow created

## Next Steps

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/en/guide/channels/" style="text-decoration: none;">
  <div style="background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">📱</span>
    <h4 style="margin: 8px 0 4px 0; color: var(--vp-c-text-1);">Communication Channels</h4>
    <p style="color: var(--vp-c-text-2); font-size: 14px; margin: 0;">Connect WhatsApp, Instagram and more</p>
  </div>
</a>

<a href="/en/guide/chat/interface" style="text-decoration: none;">
  <div style="background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">💬</span>
    <h4 style="margin: 8px 0 4px 0; color: var(--vp-c-text-1);">Chat Interface</h4>
    <p style="color: var(--vp-c-text-2); font-size: 14px; margin: 0;">Learn how to use the service interface</p>
  </div>
</a>

<a href="/en/guide/flows/builder" style="text-decoration: none;">
  <div style="background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">🤖</span>
    <h4 style="margin: 8px 0 4px 0; color: var(--vp-c-text-1);">Flow Builder</h4>
    <p style="color: var(--vp-c-text-2); font-size: 14px; margin: 0;">Master customer service automation</p>
  </div>
</a>

</div>

## Need Help?

If you have questions during setup:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Available on the platform
- 📖 **FAQ**: [Frequently asked questions](/en/faq)
