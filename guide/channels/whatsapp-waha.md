# WhatsApp WAHA

Conecte seu WhatsApp via QR Code para atendimento simplificado.

## Visão Geral

A integração via WAHA permite usar seu número de WhatsApp comum na plataforma Interflow. É uma solução prática para pequenas e médias empresas.

## Requisitos

- [x] Número de WhatsApp ativo
- [x] Celular com WhatsApp instalado (para escaneamento inicial)

## Vantagens

| Recurso | Descrição |
|---------|-----------|
| **Simples** | Conecte via QR Code em minutos |
| **Sem custos Meta** | Não há cobrança por conversa |
| **Grupos** | Suporte a grupos do WhatsApp |
| **Mídia completa** | Imagens, vídeos, áudios, documentos |
| **Sincronização** | Recupere mensagens históricas |

## Limitações

::: warning ATENÇÃO
Esta integração não é oficial da Meta e pode estar sujeita a bloqueios. Use com moderação e siga boas práticas.
:::

- Não suporta templates aprovados
- Risco de bloqueio se usado para spam
- Necessita manter sessão ativa

## Configuração

### Passo 1: Adicionar Canal

1. Na Interflow, vá em **Configurações** → **Canais**
2. Clique em **"Adicionar canal"**
3. Selecione **WhatsApp (WAHA)**

### Passo 2: Escanear QR Code

Um QR Code será exibido. Escaneie com seu WhatsApp:

1. Abra o WhatsApp no celular
2. Vá em **Configurações** → **Aparelhos conectados**
3. Clique em **"Conectar um aparelho"**
4. Escaneie o QR Code

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: QR Code para conexão</p>
</div>

### Passo 3: Confirmar Conexão

Após escanear, o status mudará para **Conectado**. Você já pode receber e enviar mensagens pela Interflow.

<!-- Placeholder para vídeo -->
<div style="background: linear-gradient(135deg, #128C7E 0%, #075E54 100%); border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 48px;">▶️</span>
  <p style="color: white; margin-top: 8px; font-size: 18px;">Vídeo: Conectando via QR Code (em breve)</p>
</div>

## Mantendo a Sessão Ativa

Para evitar desconexões:

- ✅ Mantenha o celular conectado à internet
- ✅ Não desconecte manualmente o aparelho
- ✅ Evite usar o mesmo número em outros serviços
- ❌ Não faça logout do WhatsApp no celular

## Sincronização de Mensagens

Recupere mensagens históricas do WhatsApp que não entraram automaticamente.

### Como usar

1. Abra um chat WAHA
2. Clique no menu (⋮) → **"Sincronizar Mensagens"**
3. Configure o período:
   - **Data Inicial** e **Data Final**
   - Limite máximo: 3 dias por sincronização
4. Clique em **"Sincronizar"**

### O que acontece

- ✅ Busca mensagens do período selecionado
- ✅ Sincroniza com timestamp original
- ⏭️ Ignora mensagens já existentes
- ✅ Atualiza status correto (enviado, entregue, lido)

::: tip 💡 Quando usar
Útil quando você reconectou o canal e quer recuperar conversas que aconteceram enquanto estava desconectado.
:::

## Grupos de WhatsApp

Receba e responda mensagens de grupos do WhatsApp.

### Como funciona

- 💬 Grupos aparecem na lista de conversas
- 👤 Identifica quem enviou no grupo
- ↩️ Responda diretamente ao grupo
- 📊 Histórico completo preservado

### Permissões

| Configuração | Descrição |
|--------------|-----------|
| **Habilitar grupos** | Admin pode ativar/desativar por canal |
| **Restringir agentes** | Agentes podem ser bloqueados de grupos |

### Limitações

- Apenas mensagens recebidas após conexão
- Não é possível criar grupos pela plataforma
- Admin precisa adicionar o número ao grupo

## Boas Práticas

Para evitar bloqueios do WhatsApp:

### ✅ Faça

- Envie mensagens apenas para quem autorizou
- Responda rapidamente aos clientes
- Use linguagem profissional
- Tenha um horário de atendimento

### ❌ Evite

- Enviar mensagens em massa não solicitadas
- Usar linguagem promocional agressiva
- Enviar muitas mensagens em sequência
- Iniciar conversas com desconhecidos

## Reconexão

Se o canal desconectar:

1. Verifique o status em **Canais**
2. Clique no canal desconectado
3. Escaneie o novo QR Code
4. Aguarde a reconexão

::: tip DICA
Se houver desconexões frequentes, verifique a conexão de internet do celular e considere migrar para WhatsApp Business API.
:::

## Solução de Problemas

### QR Code não aparece

- Limpe o cache do navegador
- Tente em uma janela anônima
- Verifique se há bloqueios de firewall

### Desconexão frequente

- Verifique a internet do celular
- Atualize o WhatsApp para a versão mais recente
- Evite múltiplas sessões conectadas

### Mensagens não chegam

- Confirme que o número está correto
- Verifique se o canal está conectado
- Cheque se há webhooks configurados

## Próximos Passos

- [Interface de Chat](/guide/chat/interface) - Use o Botão WhatsApp Rápido
- [Automação com Fluxos](/guide/flows/builder) - Automatize atendimentos
- [Agentes IA](/guide/ai-agents/) - IA para responder grupos
- [WhatsApp Business](/guide/channels/whatsapp-business) - Migrar para API oficial

