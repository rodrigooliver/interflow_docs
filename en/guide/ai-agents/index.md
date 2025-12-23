# AI Agents

Configure artificial intelligence agents to automate customer service in Interflow.

## Overview

Interflow AI Agents are intelligent virtual assistants that can autonomously serve customers, answer questions, schedule appointments, transfer to teams, and much more.

::: info 🔄 Automatic Flow
When creating an AI Agent, the system **automatically generates a flow** linked to it. The agent always operates within this flow, allowing you to combine AI intelligence with other automation nodes.
:::

## Available Models

We currently use **OpenAI** models. Models are divided into two categories:

### With Reasoning

Models with advanced reasoning capabilities, ideal for complex tasks.

| Model | Description | Cost |
|-------|-------------|------|
| GPT-5.2 | Most recent and intelligent model | 💲💲💲 |
| GPT-5.1 | Advanced model with reasoning | 💲💲💲 |
| GPT-5 | Model with reasoning | 💲💲💲 |
| GPT-5 Mini | Economical version with reasoning | 💲 |
| GPT-5 Nano | Super economical with reasoning | 💲 |
| GPT-5 Chat | Specialized in conversation | 💲💲💲 |

### Without Reasoning

Simpler and faster models, ideal for straightforward tasks.

| Model | Description | Cost |
|-------|-------------|------|
| GPT-4.1 | Intelligent and versatile model | 💲💲💲 |
| GPT-4.1 Mini | Low cost with good performance | 💲 |
| GPT-4.1 Nano | Most economical, ideal for light tasks | 💲 |

::: tip 💡 Tip
For most customer service cases, **GPT-5 Nano** or **GPT-5 Mini** offer excellent cost-effectiveness. See more details in [OpenAI Integration](/en/guide/integrations/openai).
:::

::: info 🚀 Coming Soon
New models will be added soon, including **Claude** (Anthropic), **Gemini** (Google), and others.
:::

## Accessing AI Agents

1. In the main menu, click on **AI Agents** (🤖)
2. You'll see the list of all configured agents
3. Use the **search** to find agents by name
4. Click the **A → Z** button to sort alphabetically

## Creating an AI Agent

When creating a new agent, you'll have two options:

### Option 1: Generate with AI
Use our AI-assisted generation tool to automatically create the agent context. Just describe what you want and the AI will create the complete prompt.

### Option 2: Create Manually
Create the agent from scratch, configuring each detail manually.

## Editor Tabs

The AI Agents editor has **5 main tabs**:

### 1. Context
This is the main tab where you define the agent's prompt/instructions.

**Available features:**
- **Text Editor**: Write instructions, personality, and rules for the agent
- **Generate with AI**: Automatically creates context based on a description
- **Improve**: Enhances existing text using AI
- **Questions**: View questions the agent couldn't answer (editing only)
- **Extra Contexts**: Add supplementary information (e.g., product lists)
- **Token Usage**: Track token consumption in real-time (for Interflow)

**Prompt Example:**

```text
You are Interflow, the virtual assistant for Company XYZ.

**Personality:**
- Friendly and helpful
- Professional but not robotic
- Uses emojis sparingly

**Rules:**
- Always greet the customer by name
- Don't make up information about products
- If you don't know something, transfer to a human

**Company Information:**
- Hours: Monday to Friday, 9am to 6pm
- Products: [product list]
- Policies: [exchange, warranty policies, etc.]
```

### 2. Test

The test tab allows you to chat directly with the AI Agent before putting it into production.

**How to Use:**
1. After adding context, click the **"Test"** tab
2. Type messages as if you were a customer
3. Observe the agent's responses
4. Check if the behavior is appropriate

**What to Test:**
- ✅ Tone of voice and personality
- ✅ Responses to frequently asked questions
- ✅ Limits of what the AI can/can't do
- ✅ Transfer to human scenarios

### 3. Files

Add media that the agent can send during conversations.

**Supported file types:**
- 🖼️ **Images**: JPG, PNG, GIF, WebP
- 🎵 **Audio**: MP3, WAV, OGG
- 🎬 **Videos**: MP4, WebM
- 📄 **Documents**: PDF, DOCX, XLSX

**Usage:**
The agent can reference and send these files during the conversation when appropriate.

### 4. Tools

Configure the actions the agent can perform. There are two types:

#### Ready Actions (System)
Pre-configured Interflow actions:

