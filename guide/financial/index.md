# Módulo Financeiro

Controle de receitas, despesas, caixas, categorias e métodos de pagamento da operação.

::: tip Acesso
Menu lateral → **Financeiro**. O módulo precisa estar habilitado no plano/organização.
:::

## Visão geral

| Área | Função |
|------|--------|
| **Dashboard** | Saldo, resumo e atalhos para nova receita/despesa |
| **Transações** | Listar, filtrar, criar e marcar como pago/recebido |
| **Caixas** | Contas de caixa e operadores |
| **Categorias** | Categorias de receita e despesa |
| **Métodos de pagamento** | Formas de pagamento (crédito, taxas, parcelas) |
| **Relatórios** | Fluxo de caixa, categorias, a receber/pagar e por caixa |

::: info
**Cobrança** (contratos/Asaas) é um módulo separado — veja [Cobrança](/guide/billing/).
:::

## Dashboard

1. Abra **Financeiro**
2. Veja o resumo de receitas/despesas e os caixas aos quais você tem acesso
3. Use **Nova receita** ou **Nova despesa** para lançamentos rápidos

Sem caixa vinculado ao seu usuário, o uso pode ficar bloqueado — peça a um admin para adicioná-lo como operador.

## Transações

### Criar uma transação

1. Vá em **Financeiro → Transações** (ou use o atalho no dashboard)
2. Escolha **Receita** ou **Despesa**
3. Preencha os campos obrigatórios:
 - Descrição
 - Valor
 - Categoria
 - Data de vencimento
4. Opcionais: método de pagamento, caixa, cliente, notas, frequência e parcelas
5. Salve

### Status

| Status | Significado |
|--------|-------------|
| Pendente | Ainda não quitada |
| Pago / Recebido | Quitada |
| Vencido | Passou do vencimento sem quitação |
| Cancelado | Encerrada manualmente |

### Ações comuns

- **Marcar como pago/recebido**
- Editar ou excluir (conforme permissão)
- Filtrar por período, tipo, status, caixa ou categoria

## Caixas

1. Abra **Financeiro → Caixas**
2. Crie um caixa (nome e configurações)
3. Adicione **operadores** e defina permissões por caixa (visualizar, criar, editar, excluir, admin)

Cada usuário só enxerga os caixas em que é operador (salvo permissões especiais).

## Categorias

Em **Financeiro → Categorias**:

- Organize em **receita** ou **despesa**
- Use subcategorias para detalhar
- Opcionalmente gere sugestões com IA (quando disponível)

## Métodos de pagamento

Cadastre nomes/chaves, se aceita crédito, parcelas e taxa percentual. Use esses métodos ao lançar transações.

## Relatórios

Em **Financeiro → Relatórios** você vê só os caixas em que é **admin** ou tem a permissão **Pode ver relatórios**:

1. Escolha o período e, se quiser, um caixa (ou todos os que você acessa)
2. **Fluxo de caixa** — receitas/despesas realizadas e previstas no tempo
3. **Por categoria** — DRE gerencial (realizado e em aberto)
4. **A receber / a pagar** — aging (em dia, 1–30, 31–60, 61–90, 90+)
5. **Por caixa** — comparativo de saldo e movimento

Quem tem a permissão de exportar relatórios pode baixar a aba atual em CSV.

## Permissões

- Módulo `financial` habilitado na organização
- Permissões especiais (conforme grupo): acessar todas as transações, aprovar, exportar relatórios
- Permissões por caixa para operadores (incluindo **Pode ver relatórios**)

## Próximos passos

- [Cobrança (contratos e Asaas)](/guide/billing/)
- [PDV](/guide/pos/)
- [Relatórios de atendimento](/guide/reports/)
