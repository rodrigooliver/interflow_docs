# API Reference

Bienvenido a la documentación de la API de Interflow.

::: warning EN ACTUALIZACIÓN
Esta documentación está en fase de actualización continua. Nuevos endpoints se documentan regularmente.
:::

## Visión General

La API de Interflow permite integrar y automatizar funcionalidades de la plataforma en tus aplicaciones.

### URL Base

```
https://api.interflow.chat/v1
```

## Autenticación

La API utiliza **API Keys** para autenticación. Incluye tu clave en el header de todas las solicitudes:

```bash
curl -X GET "https://api.interflow.chat/v1/customers" \
  -H "Authorization: Bearer tu_api_key_aqui" \
  -H "Content-Type: application/json"
```

### Obteniendo tu API Key

1. Accede a **Configuración** → **API Keys**
2. Haz clic en **"Generar nueva clave"**
3. Dale un nombre descriptivo
4. Copia y guarda en un lugar seguro

::: danger IMPORTANTE
Tu API Key es secreta. Nunca la expongas en código frontend o repositorios públicos.
:::

## Formato de Respuesta

Todas las respuestas son en JSON:

### Éxito

```json
{
  "success": true,
  "data": {
    // datos de la respuesta
  },
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 100
  }
}
```

### Error

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "El campo 'email' es obligatorio",
    "details": [
      {
        "field": "email",
        "message": "Campo obligatorio"
      }
    ]
  }
}
```

## Rate Limiting

La API tiene límites de solicitudes por minuto:

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
| `GET` | `/messages/:id` | Buscar mensaje |

### Clientes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/customers` | Listar clientes |
| `POST` | `/customers` | Crear cliente |
| `GET` | `/customers/:id` | Buscar cliente |
| `PUT` | `/customers/:id` | Actualizar cliente |
| `DELETE` | `/customers/:id` | Eliminar cliente |

### Chats

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/chats` | Listar chats |
| `POST` | `/chats` | Crear chat |
| `GET` | `/chats/:id` | Buscar chat |
| `GET` | `/chats/:id/messages` | Mensajes del chat |

## Ejemplo: Enviar Mensaje

### Request

```bash
curl -X POST "https://api.interflow.chat/v1/messages/send" \
  -H "Authorization: Bearer tu_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "channel_id": "uuid-del-canal",
    "to": "5511999999999",
    "type": "text",
    "content": {
      "text": "¡Hola! Este es un mensaje vía API."
    }
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "msg_abc123",
    "status": "sent",
    "channel_id": "uuid-del-canal",
    "to": "5511999999999",
    "type": "text",
    "content": {
      "text": "¡Hola! Este es un mensaje vía API."
    },
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

