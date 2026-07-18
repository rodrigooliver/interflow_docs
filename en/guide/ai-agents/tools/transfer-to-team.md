# Transfer to Team

Forwards the service to a human team.

**Configuration options:**

| Option | Description |
|--------|-------------|
| **Allowed teams** | Select which teams the AI can transfer to |
| **Pause agent** | Pauses the AI after transfer |
| **Skip related flow** | Doesn't execute flows linked to the team |
| **Generate summary** | Creates automatic conversation summary |

**Automatic Summary:**

When enabled, the summary includes:
- Reason for contact
- Main customer questions
- Steps already taken by AI
- Data collected during conversation

**Usage example:**
```text
👤 Customer: I need to speak to a human about a technical issue
🤖 AI: Got it! I'll transfer you to our technical support team. 
       One moment, please...

[System: Chat transferred to "Technical Support" with summary]
```

