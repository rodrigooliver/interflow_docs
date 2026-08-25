# Task templates

Reusable drafts **per project**. Creating a task from a template opens the form already filled in — you review and save.

> Related: [Overview](/en/guide/tasks/) · [Automations](/en/guide/tasks/project-automations) · [Changelog v2026.8.11](/en/changelog/2026/08/2026.8.11)

::: tip Do not confuse
[Board templates](/en/guide/tasks/templates) define **columns** when you create the project. **Task templates** define the **content** of a repeating task.
:::

## What it is for

- Standardize onboarding, follow-up, post-sale, or any routine that always needs the same fields
- Avoid typing title, checklist, and assignees again
- Set due date as **days from creation** (not a fixed calendar date)

## Where to find it

| Action | Path |
|--------|------|
| Manage templates | Open project → project menu → **Templates** |
| Create a task from a template | **Add task** → arrow → pick the draft |
| Task without a draft | **Add task** (or **Blank task** in the menu) |

The arrow next to **Add task** appears only when the project already has at least one template.

## Create or edit a template

1. Open the project in **Tasks**
2. Project menu → **Templates**
3. Click **New template** (or the pencil to edit)
4. Fill in the draft and save

To delete, use the trash icon in the list and confirm.

### What the draft stores

| Field | Behavior |
|-------|----------|
| **Title** | Required; becomes the new task title |
| **Description** | Starting text |
| **Due in days** | 0 = today; 1, 2, 7, or another number. Empty = no due date |
| **Time** | Optional. If there are days and no time, the creation time is used |
| **Stage** | Board column, or the project default stage |
| **Priority** and **Status** | Initial values on the task |
| **Assignees** | Project members |
| **Labels** | Organization labels |
| **Checklist** | Items start unchecked on the new task |

Due shortcuts: **Today**, **1 day**, **2 days**, **7 days**, or **No due date**.

## Use it when creating a task

1. In the project, click the arrow next to **Add task**
2. Pick the template — the form opens pre-filled
3. Adjust what is specific to that occurrence (customer, date, text)
4. Save

The absolute due date is calculated **when you create the task**. A template with “3 days” created on Monday is due Thursday; if you create it on Friday, it is due the following Monday.

## Automations and macros

The same template is available elsewhere in the product:

| Where | How |
|-------|-----|
| [Project automations](/en/guide/tasks/project-automations) | In the **Create task** action, pick the template. The title still accepts variables (title, description, customer name, status, priority). You can also use the template as a **condition**. |
| [Customer macros](/en/guide/crm/customer-macros) | In the **Create task** action, pick the project and a template from that project. |

::: tip Variables in automation
Even with a template, you can build the title with tokens (for example the customer name). Click the variable chips to copy.
:::

## Known limitations

- Templates belong to **one project**. There is no draft shared across projects
- Due date is **relative** (days from creation), not a fixed date
- The picker arrow appears only after the project has at least one template

## Next steps

- [Tasks overview](/en/guide/tasks/)
- [Board templates](/en/guide/tasks/templates)
- [Project automations](/en/guide/tasks/project-automations)
- [Customer macros](/en/guide/crm/customer-macros)
- [Changelog v2026.8.11](/en/changelog/2026/08/2026.8.11)
