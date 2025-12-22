# API Reference

Bienvenido a la documentación de la API de Interflow.

::: warning EN ACTUALIZACIÓN
Esta documentación está en fase de actualización continua.
:::

## Visión General

La API de Interflow permite integrar y automatizar funcionalidades de la plataforma en tus aplicaciones.

### URL Base

```
https://api.interflow.chat/v1
```

## Autenticación

La API utiliza **API Keys** para autenticación:

```bash
curl -X GET "https://api.interflow.chat/v1/customers" \
  -H "Authorization: Bearer tu_api_key_aqui" \
  -H "Content-Type: application/json"
```

## Rate Limiting

| Plan | Límite |
|------|--------|
| Starter | 60 req/min |
| Professional | 300 req/min |
| Enterprise | 1000 req/min |

## Endpoints Principales

### Mensajes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/messages/send` | Enviar mensaje |
| `POST` | `/messages/bulk` | Enviar en masa |

### Clientes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/customers` | Listar clientes |
| `POST` | `/customers` | Crear cliente |
| `GET` | `/customers/:id` | Buscar cliente |

## Próximos Pasos

- [Autenticación](/es/api/authentication)
- [Errores](/es/api/errors)
- [Enviar Mensaje](/es/api/messages/send)
