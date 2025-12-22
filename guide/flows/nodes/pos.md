# Nó: POS (Ponto de Venda)

Integração com o sistema de Ponto de Venda (POS) da Interflow.

## Visão Geral

O nó **POS** permite integrar fluxos com o sistema de vendas. Use para:

- Criar pedidos
- Consultar produtos
- Processar pagamentos
- Gerenciar carrinho

## Pré-requisitos

1. Módulo POS ativado no workspace
2. Produtos cadastrados no sistema

## Configurações

### Ação

| Ação | Descrição |
|------|-----------|
| **Novo Pedido** | Inicia um novo pedido |
| **Adicionar Item** | Adiciona produto ao carrinho |
| **Remover Item** | Remove produto do carrinho |
| **Consultar Produto** | Busca informações do produto |
| **Finalizar Pedido** | Fecha o pedido |
| **Cancelar Pedido** | Cancela o pedido |

### Parâmetros

Dependem da ação selecionada:

**Novo Pedido:**
- Cliente (opcional)
- Observações

**Adicionar Item:**
- Produto (SKU ou ID)
- Quantidade
- Observações

**Consultar Produto:**
- Código ou nome do produto

**Finalizar Pedido:**
- Forma de pagamento
- Desconto (opcional)

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Entrada | Esquerda | Cinza | Recebe conexão do nó anterior |
| Sucesso | Direita | Verde | Ação executada com sucesso |
| Erro | Inferior | Vermelho | Falha na execução |

## Exemplos de Uso

### Fluxo de Pedido

```
[Texto] → "Qual produto você deseja?"
[Input] → Salvar em: produto_escolhido

[POS: Consultar Produto]
  Código: {{produto_escolhido}}
  Resultado: info_produto

[Condição] → info_produto existe?
  ✅ → [POS: Adicionar Item]
  ❌ → [Texto] "Produto não encontrado"
```

### Criar e Finalizar Pedido

```
[POS: Novo Pedido]
  Cliente: {{customer_id}}

[POS: Adicionar Item]
  Produto: {{produto}}
  Quantidade: {{quantidade}}

[POS: Finalizar Pedido]
  Pagamento: PIX
```

## Boas Práticas

::: tip Validação
Sempre valide se o produto existe antes de adicionar ao carrinho.
:::

::: tip Confirmação
Confirme com o cliente antes de finalizar pedidos.
:::

::: tip Erros
Configure tratamento de erros para estoque indisponível.
:::

## Próximos Passos

- [Sistema POS](/guide/pos/)
- [Nó: Atualizar Cliente](/guide/flows/nodes/update-customer)

