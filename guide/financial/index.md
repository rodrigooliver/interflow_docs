# Módulo Financeiro

Controle de receitas, despesas, caixas, categorias e métodos de pagamento da operação.

::: tip Acesso
Menu lateral → **Financeiro**. O módulo precisa estar habilitado no plano/organização.
:::

## Visão geral

| Área | Função |
|------|--------|
| **Dashboard** | Saldo, resumo e atalhos para nova receita/despesa |
| **A receber / A pagar** | Obrigações em aberto, vencidos e a vencer |
| **Lançamentos** | Extrato do que já foi pago ou recebido |
| **Caixas** | Contas de caixa e operadores |
| **Categorias** | Categorias de receita e despesa |
| **Centros de custo** | Áreas responsáveis pelas despesas |
| **Métodos de pagamento** | Formas de pagamento (crédito, taxas, parcelas) |
| **Relatórios** | Fluxo de caixa, categorias, centros de custo, a receber/pagar e por caixa |

::: info
**Cobrança** (contratos/Asaas) é um módulo separado — veja [Cobrança](/guide/billing/).
:::

## Dashboard

1. Abra **Financeiro**
2. Veja o resumo de receitas/despesas e os caixas aos quais você tem acesso
3. Use **Nova receita** ou **Nova despesa** para lançamentos rápidos

Sem caixa vinculado ao seu usuário, o uso pode ficar bloqueado — peça a um admin para adicioná-lo como operador.

## A receber e a pagar

**A receber** lista receitas em aberto. **A pagar** lista despesas em aberto. As duas telas separam **vencidos** (vencimento no passado) de **a vencer**, com totais distintos e o **total** no meio.

1. Abra **Financeiro → A receber** ou **A pagar**
2. Use **Nova receita** ou **Nova despesa**
3. Preencha descrição, valor, categoria e vencimento
4. Opcionais: centro de custo (em despesas), método, caixa, cliente, notas, dados de pagamento (PIX, código de barras ou conta) e recorrência
5. Salve

Filtros rápidos no topo: **hoje**, **até hoje**, **até amanhã**, **até 7 dias**, **até o fim do mês** e **somente este mês**. Os totais de vencidos e a vencer acompanham o filtro.

Uma obrigação atrasada entra em **Vencidos** pela data, mesmo se o status ainda estiver pendente.

### Status

| Status | Significado |
|--------|-------------|
| Pendente | Ainda não lançada |
| Pago / Recebido | Já lançada no extrato |
| Vencido | Passou do vencimento sem lançamento |
| Cancelado | Encerrada manualmente |

## Lançamentos

Em **Financeiro → Lançamentos** você vê o extrato: o que já foi pago ou recebido. Filtros rápidos: **mês atual** e **mês passado**. O valor exibido é o valor do lançamento; se for diferente do original da obrigação, o original também aparece.

## Lançar pagamento

Para quitar uma obrigação, use **Lançar pagamento** ou **Lançar recebimento** — não basta marcar como pago.

1. Abra a obrigação em **A receber** ou **A pagar**
2. Escolha **Lançar pagamento** ou **Lançar recebimento**
3. Confira o **valor original** e, se precisar, altere o **valor do lançamento**
4. Ajuste data, caixa (entre os que você opera) e dados de pagamento
5. Salve

O sistema guarda quem lançou e quando. PIX, código de barras ou dados bancários podem ser copiados, editados ou removidos depois de salvos.

## Recorrência

Ao criar com frequência diferente de única, escolha **quantas ocorrências gerar** no início (até 12). O sistema mantém vencimentos futuros na fila, independente de já ter lançado alguma.

Ao editar um item da série, escolha:

- **Só esta** — altera apenas a obrigação aberta
- **Todas as próximas** — replica descrição, categoria e caixa nas ainda não lançadas
- **Aplicar valor** e **Aplicar dados de pagamento** — só se quiser que esses campos também mudem nas próximas
- **Incluir vencimento** — só se quiser deslocar as datas seguintes pelo mesmo intervalo

Lançamentos já feitos não entram nessa alteração.

> Changelog: [v2026.9.10](/changelog/2026/09/2026.9.10)

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

## Centros de custo

Use **Financeiro → Centros de custo** para acompanhar onde os recursos da empresa são consumidos.

1. Cadastre um código único, nome e descrição opcional
2. Ao criar ou editar uma **despesa**, escolha o centro de custo
3. Em **A receber**, **A pagar** ou **Lançamentos**, filtre por centro de custo
4. Inative centros que não são mais usados; os lançamentos anteriores permanecem vinculados

O centro de custo é opcional e exclusivo para despesas. Categorias indicam **o tipo do gasto**; centros de custo indicam **qual área é responsável por ele**.

## Relatórios

Em **Financeiro → Relatórios** você vê só os caixas em que é **admin** ou tem a permissão **Pode ver relatórios**:

1. Escolha o período e, se quiser, um caixa (ou todos os que você acessa)
2. **Fluxo de caixa** — receitas/despesas realizadas e previstas no tempo
3. **Por categoria** — DRE gerencial (realizado e em aberto)
4. **Por centro de custo** — despesas realizadas, em aberto e totais por área
5. **A receber / a pagar** — aging (em dia, 1–30, 31–60, 61–90, 90+)
6. **Por caixa** — comparativo de saldo e movimento

Quem tem a permissão de exportar relatórios pode baixar a aba atual em CSV.

## Permissões

- Módulo `financial` habilitado na organização
- Permissões especiais (conforme grupo): acessar todas as transações, aprovar, exportar relatórios
- Permissões por caixa para operadores (incluindo **Pode ver relatórios**)

## Próximos passos

- [Cobrança (contratos e Asaas)](/guide/billing/)
- [PDV](/guide/pos/)
- [Relatórios de atendimento](/guide/reports/)