| Action | Description |
|--------|-------------|
| **Change Customer Name** | Updates the customer's name in the record |
| **Update Customer Data** | Modifies custom customer fields |
| **Transfer to Team** | Forwards the chat to a human team |
| **Schedule** | Creates a new appointment |
| **Confirm Appointment** | Confirms an existing appointment |
| **Change Funnel** | Moves customer between funnel stages |
| **When Unable to Answer** | Defines behavior for unknown questions |
| **Change Return Date** | Reschedules automatic follow-up |

#### Custom Actions
Create customized tools for specific integrations. Each tool can have:
- **Name and Description**: Tool identification
- **Parameters**: Variables the AI must collect
- **Actions**: What to do when the tool is triggered

::: tip 📖 Learn More
See the complete documentation at [AI Tools](/en/guide/ai-agents/tools).
:::

### 5. Advanced

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
- **View Flow**: Access the flow linked to the agent
- **Reset Flow**: Recreates the flow with default configuration
- **Triggers**: Configure when the agent should be activated

## Intelligent Follow-up

The AI can automatically adjust follow-up based on conversation context.

### How It Works

When the customer mentions a future date or indicates it's not the right time:

- **"Let's talk on Thursday"** → AI reschedules follow-up for Thursday
- **"I'll be back on the 25th"** → AI schedules return for the 25th
- **"I already closed the deal"** → AI pauses the follow-up

### Configuration

1. Access the agent's **Tools**
2. Add the **"Change Return Date"** action
3. Select the **Flow** and destination **Node**
4. Save

## Transfer with Automatic Summary

When transferring a conversation to a human team, the AI can automatically generate a summary:

1. Edit the **"Transfer to Team"** action
2. Check: ✅ **"Generate summary when transferring"**
3. Save

**The summary includes:**
- Reason for contact
- Main customer questions
- Steps already taken by AI
- Important data collected

## Message Signature

Add an automatic signature to AI-generated messages.

### How to Configure

The signature is configured in the **flow linked to the agent**, specifically in the **Send Text Node**.

1. Access the flow linked to the AI Agent
2. Locate the **Send Text** node that sends AI responses
3. In the message field, add the desired signature after the response variable

**Example:**
```text
{{ai_response}}

---
🤖 Message sent by AI
```

::: tip 📖 Learn More
See the complete node documentation at [Text Message](/en/guide/flows/nodes/text).
:::

## Appointment Integration

The AI can manage appointments conversationally:

### Conversation Example

```text
👤 Customer: I want to schedule an appointment
🤖 AI: Sure! What day do you prefer? We have availability Monday through Friday.

👤 Customer: Thursday at 2pm
🤖 AI: Perfect! We have availability Thursday at 2pm with Dr. John. 
       Shall I confirm the appointment?

👤 Customer: Yes, please
🤖 AI: ✅ Appointment confirmed!
       📅 Thursday, December 26, 2025 at 2:00 PM
       👨‍⚕️ Professional: Dr. John
       
       I'll send a reminder 24h before. See you then! 😊
```

### Respecting Time Off

The AI automatically:
- ❌ **Doesn't offer** slots during time off periods
- ❌ **Doesn't allow** creating appointments on blocked days
- ✅ **Explains to customer** the reason for unavailability
- ✅ **Automatically suggests** alternative dates

## Extra Contexts

Add supplementary information to the agent's context, such as product lists, FAQs, or any content the agent might need to reference.

### Available Types
- **WhatsApp List**: Formats content for WhatsApp list display

### How to Add
1. In the **Context** tab, click **"+ Add"** in Extra Contexts
2. Fill in title, description, and content
3. Save

## Best Practices

### ✅ Do

- Be specific in the prompt about expected behavior
- Provide examples of ideal responses
- Limit the scope of action (what the AI can and can't do)
- Test thoroughly before going to production
- Monitor conversations and adjust the prompt
- Use the "Questions" tab to identify context gaps

### ❌ Avoid

- Vague or generic prompts
- Allowing the AI to make up information
- Giving excessive autonomy without supervision
- Forgetting to configure human transfer
- Ignoring customer feedback about the AI

## Metrics and Reports

Track your AI Agents performance:

- **Resolution rate**: % of conversations resolved without human
- **Average response time**: AI speed
- **Transfers**: How many times transferred to human
- **Satisfaction**: Customer ratings
- **Token usage**: API consumption

## Next Steps

- [AI Tools](/en/guide/ai-agents/tools) - Configure agent actions
- [Text Enhancer](/en/guide/chat/text-enhancer) - AI commands for agents
- [Flows](/en/guide/flows/builder) - Integrate AI into flows
- [Schedule](/en/guide/schedule/) - Configure appointments via AI
- [Settings](/en/guide/settings/) - AI controls
