# Tasks

Organize team work in **projects** with a visual board (columns and cards), list, and calendar — and track what is assigned to you in **My Tasks**.

> Related: [Templates](/en/guide/tasks/templates) · [Automations](/en/guide/tasks/project-automations) · [Changelog v2026.7.19](/en/changelog/2026/07/2026.7.19)

## Overview

In Interflow, tasks live inside **projects**. Each project has:

- **Stages** (board columns) — for example To start, In development, and Done
- **Members** with roles (reader, editor, or administrator) and optional notifications
- **Labels**, history, and, if you want, **automations** that keep status and column aligned

Use the **Tasks** menu to open the last project, create new ones, or go to the unified view of your assignments.

::: tip Access
Main menu → **Tasks**. On mobile, the tasks shortcut opens **My Tasks**.
:::

## Getting started: create a project

1. In **Tasks**, click **Add project** (or **Create first project** if none exist yet)
2. Enter a **name** and optional **description** — you are added automatically as **administrator**
3. Next, choose a **board template** and adjust stage names/colors
4. Confirm with **Create** — the project board opens ready to use

The template’s **first column** becomes the **default stage** when creating tasks in that project (you can change it later in **Edit project**).

### Ready-made templates

| Template | Columns | Purpose |
|----------|---------|---------|
| **Free** | Backlog (you choose how many columns) | Build the flow from scratch, no rules |
| **By status** | To start · In development · Done | Board aligned with task status |
| **By priority** | Low · Medium · High | Organize by urgency |
| **Simple sprint** | Backlog · In progress · In review · Done | Short delivery flow |

**By status**, **By priority**, and **Simple sprint** include starter automations. Details: [Templates](/en/guide/tasks/templates) · [Automations](/en/guide/tasks/project-automations).

## Board, list, and calendar

With a project open, switch between:

| View | Use it to |
|------|-----------|
| **Board** | Columns = stages; cards = tasks; drag and drop between columns |
| **List** | Table with quick edit of status, priority, and due date |
| **Calendar** | Tasks by due date |

### On the board

- **Drag** a card to another column to change the stage
- In each column: **Add task** (that stage is pre-selected)
- **+** on the right: **Add stage** (name and color)
- Card with status **Pending**: **Start** → In progress
- Card **In progress**: **Complete** → marks as completed
- Also on the card: checklist, due date (highlighted if overdue), assignees, labels, and archive

::: tip Drag and status
With the **By status** template, dragging to **Done** can mark the task completed automatically — and Start/Complete on the card can move it to the right column. That comes from the project automations.
:::

### Project filters

In the project bar you can:

- Search by title or description
- Filter **Assigned to me**, **Overdue**, or **Show archived**
- Filter by **Priority** and **Status**
- Open **More filters** for advanced combinations
- **Archive completed** in bulk (with confirmation)

## Create and edit a task

1. Click **Add task** (or **+** on a column)
2. Fill in title, description, stage, priority, due date, assignees, labels, and optionally the **customer**
3. Save — the project default stage is used if you do not pick another

When editing, tabs include **Details**, **Subtasks**, **Comments**, **Attachments**, and **History**. If the task came from a conversation, use **View conversation**.

### Main fields

| Field | Options / use |
|-------|----------------|
| **Status** | Pending · In progress · Completed · Cancelled |
| **Priority** | Low · Medium · High |
| **Stage** | Board column in the project |
| **Assignees** | Project members |
| **Due date** | Date and time; highlighted when overdue |
| **Customer** | Links the task to the customer record |
| **Labels** | Extra organization; may bring a default checklist |
| **Checklist** | Items with progress on the card |

## Project members and permissions

In **Manage members** (project menu):

| Role | Can |
|------|-----|
| **Reader** | View the project and tasks, no editing |
| **Editor** | Create and edit tasks and stages |
| **Administrator** | Everything above + members, automations, and deleting the project |

Each member can have **notifications on or off**. With notifications on, they get alerts for creation, updates, and relevant changes (including those made by automation, such as start or complete).

## Project menu

In the project settings menu:

- **Edit project** — name, description, and **default stage when creating a task**
- **Manage members**
- **Automations** — board rules ([guide](/en/guide/tasks/project-automations)); templates on create: [Templates](/en/guide/tasks/templates)
- **Manage labels**
- **View project history**
- **Delete project**

## My Tasks

**All my tasks** brings together what is assigned to you across all projects, without switching projects.

::: tip Access
In a project: top bar → **All my tasks**. Use **View by project** to return to the board.
:::

### Views

- **List** — title, source project, status, priority, due date, and assignee
- **Calendar** — by due date

### Groupings (list)

| Grouping | Description |
|----------|-------------|
| **Stage** | Column flow (default) |
| **Project** | By source project |
| **Due date** | Overdue, Yesterday, Today, Tomorrow, This week, Next week, Future, No date |
| **Assignee** | By member |
| **Status** | Pending, In progress, Completed, Cancelled |
| **Priority** | High, Medium, Low |

Grouping choice is saved per organization.

### Sorting

Default (priority + due date), soonest or furthest due date, priority, title, creation date, or status.

### Quick edit in the list

Click the row’s **status**, **priority**, or **due date** to change it without opening the task. Due date shortcuts: **Today**, **Tomorrow**, **In 1 week**, custom date, or remove.

Status changes (start, complete, cancel) write history and notify project members, like board actions.

### Filters in My Tasks

Search by title, **Overdue**, **Archived**, priority, and status.

## Tasks from conversations

You can create a task **without leaving the customer conversation**, with or without AI. The conversation **customer** is suggested on the task.

### From the whole conversation

1. In the conversation, in the message field, click the list icon (**Create a task related to this chat**)
2. The new-task form opens already linked to that conversation
3. Click **Generate with AI** so AI builds title, description, priority, and subtasks from the conversation messages
4. (Optional) In **Additional context for AI**, add a focus or instruction — for example “prioritize urgency” or “focus on the quote”
5. Review the fields, set assignees and due date, and save

### From selected messages

1. In the conversation menu, choose **Select messages** (or start selection from a message menu)
2. Mark the messages you want — or use **Select all**
3. In the selection bar, click **Create task**
4. **Additional context for AI** opens (optional); confirm so AI generates content **only from the chosen messages**
5. Review, complete the remaining fields, and save

The messages used stay linked to the task as context. On the task, use **View conversation** to return to chat.

::: tip When to use each option
- **Conversation / Generate with AI** — overall summary of the conversation
- **Selected messages** — only the relevant part (request, complaint, agreement)
- **Select all** — use the set of messages loaded in the conversation
:::

You can also see tasks on the **customer** record and create tasks from automation flows.

## Performance

From the **Performance** shortcut in Tasks, the team can follow productivity indicators by person and period (based on organization permissions).

## History and notifications

- **Task history** — tab when editing (creation, status/stage/assignee changes, etc.)
- **Project history** — in the project menu
- **Notifications** — per member; realtime alerts when something relevant changes

## Tips

- Use **By status** when the team thinks in “to start → in development → done”
- Set a clear **default stage** so new tasks land in the right column
- Prefer a few clear automations over many overlapping rules
- Enable notifications only for people who need to follow the project day to day
- In My Tasks, group by **due date** at the start of the day and by **project** when prioritizing one team

## Next steps

- [Project templates](/en/guide/tasks/templates)
- [Project automations](/en/guide/tasks/project-automations)
- [Chat interface](/en/guide/chat/interface) — create a task from a conversation
- [Dashboard](/en/guide/dashboard) — tasks widget
- [Customers](/en/guide/crm/customers) — tasks on the customer record
