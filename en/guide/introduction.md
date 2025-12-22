# Introduction

Welcome to the official **Interflow** documentation – your complete multichannel customer service and CRM platform.


## What is Interflow?

Interflow is a SaaS platform that centralizes all your customer communication channels in one place. With it, you can:

- **Serve customers** from WhatsApp, Instagram, Facebook, and Email
- **Automate conversations** with intelligent visual flows
- **Manage relationships** with a complete CRM
- **Schedule services** with an integrated calendar system
- **Control finances** of your operation
- **Analyze metrics** with real-time dashboards

![Interflow Main Interface](/images/guide/dashboard/dashboard_en.png)

## Who is Interflow for?

The platform was developed for companies that:

- Receive high volume of messages
- Have a customer service team
- Need to centralize multiple channels
- Seek to automate repetitive processes
- Want to improve customer experience

### Most Common Segments

| Segment | Use Cases |
|---------|-----------|
| **E-commerce** | After-sales service, tracking, support |
| **Clinics and Offices** | Scheduling, confirmations, reminders |
| **Real Estate** | Lead capture, follow-up, qualification |
| **Schools and Courses** | Enrollments, student communication |
| **Retail** | WhatsApp sales, catalog, orders |
| **Services** | Quotes, scheduling, follow-up |

## Main Features

### 💬 Multichannel Support

Centralize WhatsApp, Instagram, Facebook, and Email in a single inbox. Your team serves customers in an organized way without switching between apps.

**Included features:**
- Unified inbox
- Complete conversation history
- Read and status indicators
- Attachments and media
- Internal notes between agents

### 🤖 Automation with Flows

Build visual automations without coding. Our drag-and-drop editor allows you to create complex flows intuitively.

**Available node types:**
- Text and media messages
- Questions and data collection
- Conditions and logic
- Delays and timers
- Transfer to agent
- External API integration
- CRM actions

![Flow Builder](/images/guide/flows/flow_en.png)

### 👥 Integrated CRM

Manage your customers with advanced CRM features directly integrated with customer service.

**CRM Features:**
- Complete customer registration
- Custom fields
- Tags for segmentation
- Sales funnels (Kanban)
- Interaction history
- Tasks and follow-ups

### 📅 Scheduling System

Offer online scheduling to your customers with an integrated calendar and automatic reminders.

**Features:**
- Availability calendar
- Multiple service providers
- WhatsApp/Email reminders
- Google Calendar integration
- Advance payment (optional)

### 💰 Financial Module

Control your operation's finances with complete visibility of income and expenses.

**Includes:**
- Financial dashboard
- Transaction control
- Automatic categorization
- Reports and charts
- Cash management

### 🛒 POS (Point of Sale)

For operations that need direct sales, our integrated POS offers:

- Product registration
- Shopping cart
- Multiple payment methods
- Receipt issuance
- Inventory control

## Platform Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        INTERFLOW                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │WhatsApp │  │Instagram│  │Facebook │  │  Email  │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
│       │            │            │            │              │
│       └────────────┴─────┬──────┴────────────┘              │
│                          │                                   │
│                   ┌──────▼──────┐                           │
│                   │   Backend   │                           │
│                   │   Node.js   │                           │
│                   └──────┬──────┘                           │
│                          │                                   │
│    ┌─────────────────────┼─────────────────────┐            │
│    │                     │                     │            │
│ ┌──▼──┐  ┌──────┐  ┌────▼────┐  ┌─────────┐  │            │
│ │ CRM │  │Flows │  │  Chat   │  │ Reports │  │            │
│ └─────┘  └──────┘  └─────────┘  └─────────┘  │            │
│                                               │            │
│                   ┌──────────┐                │            │
│                   │ Supabase │                │            │
│                   │PostgreSQL│                │            │
│                   └──────────┘                │            │
└─────────────────────────────────────────────────────────────┘
```

## System Requirements

### For users

- Modern browser (Chrome, Firefox, Safari, Edge)
- Stable internet connection
- Interflow platform account

## Next Steps

Now that you know Interflow, proceed to the next step:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/en/guide/quick-start" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">🚀</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Quick Start</p>
  </div>
</a>

<a href="/en/guide/channels/" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📱</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Connect Channels</p>
  </div>
</a>

<a href="/en/api/" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📚</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">API Reference</p>
  </div>
</a>

</div>
