# Customer macros

Automation buttons on the customer profile: one click runs several actions (change kind, fill fields, assign people, create a task, or start a flow).

> Changelog: [v2026.8.4](/en/changelog/2026/08/2026.8.4)

## What is it?

A **macro** is a configurable button on **edit customer**. You define:

- **Appearance** — internal name, button label and color
- **When to show** — conditions (kind, funnel, stage, tag, or field)
- **Ask on click** — a wizard with fields to fill before running
- **Actions** — what happens next

## Where to find it

| Area | Path |
|------|------|
| **Configure** | Menu → **Customer Macros** |
| **Use** | Edit customer → **General** tab (top) and header actions menu (⋮) |

## Create a macro

1. Open **Customer Macros** and click **New macro**
2. Set internal name, button label, and color
3. Under **When to show**, leave empty for all customers or add conditions (all / any)
4. Under **Ask on click**, add fields the agent should fill (only if empty, or always)
5. Under **Actions**, choose what to run
6. Save and enable the macro

### Available actions

| Action | What it does |
|--------|----------------|
| Change customer kind | Lead or client (closed) |
| Fill field (fixed value) | Standard or custom field |
| Set seller / support / indication | Current user, chosen member, or clear |
| Set CRM stage | Moves the customer to the chosen stage |
| Transfer to team | Transfers the current conversation to the team |
| Transfer to agent | Sets the conversation’s primary agent |
| Add collaborators | Adds members to the conversation (skips the current assignee) |
| Create task | Project, optional [template](/en/guide/tasks/task-templates), title, assignees, and due in N days |
| Start silent flow | Organization flow (with or without chat) |

**Team**, **agent**, and **collaborator** actions (and flows that require a chat) only run from an **open conversation**. On edit customer outside a chat, the button stays visible and warns on click.

### Ask on click

The wizard uses the same labels and placeholders as the customer form. If a field already has a value, it is pre-filled.

## Use on a customer

1. Open the customer
2. On the **General** tab, visible buttons appear at the top; the same set is in the **⋮** menu
3. Click the macro
4. If there are prompts, complete them and run

Only **enabled** macros whose conditions match the current customer are shown.

## Customer kind

The profile has **Lead (sale)** or **Client (closed)**. Use it in the list filter and in macro conditions/actions.

## Next steps

- [Customer Management](/en/guide/crm/customers)
- [Sales Funnels](/en/guide/crm/funnels)
- [Task templates](/en/guide/tasks/task-templates)
