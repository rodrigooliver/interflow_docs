# Nó: Webhook Trigger

Recebe eventos de sistemas externos e inicia um fluxo automaticamente.

## Visão Geral

O nó **Webhook Trigger** é o ponto de entrada de um fluxo disparado por um sistema externo via HTTP. Ao contrário do nó Start (que exige interação do usuário), o Webhook Trigger é ativado por uma chamada de API — de plataformas de vendas, ERPs, CRMs ou qualquer serviço que envie dados.

Casos de uso:

- Criar ou atualizar um cliente quando um novo pedido chega de uma loja
- Iniciar um fluxo de boas-vindas ao receber um cadastro de lead
- Rotear diferentes ações com base no tipo de evento recebido
- Integrar com serviços como **Kiwify**, **Hotmart**, **Shopify** ou qualquer webhook personalizado

## Como adicionar ao fluxo

1. No construtor de fluxos, arraste o nó **Webhook Trigger** para a área de trabalho
2. Clique no nó para abrir o painel de configuração
3. Uma URL única será gerada automaticamente — copie e configure no sistema externo

## Abas de configuração

### Aba: Geral

#### URL do Webhook

A URL é gerada automaticamente no formato:

```
https://api.suaapp.com/webhooks/flow/{id}
```

Copie esta URL e configure no sistema externo como destino do webhook.

#### Mapeamento de Variáveis

Mapeie campos do payload para variáveis do fluxo:

| Campo no Body | Variável do Fluxo |
|---------------|-------------------|
| `body.user.name` | `nome_cliente` |
| `body.order.total` | `valor_pedido` |
| `body.event` | `tipo_evento` |

Use notação de ponto para acessar campos aninhados e `[0]` para arrays:
- `body.data[0].email`
- `body.customer.address.city`

#### Salvar body completo como JSON

Ative esta opção para salvar todo o payload em uma variável do tipo `objeto`. Útil para payloads dinâmicos ou para inspecionar o conteúdo completo.

---

### Aba: Segurança

#### Tipo de Autenticação

| Tipo | Descrição |
|------|-----------|
| **Bearer** | Token no header `Authorization: Bearer <token>` |
| **Header customizado** | Token em um header de nome definido pelo usuário |
| **Query param** | Token como parâmetro na URL (`?token=xxx`) |
| **HMAC** | Assinatura criptográfica no payload (ver abaixo) |
| **Público** | Sem autenticação — aceita qualquer chamada |

**Gerenciar o token:**

- Clique em **Gerar novo token** para criar um token seguro automaticamente
- Ou insira seu próprio valor no campo de texto e clique em **Salvar token**
- O token é armazenado **criptografado** no banco de dados
- Clique no ícone de olho para revelar o token original (somente administradores)

#### Autenticação HMAC

Use quando o sistema externo envia uma **assinatura criptográfica** do payload (ex.: Kiwify, Hotmart):

| Campo | Descrição |
|-------|-----------|
| **Algoritmo** | SHA-1, SHA-256 ou SHA-512 |
| **Origem da assinatura** | `query` (parâmetro na URL) ou `header` |
| **Nome do parâmetro** | Nome do query param ou header que contém a assinatura |
| **Segredo** | A chave secreta compartilhada com o serviço externo |

Exemplo para Kiwify:
- Algoritmo: `SHA-1`
- Origem: `query`
- Parâmetro: `signature`

#### Allowlist de IPs

Liste os IPs permitidos (um por linha). Chamadas de outros IPs serão rejeitadas com `403`. Deixe vazio para aceitar qualquer IP.

#### Allowlist de Origens

Liste os domínios permitidos. Ex.: `https://app.kiwify.com.br`. Deixe vazio para aceitar qualquer origem.

---

### Aba: Cliente & Chat

Configure a criação/atualização automática de clientes e chats com base nos dados do webhook.

#### Vínculo com Cliente

Ative o toggle e adicione os campos do cliente:

1. Clique em **Adicionar** para incluir uma nova linha de mapeamento
2. Selecione o **campo do cliente** (Nome, E-mail, Documento, WhatsApp, etc.)
3. Informe o **caminho no body** (ex.: `body.customer.email`)
4. Clique no ícone de **lupa** 🔍 nos campos que devem ser usados para **localizar** o cliente

**Lógica de busca (OR):** o sistema busca qualquer cliente que corresponda a *ao menos um* dos campos com lupa ativa. Ative a lupa em pelo menos um campo.

**Regras de atualização ao encontrar cliente existente:**

| Campo | Regra |
|-------|-------|
| **Nome** | Sempre atualizado |
| **E-mail / Telefone** | Atualiza coluna direta se estiver vazia; caso contrário adiciona em `customer_contacts` |
| **Documento** | Atualiza apenas se estiver vazio |
| **WhatsApp, Instagram, Telegram** | Sempre adicionado em `customer_contacts` (sem sobrescrever) |

