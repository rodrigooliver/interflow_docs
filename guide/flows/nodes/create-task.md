# Nó: Criar Tarefa

Cria uma tarefa automaticamente durante a execução do fluxo.

## Visão Geral

O nó **Criar Tarefa** permite automatizar a criação de tarefas no módulo de Tarefas, vinculando-as automaticamente ao cliente e à conversa atual. Ideal para padronizar processos e garantir que nenhuma ação importante seja esquecida.

## Configurações

### Campos Disponíveis

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| **Projeto** | Sim | Projeto onde a tarefa será criada |
| **Estágio** | Sim | Estágio inicial da tarefa no Kanban |
| **Título** | Sim | Título da tarefa (suporta variáveis) |
| **Descrição** | Não | Descrição detalhada (suporta variáveis) |
| **Prioridade** | Não | Baixa, Média ou Alta |
| **Status** | Não | Pendente, Em Progresso, Concluída ou Cancelada |
| **Vencimento** | Não | Prazo em horas após a criação |
| **Responsável** | Não | Membro do projeto responsável |
| **Checklist** | Não | Lista de itens de verificação |

### Projeto

Selecione o projeto onde a tarefa será criada. Somente projetos da organização são listados.

### Estágio

Após selecionar o projeto, escolha o estágio inicial do Kanban onde a tarefa aparecerá.

### Título

Defina o título da tarefa. Suporta variáveis para personalização dinâmica:

```
Suporte - {{customer.name}}
```

### Descrição

Adicione detalhes sobre a tarefa. Suporta variáveis:

```
Cliente: {{customer.name}}
Telefone: {{customer.phone}}
Problema relatado: {{input.problema}}
```

### Prioridade

| Valor | Descrição |
|-------|-----------|
| **Baixa** | Tarefas de rotina |
| **Média** | Tarefas normais (padrão) |
| **Alta** | Tarefas urgentes |

### Status

| Valor | Descrição |
|-------|-----------|
| **Pendente** | Aguardando início (padrão) |
| **Em Progresso** | Em andamento |
| **Concluída** | Finalizada |
| **Cancelada** | Cancelada |

### Vencimento

Defina o prazo em **horas** após a criação da tarefa:

| Exemplo | Descrição |
|---------|-----------|
| 24 | 1 dia |
| 48 | 2 dias |
| 72 | 3 dias |
| 168 | 1 semana |

### Responsável

Selecione um membro do projeto para ser o responsável pela tarefa. O responsável será notificado quando a tarefa for criada.

### Checklist

Adicione itens de verificação que devem ser completados. Cada item suporta variáveis:

```
- Analisar problema relatado
- Contatar cliente {{customer.name}}
- Verificar histórico de atendimentos
- Resolver pendência
- Retornar ao cliente
```

## Uso de Variáveis

Campos de texto (título, descrição e checklist) suportam variáveis do fluxo:

### Variáveis do Cliente

```
{{customer.name}}       - Nome do cliente
{{customer.phone}}      - Telefone
{{customer.email}}      - Email
{{customer.cpf}}        - CPF (se cadastrado)
```

### Variáveis de Input

```
{{input.nome_variavel}} - Valor capturado por um nó Input
```

### Variáveis Personalizadas

```
{{variavel_definida}}   - Variável definida no fluxo
```

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Continua após criar a tarefa |

## Dados Automáticos

O nó automaticamente vincula à tarefa:

- **Cliente** - Cliente do atendimento atual
- **Conversa** - Chat/conversa onde o fluxo está executando
- **Organização** - Organização do fluxo

## Exemplos de Uso

### Suporte Técnico

Criar tarefa quando cliente reporta problema:

```
[Input] → Descreva o problema
[Criar Tarefa] → Projeto: Suporte Técnico
                 Estágio: Triagem
                 Título: Suporte - {{customer.name}}
                 Descrição: {{input.problema}}
                 Prioridade: Alta
                 Vencimento: 24 horas
                 Checklist:
                   - Analisar problema
                   - Resolver
                   - Retornar ao cliente
```

### Agendamento de Retorno

Criar tarefa de follow-up:

```
[Texto] → Entraremos em contato em breve!
[Criar Tarefa] → Projeto: Comercial
                 Estágio: Follow-up
                 Título: Retornar - {{customer.name}}
                 Descrição: Cliente demonstrou interesse em {{input.produto}}
                 Prioridade: Média
                 Vencimento: 48 horas
                 Responsável: João Silva
```

### Qualificação de Lead

Criar tarefa ao qualificar lead:

```
[Condição] → Se interesse = "alto"
[Criar Tarefa] → Projeto: Vendas
                 Estágio: Leads Quentes
                 Título: Lead Qualificado - {{customer.name}}
                 Prioridade: Alta
                 Vencimento: 24 horas
                 Checklist:
                   - Enviar proposta
                   - Agendar reunião
                   - Negociar valores
```

### Solicitação de Serviço

```
[Input] → Qual serviço deseja solicitar?
[Input] → Qual a urgência? (baixa/média/alta)
[Criar Tarefa] → Projeto: Serviços
                 Estágio: Novas Solicitações
                 Título: {{input.servico}} - {{customer.name}}
                 Prioridade: {{input.urgencia}}
                 Vencimento: 72 horas
```

## Boas Práticas

::: tip Títulos Descritivos
Use títulos que identifiquem rapidamente o conteúdo da tarefa, incluindo o nome do cliente.
:::

::: tip Checklists Padronizados
Crie checklists que garantam que todas as etapas do processo sejam seguidas.
:::

::: tip Prazos Realistas
Defina prazos que permitam a execução adequada da tarefa sem criar urgência desnecessária.
:::

::: tip Responsáveis Definidos
Sempre que possível, defina um responsável para evitar que tarefas fiquem sem dono.
:::

::: tip Variáveis Contextuais
Use variáveis para criar tarefas personalizadas com informações coletadas durante o atendimento.
:::

## Restrições

::: warning Atenção
- O projeto e estágio são obrigatórios
- O título é obrigatório e deve ter pelo menos 3 caracteres
- A tarefa só é criada se o fluxo executar com sucesso até este nó
:::

## Próximos Passos

- [Nó: Atualizar Cliente](/guide/flows/nodes/update-customer)
- [Nó: Nota Privada](/guide/flows/nodes/private-note)
- [Nó: Encerrar Atendimento](/guide/flows/nodes/close-attendance)
