# Task project automations

Set up rules so the project board reacts on its own to task changes.

> Related: [Overview](/en/guide/tasks/) · [Board templates](/en/guide/tasks/templates) · [Task templates](/en/guide/tasks/task-templates) · [Changelog v2026.8.11](/en/changelog/2026/08/2026.8.11)

## What it is

Each **task project** can have an ordered list of **automations**. When a task is **created** or **updated**, Interflow evaluates the active rules and, if conditions match, applies the actions (move column, change status, archive, create a follow-up, etc.).

Status and archive actions from automation write **history** and send **notifications** to project members with notifications enabled — just like manual start, complete, or cancel.

::: tip Templates
Some [templates](/en/guide/tasks/templates) already create ready-made rules (by status, priority, or sprint). You can edit them or add new ones anytime.
:::

## Where to find it

| Action | Path |
|--------|------|
| Manage automations | Open project → project menu → **Automations** |
| Set default stage | Project menu → **Edit project** → default stage |

## Anatomy of a rule

In the **Project automations** modal:

1. **Event** — **Task created** or **Task updated**
2. **Conditions** — what must be true (**AND** / **OR**), with optional **before** and **after** values on update
3. **Actions** — what the system should do
4. **Order** — rules are evaluated top to bottom
5. **On / off** — disable without deleting

### Condition fields

- Status, stage (column), priority, [template](/en/guide/tasks/task-templates)
- Archived / not archived
- Due date (including overdue)

### Available actions

- Set status · Move stage · Set priority
- Archive · Unarchive · Clear due date
- **Create task** (follow-up) — optional [task template](/en/guide/tasks/task-templates), title with variables (title, description, customer name, status, priority), customer (same / none), due in X days
- **Start silent flow** — task-automation type flows

## Practical examples

### Status moves the column

When status becomes **In progress** and the task is not yet in the matching column, automation moves the card to **In development**.

### Dragging the column updates status

When the stage becomes **Done** and status is not yet **Completed**, automation marks the task completed (with history and notification).

### Avoid loops

Template rules only fire if the “other side” is not already at the target value. Starting a task will not keep pushing the column if the card is already in the right place.

## Tips

- Start from a [template](/en/guide/tasks/templates) and adjust only what is specific to your team
- Prefer a few clear rules over many overlapping ones
- Test with one task: change status and check that the column follows (and the other way around)
- Members with notifications enabled receive alerts for automation changes

## Known limitations

- Bulk actions (e.g. archive many completed tasks at once) may behave differently from card-by-card actions
- The on-screen action set covers day-to-day board flow; some advanced options may not appear in the selector

## Next steps

- [Board templates](/en/guide/tasks/templates)
- [Task templates](/en/guide/tasks/task-templates)
- [Tasks overview](/en/guide/tasks/)
- [Changelog v2026.8.11](/en/changelog/2026/08/2026.8.11)
