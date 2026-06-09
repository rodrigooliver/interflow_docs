# Facebook Messenger

Conecte o Facebook Messenger para atender clientes através da sua Página.

## Visão Geral

Integre o Messenger da sua Página do Facebook para receber e responder mensagens na plataforma Interflow. Toda a gestão acontece centralizada no mesmo painel que os outros canais.

## Requisitos

- [x] Página do Facebook
- [x] Acesso de administrador à página
- [x] Conta Meta Business (recomendado)

## Funcionalidades

| Recurso | Suporte |
|---------|---------|
| Mensagens de texto | ✅ |
| Imagens | ✅ |
| Vídeos | ✅ |
| Áudios | ✅ |
| Documentos | ✅ |
| Botões e cards | ✅ |
| Quick replies | ✅ |
| Templates | ✅ |

## Configuração

### Passo 1: Ter uma Página

Se ainda não tem, crie uma Página do Facebook:

1. Acesse [facebook.com/pages/create](https://facebook.com/pages/create)
2. Escolha a categoria
3. Preencha as informações

### Passo 2: Conectar na Interflow

1. Na Interflow, vá em **Configurações** → **Canais**
2. Clique em **"Adicionar canal"** → **Facebook Messenger**
3. Faça login com sua conta do Facebook
4. Selecione a Página que deseja conectar
5. Autorize as permissões

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Seleção de página</p>
</div>

## Permissões Necessárias

- `pages_messaging` - Enviar e receber mensagens
- `pages_manage_metadata` - Gerenciar configurações
- `pages_read_engagement` - Ler interações

## Recursos Avançados

### Botões e Cards

O Messenger suporta mensagens interativas:

```json
{
  "type": "template",
  "content": {
    "template_type": "button",
    "text": "Como posso ajudar?",
    "buttons": [
      {"type": "postback", "title": "Suporte", "payload": "SUPORTE"},
      {"type": "postback", "title": "Vendas", "payload": "VENDAS"}
    ]
  }
}
```

### Quick Replies

Sugestões de resposta rápida:

```json
{
  "type": "text",
  "content": {
    "text": "Qual sua preferência?",
    "quick_replies": [
      {"content_type": "text", "title": "Opção 1", "payload": "OPT_1"},
      {"content_type": "text", "title": "Opção 2", "payload": "OPT_2"}
    ]
  }
}
```

## Janela de Mensagens

O Messenger possui uma janela de 24 horas para mensagens:

- **Dentro de 24h**: Mensagens livres
- **Fora de 24h**: Apenas tags de mensagem aprovadas

### Tags Permitidas

| Tag | Uso |
|-----|-----|
| `CONFIRMED_EVENT_UPDATE` | Atualizações de eventos |
| `POST_PURCHASE_UPDATE` | Atualizações pós-compra |
| `ACCOUNT_UPDATE` | Atualizações de conta |
| `HUMAN_AGENT` | Atendimento humano (24h extras) |

## Solução de Problemas

### Página não aparece

1. Verifique se você é administrador da página
2. Confirme que a página está publicada
3. Tente desconectar e reconectar

### Mensagens atrasadas

1. Verifique a conexão do webhook
2. Confirme que o canal está conectado
3. Teste a latência da rede

### Não consigo enviar mídia

1. Verifique o formato do arquivo
2. Confirme o tamanho (máx. 25MB)
3. Teste com outro tipo de arquivo

## Próximos Passos

- [Interface de Chat](/guide/chat/interface)
- [Automação com Fluxos](/guide/flows/builder)
- [Configurar Outros Canais](/guide/channels/)

