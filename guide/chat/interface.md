# Interface de Chat

Conheça a interface de atendimento da Interflow e aprenda a usar todos os recursos.

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

### Filtros Personalizados

Crie filtros customizados para organizar suas conversas:

1. Clique em ⚙️ na barra de filtros
2. Clique em **"Novo Filtro"** ou duplique um existente
3. Configure os critérios:
   - **Equipes**: Selecione uma ou múltiplas equipes
   - **Tags**: Filtrar por tags específicas
   - **Canal**: WhatsApp, Instagram, etc.
   - **Status**: Em andamento, pendente, etc.
4. Personalize nome, ícone e **cor** (paleta expandida disponível!)
5. Salve

::: tip 💡 Dica
Você pode filtrar por **múltiplas equipes** simultaneamente! Útil para supervisores que gerenciam várias equipes.
:::

### Busca de Conversas

Busque conversas pelo **número de telefone** do cliente:

- ✅ `5511999999999` (completo com DDI)
- ✅ `11999999999` (com DDD)
- ✅ `999999999` (apenas número)
- ✅ `+55 11 99999-9999` (formatado)

### Navegação por Páginas

Navegue diretamente para uma página específica:

1. Na parte inferior da lista, clique no campo de número
2. Digite o número da página desejada
3. Pressione Enter

### Status das Conversas

| Ícone | Status |
|-------|--------|
| 🟢 | Ativa - aguardando atendimento |
| 🟡 | Em espera - aguardando cliente |
| 🔵 | Em atendimento |
| ⚪ | Finalizada |

### Indicador de Múltiplos Atendimentos

Quando um cliente tem várias conversas ativas simultaneamente:

- 🔴 Badge aparece ao lado do nome do cliente
- Mostra o número de chats em paralelo
- Clique para ver a lista de conversas ativas
- Navegue rapidamente entre os chats

### Ordenação

- Por data da última mensagem
- Por tempo de espera
- Por prioridade

## Área de Mensagens

### Componentes

- **Header** - Nome do cliente, canal, status, botão WhatsApp Rápido
- **Mensagens Fixadas** - Mensagens importantes no topo
- **Histórico** - Todas as mensagens trocadas
- **Campo de texto** - Para digitar mensagens
- **Anexos** - Enviar arquivos
- **Emojis** - Seletor de emojis
- **Respostas rápidas** - Atalhos de mensagem
- **Comandos IA** - Atalhos para IA (Ctrl+J)

### Mensagens Fixadas

Destaque informações importantes fixando mensagens no topo do chat:

**Como fixar:**
1. Passe o mouse sobre a mensagem
2. Clique nos três pontos (⋮)
3. Selecione **"Fixar mensagem"**

**Recursos:**
- 📌 Mensagens aparecem no topo do chat
- 🔢 Contador de mensagens fixadas
- 🟡 Fundo amarelo para notas privadas fixadas
- ➜ Botão "Ir para mensagem" (navega ao original)
- 🔄 Atualizações em tempo real

**Como desafixar:**
- Clique no **X** na lista de fixados, ou
- Menu da mensagem → **"Desafixar mensagem"**

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
- **Indicador de campos** - Mostra quais campos estão preenchidos

### Indicador de Campos de Cadastro

Visual que mostra o status de preenchimento dos campos:

- ✅ Ícone verde = Campo preenchido
- ⚠️ Ícone amarelo = Campo faltante
- 🔴 Ícone vermelho = Obrigatório e faltante

**Benefícios:**
- Veja rapidamente quais dados faltam
- Preencha durante a conversa
- Clique para ir diretamente ao campo

### Ações Disponíveis

- **Editar cliente** - Atualizar dados
- **Adicionar tag** - Aplicar tags
- **Nova nota** - Adicionar anotação
- **Ver histórico** - Conversas anteriores
- **Criar tarefa** - Agendar follow-up

## Ações de Atendimento

### Ações em Massa

Execute ações em vários chats de uma só vez diretamente da lista de atendimentos:

1. Aplique os filtros desejados (status, tag, canal, atendente, equipe, não lidos, etc.)
2. Clique no ícone de **seleção em massa** (☑) no topo da lista
3. Selecione chats individualmente **ou** use **"Selecionar todos os filtrados"** para incluir todas as páginas
4. Na barra inferior, escolha:
   - **Marcar como lido** — zera mensagens não lidas nos chats elegíveis
   - **Marcar como resolvido** — encerra apenas chats com status **aguardando**; chats em andamento são ignorados
5. Confirme a ação quando solicitado (acima de 10 chats)

::: tip 💡 Uso comum
Ideal para limpar filas após disparos em massa ou picos de volume, marcando centenas de conversas em poucos cliques.
:::

### Criar Tarefa a partir de Mensagens

Selecione mensagens específicas de uma conversa para criar uma tarefa diretamente:

1. Na área de mensagens, clique e segure (ou use o menu ⋮ da mensagem) para selecionar
2. Selecione uma ou mais mensagens relevantes
3. Na barra inferior, clique em **"Criar Tarefa"**
4. Preencha os detalhes da tarefa (título, responsável, prazo)
5. As mensagens selecionadas ficam vinculadas à tarefa como contexto

### Assumir Conversa

Para atender uma conversa não atribuída:
1. Clique na conversa
2. Clique em **"Assumir"**
3. A conversa será atribuída a você

