# Equipes

Organize atendentes em grupos, defina líderes e configure a distribuição automática de conversas.

## Visão Geral

Equipes agrupam usuários da organização para:

- Filtrar atendimentos por grupo na lista de conversas
- Transferir conversas entre grupos especializados (vendas, suporte, financeiro)
- Disparar fluxos automáticos ao receber uma transferência
- **Distribuir conversas automaticamente por rodízio** entre os membros disponíveis

## Acessando Equipes

1. No menu principal, acesse **Configurações**
2. Clique na aba **Equipes**
3. Crie, edite ou gerencie membros de cada equipe

::: tip 💡 Permissão
A gestão de equipes exige perfil **Owner** ou **Admin**.
:::

## Criar e editar equipe

| Campo | Descrição |
|-------|-----------|
| **Nome** | Identificação da equipe |
| **Descrição** | Texto opcional para documentação interna |
| **Equipe padrão** | Usada como destino padrão em novos atendimentos |
| **Fluxo automático** | Fluxo do tipo *Transferência de equipe* iniciado ao transferir um chat para esta equipe |

## Membros da equipe

Cada membro pode ser **Líder** ou **Membro**. Líderes podem ser notificados quando o rodízio não encontra agente disponível (configurável).

**Ações por membro (menu ⋮):**

| Ação | Efeito |
|------|--------|
| **Pausa manual** | Membro temporariamente ignorado no rodízio |
| **Plantão** | Priorizado mesmo fora do horário (quando fallback usa plantão) |
| **Horários de disponibilidade** | Define expediente semanal e exceções por fuso horário |
| **Incluir / Excluir do rodízio** | Remove ou recoloca o membro na fila automática |
| **Mover para cima / baixo** | Altera a ordem na fila do rodízio |
| **Definir como próximo** | Próxima conversa distribuída vai para este membro (se disponível) |

---

## Distribuição automática por rodízio {#distribuicao-automatica-por-rodizio}

A distribuição automática envia conversas **pendentes** e **sem agente** para o próximo membro elegível da equipe, seguindo a ordem configurada.

### Quando o rodízio é acionado?

Configure um ou mais **gatilhos**:

| Gatilho | Descrição |
|---------|-----------|
| **Nova conversa** | Chat individual criado e entrando na fila da equipe |
| **Transferência de equipe** | Chat transferido para esta equipe |
| **Saída do atendimento** | Agente encerra/sai e o chat volta para pending |
| **Nó de fluxo (rodízio)** | Fluxo de automação aciona a distribuição |

::: info ℹ️ Elegibilidade
O rodízio só atua em chats **pendentes**, **sem agente atribuído**, de clientes **não spam** e que **não sejam grupos externos**.
:::

### Modos de atribuição

| Modo | Status do chat | Comportamento |
|------|----------------|---------------|
| **Auto-atender** | `in_progress` | Inicia o atendimento automaticamente para o agente escolhido |
| **Reservar agente** | `pending` | Mantém pendente, mas já define quem deve atender |

#### Modo Auto-atender

- O agente recebe notificação push
- Mensagem de sistema: *"Atribuído automaticamente por rodízio para {nome}"*
- Ideal quando a equipe deve assumir imediatamente

#### Modo Reservar agente

- O chat continua **pendente** na fila
- `assigned_to` aponta para o agente reservado
- Mensagem de sistema: *"Reservado por rodízio para {nome}"*
- O agente reservado clica em **Atender** quando estiver pronto
- Ideal para filas onde o agente precisa se preparar antes de iniciar

### Reserva bloqueada (modo Reservar agente)

Configure prazos em minutos para restringir quem pode atender:

| Campo | Quando se aplica |
|-------|------------------|
| **Reserva em expediente (min)** | Agente dentro do horário configurado |
| **Reserva em folga (min)** | Fora do horário, em pausa manual ou atribuição via fallback |

**Com bloqueio ativo:**

- Apenas o agente reservado pode clicar em **Atender**
- Outros membros veem aviso: *"Reservado para {nome} até {horário}"*
- Após expirar o prazo, qualquer membro da equipe pode atender

**Com campos vazios:**

- A reserva indica o agente, mas **não bloqueia** outros membros

::: tip 💡 Dica
Use prazo menor em expediente (ex.: 5 min) e maior em folga (ex.: 15 min) quando o fallback atribuir fora do horário.
:::

### Fallback — quando ninguém está disponível

Se nenhum membro estiver elegível no expediente, o sistema tenta as **estratégias na ordem configurada**:

| Estratégia | Descrição |
|------------|-----------|
| **Retry automático** | Reagenda tentativa após X minutos |
| **Ignorar horário** | Rodízio fora do expediente (respeita pausa manual) |
| **Plantão** | Apenas membros marcados em plantão |
| **Último atendente do cliente** | Quem já atendeu este cliente antes |
| **Menor carga** | Agente com menos atendimentos em andamento |
| **Líder da equipe** | Atribui a um líder disponível |
| **Equipe de overflow** | Transfere para outra equipe |
| **Fila da equipe** | Mantém sem agente; pode notificar líderes |

Configure também:

- **Intervalo de retry** (minutos)
- **Máximo de tentativas** (ou ilimitado)
- **Equipe de overflow**
- **Notificar líder se cair na fila**

### Situação do rodízio

No card de cada equipe com rodízio ativo, o painel **Situação do rodízio** exibe:

- **Próximo** — quem receberá a próxima distribuição
- **Último** — quem recebeu a última
- **Ordem na fila** — lista completa com badges de disponibilidade

Gestores podem usar **⋮ → Definir como próximo** para ajustar manualmente a fila.

### Horários de disponibilidade

Por membro, configure:

- **Fuso horário**
- **Horário semanal** (intervalos por dia da semana)
- **Exceções** (feriados, folgas pontuais)

Fora do expediente, o membro é **ignorado no rodízio strict** (mas pode ser alcançado por fallback).

**Prioridades:**

1. Pausa manual → sempre ignorado
2. Plantão → priorizado em fallback `on_call`
3. Horário semanal → define expediente
4. Exceções → bloqueiam dias/horários específicos

### Rodízio em fluxos de automação

Use o nó **Rodízio** no construtor de fluxos para acionar a distribuição:

- Pode usar a **equipe atual do chat** ou selecionar outra equipe
- Útil após triagem automatizada ou etapas de bot

---

## Experiência na lista e no chat

### Badge na lista de conversas

Chats pendentes com reserva ativa exibem marcador:

| Quem vê | Badge |
|---------|-------|
| Agente reservado | **Reservado para você** (índigo) |
| Outros membros | **Reservado · {nome}** (âmbar) |

Passe o mouse para ver horário limite e modo (expediente/folga).

### Dentro do chat (modo pending)

- Agente reservado: botão **Atender** disponível
- Outros membros: banner âmbar com aviso e botão oculto
- Mensagens de sistema registram reserva ou auto-atribuição

---

## Boas práticas

1. **Ordene a fila** colocando agentes mais experientes no início ou use ordem alfabética/rotativa conforme a operação
2. **Ative horários** para evitar notificações fora do expediente
3. **Use pausa manual** para almoço e reuniões — não precisa excluir do rodízio
4. **Teste o fallback** com uma equipe pequena antes de ativar em produção
5. **Modo pending + reserva** funciona bem quando agentes precisam finalizar o atendimento atual antes de pegar outro

---

## Próximos Passos

- [Configurações](/guide/settings/) — preferências gerais de atendimento
- [Interface de Chat](/guide/chat/interface) — lista, filtros e ações
- [Construtor de Fluxos](/guide/flows/builder) — automações com nó de rodízio
