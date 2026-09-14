# Disparos em Massa

Envie campanhas para segmentos de clientes: mensagem direta, fluxo WAHA ou **fluxo silencioso** no último chat.

::: tip Acesso
Menu → **Disparos em massa**. Requer módulo/permissão `bulkMessages`.
:::

## Tipos de envio (`send_mode`)

| Modo | O que faz | Requisitos |
|------|-----------|------------|
| **Mensagem** (`message`) | Envia texto/template ao cliente | Canal conectado; templates oficiais precisam estar **APPROVED** |
| **Fluxo** (`flow`) | Dispara fluxo `general` via canal WAHA | Canal WAHA; delay mínimo recomendado ≥ 20s |
| **Fluxo silencioso** (`silent_flow`) | Executa fluxo `bulk_silent` no **último chat** do cliente, **sem** enviar mensagem ao cliente | Fluxo do tipo `bulk_silent`; delay ≥ 5s |

## Criar uma campanha

1. Abra **Disparos em massa**
2. Clique em **Nova campanha**
3. Escolha o modo de envio
4. Defina o público com filtros (canal, tags, estágios CRM, status, etc.)
5. Se quiser, marque **Tags excluídas** para quem não deve receber
6. No modo silencioso, use filtros como **mínimo de interações do cliente** quando disponível
7. Configure a mensagem, o template ou o fluxo
8. Defina o intervalo entre envios (respeite os mínimos do modo)
9. Inicie a campanha — você pode **pausar** ou **cancelar** depois

## Excluir tags

Além de incluir por tags, a campanha pode **excluir** contatos com determinadas tags (por exemplo `parar mensagens` ou `sair`).

- Quem tiver **qualquer** tag excluída não entra na fila, mesmo que esteja em um estágio ou em outra tag de inclusão
- A estimativa de destinatários já desconta essas pessoas
- Uma tag não fica ao mesmo tempo em inclusão e exclusão
- Se **Tags excluídas** estiver vazio, o disparo se comporta como antes

Útil para respeitar descadastramento sem desmontar as listas de inclusão.

> Changelog: [v2026.9.8](/changelog/2026/09/2026.9.8)

## Fluxo silencioso (`bulk_silent`)

Ideal para processar leads/clientes em background (atualizar CRM, criar tarefas, chamar webhooks) **sem** contato visível.

::: warning Restrições do fluxo silencioso
Nós de mídia, texto enviado ao cliente e input/interativos são bloqueados nesse tipo de fluxo — ele não conversa com o contato.
:::

## WhatsApp WAHA

No modo **mensagem** com canal WAHA:

- **Enviar apenas para conversas existentes** vem marcado por padrão — não abre contato novo neste número
- Se o WhatsApp restringir primeiros contatos, a campanha **pausa na hora** e não retoma sozinha
- Quem já tem conversa no canal continua podendo receber

Útil para não agravar o bloqueio quando várias pessoas disparam pelo mesmo número.

> Guia do canal: [WhatsApp WAHA — Restrição de novos contatos](/guide/channels/whatsapp-waha#restricao-de-novos-contatos)

## Boas práticas

- Prefira templates aprovados no WhatsApp Official
- Não abuse de disparos não solicitados (risco de bloqueio)
- Segmente com tags e estágios do funil; use **Tags excluídas** para quem pediu para parar
- Monitore a campanha em 

## Relacionados

- [Templates WhatsApp](/guide/channels/whatsapp-templates)
- [Tags](/guide/chat/tags)
- [Funis CRM](/guide/crm/funnels)
- [Fluxos silenciosos da agenda](/guide/schedule/silent-flows)
