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
5. No modo silencioso, use filtros como **mínimo de interações do cliente** quando disponível
6. Configure a mensagem, o template ou o fluxo
7. Defina o intervalo entre envios (respeite os mínimos do modo)
8. Inicie a campanha — você pode **pausar** ou **cancelar** depois

## Fluxo silencioso (`bulk_silent`)

Ideal para processar leads/clientes em background (atualizar CRM, criar tarefas, chamar webhooks) **sem** contato visível.

::: warning Restrições do fluxo silencioso
Nós de mídia, texto enviado ao cliente e input/interativos são bloqueados nesse tipo de fluxo — ele não conversa com o contato.
:::

## Boas práticas

- Prefira templates aprovados no WhatsApp Official
- Não abuse de disparos não solicitados (risco de bloqueio)
- Segmente com tags e estágios do funil
- Monitore a campanha em 

## Relacionados

- [Templates WhatsApp](/guide/channels/whatsapp-templates)
- [Tags](/guide/chat/tags)
- [Funis CRM](/guide/crm/funnels)
- [Fluxos silenciosos da agenda](/guide/schedule/silent-flows)
