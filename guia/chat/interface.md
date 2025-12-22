# Interface de Chat

Conheça a interface de atendimento da Interflow e aprenda a usar todos os recursos.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua.
:::

## Visão Geral

A interface de chat da Interflow foi projetada para maximizar a produtividade da sua equipe de atendimento, centralizando todas as conversas em uma única tela.

<!-- Placeholder para screenshot -->
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 80px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 24px;">📸 Interface de Chat (em breve)</span>
</div>

## Layout da Interface

A tela de chat é dividida em três áreas principais:

| Área | Localização | Função |
|------|-------------|--------|
| **Lista de Conversas** | Esquerda | Todas as conversas ativas |
| **Área de Mensagens** | Centro | Histórico e envio de mensagens |
| **Painel do Cliente** | Direita | Informações e ações do cliente |

## Lista de Conversas

### Filtros Disponíveis

- **Todas** - Todas as conversas
- **Minhas** - Atribuídas a você
- **Não atribuídas** - Aguardando atendente
- **Em espera** - Aguardando resposta do cliente
- **Finalizadas** - Conversas encerradas

### Status das Conversas

| Ícone | Status |
|-------|--------|
| 🟢 | Ativa - aguardando atendimento |
| 🟡 | Em espera - aguardando cliente |
| 🔵 | Em atendimento |
| ⚪ | Finalizada |

### Ordenação

- Por data da última mensagem
- Por tempo de espera
- Por prioridade

## Área de Mensagens

### Componentes

- **Header** - Nome do cliente, canal, status
- **Histórico** - Todas as mensagens trocadas
- **Campo de texto** - Para digitar mensagens
- **Anexos** - Enviar arquivos
- **Emojis** - Seletor de emojis
- **Respostas rápidas** - Atalhos de mensagem

### Indicadores de Mensagem

| Indicador | Significado |
|-----------|-------------|
| ✓ | Enviada |
| ✓✓ | Entregue |
| ✓✓ (azul) | Lida |
| ⏳ | Enviando |
| ❌ | Erro no envio |

### Tipos de Mensagem

- **Texto** - Mensagens de texto simples
- **Imagem** - Fotos e imagens
- **Vídeo** - Arquivos de vídeo
- **Áudio** - Mensagens de voz
- **Documento** - PDFs, planilhas, etc.
- **Localização** - Coordenadas do mapa
- **Contato** - Compartilhamento de contato

## Painel do Cliente

### Informações Exibidas

- Nome e foto
- Canais de contato
- Tags
- Campos personalizados
- Histórico de conversas
- Notas internas

### Ações Disponíveis

- **Editar cliente** - Atualizar dados
- **Adicionar tag** - Aplicar tags
- **Nova nota** - Adicionar anotação
- **Ver histórico** - Conversas anteriores
- **Criar tarefa** - Agendar follow-up

## Ações de Atendimento

### Assumir Conversa

Para atender uma conversa não atribuída:
1. Clique na conversa
2. Clique em **"Assumir"**
3. A conversa será atribuída a você

### Transferir Conversa

Para passar uma conversa para outro atendente:
1. Clique no ícone de transferência
2. Selecione o destino (atendente ou equipe)
3. Adicione uma nota (opcional)
4. Confirme

### Finalizar Atendimento

Ao concluir um atendimento:
1. Clique em **"Finalizar"**
2. Selecione o motivo de encerramento
3. Adicione observações (opcional)
4. Confirme

### Marcar como Espera

Se aguardando resposta do cliente:
1. Clique em **"Aguardar"**
2. Defina o tempo de espera
3. A conversa será movida para a fila de espera

## Respostas Rápidas

### Usando Atalhos

Digite `/` seguido do atalho para inserir uma resposta rápida:

```
/ola → "Olá! Como posso ajudá-lo hoje?"
/preco → "Nosso produto custa R$ 99,00..."
/horario → "Funcionamos de segunda a sexta, das 9h às 18h"
```

### Criando Respostas Rápidas

1. Vá em **Configurações** → **Respostas Rápidas**
2. Clique em **"Nova resposta"**
3. Defina:
   - Atalho (ex: `/ola`)
   - Título descritivo
   - Conteúdo da mensagem
4. Salve

## Anexos e Mídia

### Enviando Arquivos

1. Clique no ícone de anexo 📎
2. Selecione o arquivo
3. Adicione uma legenda (opcional)
4. Envie

### Limites de Arquivo

| Tipo | Tamanho Máximo |
|------|----------------|
| Imagem | 16 MB |
| Vídeo | 16 MB |
| Áudio | 16 MB |
| Documento | 100 MB |

### Visualização

- Imagens são exibidas inline
- Vídeos podem ser reproduzidos
- Áudios têm player integrado
- Documentos podem ser baixados

## Notas Internas

Adicione anotações visíveis apenas para a equipe:

1. No painel do cliente, clique em **"Nota"**
2. Digite a anotação
3. Salve

As notas aparecem no histórico com destaque visual.

## Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Enter` | Enviar mensagem |
| `Shift+Enter` | Nova linha |
| `Esc` | Fechar conversa |
| `/` | Abrir respostas rápidas |
| `Ctrl+K` | Buscar conversa |

## Notificações

Configurações de notificação:

- **Som** - Alerta sonoro para novas mensagens
- **Desktop** - Notificações do navegador
- **Mobile** - Push notifications (app)

## Próximos Passos

- [Gerenciando Conversas](/guia/chat/gerenciando-conversas)
- [Respostas Rápidas](/guia/chat/respostas-rapidas)
- [Templates de Mensagem](/guia/chat/templates)

