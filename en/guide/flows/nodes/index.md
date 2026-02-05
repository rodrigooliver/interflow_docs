# Flow Builder Node Types

This section details all node types available in the Interflow Flow Builder, their features and how to configure them.

## Initial Node

- [Start](/en/guide/flows/nodes/start) - Flow entry point

## Sending Nodes

Nodes for sending messages and content to customers:

- [Text Message](/en/guide/flows/nodes/text) - Sends text, lists and links
- [Send Audio](/en/guide/flows/nodes/audio) - Sends audio files
- [Send Image](/en/guide/flows/nodes/image) - Sends images with caption
- [Send Video](/en/guide/flows/nodes/video) - Sends videos
- [Send Document](/en/guide/flows/nodes/document) - Sends PDFs and documents
- [Send Email](/en/guide/flows/nodes/email) - Sends emails via SMTP

## Receiving Nodes

Nodes for capturing customer responses:

- [Wait for Response (Input)](/en/guide/flows/nodes/input) - Captures text or options

## Flow Control Nodes

Nodes for controlling logic and routing:

- [Delay](/en/guide/flows/nodes/delay) - Pauses execution
- [Condition](/en/guide/flows/nodes/condition) - Creates conditional branches
- [Random](/en/guide/flows/nodes/random) - Distributes randomly
- [Jump To](/en/guide/flows/nodes/jump-to) - Redirects to another node

## Data Nodes

Nodes for manipulating variables and data:

- [Set Variable](/en/guide/flows/nodes/variable) - Defines or calculates values
- [Update Customer](/en/guide/flows/nodes/update-customer) - Updates customer data
- [HTTP Request](/en/guide/flows/nodes/request) - Calls external APIs

## Action Nodes

Nodes for executing automated actions:

- [Create Task](/en/guide/flows/nodes/create-task) - Creates tasks automatically

## AI Nodes

Nodes for artificial intelligence integration:

- [AI Agent](/en/guide/flows/nodes/agenteia) - Executes pre-configured agent
- [OpenAI](/en/guide/flows/nodes/openai) - Direct GPT integration
- [ElevenLabs TTS](/en/guide/flows/nodes/elevenlabs) - ElevenLabs voice synthesis
- [Minimax TTS](/en/guide/flows/nodes/minimax) - Minimax voice synthesis

## System Nodes

Nodes for internal actions and organization:

- [System Message](/en/guide/flows/nodes/system-message) - Internal message
- [Private Note](/en/guide/flows/nodes/private-note) - Adds note to service
- [Close Attendance](/en/guide/flows/nodes/close-attendance) - Closes the service
- [Group](/en/guide/flows/nodes/group) - Groups nodes visually

## Sales Nodes

Nodes specific to the sales module:

- [POS (Point of Sale)](/en/guide/flows/nodes/pos) - Sales system integration

## Node Overview

| Node | Category | Description |
|------|----------|-------------|
| Start | Initial | Flow entry point |
| Text | Sending | Sends text message |
| Audio | Sending | Sends audio file |
| Image | Sending | Sends image |
| Video | Sending | Sends video |
| Document | Sending | Sends document |
| Email | Sending | Sends email |
| Input | Receiving | Waits for response |
| Delay | Control | Pauses execution |
| Condition | Control | Logical branching |
| Random | Control | Random distribution |
| Jump To | Control | Redirection |
| Variable | Data | Defines values |
| Update Customer | Data | Updates record |
| HTTP Request | Data | Calls APIs |
| Create Task | Actions | Creates tasks |
| AI Agent | AI | Executes agent |
| OpenAI | AI | GPT integration |
| ElevenLabs | AI | Voice synthesis |
| Minimax | AI | Voice synthesis |
| System Message | System | Internal message |
| Private Note | System | Service note |
| Close | System | Closes service |
| Group | System | Visual organization |
| POS | Sales | Sales system |

## Next Steps

- [Flow Builder](/en/guide/flows/builder)
- [Flow Triggers](/en/guide/flows/triggers)
- [Variables](/en/guide/flows/variables)
