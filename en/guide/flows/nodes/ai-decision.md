# Node: AI Decider

The AI picks a flow output from the context and the description of each option.

## Overview

The **AI Decider** node is in the integrations palette. The canvas shows only the output titles. Context, confidence, and descriptions live in the side panel.

Usage is charged to the organization's AI credit balance. It does not use the customer's OpenAI key.

## How to configure

1. Drag **AI Decider** onto the flow
2. Click an output title
3. Fill in the context. Use the variable button to include, for example, `{{conversation.lastMessages:10}}` or `{{conversation.lastMessages:50}}`
4. For each option, set the title and the description. The description is the criterion the AI compares
5. Adjust the minimum confidence (0 to 100). The default is 70

## Outputs

| Output | When it follows |
|--------|-----------------|
| Each option | The AI picks that option and confidence is at or above the minimum |
| None | The AI does not pick, the choice is invalid, or confidence is below the minimum |
| Error | No credit balance, or the call fails |

The `ai_decision` variable stores the chosen option, the confidence, and the output used.

## Limits

- Each option needs a description. Without one, the option is not part of the decision
- With no balance, the flow does not pick an option: it follows **Error**
