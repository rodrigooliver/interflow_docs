---
title: Copiloto
description: Assistente dentro do sistema para o usuário logado. Consulta a tela, a documentação e os dados que você já pode ver, e só altera no modo agente.
---

# Copiloto

O copiloto é um assistente seu, dentro da Interflow. Ele responde dúvidas de uso, lê o que está na tela e, no modo agente, executa ações com a mesma permissão da sua conta.

Ele não conversa com o cliente no lugar do [Agente IA](/guide/ai-agents/). O Agente IA atende no canal. O copiloto ajuda quem está operando o sistema.

::: tip Acesso
Botão **Copiloto**, no canto da tela, em qualquer página do app.
:::

> Changelog: [v2026.9.14](/changelog/2026/09/2026.9.14)

## Como abrir

1. Clique em **Copiloto**
2. Escolha o modo no seletor, ao lado do campo de mensagem
3. Escreva o pedido em linguagem comum

Se você já estiver em um atendimento, ele entra anexado na conversa. Dá para tirar esse anexo. Fora de um chat, peça pelo nome do cliente para achar a conversa.

## Modos

| Modo | O que faz |
|------|-----------|
| **Pergunta** | Só consulta. Não grava, não envia, não move estágio |
| **Agente** | Pode alterar, mas a ação fica proposta até você confirmar no painel |
| **Agente direto** | Altera na hora, sem pedir confirmação |

No modo pergunta, se você pedir para gravar ou enviar, ele explica o que faria e pede para mudar de modo. Ele não diz que já executou.

## O que ele consulta

- A página aberta: lista, ficha, campos e botões visíveis
- A documentação do produto, com o link da página
- Atendimentos pelo nome do cliente, e as mensagens do atendimento anexado
- Tarefas dos projetos em que você participa, agenda, funis, tags e campos do cliente

A consulta respeita o seu acesso. O que você não pode ver no sistema, ele também não mostra.

Quando a resposta já está na tela, ele aponta o controle em vez de trocar de página. Se o caminho estiver no menu, ele indica o item ou abre a tela.

## O que ele pode alterar

Só nos modos **Agente** e **Agente direto**, e só se a sua conta tiver essa permissão:

- Criar, atualizar ou excluir tarefa. Se houver mais de um projeto ou estágio, ele pergunta qual
- Consultar, criar, atualizar ou excluir agendamento
- Atualizar dados do cliente, inclusive valor de venda e campos personalizados
- Incluir ou remover tag. Ele lista as tags antes de gravar
- Mover o cliente de estágio no funil, depois de comparar o nome que você disse com os funis e estágios
- Enviar ou agendar uma mensagem no atendimento anexado
- Montar e gravar um [agente de atendimento](/guide/ai-agents/#criar-pelo-copiloto), com perguntas guiadas no painel
- Abrir uma [solicitação](/guide/deployments), com assistente dedicado que busca pedidos parecidos, orça urgências e grava o pedido
- Clicar e preencher campos da tela atual. Senha não é preenchida

Nome, e-mail ou WhatsApp da organização só mudam para superadmin.

Se vários clientes tiverem o nome parecido, ele pergunta qual antes de abrir.

## Ditar

Ao lado de enviar, o microfone transforma a fala em texto no campo. O uso entra nos créditos de IA como transcrição e exige a integração ElevenLabs.

## Modelo e saldo

No menu ao lado do modo dá para escolher:

- O **modelo** (modelos da Interflow, DeepSeek ou Gemini, se a organização tiver a integração)
- O esforço de raciocínio: **Baixo**, **Médio** ou **Alto**
- Quem paga a chamada: **Saldo Interflow** ou uma integração sua

Com saldo Interflow, a conversa para quando os créditos de IA acabam. O uso aparece em **Configurações** → créditos de IA, como **Copiloto**.

## Perguntas no painel

Quando falta uma escolha sua, o copiloto mostra as opções **embaixo do chat**, em um bloco simples. Você toca na opção ou escreve a resposta. Uma opção pode vir com o selo **Recomendado**; você pode seguir a sugestão ou escolher outra.

Ele faz **uma pergunta por vez**. O texto acima do formulário só orienta; a pergunta e os botões ficam no bloco.

## Criar agente de atendimento

No modo **Agente** ou **Agente direto**, diga que quer um agente novo ou descreva o negócio e o que ele deve fazer. Um assistente interno cuida só disso:

1. Usa o que você já disse e pergunta só o que falta (negócio, público, tom, o que o agente pode fazer sozinho)
2. Monta o texto do agente
3. Resume o plano e pede confirmação para gravar
4. Cria o agente e o fluxo ligado a ele
5. Devolve o link **Ver o agente**

Você responde pelas perguntas do painel ou digitando no chat. Passo a passo em [Agentes IA — Criar pelo copiloto](/guide/ai-agents/#criar-pelo-copiloto).

## Criar solicitação de mudança

Função nova, melhoria ou correção no produto seguem outro assistente interno. O fluxo completo está em [Solicitações](/guide/deployments#como-criar). Em resumo: ele confere a documentação, avisa se já existe pedido parecido e deixa você acompanhar, comentar ou abrir outro pedido antes de gravar.

## Conversas salvas

No topo do painel dá para ver conversas recentes, abrir uma antiga ou apagar. Ao apagar, a confirmação aparece **dentro do próprio painel** do copiloto.

## Limites

- Não inventa tarefa, agendamento, projeto, estágio, tag nem responsável
- Não preenche senha
- Não age fora da permissão da sua conta
- Ficha muito detalhada (cliente, quadro da tarefa, agenda) pode ser aberta na tela em vez de editada campo a campo
- Cada lista grande é lida em partes. Ele não despeja o histórico inteiro de uma vez
