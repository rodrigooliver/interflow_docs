# PDV (Ponto de Venda)

Vendas no balcão, pedidos, produtos, estoque e mesas — integrados à operação Interflow.

::: tip Acesso
Menu lateral → **PDV**. Requer módulo `pos` habilitado.
:::

## Visão geral

| Área | Função |
|------|--------|
| **Painel** | KPIs e atalhos |
| **Vendas** | Carrinho, barcode, pagamento |
| **Produtos** | Catálogo, variações e estoque |
| **Pedidos** | Pedidos e orçamentos |
| **Caixa** | Sessão de caixa do PDV |
| **Estoque** | Níveis e movimentos |
| **Mesas** | Salão (restaurante) |
| **Configurações** | Loja, recibo, pagamentos, mesas |

## Fluxo típico de venda

1. Abra **PDV → Vendas**
2. Busque produtos (nome ou código de barras) e adicione ao carrinho
3. (Opcional) Vincule **cliente** e/ou **mesa**
4. Clique em **Finalizar venda**
5. Escolha a forma de pagamento (dinheiro, cartão, PIX, etc.)
6. Confirme — o pedido é criado e o carrinho é limpo

## Pedidos

Além da venda imediata, use **Pedidos** para:

| Tipo | Uso |
|------|-----|
| PDV | Venda de balcão |
| Orçamento | Proposta sem baixa imediata |
| Entrega | Pedido para entrega |
| Retirada | Cliente retira no local |
| Consumir no local | Relacionado a mesas / salão |

Status típicos: rascunho → confirmado → entregue / cancelado.

## Produtos

1. Vá em **PDV → Produtos**
2. Cadastre nome, preço, SKU/código de barras e estoque
3. Use variações quando o item tiver opções (tamanho, sabor, etc.)

## Mesas (restaurante)

1. Em **PDV → Configurações**, habilite o **serviço de mesas**
2. Gerencie mesas em **PDV → Mesas** (disponível / ocupada / reservada)
3. Na venda ou no pedido, associe a mesa ao atendimento

## Caixa e estoque

- **Caixa do PDV:** abertura/fechamento de sessão no turno
- **Estoque:** acompanhe níveis e movimentações dos produtos

::: tip Varejo vs restaurante
No varejo, foque em venda rápida + barcode. No restaurante, ative mesas e use pedidos “consumir no local”.
:::

## Permissões

Conforme o grupo de permissão: gerenciar produtos/categorias, processar vendas/devoluções e acessar relatórios.

## Relacionados

- [Financeiro](/guide/financial/)
- [Clientes](/guide/crm/customers)
