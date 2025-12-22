# API Reference

Welcome to the Interflow API documentation.

::: warning UNDER UPDATE
This documentation is in a continuous update phase. New endpoints are documented regularly.
:::

## Overview

The Interflow API allows you to integrate and automate platform functionalities in your applications.

### Base URL

```
https://api.interflow.chat/v1
```

## Authentication

The API uses **API Keys** for authentication. Include your key in the header of all requests:

```bash
curl -X GET "https://api.interflow.chat/v1/customers" \
  -H "Authorization: Bearer your_api_key_here" \
  -H "Content-Type: application/json"
```

### Getting your API Key

1. Go to **Settings** → **API Keys**
2. Click **"Generate new key"**
3. Give it a descriptive name
4. Copy and store in a safe place

::: danger IMPORTANT
Your API Key is secret. Never expose it in frontend code or public repositories.
:::

## Response Format

All responses are in JSON:

### Success

```json
{
  "success": true,
  "data": {
    // response data
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
    "message": "The 'email' field is required",
    "details": [
      {
        "field": "email",
        "message": "Required field"
      }
    ]
  }
}
```

## Rate Limiting

The API has request limits per minute:

| Plan | Limit |
|------|-------|
| Starter | 60 req/min |
| Professional | 300 req/min |
| Enterprise | 1000 req/min |

## Main Endpoints

### Messages

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/messages/send` | Send message |
| `POST` | `/messages/bulk` | Send bulk |
| `GET` | `/messages/:id` | Get message |

### Customers

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/customers` | List customers |
| `POST` | `/customers` | Create customer |
| `GET` | `/customers/:id` | Get customer |
| `PUT` | `/customers/:id` | Update customer |
| `DELETE` | `/customers/:id` | Delete customer |

### Chats

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/chats` | List chats |
| `POST` | `/chats` | Create chat |
| `GET` | `/chats/:id` | Get chat |
| `GET` | `/chats/:id/messages` | Chat messages |

## Example: Send Message

### Request

```bash
curl -X POST "https://api.interflow.chat/v1/messages/send" \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "channel_id": "channel-uuid",
    "to": "5511999999999",
    "type": "text",
    "content": {
      "text": "Hello! This is a message via API."
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
    "channel_id": "channel-uuid",
    "to": "5511999999999",
    "type": "text",
    "content": {
      "text": "Hello! This is a message via API."
    },
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

