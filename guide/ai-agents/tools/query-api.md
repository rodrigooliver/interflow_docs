# Consultar API

Permite que a IA **consulte e execute operações em uma API externa** durante o atendimento (base URL, autenticação criptografada e lista de rotas permitidas). Cada rota vira uma tool cujo **nome é o id em slug** (ex.: `get_order`).

**Quando usar:**
- Consultar status de pedido, cobrança, estoque ou cliente em sistemas externos
- Criar/atualizar registros via API REST
- Expor só endpoints seguros (allowlist), sem busca aberta na web

**Configuração:**
1. Adicione a ação **Consultar API**
2. Informe a **Base URL** e o tipo de autenticação (Bearer, header ou query)
3. Cadastre a chave (fica **criptografada**, no mesmo padrão das Integrations)
4. Adicione rotas: `id` (slug), descrição, method, path e parâmetros — ou use **Gerar com IA**
5. Opcional: **teste cada rota** no servidor antes de publicar

#### Gerar rotas com IA

Ao adicionar uma ação nova (ainda sem rotas), o assistente **abre automaticamente**. Você pode:

- Descrever em linguagem natural o que o agente precisa fazer
- Informar a **URL da documentação** (opcional)
- Colar **trechos da documentação** ou exemplos de chamadas (`curl`)

A IA monta **só as rotas necessárias**, além do nome, descrição e slug da ação. Revise, ajuste e teste antes de colocar em produção.

```text
Exemplo de descrição + curl:

Quero integrar a API do Asaas no atendimento.
O agente precisa buscar cliente pelo CPF e listar cobranças.

curl -X GET "https://api.asaas.com/v3/customers?cpfCnpj=12345678900" \
  -H "access_token: $ASAAS_API_KEY"
```

::: tip 💡 Assistente com web search
O botão **Gerar com IA** usa busca na web **somente na configuração**. No atendimento, o agente só chama as rotas que você permitiu.
:::

#### Testar rotas

Em cada rota, use **Testar rota**, preencha parâmetros de exemplo e execute. O teste roda no **servidor** (a chave não vai para o navegador). O status do último teste aparece como OK, Erro ou Não testado.

::: warning ⚠️ POST / PUT
Testes de criação ou atualização podem **gerar dados reais** no sistema externo. Não é necessário testar todas as rotas.
:::

::: info ⚠️ Chaves
A chave nunca entra no schema da tool nem na resposta ao modelo. Na UI aparece mascarada (`••••`).
:::

**Exemplo:**
```text
👤 Cliente: Qual o status do pedido 12345?
🤖 IA: [chama get_order] Seu pedido 12345 está em transporte.
```

> Changelog: [v2026.7.10](/changelog/2026/07/2026.7.10)

