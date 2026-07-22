# API Reference

Bienvenido a la documentación de la API de Interflow.

::: warning EN ACTUALIZACIÓN
Esta documentación está en fase de actualización continua.
:::

## Visión General

La API de Interflow permite integrar y automatizar funcionalidades de la plataforma en tus aplicaciones.

### URL Base

```
https://v1.api.interflow.chat
```

## Autenticación

La API utiliza **API Keys** para autenticación:

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "x-api-key: ak_tu_api_key_aqui" \
  -H "Content-Type: application/json" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-del-canal"
  }'
```

## Rate Limiting

| Plan | Límite |
|------|--------|
| Starter | 60 req/min |
| Professional | 300 req/min |
| Enterprise | 1000 req/min |

## Endpoints Principales

### Chats

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/api/{organizationId}/chat/create` | [Crear chat](/es/api/chats/create) |

<!-- Temporalmente oculto — reactivar cuando la doc de mensajes esté lista
### Mensajes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/messages/send` | Enviar mensaje |
| `POST` | `/messages/bulk` | Enviar en masa |
-->

## Próximos Pasos

- [Autenticación](/es/api/authentication)
- [Errores](/es/api/errors)
- [Crear Chat](/es/api/chats/create)