Se nenhum cliente for encontrado, um novo é criado automaticamente com os dados mapeados.

#### Vínculo com Chat

Ative o toggle e configure:

| Campo | Descrição |
|-------|-----------|
| **Canal** | Canal pelo qual o chat será criado (WhatsApp, e-mail, Instagram, etc.) |
| **Caminho do contato** | Onde está o número/e-mail no body (ex.: `body.customer.phone`) |
| **Tipo de contato** | `whatsapp`, `phone`, `email`, `instagram`, etc. |

O chat será encontrado ou criado automaticamente. O contato também é registrado em `customer_contacts` se ainda não existir.

::: tip
Com cliente e chat vinculados, o fluxo executa em **modo completo** — podendo enviar mensagens, usar nós de input, etc. Sem vínculo, o fluxo executa em **modo headless** (somente nós que não dependem de chat).
:::

---

### Aba: Eventos

Configure roteamento condicional baseado em um campo do payload.

#### Caminho do Evento

Informe onde está o tipo de evento no payload (ex.: `body.event`, `body.type`, `body.trigger`).

#### Casos

Adicione um caso para cada tipo de evento esperado:

| Campo | Descrição |
|-------|-----------|
| **Label** | Nome descritivo (ex.: "Compra aprovada") |
| **Valor** | Valor exato do evento (ex.: `purchase.approved`) — suporta `{{variavel}}` |

Cada caso gera um **handle de saída laranja** no nó. Um handle **cinza (else)** é sempre criado para eventos não mapeados.

**Exemplo de roteamento:**

```
body.event = "purchase.approved"  →  handle "Compra aprovada"
body.event = "purchase.refunded"  →  handle "Reembolso"
body.event = (qualquer outro)     →  handle "else"
```

---

## Modo "Ouvir" — Testes em tempo real

O modo **Ouvir** aguarda a chegada de um webhook real e exibe os dados para facilitar a configuração.

1. Clique em **Ouvir** no painel do nó
2. Dispare um webhook de teste do sistema externo
3. Os dados aparecem em tempo real: body, headers, query params
4. O IP e a origem do chamador são exibidos como sugestão para o allowlist
5. Clique em **Mapear** ao lado de qualquer campo para adicioná-lo automaticamente ao mapeamento de variáveis
6. Clique no ícone de **copiar** para copiar o caminho do campo (ex.: `body.data[0].name`)

O painel de **Logs** (aba ao lado) mostra o histórico das últimas chamadas recebidas e também permite mapear variáveis a partir de chamadas anteriores.

---

## Comportamento no fluxo

### Com vínculo de Cliente + Chat configurado

O fluxo executa em **modo completo**:
- Todos os nós são executados normalmente
- O cliente e o chat ficam vinculados à sessão do fluxo
- É possível enviar mensagens, aguardar respostas, etc.

### Sem vínculo (ou vínculo incompleto)

O fluxo executa em **modo headless**:
- Nós que dependem de chat (enviar texto, aguardar input, etc.) são **ignorados**
- Nós independentes (Variável, Atualizar Cliente, Requisição HTTP, etc.) **executam normalmente**

### Roteamento por evento

Quando a aba **Eventos** está configurada:

1. O backend extrai o valor do campo de evento do payload
2. Compara com os casos configurados (interpolando variáveis se necessário)
3. Direciona para o handle correspondente
4. Se nenhum caso corresponder, usa o handle **else**

---

## Exemplos de uso

### Integração com Kiwify (HMAC SHA-1)

```
Autenticação: HMAC
Algoritmo: SHA-1
Origem: query
Parâmetro: signature
Caminho do evento: body.event

Casos:
  "order_approved"  →  Iniciar onboarding
  "order_refunded"  →  Cancelar acesso
  else              →  Registrar evento desconhecido
```

### Novo lead de formulário

```
Mapeamentos:
  body.name   → nome
  body.email  → email
  body.phone  → telefone

Vínculo com Cliente:
  E-mail ← body.email  [🔍 busca]
  Nome   ← body.name
  WhatsApp ← body.phone

Vínculo com Chat:
  Canal: WhatsApp Oficial
  Contato: body.phone
  Tipo: whatsapp
```

---

## Dicas

- Use **múltiplos campos de busca** (lupa) para evitar criar clientes duplicados quando o sistema externo pode enviar e-mail em um evento e WhatsApp em outro
- O modo **Ouvir** é a forma mais rápida de mapear variáveis — não é necessário editar os caminhos manualmente
- Combine com o nó **Condição** após o Webhook Trigger para lógica mais complexa além do roteamento simples por evento
- Para webhooks públicos (sem token), use o **allowlist de IPs** para garantir que apenas o servidor externo pode disparar o fluxo

## Próximos Passos

- [Construtor de Fluxos](/guide/flows/builder)
- [Tipos de Nós](/guide/flows/nodes/)
- [Variáveis](/guide/flows/variables)
- [Requisição HTTP](/guide/flows/nodes/request)
