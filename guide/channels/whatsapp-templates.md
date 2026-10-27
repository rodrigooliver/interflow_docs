# Templates WhatsApp (API Oficial)

Gerencie templates oficiais do Meta para iniciar conversas fora da janela de 24h, disparos e novos chats.

::: tip Acesso
**Canais →** selecione um canal **WhatsApp Business (Official)** → **Templates**
:::

## Visão geral

Templates precisam estar **aprovados (APPROVED)** na Meta para uso em:

- Início de conversa / criar chat
- [Disparos em massa](/guide/chat/bulk-messages)
- Envios manuais que exigem template

## Sincronizar e gerenciar

1. Abra o canal WhatsApp Official
2. Vá em **Templates**
3. Use **Sincronizar** para puxar o status da Meta
4. Crie ou edite templates conforme a política do WhatsApp
5. Aguarde aprovação antes de usar em produção

### Status comuns

| Status | Significado |
|--------|-------------|
| APPROVED | Pronto para uso |
| PENDING | Aguardando análise |
| REJECTED | Recusado — revise o conteúdo |

::: warning
Disparos com template não aprovado falham. Sempre confira o status antes de iniciar uma campanha.
:::

## Apelido {#apelido}

No formulário do template, o campo **Apelido ou descrição** é opcional. Ele aparece nos cards, na busca e nas listas em que a equipe escolhe o modelo — inclusive ao digitar `/` no chat do canal oficial.

O nome oficial da Meta e o texto enviado ao cliente não mudam. Salvar só o apelido não reenvia o template para aprovação, e a sincronização não apaga esse texto.

## Relacionados

- [WhatsApp Business](/guide/channels/whatsapp-business)
- [Disparos em massa](/guide/chat/bulk-messages)
