# Atalhos e sequências

Use estes endpoints para enviar respostas rápidas ou várias mensagens em ordem.

## O que está disponível

| Recurso | Endpoint |
|---------|----------|
| Enviar uma mensagem | [Enviar mensagem](/api/messages/send) |
| Enviar sequência (até 10 passos) | [Sequência](/api/messages/sequence) |
| Reutilizar arquivos (`attachment_ids`) | Nos endpoints de mensagem |

Não há endpoint para criar ou gerenciar o catálogo de atalhos. Monte o conteúdo da sequência na sua integração e envie via API.

## Fluxo recomendado

1. Defina os passos (textos e, se necessário, `attachment_ids` de arquivos da organização)
2. Chame `POST /api/{organizationId}/chat/{chatId}/message-sequence` com `steps`
3. Para uma única mensagem, use `POST .../message`

## Ver também

- [Sequência de mensagens](/api/messages/sequence)
- [Enviar mensagem](/api/messages/send)
