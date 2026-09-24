---
title: Solicitações
description: Como pedir uma mudança no produto, escolher a urgência e acompanhar créditos, prazo e status até a implantação.
---

# Solicitações

Peça uma função nova, uma melhoria ou a correção de um erro do sistema e acompanhe o pedido até ele entrar no ar.

::: tip Acesso
Menu **Solicitações**.
:::

> Relacionado: [Copiloto](/guide/copilot)

## O que é

Cada pedido vira um card com status, prazo e créditos. O saldo da organização aparece no topo da página. O que não for usado acumula.

## Como criar

1. Em **Solicitações**, clique em **Nova Solicitação**
2. Descreva o que você precisa, em linguagem comum
3. Clique em **Continuar no copiloto**

O copiloto precisa estar no modo **Agente** ou **Agente direto** para gravar. No modo **Pergunta** ele só explica o caminho.

No chat, o fluxo é este:

1. Ele confere na documentação se o produto já faz aquilo
2. Procura um pedido parecido, concluído ou em andamento. Se achar, conta no chat e só segue se você quiser
3. Consulta o saldo
4. Classifica o pedido e mostra quatro urgências, cada uma com crédito e prazo
5. Você escolhe a urgência no chat
6. Se a tela aberta mostra o problema ou a interface que vai mudar, ele tira um print. Pedido que não depende da tela segue sem print
7. Grava a solicitação e devolve o link **Veja sua solicitação**

Dá para começar pelo copiloto em qualquer tela, sem passar pelo botão. A página aberta fica registrada no pedido, para o time saber de onde ele partiu.

Se o saldo não cobrir a urgência escolhida, o copiloto abre a compra de créditos na mesma página (**Comprar**).

## Categorias

O copiloto escolhe a categoria a partir do que você descreveu.

| Categoria | Quando entra |
|-----------|----------------|
| Nova funcionalidade | Algo que o sistema ainda não faz |
| Melhoria | Ajuste em algo que já existe |
| Correção de bug | Erro de tela, botão ou comportamento do próprio sistema |
| Integração | Ligar a um sistema de fora |
| Criar Agente IA | Um agente novo |
| Alterar Agente IA | Mudar um agente ou um fluxo, inclusive quando responde errado |
| Interface | Visual e uso da tela |
| Performance | Lentidão |
| Segurança | Proteção de dados |
| Outro | O que não couber acima |

::: warning Correção de bug
Correção de bug cobre erro do próprio sistema. Agente ou fluxo que responde errado entra em **Alterar Agente IA**. Só a correção de bug deixa de gastar créditos.
:::

Um pedido vago, do tipo "quero melhorar tudo", entra como melhoria de tamanho médio. Vale descrever o resultado que você espera e, se puder, um exemplo do dia a dia.

## Urgência

| Urgência | Efeito |
|----------|--------|
| Baixa | Prazo mais longo e menos créditos |
| Média | Prazo e crédito de referência |
| Alta | Entrega mais rápida e mais créditos |
| Urgente | A mais rápida e o maior custo |

O prazo também estica quando já há muitos pedidos em andamento. A data mostrada no chat é a estimativa do momento do orçamento.

Na correção de bug a conta é de compensação: urgência baixa devolve mais créditos quando o time aprova; urgência alta devolve menos, porque a correção entra na frente.

## Créditos

O número no topo de **Solicitações** é o saldo. O histórico abre ao clicar nele.

- **Disponível** = saldo real menos o que já está reservado em pedidos **pendentes**. Correção de bug não reserva
- Na criação, o sistema confere se o disponível cobre a urgência escolhida
- O crédito sai do saldo quando o time **aprova**
- Enquanto o pedido está pendente, o card mostra o valor como estimativa
- Se um pedido já cobrado for recusado, o valor volta ao saldo
- Correção de bug não desconta. Na aprovação, o time pode **somar** créditos de compensação
- Faltou saldo: use **Comprar** na mesma página

O plano deposita créditos ao longo do tempo. O saldo não zera no fim do mês.

## Status

| Status | Significado |
|--------|-------------|
| Pendente | Enviado, aguardando análise do time |
| Aprovado | Aceito. Os créditos foram cobrados, ou somados no caso de correção de bug |
| Em desenvolvimento | O time está fazendo |
| Em testes | Em validação |
| Implantado | No ar. Se houver instruções de uso, o card mostra **Ver instruções** |
| Rejeitado | Não será feito. O motivo aparece no detalhe |

Você recebe aviso quando o pedido é aprovado ou recusado.

## Depois de enviar

Na lista dá para filtrar por status, buscar por texto e ordenar por mais recentes, mais votados ou prazo.

No card e no detalhe:

- **Votar** apoia um pedido da organização
- Comentários ficam no detalhe, junto com a descrição e os anexos
- Enquanto estiver **pendente** e for seu, dá para **excluir** ou **ajustar a urgência**. Título, descrição e categoria permanecem como foram enviados
- Dá para anexar arquivo (imagem, PDF, planilha, vídeo e outros, até 50 MB cada)

O print tirado pelo copiloto começa visível para você e para o time. O time pode liberar a imagem para os demais.

## O que acontece depois do envio

Enviar coloca o pedido na fila de análise. A mudança entra no produto depois que o time aprova e conclui o trabalho. O prazo do card é a estimativa da urgência escolhida naquele momento.
