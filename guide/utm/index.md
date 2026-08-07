# UTM — Connections / Meta Lead Ads

Gerencie conexões Meta, páginas, contas de anúncios, Instant Forms, pixels e atribuição de leads/customers por anúncio.

::: tip Acesso
Menu → **UTM**. Requer módulo `utm` habilitado.
:::

## Visão geral

O fluxo ativo do módulo é o hub **Connections** (Meta Lead Ads e futuros provedores).

| Área | Função |
|------|--------|
| **Connections** | Conectar a Meta e listar hubs |
| **Páginas** | Páginas Facebook da conexão |
| **Contas de anúncios** | Ad Accounts vinculadas à página |
| **Campanhas / conjuntos / anúncios** | Sync da Meta (somente leitura operacional) |
| **Instant Forms** | Sync e mapeamento de campos + ações |
| **Pixels** | Sync e token CAPI na conta de anúncios |
| **Leads / customers por anúncio** | Listas paginadas a partir de cada ad |

::: info UTM clássico
Telas antigas de campanhas manuais, forms de site, WhatsApp trackeado e analytics clássico foram descontinuadas no app. O caminho suportado é o hub Connections.
:::

## Conectar a Meta

1. Abra **UTM**
2. Crie ou abra uma **conexão** Meta
3. Autorize as permissões pedidas (páginas, ads, leads)
4. Selecione as **páginas** e **contas de anúncios** que farão parte do hub

## Navegar até um anúncio

1. Connections → **Página**
2. Abra uma **conta de anúncios**
3. Sincronize **campanhas** quando necessário
4. Abra a campanha → **conjunto (ad set)** → lista de **anúncios**

Na lista de anúncios:

- **Detalhes** — criativo, IDs Meta e status
- **Ver leads** — leads atribuídos àquele anúncio
- **Ver customers** — customers com o mesmo anúncio

## Atribuição por anúncio

Leads Meta são atribuídos ao **anúncio** (ID local + ID Meta), não à campanha.

- Instant Forms **não** escolhem campanha/ad na configuração
- O anúncio chega no próprio lead da Meta
- Customers podem herdar `utm_campaign_ad_id` a partir dessa atribuição

## Instant Forms

1. Na **página**, abra a aba **Forms**
2. Sincronize os Instant Forms da Meta
3. Clique no form para mapear:
   - campos do formulário → campos do Interflow
   - ações (tags, estágio do funil, etc.)
4. Salve o mapeamento

Não é necessário (nem possível) vincular o form a uma campanha: a atribuição vem do anúncio do lead.

## Pixels (CAPI)

1. Abra a **conta de anúncios**
2. Sincronize os **pixels** da Meta
3. Informe o **token CAPI** do pixel usado para eventos de conversão

Pixels ficam no nível da conta (não da campanha nem do conjunto).

## Integração com CRM

Combine atribuição por anúncio com [funis](/guide/crm/funnels) e [clientes](/guide/crm/customers): tags e estágios podem ser aplicados pelas ações do Instant Form no momento do lead.

## Relacionados

- [Funis CRM](/guide/crm/funnels)
- [Clientes](/guide/crm/customers)
- [Changelog v2026.8.1](/changelog/2026/08/2026.8.1)
