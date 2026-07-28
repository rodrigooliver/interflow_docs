# Task project automations

Set up rules so the project Kanban board reacts on its own to task changes — and get started faster with **templates** when creating a project.

> Related: [Changelog v2026.7.19](/en/changelog/2026/07/2026.7.19) · [My Tasks](/en/guide/tasks)

## What it is

Each **task project** can have an ordered list of **automations**. When a task is **created** or **updated**, Interflow evaluates the active rules and, if conditions match, applies the configured actions (move column, change status, archive, etc.).

Status and archive actions from automation write **history** and send **notifications** to project members with notifications enabled — just like manual actions.

## Where to find it

| Action | Path |
|--------|------|
| Create project with template | **Tasks** → new project → choose template |
| Manage automations | Open project → project menu → **Automations** |
| Set default stage | Edit project → **default stage** |

## Templates on create

| Template | Columns | Automations |
|----------|---------|-------------|
| **Free** | Backlog | None |
| **By status** | To start · In development · Done | Status ↔ column (both ways) |
| **By priority** | Low · Medium · High | Priority ↔ column (both ways) |
| **Simple sprint** | Backlog · In progress · In review · Done | Completed ↔ Done column |

On create, the template’s **first column** becomes the project’s **default stage** (editable later).

## Anatomy of a rule

1. **Event** — Task created or Task updated
2. **Conditions** — what must be true (and/or), with optional **before** and **after** values on update
3. **Actions** — what the system should do
4. **Order** — rules are evaluated top to bottom
5. **On / off** — disable without deleting

### Common condition fields

- Status, stage (column), priority
- Archived / not archived
- Due date (including overdue)

### Common actions

- Set status or stage
- Set priority
- Archive / unarchive
- Clear due date
- Create task (follow-up)
- Start silent flow

## Practical examples

### Status moves the column

When status becomes **In progress** and the task is not yet in the matching column, automation moves the card to **In development**.

### Dragging the column updates status

When the stage becomes **Done** and status is not yet **Completed**, automation marks the task completed (with history and notification).

### Avoid loops

Template rules only fire if the “other side” is not already at the target value. Starting a task will not keep pushing the column if the card is already in the right place.

## Default stage

When creating a task in the project, the pre-selected column is the **default stage**. Use it so new tasks land in the right backlog or intake column.

## Tips

- Start from a template and adjust only what is specific to your team
- Prefer a few clear rules over many overlapping ones
- Test with one task: change status and check that the column follows (and the other way around)
- Members with notifications enabled receive alerts for automation changes

## Known limitations

- Bulk actions (e.g. archive many completed tasks at once) may behave differently from card-by-card actions
- Not every advanced action type appears in the UI; the main set covers day-to-day Kanban flow

## Next steps

- [My Tasks](/en/guide/tasks)
- [Changelog v2026.7.19](/en/changelog/2026/07/2026.7.19)
