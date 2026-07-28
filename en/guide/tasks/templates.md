# Task project templates

When creating a project in **Tasks**, pick a **board template** with ready-made columns — and, when it makes sense, with automation rules already configured.

> Related: [Overview](/en/guide/tasks/) · [Automations](/en/guide/tasks/project-automations) · [Changelog v2026.7.19](/en/changelog/2026/07/2026.7.19)

## What it is for

- Start a board that matches how your team works
- Avoid building columns (and rules) from scratch every time
- Keep status or priority consistent with the column when the template includes automations

## How to use

1. In **Tasks**, click **Add project** (or **Create first project**)
2. Enter name and description → **Continue**
3. In **Configure stages**, choose the **board template**
4. Adjust column names and colors if needed → **Create**

The template’s **first column** becomes the project’s **default stage** (editable later in **Edit project**).

## Available templates

| Template | Columns | Initial automations |
|----------|---------|---------------------|
| **Free** | Backlog (you choose how many columns, 1–10) | None — you build the flow from scratch |
| **By status** | To start · In development · Done | Syncs status ↔ column (both ways) |
| **By priority** | Low · Medium · High | Syncs priority ↔ column (both ways) |
| **Simple sprint** | Backlog · In progress · In review · Done | Syncs “Completed” ↔ Done column |

### Free

Best when the team has its own flow. Only **Backlog** comes ready; add more columns during creation or later on the board (**Add stage**).

### By status

Best when the team thinks in **to start → in development → done**. **Start** or **Complete** on the card can move the column — and dragging to a column can update status. Rule details: [Automations](/en/guide/tasks/project-automations).

### By priority

Organize the board by urgency. Moving a card between **Low**, **Medium**, and **High** can adjust task priority (and the other way around).

### Simple sprint

Short delivery flow with backlog, in progress, review, and done. The starter automation links **Completed** status to the **Done** column.

## Default stage

After creating the project, in **Edit project** you set the **default stage when creating a task**. That value is pre-selected in the new-task form (and when you create from a column, that column is already selected).

## After creation

- Rename or recolor stages on the board
- Add or remove columns (based on your project role)
- Review or turn off template automations under **Automations**
- Changing “template mindset” after creation is manual: adjust columns and rules as the team needs

## Tips

- If the question is “how do we work with status?”, start with **By status**
- If the board is only visual organization without sync, use **Free**
- Prefer adjusting the template after create over changing everything ad hoc every day

## Next steps

- [Project automations](/en/guide/tasks/project-automations)
- [Tasks overview](/en/guide/tasks/)
