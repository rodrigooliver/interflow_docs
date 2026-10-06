# Away messages

The **Away messages** screen is in Settings, below Teams.

## Individual away message

Default text used when an agent marks themselves away and has not saved their own message. The agent modal opens with this text. If they save another one, it applies only to them.

When the chat's agent is offline with customer notice on, that message takes priority over company rules.

## Company rules

Each rule has its own text and is edited in a modal.

- **Channels:** search and multi-select of channels you already created. None selected means every channel.
- **Status:** waiting, in progress, or both if none is selected.
- **Flow:** with or without a flow. "With a flow" includes an active session, a flow about to start (new contact), or a flow set to start on reply.
- **Hours:** the rule's time zone and ranges per day. The same weekday cannot be added twice. With no days, the rule always applies. A range that crosses midnight is valid. An empty end means 23:59.

List order is priority. The first matching rule is sent. Chats with no agent can receive a company rule too.

The same chat does not get another automatic away message (individual or company) for 30 minutes.

> Changelog: [v2026.10.8](/en/changelog/2026/10/2026.10.8)
