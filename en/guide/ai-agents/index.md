# AI Agents

Configure artificial intelligence agents to automate customer service in Interflow.

## Overview

Interflow's AI Agents are intelligent virtual assistants that can handle customers autonomously, answer questions, schedule appointments, transfer to teams, and much more.

::: info 🔄 Automatic Flow
When you create an AI Agent, the system **automatically generates a linked flow**. The agent always operates within this flow, allowing you to combine AI intelligence with other automation nodes.
:::

## Available Models

We currently use **OpenAI** models, divided into two categories:

### With Reasoning

Models with advanced reasoning capabilities, ideal for complex tasks.

| Model | Description | Cost |
|-------|-------------|------|
| GPT-5.2 | Latest and most intelligent model | 💲💲💲 |
| GPT-5.1 | Advanced model with reasoning | 💲💲💲 |
| GPT-5 | Model with reasoning | 💲💲💲 |
| GPT-5 Mini | Economical version with reasoning | 💲 |
| GPT-5 Nano | Super economical with reasoning | 💲 |
| GPT-5 Chat | Specialized in conversation | 💲💲💲 |

### Without Reasoning

Simpler and faster models, ideal for direct tasks.

| Model | Description | Cost |
|-------|-------------|------|
| GPT-4.1 | Intelligent and versatile model | 💲💲💲 |
| GPT-4.1 Mini | Low cost with good performance | 💲 |
| GPT-4.1 Nano | Most economical, ideal for light tasks | 💲 |

::: tip 💡 Tip
For most customer service cases, **GPT-5 Nano** or **GPT-5 Mini** offer excellent cost-benefit. See more details at [OpenAI Integration](/en/guide/integrations/openai).
:::

::: info 🚀 Coming Soon
New models will be added soon, including **Claude** (Anthropic), **Gemini** (Google), and others.
:::

## Accessing AI Agents

1. In the main menu, click **AI Agents** (🤖)
2. You'll see a list of all configured agents
3. Use the **search** to find agents by name
4. Click the **A → Z** button to sort alphabetically

## Creating an AI Agent

When creating a new agent, you'll have two options:

### Option 1: Generate with AI
Use our AI-assisted generation tool to create the agent's context automatically. Just describe what you want and the AI will create the complete prompt.

### Option 2: Create Manually
Create the agent from scratch, configuring each detail manually.

## Editor Tabs

The AI Agent editor has **6 main tabs**:

### 1. Context
This is the main tab where you define the agent's prompt/instructions.

**Available resources:**
- **Text Editor**: Write the agent's instructions, personality, and rules
- **Generate with AI**: Creates context automatically based on a description
- **Improve**: Improves existing text using AI
- **Questions**: View questions the agent couldn't answer (edit mode only)
- **Extra Contexts**: Add supplementary information (e.g., product lists)
- **Token Usage**: Track token consumption in real time (for Interflow)

### 2. Test

The testing tab lets you chat directly with the AI Agent before going live.

**How to Use:**
1. After adding context, click the **"Test"** tab
2. Type messages as if you were a customer
3. Observe the agent's responses
4. Check if the behavior is appropriate

### 3. Files

Add media the agent can send during conversations.

**Supported file types:**
- 🖼️ **Images**: JPG, PNG, GIF, WebP
- 🎵 **Audio**: MP3, WAV, OGG
- 🎬 **Videos**: MP4, WebM
- 📄 **Documents**: PDF, DOCX, XLSX

### 4. Tools

Configure actions the agent can perform. There are two types:

#### Ready Actions (System)
Pre-configured Interflow actions:

| Action | Description |
|--------|-------------|
| **Change Customer Name** | Updates customer name in the record |
| **Update Customer Data** | Modifies custom fields |
| **Transfer to Team** | Routes chat to a human team |
| **Schedule** | Creates a new appointment |
| **Confirm Appointment** | Confirms an existing appointment |
| **Change Funnel** | Moves customer between funnel stages |
| **When Unable to Answer** | Defines behavior for unknown questions |
| **Change Return Date** | Reschedules automatic follow-up |

#### Custom Actions
Create custom tools for specific integrations.

::: tip 📖 Learn More
See the full documentation at [AI Tools](/en/guide/ai-agents/tools).
:::

### 5. Knowledge Base

Add internal company documents so the AI consults them during conversations, providing accurate answers without relying on generic reasoning.

**How it works:**

Each registered document automatically becomes a **tool** available to the AI. The search is adaptive:

- **Short documents** (up to 3 blocks) → full content returned directly
- **Long documents** (more than 3 blocks) → RAG semantic search returns only the most relevant excerpts

The search uses **hybrid** technology combining vector embeddings with keyword search, supporting Portuguese, English, and Spanish.

**How to add a document:**

1. In the **Knowledge Base** tab, click **"Add document"**
2. Fill in:
   - **Title** – Document name (e.g., `Business Hours`)
   - **Description** – Content summary; the more specific, the better the AI knows when to call it (e.g., `Contains operating hours, holidays and phone for scheduling`)
   - **Language** – Main content language
   - **Content** – Full text, with Markdown support
3. Click **"Save"**

::: tip 💡 Tip
The **description** is the most important field. Use words the customer would use when asking: instead of "General information", write "Contains address, hours, accepted plans and consultation fees".
:::

::: info 📂 Organization by subject
Prefer **one document per subject** (e.g., Hours, Address, Cancellation Policy) instead of one big document with everything. Focused documents generate more accurate answers.
:::

### 6. Advanced

Detailed agent settings:

#### Basic Information
- **Title**: Agent identifier name
- **Default Prompt**: Make available to all organizations (superadmins only)

