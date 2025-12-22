# API Reference

Welcome to the Interflow API documentation.

::: warning UNDER UPDATE
This documentation is in a continuous update phase.
:::

## Overview

The Interflow API allows you to integrate and automate platform functionalities in your applications.

### Base URL

```
https://api.interflow.chat/v1
```

## Authentication

The API uses **API Keys** for authentication:

```bash
curl -X GET "https://api.interflow.chat/v1/customers" \
  -H "Authorization: Bearer your_api_key_here" \
  -H "Content-Type: application/json"
```

## Rate Limiting

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

### Customers

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/customers` | List customers |
| `POST` | `/customers` | Create customer |
| `GET` | `/customers/:id` | Get customer |

## Next Steps

- [Authentication](/en/api/authentication)
- [Errors](/en/api/errors)
- [Send Message](/en/api/messages/send)

