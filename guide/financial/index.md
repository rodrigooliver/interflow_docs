# Módulo Financeiro

Controle de receitas, despesas, caixas, categorias e formas de pagamento da operação.

::: tip Acesso
Menu lateral → **Financeiro**. O módulo precisa estar habilitado no plano/organização.
:::

## Visão geral

| Área | Onde | Função |
|------|------|--------|
| **Visão geral** | Financeiro | A receber, a pagar e saldo dos caixas com acesso |
| **A receber / A pagar** | Menu do módulo | Obrigações em aberto, vencidas e a vencer |
| **Lançamentos** | Menu do módulo | Extrato do que já foi pago ou recebido, inclusive transferências |
| **Caixas** | Menu do módulo | Contas e operadores, com permissão por pessoa |
| **Categorias** | Menu do módulo | Receita e despesa, com subcategorias |
| **Centros de custo** | Menu do módulo | Área responsável pela despesa |
| **Formas de pagamento** | Menu do módulo | Crédito, taxa, parcelas e chave de integração |
| **Relatórios** | Menu do módulo | Fluxo de caixa, categorias, centros de custo, aging e por caixa |
| **Importar extrato** | Em Lançamentos | CSV ou OFX, linha a linha, antes de gravar |
| **Conciliação** | Em Lançamentos | Trava o que já foi conferido com o banco |

O pagador ou recebedor de uma obrigação é um **cliente** do CRM. Não há tela de clientes dentro do menu financeiro.

::: info
**Cobrança** (contratos e Asaas) é outro módulo — veja [Cobrança](/guide/billing/).
:::

## Dashboard

1. Abra **Financeiro**
2. Veja **a receber** e **a pagar** até o fim do mês, só nos caixas com acesso, e o **saldo em caixa**
3. O cartão mostra a quantidade e, quando houver, quantos estão atrasados
4. Clique em **A receber** ou **A pagar** para abrir a lista. Clique em um caixa para abrir o extrato dele
5. Use **Nova conta a receber** ou **Nova conta a pagar** para criar uma obrigação

Sem caixa vinculado, o uso fica bloqueado. Quem é admin ou dono da organização pode criar o primeiro caixa nessa tela. Os demais pedem a um admin para ser incluído como operador.

## A receber e a pagar

**A receber** lista receitas em aberto. **A pagar** lista despesas em aberto. As duas telas separam **vencidos** (vencimento no passado) de **a vencer**, com totais distintos e o **total** no meio.

1. Abra **Financeiro → A receber** ou **A pagar**
2. Use **Nova conta a receber** ou **Nova conta a pagar** (atalho `N`)
3. Preencha descrição, valor, categoria e vencimento
4. Opcionais: centro de custo (só em despesa), forma de pagamento, caixa, pagador ou recebedor, observações, dados de pagamento e anexos
5. Salve

Dá para ver **todos os caixas** ou um caixa só. A busca é pela descrição.

Filtros rápidos: **hoje**, **até hoje**, **até amanhã**, **até 7 dias**, **até o fim do mês**, **somente este mês** e **mês que vem**. Em **Filtros** também há categoria, centro de custo e intervalo de vencimento. Os totais acompanham o filtro, e o clique no atalho mostra carregamento.

Uma obrigação atrasada entra em **Vencidos** pela data, mesmo se o status ainda estiver pendente.

No menu da linha: visualizar, editar, duplicar, lançar pagamento ou recebimento e excluir.

### Status

| Status | Significado |
|--------|-------------|
| Pendente | Ainda não lançada |
| Pago / Recebido | Já lançada no extrato |
| Vencido | Passou do vencimento sem lançamento |
| Cancelado | Encerrada sem lançamento |

## Lançamentos

Em **Financeiro → Lançamentos** fica o extrato de um caixa: o que já foi pago ou recebido. O seletor de caixa é obrigatório nesta tela.

O topo mostra **entradas**, **saídas**, **líquido** e o **saldo** do caixa. Filtros rápidos: **mês atual** e **mês passado**. Em **Filtros**: categoria, centro de custo e intervalo de pagamento. A busca é pela descrição.

