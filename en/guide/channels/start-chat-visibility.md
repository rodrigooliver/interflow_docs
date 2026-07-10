# Restrict channels when starting a conversation

Control who can see and select each channel when starting a new conversation with a customer.

## What is it?

Each channel can have a **visibility rule when starting a conversation**:

| Option | Behavior |
|--------|----------|
| **Everyone** | Any organization member sees the channel (default) |
| **By role** | Only users with the selected roles |
| **Users** | Only the selected people |

**Owners and admins** always see all primary channels, for operations and configuration.

**Auxiliary channels** (linked to a primary channel) **never** appear in the list when starting a conversation — only the primary channel does.

## What is it for?

| Scenario | Example |
|----------|---------|
| Restricted official number | Only managers and a group of users can start via the main number |
| Sales channel | Visible only to the sales role |
| Prevent misuse | Stop agents from using a billing or VIP channel |

## Where to access

| Area | Path |
|------|------|
| **Configure** | Channels → open the channel → Settings → **Who can start a conversation on this channel** |
| **Use** | When starting a conversation from a contact (customer, list, new conversation, etc.) |

## How to configure

1. Open the channel under **Channels**
2. Click **Settings**
3. In the visibility section, choose **Everyone**, **By role**, or **Users**
4. If you choose role or users, select the desired options
5. Save

::: tip 💡 Default
Channels without a specific configuration stay open to **everyone**. Nothing changes until you restrict them.
:::

## What the user sees

- The list when starting a conversation shows only channels that are **active**, of a **compatible type** for the contact, and **allowed** for the profile
- If no channel is available, the platform states that there is no channel for that profile
- The restriction is also validated on the server: without permission, conversation creation is blocked

## Limitations

- The rule applies when **starting a new conversation** (channel selection). It does not by itself change inbox filters
- Organization API key integrations do not apply the role/user restriction (auxiliary channels are still blocked)
- Custom permission groups use the member's **base role** (as with other visibility controls in the platform)

## Related

- [Changelog v2026.7.5](/en/changelog/2026/07/2026.7.5)
- [Support Channels](/en/guide/channels/)
