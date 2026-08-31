# System voices

Generate audio from text in the conversation, using the organization’s saved voices.

> Changelog: [v2026.8.24](/en/changelog/2026/08/2026.8.24)

## What it is for

- Send audio in the brand voice without recording on the microphone
- Keep tone, speed, and provider consistent across attendants
- Store the script on the same message, as a transcription

## Where to find it

| Area | Path |
|------|------|
| **Save voices** | Sidebar → **Voices** |
| **Use in chat** | Message field → **Record from text** |

The chat button only appears if there is at least one **active** voice and the channel accepts audio.

## Prerequisite

Add a TTS integration in **Settings**:

| Provider | Use |
|----------|-----|
| OpenAI | OpenAI speech voices and models |
| ElevenLabs | Voices from the ElevenLabs account |
| Minimax | Voices and language from the Minimax account |

These are the same providers as the flow audio nodes.

## Create a voice

Admin and owner create, edit, and delete. Other members only use active voices.

1. Open **Voices** → **New voice**
2. Give it a name (e.g. Female attendant)
3. Choose the integration — the provider comes from it
4. Adjust voice, model, speed, and the other provider fields
5. Leave it **Active** and save

An inactive voice disappears from the chat button, but stays in the list so you can turn it back on later.

To copy a voice, use **Duplicate** on the card or in the edit form. It opens a new voice with the same settings and a `(copy)` name — adjust and save.

## Use it in a conversation

1. Type the text in the message field
2. Click **Record from text**
   - **One** active voice: generates immediately
   - **Two or more**: pick the voice in the menu
3. The audio appears as a preview; the script collapses
4. **Edit** opens the text again; **Regenerate** creates another file with the same voice
5. Send

Removing the preview deletes the generated file. Regenerating also replaces the previous file.

## What the customer receives

In Interflow the message is **one**: audio + text as transcription.

On WhatsApp (and voice channels without an audio caption), the customer **only hears** the audio. The script is not sent as a separate text message.

## Limitations

- With no active voice, the button does not appear
- With no text in the field, it does not generate
- Channels that do not send audio do not show the button
- Only admin and owner change the voice catalog