O valor exibido é o do lançamento. Se for diferente do original da obrigação, o original também aparece. Quem lançou e quando fica no detalhe.

Atalhos: `R` nova receita já lançada, `D` nova despesa já lançada, `T` transferência.

Para **mover saldo entre caixas**, use **Transferência** — veja [Transferência entre caixas](#transferencia-entre-caixas).

Outras ações desta tela:

- [Importar extrato](/guide/financial/import)
- [Lançar múltiplos e baixar pendentes](/guide/financial/grouping)
- [Conciliar](/guide/financial/reconciliation)

## Lançar pagamento

Para quitar uma obrigação, use **Lançar pagamento** ou **Lançar recebimento**.

1. Abra a obrigação em **A receber** ou **A pagar**
2. Escolha **Lançar pagamento** ou **Lançar recebimento**
3. Confira o **valor original** e, se precisar, altere o **valor pago** ou **valor recebido**
4. Ajuste a data, o caixa (entre os que você opera) e os dados de pagamento
5. Salve

O sistema guarda quem lançou e quando.

### Dados de pagamento

No formulário, em **Dados de pagamento**, dá para incluir:

| Tipo | Uso |
|------|-----|
| Código PIX | Copia e cola; gera QR Code para escanear no banco |
| Código de barras | Gera a imagem do código para escanear |
| Linha digitável | Boleto de 47 ou 48 dígitos, ou código de 44 dígitos |
| Dados bancários | Banco, agência, conta e favorecido |
| Outro | Campo com nome livre |

Depois de salvos, esses dados podem ser copiados, editados ou removidos.

### Anexos

No mesmo formulário, em **Anexos**, clique ou arraste arquivos. O limite é **50 MB** por arquivo. Em uma obrigação nova, o arquivo sobe ao salvar.

### Duplicar

No menu da linha, **Duplicar** abre uma nova obrigação com os dados da original. Não duplica transferência, lançamento agrupado nem item cancelado.

### Parcelas da forma de pagamento

Se a frequência for **única** e a forma de pagamento **permitir parcelamento**, o formulário pede o número de parcelas, até o máximo cadastrado na forma.

## Recorrência

Ao criar com frequência diferente de **única**, escolha o modo:

| Modo | O que acontece |
|------|----------------|
| **Indefinido** | Cria 12 parcelas. O agendamento diário mantém sempre 12 à frente |
| **Quantidade exata** | Cria só a quantidade informada (de 1 a 60) e não gera mais |

Frequências: diária, semanal, mensal, trimestral, semestral e anual.

Ao editar um item da série ainda não lançado, escolha:

- **Só esta** — altera apenas esta obrigação
- **Todas as próximas** — replica descrição, categoria e caixa nas ainda não lançadas
- **Aplicar valor** e **Aplicar dados de pagamento** — só se quiser que esses campos também mudem nas próximas
- **Incluir vencimento** — só se quiser deslocar as datas seguintes pelo mesmo intervalo

Lançamentos já feitos não entram nessa alteração.

Ao excluir um item da série, escolha **somente esta**, **desta em diante** ou **todos os pendentes**.

## Transferência entre caixas

Move saldo de um caixa para outro **na hora**. Não é conta a pagar nem a receber: não entra no resultado como receita ou despesa. Só altera o saldo dos caixas e aparece no extrato.

1. Abra **Financeiro → Lançamentos**
2. Clique em **Transferência** (atalho `T`)
3. Escolha o caixa de origem, o de destino, valor, descrição e data
4. Salve

O extrato mostra os dois lados com o selo **Transferência** e o outro caixa. Editar valor, descrição ou data atualiza o par. Excluir um lado remove os dois.

É preciso ser operador com permissão de **criar** nos dois caixas. Não há recorrência nem pendência: o movimento já nasce lançado. Transferência não entra no aviso de vencimento, não baixa pendentes e fica de fora dos relatórios de resultado.

## Aviso de vencimento

Todo dia, às **8h** (horário de Brasília), os operadores do caixa com permissão de ver (ou admin do caixa) recebem um push das obrigações que **vencem hoje**. Um aviso por pessoa por caixa, sem repetir no mesmo dia.

O toque abre **A pagar** ou **A receber** já no caixa e no filtro **hoje**. Transferências entre caixas não geram aviso. É preciso manter as notificações do app ativas.

> Changelog: [v2026.9.11](/changelog/2026/09/2026.9.11)

## Caixas

1. Abra **Financeiro → Caixas**
2. Crie um caixa com nome, descrição e se está ativo
3. Em **Gerenciar operadores**, adicione pessoas e defina o que cada uma pode fazer naquele caixa

Permissões do operador:

| Permissão | Efeito |
|-----------|--------|
| Administrador | Acesso completo naquele caixa, inclusive relatórios |
| Pode visualizar | Vê lançamentos e entra no aviso de vencimento |
| Pode ver relatórios | Abre **Relatórios** deste caixa |
| Pode criar | Inclui obrigações, lançamentos e transferência |
| Pode editar qualquer registro / só os próprios | Altera o que já existe |
| Pode excluir qualquer registro / só os próprios | Remove o que já existe |

Não dá para remover o único operador do caixa. Cada pessoa só enxerga os caixas em que é operador.

**Data de conciliação** no caixa trava inclusão, edição e exclusão de lançamentos com pagamento até essa data. Dá para conciliar um a um sem preencher essa data. O passo a passo está em [Conciliação](/guide/financial/reconciliation).

## Categorias

Em **Financeiro → Categorias**:

- Separe **receita** e **despesa**
- Use categoria pai para criar subcategorias
- Defina uma cor
- Não é possível excluir uma categoria que ainda tem subcategorias

**Gerar com IA** pede uma descrição do negócio, sugere categorias de receita e despesa e só grava depois da revisão.

## Formas de pagamento

Em **Financeiro → Formas de pagamento**, cadastre:

- Nome e descrição
- Chave opcional, usada em integrações
- Se é pagamento a crédito e se exige confirmação
- Se permite parcelamento e o máximo de parcelas
- Taxa percentual (por exemplo, taxa de cartão)
- Se está ativo

A forma escolhida na obrigação ou no lançamento usa essas regras.

## Centros de custo

Use **Financeiro → Centros de custo** para acompanhar onde os recursos da empresa são consumidos.

1. Cadastre um código único, nome e descrição opcional
2. Ao criar ou editar uma **despesa**, escolha o centro de custo
3. Em **A receber**, **A pagar** ou **Lançamentos**, filtre por centro de custo
4. Inative centros que não são mais usados; os lançamentos anteriores permanecem vinculados

O centro de custo é opcional e exclusivo para despesas. Categorias indicam **o tipo do gasto**; centros de custo indicam **qual área é responsável por ele**.

## Relatórios

Em **Financeiro → Relatórios** você vê só os caixas em que é **admin** ou tem **Pode ver relatórios**:

1. Escolha o período e, se quiser, um caixa (ou todos os que você acessa)
2. **Fluxo de caixa** — receitas e despesas realizadas e em aberto no tempo (transferências entre caixas ficam de fora)
3. **Por categoria** — realizado e em aberto, com a categoria pai
4. **Por centro de custo** — despesas realizadas, em aberto e totais por área
5. **A receber / a pagar** — aging na data final do período (em dia, 1–30, 31–60, 61–90, 90+)
6. **Por caixa** — comparativo de saldo e movimento

Quem tem permissão de exportar relatórios baixa a aba atual em CSV. Um lançamento que só agrupa várias contas não entra no relatório: entram as contas originais, com categoria e centro de custo. Veja [Lançamentos agrupados](/guide/financial/grouping).

## Permissões

- Módulo `financial` habilitado na organização
- Permissões do grupo, quando existirem: ver todas as transações, aprovar e exportar relatórios
- Permissões por caixa para cada operador

## Guias deste módulo

- [Importar extrato](/guide/financial/import)
- [Conciliação](/guide/financial/reconciliation)
- [Lançar múltiplos e baixar pendentes](/guide/financial/grouping)

## Próximos passos

- [Cobrança (contratos e Asaas)](/guide/billing/)
- [PDV](/guide/pos/)
- [Relatórios de atendimento](/guide/reports/)
