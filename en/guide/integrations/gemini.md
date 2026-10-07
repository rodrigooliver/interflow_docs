# Gemini integration

Gemini covers conversation (agent, prompt test, and copilot) and system voices. The same API key serves both.

With the organization’s key, Google bills that account. Without a key, Gemini models in the Interflow catalog use AI credits at the Standard rate.

## Key

1. Create a key in [Google AI Studio](https://aistudio.google.com/apikey)
2. In Interflow, open **Settings** → **Integrations** → **Gemini**
3. Validate the key and save

## Conversation

On the agent, pick the Gemini integration and a model from the list. With Interflow credits, the same models appear in the catalog, with no integration.

Under **Parameters**, Gemini uses the **reasoning level** (low, medium, or high) and the **max tokens**. That limit includes thinking tokens. Temperature, verbosity, and the OpenAI reasoning-summary control do not apply. In the prompt test, the thought summary shows while the reply is generated. The customer only receives the answer.

In the copilot, the same low, medium, and high levels apply to Gemini. The reply streams in and the reasoning summary shows in the panel. On Gemini 3 the level is the API value (`low`, `medium`, `high`). 3.8 does not accept minimal. On 2.5 the level becomes a token budget. 2.5 Flash-Lite does not think on low.

Interflow credit prices, USD per 1 million tokens (input / output). Flash 3.6, 3.7, and 3.8 and 3.8 TTS already use the 2027 rate, without Google’s promotion: Flash 3.8/3.7/3.6 at 1.50 / 7.50; 3.5 Flash at 1.50 / 9.00; 3.5 Flash-Lite at 0.30 / 2.50; 3.1 Flash-Lite at 0.25 / 1.50; Gemini 3 Flash at 0.50 / 3.00; 3.1 Pro at 2.00 / 12.00; 2.5 Pro at 1.25 / 10.00; 2.5 Flash at 0.30 / 2.50; 2.5 Flash-Lite at 0.10 / 0.40.

On your own key, Google still bills the promotion through December 31, 2026. On the balance, 3.8 Flash TTS is 1 / 18 and 3.8 Flash-Lite TTS is 1 / 12 (text / audio). Pro prompts above 200k tokens use the higher tier.

## Voice

Under **Voices** → **Catalog** → **Gemini**, click **Test text**. The field is already filled in, with 3.8 Flash-Lite TTS as the default model. You can change the model inside the test. The audio is saved as MP3.

**Use this voice** saves the preset. Under **My voices** and in the form, **Test text** repeats the test with that voice’s settings. The same dialog exists for ElevenLabs.

The voice can use the integration key or Interflow credits. The charge follows the text and audio tokens reported by the API.

> Changelog: [v2026.10.11](/en/changelog/2026/10/2026.10.11)
