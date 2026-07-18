# Funis de Venda (CRM Kanban)

Acompanhe clientes em pipelines visuais, com estágios personalizados e automações ao mudar de estágio.

::: tip Acesso
Menu → **CRM** → **Funis**.
:::

## Visão geral

- **Múltiplos funis** para processos diferentes (vendas, suporte, pipeline interno)
- **Kanban** com cartões de clientes por estágio
- **Automação** via fluxo do tipo `crm_stage_change` ao entrar em um estágio
- Filtros **Somente meus** e **Ocultar finalizados**

## Criar um funil

1. Abra **CRM → Funis**
2. Clique em **Novo funil**
3. Defina nome e modo de exibição (`sales`, `pipeline`, `support` ou `hidden`)
4. Salve — estágios padrão costumam ser **Novo**, **Em progresso** e **Concluído**

## Estágios

Em cada funil você pode:

- Renomear, reordenar e adicionar estágios
- Vincular um **fluxo** (`flow_start_id`) do tipo **mudança de estágio CRM**
- Definir papel no gráfico (`chart_role`) e evento UTM, quando aplicável
- Transferir clientes entre estágios/funis

::: warning Não é possível excluir
Funis ou estágios que ainda possuem clientes não podem ser apagados. Mova os clientes antes.
:::

## Usar o Kanban

1. Abra o funil desejado
2. Arraste o card do cliente entre colunas para mudar o estágio
3. Use a busca do topo para achar um cliente em qualquer etapa
4. Ative **Somente meus** se for agente com visão limitada
5. Use **Ocultar finalizados** para esconder quem já encerrou a última conversa

### Preço de venda em massa

Owners/admins/managers podem atualizar `sale_price` em lote nos cards selecionados (quando a ação estiver disponível na UI).

## Automação por estágio

1. Crie um fluxo do tipo **Mudança de estágio CRM** (`crm_stage_change`)
2. No estágio do funil, selecione esse fluxo em `flow_start_id`
3. Ao mover um cliente para o estágio, o fluxo inicia

::: danger Evite loops
Fluxos de mudança de estágio **não devem** usar nós de input/interativos nem atualizar o próprio funil de forma que reentrarem no mesmo estágio.
:::

## Relacionados

- [Gerenciamento de clientes](/guide/crm/customers)
- [Fluxos silenciosos da agenda](/guide/schedule/silent-flows)
- [UTM / campanhas](/guide/utm/)
