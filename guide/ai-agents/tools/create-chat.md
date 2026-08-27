# Criar ou continuar chat

Abre um novo atendimento (ou reutiliza o chat ativo) com os dados que a IA recolheu na conversa.

> Changelog: [v2026.8.20](/changelog/2026/08/2026.8.20)

## Para que serve

- Cliente indica um número para você chamar — a IA abre o WhatsApp (ou continua o chat ativo) com o contexto da indicação
- Chega um e-mail com nome, telefone e outros dados — a IA inicia o atendimento no WhatsApp a partir desses dados
- Qualificar no Instagram e seguir no WhatsApp, já com tags, funil e campos preenchidos

**Onde configurar:** Agentes IA → aba **Ferramentas** → **Ações prontas** → **Criar ou continuar chat**.

## O que já vem pronto

| Campo | Descrição |
|-------|-----------|
| **Canal** | Obrigatório. Define o identificador que a IA precisa (WhatsApp, e-mail, Instagram ou Facebook) |
| **Equipe** | Opcional. Equipe do novo atendimento |
| **Iniciar imediatamente** | Só WhatsApp não oficial (WAHA e equivalentes). O fluxo começa assim que o chat é criado |
| **Quando o cliente responder** | Qualquer canal. O fluxo começa na primeira resposta do cliente (no Oficial, depois do template) |
| **Mensagem de contexto** | Independente do canal, do funil e de qual fluxo você escolheu. Texto fixo ou escrito pela IA; o mesmo texto vale para os dois fluxos |
| **Estágio do funil** | Opcional. Move o cliente para a etapa escolhida após criar o chat |
| **Manter pendente** | Ligado por padrão. O chat novo não é atribuído automaticamente |
| **Mensagem inicial** | Canal WhatsApp não oficial (WAHA, EVO, W-API, Z-API). Texto fixo ou escrito pela IA |
| **Template** | Canal WhatsApp Oficial. Você escolhe um template aprovado do canal (e as variáveis, se houver) |

Se já existir um chat ativo (`pending`, `em atendimento` ou `aguardando encerramento`) no mesmo contato e canal, o sistema **reutiliza** esse atendimento.

## O que a IA pode pedir

Para cada dado (nome, WhatsApp, e-mail, telefone, documento, Instagram, Facebook, valor de compra):

| Modo | Efeito |
|------|--------|
| **Não pedir** | Não entra na ferramenta |
| **Opcional** | A IA pode omitir; a ferramenta ainda executa |
| **Obrigatório** | A IA precisa preencher antes de chamar |

O identificador do canal selecionado fica **sempre obrigatório** (senão o chat não abre).

A **mensagem de contexto** descreve o novo atendimento. Ela não depende do canal nem do funil: você pré-define o texto ou deixa a IA escrever. Com fluxo, contextualiza o imediato e/ou o fluxo ao responder; sem fluxo, fica no chat como nota.

## Tags e campos personalizados

| Opção | Efeito |
|-------|--------|
| **Tags fixas** | Sempre aplicadas; a IA não escolhe |
| **IA escolhe** | A IA seleciona entre as tags que você liberou (ou todas da organização) |
| **Campo com valor fixo** | Gravado automaticamente; some do schema da IA |
| **Campo pela IA** | A IA preenche. Em lista / múltipla escolha, só vale as opções cadastradas |

## Exemplos de uso

**Indicação de número**

```text
👤 Cliente: Pode chamar o João no 11 98888-7777, ele que decide
🤖 IA: Combinado — abri o atendimento do João no WhatsApp
       com o contexto da indicação.

[Sistema: chat no WhatsApp, contexto: "Indicado pelo cliente atual
 para falar sobre o plano Pro"]
```

**E-mail com dados do cliente**

```text
📧 Assunto: Orçamento — Maria Silva, 11 99999-9999
🤖 IA: Cadastrei a Maria e iniciei o atendimento no WhatsApp
       com os dados do e-mail.

[Sistema: chat no WhatsApp, funil "Qualificado",
 contexto: "Lead do e-mail pediu orçamento"]
```

## Limitações

- Mensagem inicial e fluxo imediato só nos canais WhatsApp não oficiais; no Oficial use template e, se quiser, fluxo ao responder
- Não força um ticket novo se já existe chat ativo no mesmo canal e contato
- O modelo confirma o cadastro para o cliente; o fluxo imediato começa em segundo plano
