# Integração Firecrawl

Use o Firecrawl para extrair conteúdo de páginas web (incluindo sites com JavaScript) e alimentar o **Agente de IA** com texto em markdown.

> Changelog: [v2026.7.13](/changelog/2026/07/2026.7.13)

## O que é

O Firecrawl é um serviço externo que faz scrape de páginas e devolve o conteúdo limpo. No Interflow, a **API key fica na organização** (Configurações → Integrações) e é usada pela ferramenta **Pesquisar informações em sites** do Agente de IA.

## Configurar a chave

1. Crie uma conta e uma API key no [Firecrawl](https://www.firecrawl.dev/)
2. No Interflow: **Configurações → Integrações**
3. Localize **Firecrawl**
4. Cole a chave, valide e salve

A chave é armazenada **criptografada** e aparece mascarada na interface.

## Usar no Agente de IA

1. Abra o **Agente de IA** (Prompt) → **Ações / Ferramentas**
2. Adicione **Pesquisar informações sobre…**
3. Escolha o motor **Firecrawl** e selecione a integração salva
4. Cadastre os sites permitidos (URL + descrição)
5. Opcional: ative a **busca livre na web**
6. Salve e publique o prompt

> Passo a passo da ferramenta: [Ferramentas da IA — Pesquisar informações em sites](/guide/ai-agents/tools/research-websites)

## Firecrawl vs HTML puro

| Motor | Precisa de chave? | Indicado para |
|-------|-------------------|---------------|
| **Firecrawl** | Sim | Sites com JavaScript / SPAs, busca livre na web |
| **HTML puro** | Não | Páginas HTML estáticas, sem custo de API |

## Relacionados

- [Ferramentas da IA](/guide/ai-agents/tools/)
- [Agentes IA](/guide/ai-agents/)
