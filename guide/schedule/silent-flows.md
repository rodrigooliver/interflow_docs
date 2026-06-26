# Fluxos silenciosos por status

Automatize processos **internos** em cada mudança de status do agendamento — sem enviar mensagens ao cliente.

## Diferença em relação às notificações

| Recurso | Comunicação com o cliente | Onde configurar |
|---------|---------------------------|-----------------|
| **Templates de notificação** | Sim (WhatsApp, e-mail ou fluxo visível) | Aba **Notificações** |
| **Fluxos silenciosos** | Não — execução em background | Aba **Fluxos silenciosos** |

Use notificações quando o cliente precisa ser avisado. Use fluxos silenciosos para integrações, registros internos, tarefas ou alertas da equipe.

## Acessando a configuração

1. No menu, clique em **Agenda**
2. Abra a agenda desejada e clique em **Gerenciar**
3. Selecione a aba **Fluxos silenciosos**

Na mesma barra de abas ficam **Profissionais e serviços**, **Disponibilidade**, **Feriados**, **Notificações** e **Fluxos silenciosos**.

## Criando o fluxo

1. Na aba **Fluxos silenciosos**, clique em **Criar fluxo de agendamento**
2. Informe nome e descrição — o tipo **Mudança de status de agendamento** já vem selecionado
3. Após criar, você será direcionado ao editor para montar a automação
4. Volte à aba **Fluxos silenciosos** e associe o fluxo ao status desejado

Também é possível criar fluxos manualmente em **Fluxos** → tipo **Mudança de status de agendamento**.

## Associando fluxos aos status

Para cada status operacional, escolha um fluxo opcional no select:

| Status | Quando dispara |
|--------|----------------|
| **Agendado** | Criação ou transição para agendado |
| **Confirmado** | Confirmação do agendamento |
| **Atendimento iniciado** | Início do atendimento |
| **Concluído** | Conclusão |
| **Cancelado** | Cancelamento |
| **Não compareceu** | Marcação de no-show |

Com um fluxo selecionado, use o botão **Editar** (✏️) ao lado do select para abrir o editor.

Clique em **Salvar** para persistir as associações da agenda.

## Variáveis no fluxo

Ao disparar, o fluxo recebe variáveis de contexto:

```
appointment_id              → ID do agendamento
appointment_status          → Novo status
appointment_previous_status → Status anterior (vazio na criação)
schedule_id                 → ID da agenda
```

## Restrições do tipo de fluxo

Fluxos **Mudança de status de agendamento** não permitem nós que aguardam resposta do cliente (`input` / `interactive`), pois a execução é silenciosa e em background.

## Operações em massa

**Agendamentos recorrentes** e **importação de calendário (.ics)** exibem aviso no formulário: operações em massa **não disparam** notificações, fluxos silenciosos nem outras automações por status, para evitar volume excessivo de envios.

## Quando as automações disparam

Toda mudança de status feita pela interface (confirmar, iniciar, concluir, cancelar, check-in na fila, etc.) passa pelo servidor e pode disparar:

- Templates de notificação configurados
- Fluxo silencioso do status de destino (se houver)

::: tip 💡 Dica
Configure um fluxo silencioso em **Concluído** para criar tarefa de follow-up interno, e um template de notificação em **Concluído** para agradecer o cliente — cada um com seu propósito.
:::

## Próximos passos

- [Agenda — visão geral](/guide/schedule/) — recursos gerais do módulo
- [Fluxos de atendimento](/guide/flows/builder) — editor de fluxos
- [Changelog v2026.6.10](/changelog/2026/06/2026.6.10) — detalhes desta release
