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
- Require fields and tasks before a lead can enter the stage

## Entry requirements

On the stage editor, the **Requirements** tab sets what the customer needs in order to enter.

- Fixed fields: name, email, tax ID, address, sale amount, and ad source
- Organization custom fields
- Tasks from a template: created, started, or in a task-board column

When you drag the card, name, email, tax ID, amount, and ad source are checked before the request is sent. Address, custom fields, and tasks are checked when the move is saved. A missing field opens a form. A missing task names the template. Leaving the funnel and reordering in the same column skip this rule. In a bulk move, customers who do not qualify stay in the source stage.

> Changelog: [v2026.10.21](/en/changelog/2026/10/2026.10.21)

::: warning
You cannot delete funnels/stages that still have customers. Move them first.
:::

## Kanban usage

Drag cards between columns · Search across the funnel · **Only mine** · **Hide finished**

### Empty or move customers from a stage

Owners, admins, and managers can clear a column without dragging cards one by one.

1. Open the funnel and click the stage **three dots**
2. Choose **Move or remove customers**
3. **Remove from funnel** — customers leave the funnel
4. **Move to another stage** — pick the destination funnel and stage (any funnel in the organization)
5. Confirm — applies to **all** customers in that stage and cannot be undone

This action **does not** start stage-change flows. Drag a card when you want the automation to run.

> Changelog: [v2026.8.12](/en/changelog/2026/08/2026.8.12)

### Stage automation

1. Create a flow typed **CRM stage change**
2. Select it on the stage
3. Moving a customer into that stage starts the flow

::: danger Avoid loops
Stage-change flows must not use interactive input nodes or update the funnel in a way that re-enters the same stage.
:::

## Related

- [Funnel scan](/en/guide/crm/funnel-scan)
- [Customers](/en/guide/crm/customers)
- [UTM](/en/guide/utm/)
