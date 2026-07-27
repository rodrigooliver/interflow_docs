# Audio transcription

Automatically convert conversation audio to text, with per-channel controls.

## What it is

When audio is received or sent in a conversation, Interflow can generate a **text transcript** with AI (OpenAI Whisper). The text:

- Appears with the audio message in the chat
- Feeds the **AI Agent** and assistant context
- Speeds up reading and searching history

## Requirements

- Channel with the desired transcription option **enabled**
- Active **OpenAI** integration **or** organization **AI credits** balance

Without an OpenAI key or credits, audio is stored normally but **without** a transcript.

## Per-channel settings

In **Channels** → edit the channel:

| Setting | Default | Scope |
|---------|---------|-------|
| **Transcribe customer audio** | On | Audio sent by the customer |
| **Transcribe agent audio** | Off | Audio sent by the agent in Interflow or the channel app |
| **Transcribe group audio** | Off | **WhatsApp WAHA** only, when groups are enabled |

### Existing channels

If the setting has not been saved yet:

- Customer: stays **on** (previous behavior)
- Agent and groups: stay **off** until you enable them

### Audio sent from the agent's phone

For audio sent outside Interflow (from the phone WhatsApp) to be stored and transcribed:

1. Enable upload of media sent via WhatsApp / external media on the channel
2. Enable **Transcribe agent audio**

Without media upload, there is no file to transcribe.

### Groups (WhatsApp WAHA)

By default, group audio is **not** transcribed (groups rarely use AI). To enable:

1. Enable **Enable groups** on the WAHA channel
2. Enable **Transcribe group audio**
3. Keep customer and/or agent options as needed

## Day-to-day use

1. Configure the channel using the table above
2. When an eligible audio is received or sent, wait for the transcript
3. Read the **Transcription** block below the audio player
4. Use the text in history and AI context for the next replies

## Credits and cost

When the organization uses the Interflow key (AI credits), transcription consumes **Audio Transcription** credits based on duration. With the organization's own OpenAI key, usage follows the customer's OpenAI account.

## Limitations

- Transcription failure does **not** block sending or receiving the audio
- Very long or low-quality audio may produce incomplete text
- In WAHA groups, transcription only runs when **Transcribe group audio** is on

## Related

- [WhatsApp WAHA](/en/guide/channels/whatsapp-waha) — groups and media
- [Changelog v2026.7.15](/en/changelog/2026/07/2026.7.15)
