# Lembretes push (app e web)

Envie alertas automáticos para a **equipe** antes de cada compromisso — no app mobile e no navegador.

## Diferença em relação a outros lembretes

| Recurso | Destinatário | Canal | Onde configurar |
|---------|--------------|-------|-----------------|
| **Lembretes push** | Profissional + usuários notificados | App e web (push) | Formulário da agenda |
| **Templates de notificação** | Cliente | WhatsApp, e-mail ou fluxo | Aba **Notificações** (gestão da agenda) |
| **Lembrete "Antes do agendamento"** | Cliente | WhatsApp ou e-mail | Aba **Notificações** |

Use lembretes push quando a **equipe** precisa ser avisada internamente. Use templates de notificação quando o **cliente** deve receber a mensagem.

## Acessando a configuração

1. No menu, clique em **Agenda**
2. Crie uma nova agenda ou edite uma existente (**Editar**)
3. Role até a seção **Lembretes push (app e web)**

A configuração fica no mesmo formulário da agenda, junto com **Usuários notificados** — campo que define quem além do profissional recebe os alertas.

## Configurando os lembretes

### Ativar ou desativar

Marque **Enviar lembretes push antes do compromisso** para habilitar os alertas nesta agenda. Desmarque para desligar sem remover os horários salvos.

**Padrão em agendas novas:** ativado com lembrete de **1 hora** antes.

### Horários predefinidos

Selecione um ou mais chips:

| Chip | Antecedência |
|------|--------------|
| 15 min | 15 minutos antes |
| 30 min | 30 minutos antes |
| 1 h | 1 hora antes |
| 2 h | 2 horas antes |

Clique novamente em um chip selecionado para removê-lo.

### Horário personalizado

1. Clique em **+ Adicionar horário personalizado**
2. Informe o valor e escolha **minutos** ou **horas**
3. Clique em **Adicionar**
4. Para remover, clique no chip personalizado (com **×**)

**Limites:**

- Máximo de **5 horários** no total (presets + personalizados)
- Tempo máximo de **1 semana** (10.080 minutos) antes do compromisso
- Não é possível repetir o mesmo horário

### Usuários notificados

Acima da seção de push, configure **Usuários notificados** para incluir gestores, assistentes ou outros membros da equipe. O **profissional** do agendamento sempre recebe os lembretes.

## O que o destinatário recebe

Cada alerta inclui:

- Nome do cliente
- Serviço ou tipo de compromisso
- Data e horário
- Quanto tempo falta (ex.: "em 60 min")

O texto é exibido no **idioma do perfil** de cada destinatário (português, inglês ou espanhol).

Além dos lembretes antes do horário, a equipe também recebe um push na **criação** do agendamento (quando aplicável).

## Quando os lembretes são atualizados

O sistema recalcula automaticamente os horários de envio quando:

- Um agendamento é **criado** ou **alterado** (data, hora, profissional)
- A configuração de lembretes da agenda é **salva**
- Um agendamento é **cancelado** ou excluído

Lembretes pendentes de compromissos cancelados são **cancelados** — não serão enviados.

## Requisitos

Para receber push:

- O usuário deve ter feito login no app ou na web pelo menos uma vez (o dispositivo é registrado para receber push)
- Notificações do navegador ou do app devem estar permitidas no dispositivo

::: tip 💡 Dica
Combine lembrete push de **1 h** para a equipe se preparar e template WhatsApp de **24 h** para o cliente confirmar presença — cada canal com seu propósito.
:::

## Próximos passos

- [Agenda — visão geral](/guide/schedule/) — recursos gerais do módulo
- [Fluxos silenciosos por status](/guide/schedule/silent-flows) — automações internas por mudança de status
- [Changelog v2026.6.11](/changelog/2026/06/2026.6.11) — detalhes desta release
