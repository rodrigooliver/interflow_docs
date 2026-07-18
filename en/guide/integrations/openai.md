# OpenAI Integration

To use Interflow's AI features beyond the tokens included in your plan, you need to set up your OpenAI API key. Follow the instructions below to get your key.

::: warning PAYMENT REQUIRED
You must add a valid payment method to your OpenAI account to use the API, which works on a consumption basis with a minimum top-up of **$5 USD**.
:::

## How to get an OpenAI API key

### Option 1: New account (without organizations)

1. Go to the OpenAI website and log in to your account (or create a new one)
2. Click **"Start Building"** in the top right corner
3. Follow the guided process that will:
   - Create your organization
   - Generate your API Key
   - Request payment method automatically
4. Copy the generated key and paste it in Interflow

### Option 2: Existing account (with organizations)

1. Go to the OpenAI website and log in to your account
2. Navigate to **"API Keys"** in the sidebar menu
3. Click **"Create new secret key"**
4. Give it a name to identify the key (e.g., "Interflow")
5. Add a payment method (if you haven't already)
6. Copy the generated key and paste it in Interflow

::: danger WARNING
You will only be able to see the key **once** after creation. Save it in a secure location before closing the window.
:::

## Configure in Interflow

1. In Interflow, go to **Settings** → **Integrations**
2. Find the **OpenAI** section
3. Paste your API key in the designated field
4. Click **Save**

<!-- Placeholder for screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: OpenAI key configuration in Interflow</p>
</div>

## Useful links

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 20px 0;">

<a href="https://platform.openai.com" target="_blank" style="text-decoration: none;">
  <div style="background: #10a37f; color: white; border-radius: 8px; padding: 12px 20px; display: flex; align-items: center; gap: 8px;">
    <span>🔗</span>
    <span>Visit OpenAI website</span>
  </div>
</a>

<a href="https://platform.openai.com/account/billing" target="_blank" style="text-decoration: none;">
  <div style="background: #1a1a1a; color: white; border-radius: 8px; padding: 12px 20px; display: flex; align-items: center; gap: 8px;">
    <span>💳</span>
    <span>Add payment method</span>
  </div>
</a>

</div>

## Pricing and usage

OpenAI charges per **tokens consumed**. The cost varies according to the model used.

::: info AVAILABLE MODELS
Below are the **main models**, but you can choose any other model available on OpenAI. Check the [official documentation](https://platform.openai.com/docs/models) to see all models.
:::

### Models with reasoning

| Model | Input | Output | Notes |
|-------|-------|--------|-------|
| GPT-5.5 | $5.00 / 1M tokens | $30.00 / 1M tokens | Premium reasoning |
| GPT-5.4 | $2.50 / 1M tokens | $15.00 / 1M tokens | Latest reasoning |
| GPT-5.4 Mini | $0.75 / 1M tokens | $4.50 / 1M tokens | Economical reasoning |
| GPT-5.4 Nano | $0.20 / 1M tokens | $1.25 / 1M tokens | Super economical reasoning |
| GPT-5.2 | $1.75 / 1M tokens | $14.00 / 1M tokens | Advanced reasoning |
| GPT-5.1 / GPT-5 | $1.25 / 1M tokens | $10.00 / 1M tokens | Reasoning |
| GPT-5 Mini | $0.25 / 1M tokens | $2.00 / 1M tokens | Fast and cost-effective |
| GPT-5 Nano | $0.05 / 1M tokens | $0.40 / 1M tokens | Most economical in the family |

### Conversation models (Chat)

| Model | Input | Output |
|-------|-------|--------|
| GPT-5.3 / 5.2 Chat Latest | $1.75 / 1M tokens | $14.00 / 1M tokens |
| GPT-5.1 / GPT-5 Chat Latest | $1.25 / 1M tokens | $10.00 / 1M tokens |

### Models without reasoning

| Model | Input | Output | Notes |
|-------|-------|--------|-------|
| GPT-4.1 | $2.00 / 1M tokens | $8.00 / 1M tokens | Smart and versatile model |
| GPT-4.1 Mini | $0.40 / 1M tokens | $1.60 / 1M tokens | Low cost with good performance |
| GPT-4.1 Nano | $0.10 / 1M tokens | $0.40 / 1M tokens | Most economical, ideal for light tasks |

::: tip TIP
For most customer service use cases, **GPT-5 Nano**, **GPT-5 Mini**, or **GPT-5.4 Nano** offer excellent value. Use **GPT-4.1** when you don't need advanced reasoning. Full list in [AI Agents](/en/guide/ai-agents/).
:::

## Need help?

If you have questions about the integration:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Available on the platform