**Se houver fluxo ativo**, você pode escolher:
- 🟡 **Pausar Fluxo e Atender** - Pausa o fluxo, você assume
- 🔵 **Continuar Fluxo e Atender** - Mantém fluxo ativo (mensagens duplicadas!)
- ⚪ **Cancelar** - Não atende

::: tip 💡 Configuração
Em **Configurações > Atendimento**, você pode definir para sempre pausar automaticamente.
:::

### Atribuição por Administrador

Admins podem gerenciar atribuições sem entrar em cada conversa:

1. Na lista de conversas, clique no menu (⋮)
2. Selecione **"Transferir Agente/Equipe"**
3. Escolha:
   - **Sem agente**: Conversa fica pendente na fila
   - **Agente específico**: Atribuído diretamente

### Transferir Conversa

Para passar uma conversa para outro atendente:
1. Clique no ícone de transferência
2. Selecione o destino (atendente ou equipe)
3. Adicione uma nota (opcional)
4. Confirme

### Arquivar Conversa

Você pode arquivar conversas que estão em **"Em andamento"**:

- Arquive conversas ativas para organizar sua lista
- Quando cliente enviar nova mensagem, a conversa é **desarquivada automaticamente**
- Nenhuma mensagem importante é perdida

### Finalizar Atendimento

Ao concluir um atendimento:
1. Clique em **"Finalizar"**
2. Selecione o motivo de encerramento
3. **Sugestão de campos**: Sistema sugere campos não preenchidos
4. Preencha os campos sugeridos (opcional ou obrigatório)
5. Adicione observações (opcional)
6. Confirme

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

### Excluindo Notas Privadas

Você pode excluir notas enviadas por engano:

1. Passe o mouse sobre a nota
2. Clique no menu (⋮)
3. Selecione **"Excluir mensagem"**
4. Confirme

**Regras:**
- ✅ Apenas o autor pode excluir
- ✅ Admins podem excluir qualquer nota
- ❌ Mensagens do cliente não podem ser excluídas
- 🕐 Log preservado para auditoria

## Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Enter` | Enviar mensagem |
| `Shift+Enter` | Nova linha |
| `Esc` | Fechar conversa |
| `/` | Abrir respostas rápidas |
| `Ctrl+K` | Buscar conversa |
| `Ctrl+J` | Abrir comandos de IA |

## Melhorador de Texto (Ctrl+J)

Aprimore suas mensagens com IA diretamente do campo de texto:

1. Pressione `Ctrl+J` ou digite `/`
2. Selecione a ação desejada (melhorar, formalizar, traduzir, etc.)
3. A IA processa e insere o resultado

**Ações disponíveis:**
- **Melhorar** - Melhora clareza e gramática
- **Formalizar** - Torna o texto mais profissional
- **Simplificar** - Simplifica textos complexos
- **Traduzir** - Traduz para outro idioma

::: tip 💡 Comandos Personalizados
Crie seus próprios comandos de IA! Veja a documentação completa em [Melhorador de Texto](/guide/chat/text-enhancer).
:::

## Notificações

Configurações de notificação:

- **Som** - Alerta sonoro para novas mensagens
- **Desktop** - Notificações do navegador
- **Mobile** - Push notifications (app)

## Botão WhatsApp Rápido

Abra o WhatsApp do cliente diretamente do chat com ações automáticas:

1. No header do chat, clique no botão verde do WhatsApp
2. Nova aba abre com mensagem pré-configurada
3. Ações automáticas são executadas (campo, funil, tag)

::: warning ⚠️ Importante
O botão só aparece em chats de canais WhatsApp (WAHA, W-API, WhatsApp Oficial).
:::

Configure em **Configurações > Atendimento > Botão de WhatsApp Rápido**.

## Chat Interno (Comunicação entre Agentes)

Comunique-se diretamente com outros membros da equipe sem criar grupos, diretamente no cabeçalho da página de Chats.

### Chat Direto (DM)

1. Na página **Chats**, clique no botão **+** no cabeçalho
2. Selecione **"Chat Direto Interno"**
3. Escolha o agente com quem deseja conversar
4. A conversa abre no **widget flutuante**

::: info ℹ️ Comportamento
Se já existir uma conversa com o usuário selecionado, o sistema abre a existente em vez de criar uma nova. Os chats internos aparecem automaticamente no widget flutuante para ambos os participantes.
:::

### Widget Flutuante

Os chats internos ficam fixados no widget flutuante:

- **Persistência** — o estado do widget é salvo e sincronizado entre dispositivos
- **Auto-pin** — ao ser adicionado a um chat interno, ele aparece automaticamente no widget
- **Scroll personalizado** — exibe todos os chats fixados sem limite de itens
- **Ordem fixa** — os chats aparecem sempre na mesma ordem

### Grupos Internos

Ao criar um Grupo Interno, configure as permissões:

- **Permitir que membros excluam o grupo** — quando ativada, qualquer membro pode excluir; caso contrário, apenas administradores do grupo

### Notificações de Chat Interno

- Título com nome do remetente: `Nome · Chat Interno` (DM) ou `Nome · Nome do Grupo` (grupo)
- Contagem de não lidas individual por usuário
- Remetente não recebe notificação da própria mensagem

---

## Próximos Passos

## Próximos Passos

- [Melhorador de Texto](/guide/chat/text-enhancer) - Comandos de IA personalizados
- [Agentes IA](/guide/ai-agents/) - IA autônoma para atendimento
- [Agenda](/guide/schedule/) - Agendamentos integrados
- [Configurações](/guide/settings/) - Personalizar interface

