# Agendamento Público (Booking)

Permita que clientes marquem horários por um link público da agenda.

## Como funciona

1. Em **Agendas**, edite a agenda desejada
2. Ative a opção de agenda **pública** (`is_public`)
3. Compartilhe o link no formato:

```
https://<seu-dominio-publico>/booking/<orgId>/<scheduleId>
```

O link de booking costuma ser servido pelo **site público** da Interflow (não pela rota interna `/app`).

::: tip
Combine com [lembretes push](/guide/schedule/push-reminders) e [fluxos silenciosos por status](/guide/schedule/silent-flows) para automatizar confirmação e no-show.
:::

## Boas práticas

- Configure disponibilidade e feriados antes de publicar
- Use templates de notificação da agenda
- Teste o link em aba anônima

## Relacionados

- [Agenda — visão geral](/guide/schedule/)
- [Lembretes push](/guide/schedule/push-reminders)
- [Fluxos silenciosos](/guide/schedule/silent-flows)
