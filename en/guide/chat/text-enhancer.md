# Text Enhancer

Improve your messages with artificial intelligence directly in the text field.

## Overview

The Text Enhancer is an AI tool integrated into chat that helps agents write better, clearer, and more professional messages. Quickly access with `Ctrl+J` to transform your messages.

## How to Access

### Keyboard Shortcut

1. In the chat text field, press `Ctrl+J`
2. The enhancer panel will open
3. Select desired action
4. AI processes and inserts result

### Via Menu

1. In text field, click AI icon (✨)
2. Select enhancement option
3. Wait for processing

## Available Actions

### Text Improvements

| Action | Description | Example |
|--------|-------------|---------|
| **Improve** | Improves clarity and grammar | "u can help me?" → "Could you help me?" |
| **Formalize** | Makes text more formal | "hey, sup?" → "Hello, how are you?" |
| **Simplify** | Simplifies complex text | Technical terms → Simple language |
| **Expand** | Expands message with more details | Adds context and explanations |
| **Summarize** | Summarizes long texts | Creates concise version |

### Transformations

| Action | Description |
|--------|-------------|
| **Fix spelling** | Corrects typos and grammar |
| **Translate** | Translates to another language |
| **Friendly tone** | Adjusts to warmer tone |
| **Professional tone** | Adjusts to corporate tone |

### Contextual Actions

| Action | Description |
|--------|-------------|
| **Reply to customer** | Generates response based on last message |
| **Explain product** | Generates explanation about mentioned product |
| **Thank** | Creates thank you message |
| **Farewell** | Creates closing message |

## Custom Commands

Create your own AI commands for frequent actions.

### Creating a Command

1. Access **Settings** → **Text Enhancer**
2. Click **"New Command"**
3. Configure:
   - **Name**: Command identification (e.g., "Standard response")
   - **Trigger**: Shortcut that activates (e.g., `/price`, `/support`)
   - **Prompt**: Instruction for AI
   - **Position**: Where to insert result (before/after cursor)
4. Click **"Save"**

### Command Examples

```
Name: Price response
Trigger: /price
Prompt: Generate a polite response explaining that I'll 
        send the price list shortly.
```

```
Name: Positive closing
Trigger: /bye
Prompt: Create a friendly farewell message 
        thanking for the contact.
```

```
Name: Request data
Trigger: /data
Prompt: Politely request customer's full name, 
        email and phone.
```

### Using Commands

1. In text field, type `/` followed by trigger
2. Or press `Ctrl+J` and select from list
3. Command executes and text is inserted

### Variables in Commands

Use variables to personalize:

| Variable | Description |
|----------|-------------|
| `{{customer_name}}` | Customer name |
| `{{last_message}}` | Customer's last message |
| `{{channel}}` | Current channel |
| `{{agent_name}}` | Your name |

**Example:**
```
Prompt: Thank {{customer_name}} for contacting and 
        let them know I'm available to help.
```

## Settings

### Enable/Disable

1. Access **Settings** → **Text Enhancer**
2. Toggle to enable or disable
3. When disabled, `Ctrl+J` won't work

### AI Model

Choose which model to use for enhancements:

| Model | Speed | Quality |
|-------|-------|---------|
| GPT-3.5 | ⚡ Fast | ✅ Good |
| GPT-4 | 🐢 Slower | ✨ Excellent |

### Default Language

Configure default language for enhancements and translations.

## Usage Tips

### ✅ Best Practices

- Use **Formalize** for initial messages
- Use **Simplify** for technical explanations
- Create commands for frequent responses
- Always review before sending

### ⚡ Quick Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+J` | Open enhancer |
| `/` | List commands |
| `Esc` | Close panel |
| `Enter` | Execute selected |

## Practical Examples

### Before and After

**Original message:**
```
hey can u send me the invoice i didnt get it yet
```

**After "Formalize":**
```
Hello! Could you please send me the invoice? 
I haven't received it yet.
```

---

**Original message:**
```
The system uses HTTPS protocol with AES-256 encryption 
and OAuth 2.0 authentication with JWT tokens.
```

**After "Simplify":**
```
The system uses a secure and protected connection. 
Your data stays encrypted and safe.
```

## Limits

- **Tokens**: Each enhancement consumes AI tokens
- **Size**: Maximum 2000 characters at a time
- **Frequency**: Wait for processing before new request

## Next Steps

- [Chat Interface](/en/guide/chat/interface) - Back to interface
- [AI Agents](/en/guide/ai-agents/) - Autonomous AI for service
- [Settings](/en/guide/settings/) - More settings




