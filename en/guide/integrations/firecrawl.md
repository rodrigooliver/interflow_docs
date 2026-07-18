# Firecrawl Integration

Use Firecrawl to extract web page content (including JavaScript sites) and feed the **AI Agent** with markdown text.

> Changelog: [v2026.7.13](/en/changelog/2026/07/2026.7.13)

## What it is

Firecrawl is an external service that scrapes pages and returns clean content. In Interflow, the **API key belongs to the organization** (Settings → Integrations) and is used by the **Research information on websites** AI Agent tool.

## Configure the key

1. Create an account and API key at [Firecrawl](https://www.firecrawl.dev/)
2. In Interflow: **Settings → Integrations**
3. Find **Firecrawl**
4. Paste the key, validate, and save

The key is stored **encrypted** and appears masked in the UI.

## Use in the AI Agent

1. Open the **AI Agent** (Prompt) → **Actions / Tools**
2. Add **Research information about…**
3. Choose the **Firecrawl** engine and select the saved integration
4. Register the allowed sites (URL + description)
5. Optional: enable **free web search**
6. Save and publish the prompt

> Tool walkthrough: [AI Tools — Research information on websites](/en/guide/ai-agents/tools/research-websites)

## Firecrawl vs Plain HTML

| Engine | Needs a key? | Best for |
|--------|--------------|----------|
| **Firecrawl** | Yes | JavaScript / SPA sites, free web search |
| **Plain HTML** | No | Static HTML pages, no API cost |

## Related

- [AI Tools](/en/guide/ai-agents/tools/)
- [AI Agents](/en/guide/ai-agents/)
