# Executar em uma mensagem

Dispare um Agente IA a partir de **uma mensagem** do chat, sem iniciar fluxo.

> Changelog: [v2026.8.23](/changelog/2026/08/2026.8.23)

## Para que serve

- Classificar ou extrair dados de um áudio, e-mail ou texto pontual
- Atualizar cadastro, tags ou funil com as ferramentas do agente
- Responder no chat só se o agente estiver configurado para enviar mensagens

**Onde acessar:** menu da mensagem (ícone de três pontos) → **Executar agente IA**.

## O que muda em relação ao fluxo

| No fluxo | Nesta ação |
|----------|------------|
| O agente lê as últimas N mensagens do chat | Lê **só a mensagem escolhida** |
| Cria ou continua uma sessão de fluxo | **Não** cria sessão e **não** altera um fluxo já ativo |
| Avança para o próximo nó | Termina quando o agente conclui |

Data, canal, dados do cliente, skills, base de conhecimento e ferramentas prontas continuam iguais às do prompt.

## Como usar

1. Abra a conversa
2. No menu da mensagem do **cliente** ou do **agente**, clique em **Executar agente IA**
3. Busque o agente (lista em ordem alfabética)
4. Selecione e confirme

A ação **não** aparece em nota privada, evento de sistema nem chat agendado.

## Envio de mensagens

O prompt decide se algo vai para o cliente:

- **Enviar mensagens pelo agente** ligado — a resposta entra no chat
- Desligado — o agente só age no cliente e no atendimento (CRM, tags, transferência, criar chat, etc.)

## Permissão

Segue a mesma regra de **iniciar fluxo**: admin e owner sempre podem. Se a organização impedir fluxo durante o atendimento, os demais usuários também não executam o agente nesse caso.

## Limitações

- Não navega nós do fluxo (`ir para nó`). A ação **Iniciar fluxo**, se existir no prompt, ainda pode iniciar um fluxo de verdade
- Transferir para equipe ou “não soube responder” **não** pausa um fluxo que já esteja ativo no chat
