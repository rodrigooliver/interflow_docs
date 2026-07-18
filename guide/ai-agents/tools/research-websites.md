# Pesquisar informações em sites

Permite que a IA **leia conteúdo de páginas web** durante o atendimento e use o texto (em markdown) para responder com informações atualizadas — limitada aos sites que você liberar.

**Quando usar:**
- Consultar catálogo, estoque, preços ou políticas no site da empresa
- Acompanhar docs, changelogs ou páginas de produto sem colar o texto no prompt
- Sites com JavaScript (motor Firecrawl) ou HTML estático (motor HTML puro)

**Configuração:**
1. Adicione a ação **Pesquisar informações sobre…**
2. Escolha o motor:
   - **Firecrawl** — precisa da [integração](/guide/integrations/firecrawl) (API key da organização); renderiza JS e permite busca livre opcional
   - **HTML puro** — fetch estático, sem chave; melhor para páginas sem SPA
3. Cadastre os **sites** (URL + descrição do que há em cada um)
4. Com Firecrawl: opcionalmente ative a **busca livre na web**
5. Salve o prompt

**Comportamento:**
- A IA pode mudar query params (ex.: `?search=Civic` → `?search=Corolla`)
- Pode abrir **subpáginas** sob o mesmo path do site configurado
- Se a página for só um índice, o resultado pode trazer `followUpLinks` para uma segunda chamada

::: warning ⚠️ Motor HTML
Sites feitos só com React/Next podem voltar vazios ou incompletos no HTML puro. Prefira **Firecrawl**.
:::

::: tip 💡 Segurança
Com a busca livre **desligada**, o servidor só aceita URLs dos sites configurados (e subpáginas do mesmo path).
:::

**Exemplo:**
```text
👤 Cliente: Vocês têm Corolla 2022 no estoque?
🤖 IA: [scrape do site com ?search=Corolla] Sim — encontrei 3 unidades…
```

> Changelog: [v2026.7.13](/changelog/2026/07/2026.7.13) · Integração: [Firecrawl](/guide/integrations/firecrawl)