#### AI Settings
- **Integration**: Choose between Interflow (plan tokens) or custom OpenAI
- **Model**: Select the AI model to use
- **Temperature** (non-reasoning models): Controls response creativity (0.0 to 2.0)
- **Reasoning Level** (reasoning models): Low, Medium, or High
- **Max Tokens** (non-reasoning models): Response token limit
- **Verbosity** (GPT-5 models): Controls response length
- **Timezone**: Sets the timezone for dates and times

#### Flow Settings
- **View Flow**: Access the agent's linked flow
- **Reset Flow**: Recreates the flow with the default configuration
- **Triggers**: Configure when the agent should be activated

## Fallback Integration

Configure a secondary AI agent that automatically takes over when the primary agent cannot respond or reaches a limit.

### What it's for

- Ensure 24/7 service even when the primary agent is limited
- Automatically redirect to a specialized agent for certain topics
- Prevent customers from going without a response in error or timeout cases

### How to configure

1. In the agent's **Advanced** tab, locate the **"Fallback Integration"** section
2. Select the fallback **AI Agent**
3. Configure desired **alerts** (notification when fallback is triggered)
4. Define **use cases** for automatic activation
5. Save

## AI Credits

AI Agent usage is measured in **USD-based credits**, providing transparency in cost control.

### Credit Types

| Type | Description |
|------|-------------|
| **Plan Credits** | Deposited on monthly renewal. Reset when renewed. |
| **Purchased Credits** | Acquired separately. Do not expire. |
| **Bonus Credits** | Promotional or referral. Do not expire. |

### Cost Table by Model

| Model | Input (1M tokens) | Output (1M tokens) |
|-------|-------------------|--------------------|
| **GPT-5.2** | $1.75 | $14.00 |
| **GPT-5.1** | $1.25 | $10.00 |
| **GPT-5** | $1.25 | $10.00 |
| **GPT-5 Mini** | $0.25 | $2.00 |
| **GPT-5 Nano** | $0.05 | $0.40 |
| **GPT-4.1** | $2.00 | $8.00 |
| **GPT-4.1 Mini** | $0.40 | $1.60 |
| **GPT-4.1 Nano** | $0.10 | $0.40 |

::: tip 💡 Savings
Cached tokens cost up to **10x less**. Mini and Nano models are significantly cheaper for high-volume use cases.
:::

### Credit Statement

Access the detailed history at **Settings → Usage → AI Credits**:
- Total available balance
- Breakdown by source (Plan, Purchased, Bonus)
- Full transaction history
- Filters by transaction type and usage

---

## Intelligent Follow-up

The AI can automatically adjust follow-ups based on the conversation context.

### How It Works

When the customer mentions a future date or indicates this isn't the right time:

- **"Let's talk Thursday"** → AI reschedules follow-up to Thursday
- **"I'll be back on the 25th"** → AI schedules return for the 25th
- **"I've already closed a deal"** → AI pauses the follow-up

### Configuring

1. Access the agent's **Tools**
2. Add the **"Change Return Date"** action
3. Select the **Flow** and **Node** destination
4. Save

## Transfer with Automatic Summary

When transferring a conversation to a human team, the AI can automatically generate a summary:

1. Edit the **"Transfer to Team"** action
2. Check: ✅ **"Generate attendance summary on transfer"**
3. Save

**The summary includes:**
- Reason for contact
- Main customer questions
- Steps already taken
- Important data collected

## Signature in Messages

Add an automatic signature to AI-generated messages.

### How to Configure

The signature is configured in the **linked flow**, specifically in the **Send Text Node**.

1. Access the AI Agent's linked flow
2. Locate the **Send Text** node that sends AI responses
3. In the message field, add the desired signature after the response variable

**Example:**
```text
{{ai_response}}

---
🤖 Message sent by AI
```

## Scheduling Integration

The AI can manage appointments conversationally:

### Example Conversation

```text
👤 Customer: I'd like to schedule an appointment
🤖 AI: Sure! What day works for you? We have slots Monday through Friday.

👤 Customer: Thursday at 2pm
🤖 AI: We have availability Thursday at 2pm with Dr. John. 
       Shall I confirm the appointment?

👤 Customer: Yes, please
🤖 AI: ✅ Appointment confirmed!
       📅 Date: Thursday, 12/26/2025
       ⏰ Time: 2:00 PM
       👨‍⚕️ Professional: Dr. John
       
       I'll send a reminder 24h before. See you then! 😊
```

## Extra Contexts

Add supplementary information to the agent's context, such as product lists, FAQs, or any content the agent might need.

### Available Types
- **WhatsApp List**: Formats content for display in WhatsApp lists

### How to Add
1. In the **Context** tab, click **"+ Add"** in Extra Contexts
2. Fill in title, description, and content
3. Save

## Best Practices

### ✅ Do

- Be specific in the prompt about expected behavior
- Provide examples of ideal responses
- Limit the scope of action (what AI can and cannot do)
- Test extensively before going live
- Monitor conversations and adjust the prompt
- Use the "Questions" tab to identify context gaps

### ❌ Avoid

- Vague or generic prompts
- Allowing the AI to invent information
- Excessive autonomy without supervision
- Forgetting to configure transfer to human
- Ignoring customer feedback about AI

## Metrics and Reports

Track your AI Agents' performance:

- **Resolution rate**: % of conversations resolved without human
- **Average response time**: AI speed
- **Transfers**: How many times it transferred to a human
- **Satisfaction**: Customer ratings
- **Token usage**: API consumption

## Next Steps

- [AI Tools](/en/guide/ai-agents/tools) - Configure agent actions
- [Text Enhancer](/en/guide/chat/text-enhancer) - AI commands for agents
- [Flows](/en/guide/flows/builder) - Integrate AI into flows
- [Schedule](/en/guide/schedule/) - Configure AI-powered appointments
- [Settings](/en/guide/settings/) - AI controls
