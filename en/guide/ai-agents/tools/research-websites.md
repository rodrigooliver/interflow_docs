# Research information on websites

Lets the AI **read web page content** during support and use the text (as markdown) to answer with up-to-date information — limited to the sites you allow.

**When to use:**
- Look up catalog, inventory, pricing, or policies on the company site
- Follow docs, changelogs, or product pages without pasting text into the prompt
- JavaScript sites (Firecrawl engine) or static HTML (Plain HTML engine)

**Configuration:**
1. Add the **Research information about…** action
2. Choose the engine:
   - **Firecrawl** — requires the [integration](/en/guide/integrations/firecrawl) (organization API key); renders JS and allows optional free search
   - **Plain HTML** — static fetch, no key; best for non-SPA pages
3. Register the **sites** (URL + description of what is on each)
4. With Firecrawl: optionally enable **free web search**
5. Save the prompt

**Behavior:**
- The AI can change query params (e.g. `?search=Civic` → `?search=Corolla`)
- It can open **subpages** under the same path as the configured site
- If the page is only an index, the result may include `followUpLinks` for a second call

::: warning ⚠️ HTML engine
Sites built only with React/Next may return empty or incomplete results with Plain HTML. Prefer **Firecrawl**.
:::

::: tip 💡 Security
With free search **off**, the server only accepts URLs from configured sites (and subpages under the same path).
:::

**Example:**
```text
👤 Customer: Do you have a 2022 Corolla in stock?
🤖 AI: [scrapes the site with ?search=Corolla] Yes — I found 3 units…
```

> Changelog: [v2026.7.13](/en/changelog/2026/07/2026.7.13) · Integration: [Firecrawl](/en/guide/integrations/firecrawl)

