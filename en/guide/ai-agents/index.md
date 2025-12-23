# AI Agents

Configure artificial intelligence agents to automate customer service in Interflow.

## Overview

Interflow AI Agents are intelligent virtual assistants that can serve customers autonomously, answer questions, schedule appointments, transfer to teams, and much more.

::: info 🔄 Automatic Flow
When creating an AI Agent, the system **automatically generates a linked flow**. The agent always operates within this flow, allowing you to combine AI intelligence with other automation nodes.
:::

### Available Models

We currently use **OpenAI** models. Here are the main ones:

#### With Reasoning
| Model | Description |
|-------|-------------|
| GPT-5.2 | Main model for coding and agents |
| GPT-5 mini | Fast and economical version |
| GPT-5 nano | Most economical of the family |

#### Without Reasoning
| Model | Description |
|-------|-------------|
| GPT-4.1 | Intelligent and versatile model |
| GPT-4.1 mini | Low cost with good performance |
| GPT-4.1 nano | Most economical, ideal for light tasks |

::: tip 💡 Tip
For most customer service cases, **GPT-5 nano** or **GPT-5 mini** offer excellent cost-benefit. See more details at [OpenAI Integration](/en/guide/integrations/openai).
:::

::: info 🚀 Coming Soon
New models will be added soon, including **Claude** (Anthropic), **Gemini** (Google) and others.
:::

## Accessing AI Agents

1. In the main menu, click on **AI Agents** (🤖)
2. You'll see the list of all configured agents
3. Use the **search** to find agents by name
4. Click the **A → Z** button to sort alphabetically

## Creating an AI Agent

### Step 1: Basic Information

1. Click **"New Agent"**
2. Fill in:
   - **Name**: Agent identification (e.g., "Sales Assistant")
   - **Description**: Purpose explanation
   - **Model**: Select AI model (GPT-4, GPT-3.5, Claude, etc.)

### Step 2: Configure Prompt

The prompt defines the "personality" and behavior of the agent:

```
You are Interflow, the virtual assistant for Company XYZ.

**Personality:**
- Friendly and helpful
- Professional but not robotic
- Use emojis in moderation

**Rules:**
- Always greet customer by name
- Don't make up product information
- If unsure about something, transfer to human

**Company information:**
- Hours: Monday to Friday, 9am to 6pm
- Products: [product list]
- Policies: [return, warranty policies, etc.]
```

### Step 3: Configure Tools

Tools are actions the AI can execute. See the [AI Tools](#ai-tools) section for details.

### Step 4: Save and Test

1. Click **"Save"**
2. Access the **"Tests"** tab to validate behavior
3. Chat with the agent and see how it responds
4. Adjust prompt as needed

## Tests Tab

The tests tab allows you to chat directly with the AI Agent before putting it in production.

### How to Use

1. After saving the agent, click the **"Tests"** tab
2. Type messages as if you were a customer
3. Observe the agent's responses
4. Check if behavior is adequate

### What to Test

- ✅ Tone of voice and personality
- ✅ Answers to frequently asked questions
- ✅ Correct use of tools
- ✅ Limits of what AI can/cannot do
- ✅ Human transfer scenarios

## AI Tools

Tools allow AI to execute actions beyond responding to messages.

### Available Tools

| Tool | Description |
|------|-------------|
| **Transfer to team** | Forwards chat to human team |
| **List time slots** | Shows available schedule times |
| **Create appointment** | Schedules an appointment |
| **Reschedule** | Changes appointment date/time |
| **Cancel appointment** | Cancels existing appointment |
| **Update customer** | Modifies customer record fields |
| **Change return date** | Reschedules automatic follow-up |
| **Close service** | Ends the conversation |

### Transfer with Automatic Summary

When transferring a conversation to human team, AI can automatically generate a summary:

1. Edit the **"Transfer to team"** action
2. Check: ✅ **"Generate service summary on transfer"**
3. Save

**Summary includes:**
- Contact reason
- Customer's main questions
- Steps already taken
- Important data collected

## Smart Follow-up

AI can automatically adjust follow-up based on conversation context.

### How It Works

When customer mentions a future date or indicates it's not the right time:

- **"Let's talk on Thursday"** → AI reschedules follow-up to Thursday
- **"I'll be back on the 25th"** → AI schedules return for the 25th
- **"I already closed the deal"** → AI pauses follow-up

### Configuration

1. Access **Prompts** in sidebar
2. Select the prompt linked to your flow
3. Click **Edit → Tools**
4. Add the **"Change Return Date"** action
5. Configure destination flow and node
6. Save

## Message Signatures

Add automatic signature to AI-generated messages.

### How to Configure

The signature is configured in the **flow linked to the agent**, specifically in the **Send Text Node**.

1. Access the flow linked to the AI Agent
2. Locate the **Send Text** node that sends AI responses
3. In the message field, add desired signature after the response variable

**Example:**
```
{{ai_response}}

---
🤖 Message sent by AI
```

::: tip 📖 Learn More
See complete node documentation at [Text Message](/en/guide/flows/nodes/text).
:::

## Limits and Controls

### Disable Automatic Summary

To save AI tokens:

1. Access **Settings** → **General**
2. Locate **"AI and Automation"** section
3. Enable desired options:
   - ✅ **Disable AI Summary on Resolution**
   - ✅ **Disable AI Summary on Transfer**
4. Save

## Schedule Integration

AI can manage appointments conversationally:

### Example Conversation

```
👤 Customer: I want to book a consultation
🤖 AI: Sure! Which day do you prefer? We have availability Monday to Friday.

👤 Customer: Thursday at 2pm
🤖 AI: Perfect! We have Thursday at 2pm available with Dr. John.
       Should I confirm?

👤 Customer: Yes please
🤖 AI: ✅ Appointment confirmed!
       📅 Date: Thursday, 12/26/2025
       ⏰ Time: 2:00 PM
       👨‍⚕️ Professional: Dr. John
       
       I'll send a reminder 24h before. See you then! 😊
```

## Best Practices

### ✅ Do

- Be specific in prompt about expected behavior
- Provide examples of ideal responses
- Limit scope (what AI can and cannot do)
- Test extensively before production
- Monitor conversations and adjust prompt

### ❌ Avoid

- Vague or generic prompts
- Allowing AI to make up information
- Excessive autonomy without supervision
- Forgetting to configure human transfer
- Ignoring customer feedback about AI

## Next Steps

- [Text Enhancer](/en/guide/chat/text-enhancer) - AI commands for agents
- [Flow Builder](/en/guide/flows/builder) - Integrate AI in flows
- [Schedule](/en/guide/schedule/) - Configure appointments via AI
- [Settings](/en/guide/settings/) - AI controls

