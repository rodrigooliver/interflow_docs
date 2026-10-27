---
title: Telegram Bot
description: How to connect a Telegram bot and handle direct messages and groups in Interflow.
app: /app/settings/channels/new/telegram
---

# Telegram Bot

The **Telegram Bot** channel receives and replies to chats from a bot you create on Telegram. The customer talks to the bot. The team replies in the Interflow inbox.

## What this channel is not

It is not a personal Telegram account and it does not use a teammate's phone number. Telegram broadcast channels are also out of scope.

## Before you connect

1. Have a Telegram account
2. The Interflow API must be published on **HTTPS**. Telegram does not deliver messages to a local address without HTTPS
3. The organization plan must have the **Telegram Bot** channel type enabled

## Create the bot

1. In Telegram, search for **@BotFather** and open the official chat. If the command list appears, send `/start` and then `/newbot`
2. BotFather asks for a name. That name **may include spaces**. A name that works: `Interflow Bot`
3. Next it asks for a username. That field **does not allow spaces** and **must end in `bot`**
4. Usernames rejected at this step: `Interflow` (does not end in `bot`) and `Interflow Bot` (space). A username that works: `Interflow_Bot`. The bot lives at `t.me/Interflow_Bot`
5. When the reply is **Done**, BotFather shows the token: digits, a colon, and a key. Copy only that line
6. Do not forward the token message. Anyone with the token controls the bot. If it leaked, send `/revoke` to BotFather and use the new token

Optional, still in BotFather (`/help` lists the commands):

- `/setdescription` sets the profile description
- `/setabouttext` sets the short about text
- `/setuserpic` sets the photo
- `/setjoingroups` sets whether the bot can be added to groups
- `/setprivacy` with **Disable** makes the bot read every message in groups it belongs to. With privacy on, the bot only sees mentions, replies to its own messages, and commands

## Connect in Interflow

1. Open **Settings → Channels**
2. Click **New channel** and choose **Telegram Bot**
3. Fill in the channel name, the label the team will see in the list
4. Paste the token and save
5. If the token is valid and the API address is HTTPS, the channel connects and the bot starts delivering messages to Interflow

To replace the token or stop delivery, open the channel and use the **Connection** tab.

## What arrives in the conversation

| Source | What Interflow does |
|--------|---------------------|
| Direct message | Creates or reopens that person's conversation |
| Group | Creates the group conversation if the bot is a member |
| Text, image, video, audio, file, and static sticker | Land in the conversation |
| Edited message | Updates the text already stored |

The customer name comes from the Telegram first and last name. The username is stored on the conversation. The numeric id is what Interflow uses to reply.

## How the team replies

In the conversation, send text, an image, a video, audio, or a file. There is no 24-hour window: a reply can go out at any time, within Telegram's limits.

- Text: up to 4096 characters
- A file caption: up to 1024 characters
- There is no delivered or read icon. Status stays sent once Telegram accepts the message

## Groups

1. Open the group in Telegram
2. Add the bot as a member
3. If the team must see every message, not only mentions, turn privacy off in BotFather (`/setprivacy` → **Disable**)

The group title is the conversation name. The username of whoever wrote in the group does not replace the group id.

## Replace or remove the bot

- **Replace the token:** on the Connection tab, paste the new token and save. The previous bot stops delivering messages to this channel
- **Disconnect:** use **Disconnect**. The bot stops sending updates until you connect again
- **Delete the channel:** only when no conversations are linked. Delete those conversations first if you need to remove the channel

Back to [changelog v2026.10.35](/en/changelog/2026/10/2026.10.35).
