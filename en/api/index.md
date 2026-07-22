# API Reference

Welcome to the Interflow API documentation.

::: warning UNDER UPDATE
This documentation is in a continuous update phase.
:::

## Overview

The Interflow API allows you to integrate and automate platform functionalities in your applications.

### Base URL

```
https://v1.api.interflow.chat
```

## Authentication

The API uses **API Keys** for authentication:

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "x-api-key: ak_your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "channel-uuid"
  }'
```

### Where to find your IDs

| ID | In the app |
|----|------------|
| `organizationId` | **Settings** → **API Keys** |
| `channelId` | Sidebar **Channels** — copy from the channel card |
| `whatsappTemplate.id` / `templateId` | **Channels** → Official WhatsApp channel → **WhatsApp Templates** → **Copy ID** |
| `teamId` | Sidebar **Teams** — copy from the team card |
| `flowId` / `responseFlowId` | Sidebar **Flows** — copy from the flow card |
| `customerId` | Sidebar **Customers** → actions (⋮) → **Copy ID** |
| API Key | **Settings** → **API Keys** → generate a new key |

## Rate Limiting

| Plan | Limit |
|------|-------|
| Starter | 60 req/min |
| Professional | 300 req/min |
| Enterprise | 1000 req/min |

## Main Endpoints

### Chats

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/{organizationId}/chat/create` | [Create chat](/en/api/chats/create) |

<!-- Temporarily hidden — re-enable when messages docs are ready
### Messages

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/messages/send` | Send message |
| `POST` | `/messages/bulk` | Send bulk |
-->

## Next Steps

- [Authentication](/en/api/authentication)
- [Errors](/en/api/errors)
- [Create Chat](/en/api/chats/create)

