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

### Funcionalidades Avançadas de Grupos

#### Adicionar Participante como Cliente

1. Abra o chat do grupo
2. Localize uma mensagem de um participante (lado esquerdo)
3. Clique no **menu (⋯)** da mensagem
4. Selecione **"Adicionar como cliente"**
5. Conclua o cadastro e inicie conversa privada

#### Excluir Mensagens de Outros

Administradores do grupo podem excluir mensagens inadequadas de outros participantes:

1. Clique no menu (⋯) da mensagem
2. Selecione **"Excluir mensagem"**

#### Foto do Grupo

A foto do grupo é exibida automaticamente no cabeçalho do chat.

#### Lista de Participantes

1. No cabeçalho do chat do grupo, clique em **"Participantes"**
2. Visualize todos os membros
3. Use **"Adicionar como cliente"** para quem tiver número disponível

::: info ℹ️ Privacidade (Meta)
Alguns participantes aparecem apenas com identificador (@lid por políticas do Meta). Nesses casos, use o menu da mensagem quando o participante enviar algo no grupo.
:::

### Bloquear Mídia em Grupos

Impeça o recebimento de mídia (imagens, vídeos, etc.) em grupos:

1. Acesse **Configurações** → **Canais** → seu canal WAHA
2. Ative **"Bloquear mídia em grupos"**

### Encerrar Conversa de Grupo

É possível encerrar/resolver conversas de grupos WhatsApp da mesma forma que chats individuais.

### Permissões

| Configuração | Descrição |
|--------------|-----------|
| **Habilitar grupos** | Admin pode ativar/desativar por canal |
| **Bloquear mídia** | Impede recebimento de arquivos em grupos |

### Limitações

- Apenas mensagens recebidas após conexão
- Não é possível criar grupos pela plataforma
- Admin precisa adicionar o número ao grupo

---

## Canal Auxiliar para WhatsApp Official

Se você usa o WhatsApp Oficial (API Meta), configure um canal WAHA auxiliar para suprir suas limitações naturais.

### Para que serve?

| Limitação do Official | Solução via Canal Auxiliar |
|-----------------------|-----------------------------|
| Não registra mensagens enviadas pelo celular | Captura echoes (`fromMe=true`) e registra no histórico |
| Janela de 24h expira e não permite mensagens livres | Botão "Enviar via Canal Auxiliar" aparece no rodapé |
| Não suporta grupos | Canal auxiliar pode receber/responder grupos |
| Não expõe foto de perfil de contatos | WAHA busca a foto automaticamente |

### Como configurar

1. Acesse as configurações do canal **WhatsApp Official**
2. Role até a seção **Canal Auxiliar WAHA**
3. Clique em **"Adicionar canal auxiliar WAHA"**
4. Escaneie o QR code com o WhatsApp do celular — **deve ser o mesmo número do canal oficial, em Modo Coexistência**
5. Ajuste as configurações:
   - **Ouvir mensagens do cliente** — desativado por padrão (evita duplicação com o oficial)
   - **Ouvir minhas mensagens** — ativado por padrão para capturar echoes
   - **Habilitar grupos** e **Bloquear mídia em grupos**

### Envio fora da janela de 24h

1. Quando a janela expira, o rodapé da conversa exibe **"Usar Template"** e **"Enviar via Canal Auxiliar"**
2. Clique em **"Enviar via Canal Auxiliar"**
3. O input completo de mensagens aparece (texto, arquivos, áudio, emoji)
4. A mensagem é enviada pelo WAHA e registrada no histórico normalmente

::: tip 💡 Recomendação
O canal auxiliar **não aparece na listagem geral** de canais — fica visível apenas dentro das configurações do canal official.
:::

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

