# DeepSeek Integration

DeepSeek is an alternative AI provider that you can connect using your own API key. Unlike OpenAI, using DeepSeek **does not consume the tokens included in your Interflow plan** — billing is handled directly by DeepSeek, on your own account.

::: warning PAYMENT REQUIRED
You must add credits/payment method to your DeepSeek account to use the API, which works on a token-based usage model.
:::

## How to get a DeepSeek API key

1. Go to the [DeepSeek platform](https://platform.deepseek.com/api_keys) and log in to your account (or create a new one)
2. Navigate to **"API Keys"** in the dashboard menu
3. Click **"Create new API key"**, give it a name to identify it (e.g., "Interflow") and add a payment method
4. Copy the generated key and paste it in Interflow

::: danger WARNING
You will only be able to see the key **once** after creation. Save it in a secure location before closing the window.
:::

## Configure in Interflow

You can register your DeepSeek key in two ways:

### Option 1: From the Integrations screen

1. In Interflow, go to **Settings** → **Integrations**
2. Click **"Add DeepSeek"**
3. Give the integration a title and paste your API key
4. Click **Validate** and then **Save**

### Option 2: Directly from the Prompt form

1. When creating or editing an AI Agent, open the **Integration** field
2. Select **"+ Add DeepSeek"**
3. Fill in the title and API key, validate, and save
4. The newly created integration is automatically selected for the current prompt

<!-- Placeholder for screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: DeepSeek key configuration in Interflow</p>
</div>

## Available models

| Model | Input (cache miss) | Input (cache hit) | Output | Notes |
|-------|---------------------|---------------------|--------|-------|
| DeepSeek V4 Flash | $0.14 / 1M tokens | $0.0028 / 1M tokens | $0.28 / 1M tokens | Fast and cost-effective, ideal for most use cases |
| DeepSeek V4 Pro | $0.435 / 1M tokens | $0.003625 / 1M tokens | $0.87 / 1M tokens | More capable, recommended for complex tasks |

::: info PRICING SOURCE
Values checked on the [official DeepSeek pricing page](https://api-docs.deepseek.com/quick_start/pricing). Subject to change by DeepSeek without prior notice.
:::

## Thinking Mode (reasoning)

Both models support an optional chain-of-thought reasoning mode called **Thinking Mode**. When a DeepSeek model is selected in the prompt, the form shows a dedicated control:

- **Enable/disable** Thinking Mode
- **Reasoning effort**: High or Maximum

::: tip TIP
With Thinking Mode enabled, **temperature is ignored** — this is a limitation of the DeepSeek API itself, which doesn't allow combining chain-of-thought reasoning with temperature control.
:::

## Where the DeepSeek model can be used

Once you've configured the integration and selected a DeepSeek model in your prompt, it's automatically used in:

- Your flows' **AI Agent**
- **Test Prompt** (inside the prompt editing screen)
- **Improve Text** (when the associated prompt uses DeepSeek)

## Need help?

If you have questions about the integration:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Available on the platform
