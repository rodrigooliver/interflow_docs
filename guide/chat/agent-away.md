# Status Online / Ausente

O atendente pode indicar se está **Online** ou **Ausente** na barra lateral, ao lado do avatar. A ausência afeta o rodízio de novos chats e, se configurado, envia uma mensagem automática aos clientes dos atendimentos atribuídos a ele.

Changelog: [v2026.8.5](/changelog/2026/08/2026.8.5)

---

## O que acontece na ausência

| Comportamento | Detalhe |
|---------------|---------|
| Rodízio | O atendente deixa de receber novos chats nas equipes (`is_on_break`) |
| Reservas pendentes | Chats reservados para ele em `pending` são liberados e redistribuídos |
| Mensagem automática | Opcional — só para chats **atribuídos** a ele, quando o cliente envia mensagem |
| Cooldown | No máximo 1 aviso a cada **30 minutos** por conversa |

Os chats que já estão com o atendente (`in_progress`) **não são transferidos** automaticamente. O atendimento continua com ele ao voltar.

---

## Como marcar ausência

1. Na barra lateral, ao lado do avatar, clique no indicador **Online** / **Ausente**
2. No modal:
   - (Opcional) marque **Enviar mensagem automática aos clientes dos meus atendimentos**
   - Edite o texto ou use a mensagem padrão
3. Confirme **Ficar ausente**
4. Para voltar, abra o status e escolha **Voltar online**
5. Use **Atualizar** no modal para sincronizar o status com o servidor

---

## Mensagem automática

- Só é enviada se a opção estiver marcada na ausência
- Só em chats **atribuídos** ao atendente ausente
- Identificada internamente como mensagem automática de ausência
- Se o cliente enviar várias mensagens seguidas, o aviso não se repete antes de 30 minutos naquele chat — mesmo se o atendente ficar online e ausente de novo nesse intervalo

---

## Limitações

- Não envia broadcast para todos os chats abertos no momento de ativar a pausa
- Não cobre clientes na fila sem atribuição ao atendente
- Em canais com janela de conversa (ex.: WhatsApp oficial), o envio depende das regras do canal
