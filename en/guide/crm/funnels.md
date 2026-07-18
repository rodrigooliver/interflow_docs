# Sales Funnels (CRM Kanban)

Track customers in visual pipelines with custom stages and stage-change automations.

::: tip Access
Sidebar → **CRM** → **Funnels**. .
:::

## Create a funnel

1. Open **CRM → Funnels**
2. **New funnel** → name + display mode (`sales`, `pipeline`, `support`, `hidden`)
3. Default stages are usually New / In progress / Done

## Stages

- Rename, reorder, add stages
- Attach a **`crm_stage_change`** flow via `flow_start_id`
- Optional chart role / UTM event
- Move customers between stages/funnels

::: warning
You cannot delete funnels/stages that still have customers. Move them first.
:::

## Kanban usage

Drag cards between columns · Search across the funnel · **Only mine** · **Hide finished**

### Stage automation

1. Create a flow typed **CRM stage change**
2. Select it on the stage
3. Moving a customer into that stage starts the flow

::: danger Avoid loops
Stage-change flows must not use interactive input nodes or update the funnel in a way that re-enters the same stage.
:::

## Related

- [Customers](/en/guide/crm/customers)
- [UTM](/en/guide/utm/)
