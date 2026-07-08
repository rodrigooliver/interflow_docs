# Atalhos de Mensagem em Sequência

Envie várias mensagens em ordem com um único atalho, definindo intervalos entre cada uma para um ritmo natural de conversa.

## O que é?

Um **atalho em sequência** agrupa de 2 a 10 mensagens que são disparadas automaticamente, uma após a outra, respeitando o intervalo configurado entre elas. Cada passo pode ter texto, anexos e assinatura do agente independentes.

Atalhos com **apenas uma mensagem** continuam funcionando exatamente como antes.

## Para que serve?

| Cenário | Exemplo |
|---------|---------|
| Saudação em etapas | Mensagem de boas-vindas → apresentação → pergunta inicial |
| Envio de material | Texto introdutório → PDF → instruções de uso |
| Follow-up estruturado | Confirmação → detalhes → call-to-action |

## Onde acessar

| Área | Caminho |
|------|---------|
| **Configurar atalhos** | Organização → Atalhos de Mensagem |
| **Usar no chat** | Digite `/` no campo de mensagem e selecione o atalho |

## Configurar um atalho sequencial

1. Acesse **Organização** → **Atalhos de Mensagem**
2. Clique em **Novo Atalho** ou edite um existente
3. Na seção **Mensagens**, preencha o primeiro passo (texto e anexos)
4. Clique em **Adicionar mensagem** para incluir mais passos
5. Em cada passo (exceto o último), defina o **intervalo antes da próxima**:
   - Opções: 0,5s, 1s, 2s, 3s, 5s, 10s, 15s ou 30s
6. Marque ou desmarque **Assinar mensagem** por passo, se necessário
7. Reordene com os botões de mover para cima/baixo
8. Salve

Na listagem, atalhos com mais de uma mensagem exibem um badge (ex.: `3 msgs`).

::: tip 💡 Compatibilidade
Atalhos criados antes desta versão são convertidos automaticamente para o formato de passos. Não é necessário recriá-los.
:::

## Usar no chat

1. No atendimento, digite `/` e escolha o atalho desejado
2. Se o atalho tiver **mais de uma mensagem**, um **modal de revisão** abre:
   - Edite o texto de qualquer passo
   - Remova anexos de passos específicos (sem alterar o atalho salvo)
   - Ajuste intervalos entre mensagens
3. Clique em **Enviar Sequência** ou pressione **Enter**
4. As mensagens aparecem no chat em sequência, com os intervalos configurados

Para cancelar, use **Cancelar sequência**, **ESC** ou clique fora do modal.

::: info 📌 Campo de mensagem
O campo de digitação normal **permanece visível** enquanto o modal está aberto, para você manter o contexto da conversa.
:::

## Limitações

- Máximo de **10 mensagens** por atalho
- Intervalos disponíveis: 0,5s a 30s (valores fixos)
- A edição no modal **não altera** o atalho salvo — apenas o envio atual

## Relacionado

- [Interface de Chat](/guide/chat/interface) — visão geral do atendimento
- [Changelog v2026.7.4](/changelog/2026/07/2026.7.4) — detalhes desta versão
