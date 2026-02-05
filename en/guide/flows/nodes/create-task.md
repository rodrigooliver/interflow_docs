# Node: Create Task

Automatically creates a task during flow execution.

## Overview

The **Create Task** node allows you to automate task creation in the Tasks module, automatically linking them to the current customer and conversation. Ideal for standardizing processes and ensuring no important action is forgotten.

## Settings

### Available Fields

| Field | Required | Description |
|-------|----------|-------------|
| **Project** | Yes | Project where the task will be created |
| **Stage** | Yes | Initial stage of the task in Kanban |
| **Title** | Yes | Task title (supports variables) |
| **Description** | No | Detailed description (supports variables) |
| **Priority** | No | Low, Medium, or High |
| **Status** | No | Pending, In Progress, Completed, or Cancelled |
| **Due Date** | No | Deadline in hours after creation |
| **Assignee** | No | Project member responsible |
| **Checklist** | No | List of verification items |

### Project

Select the project where the task will be created. Only organization projects are listed.

### Stage

After selecting the project, choose the initial Kanban stage where the task will appear.

### Title

Set the task title. Supports variables for dynamic personalization:

```
Support - {{customer.name}}
```

### Description

Add task details. Supports variables:

```
Customer: {{customer.name}}
Phone: {{customer.phone}}
Reported issue: {{input.issue}}
```

### Priority

| Value | Description |
|-------|-------------|
| **Low** | Routine tasks |
| **Medium** | Normal tasks (default) |
| **High** | Urgent tasks |

### Status

| Value | Description |
|-------|-------------|
| **Pending** | Awaiting start (default) |
| **In Progress** | Ongoing |
| **Completed** | Finished |
| **Cancelled** | Cancelled |

### Due Date

Set the deadline in **hours** after task creation:

| Example | Description |
|---------|-------------|
| 24 | 1 day |
| 48 | 2 days |
| 72 | 3 days |
| 168 | 1 week |

### Assignee

Select a project member to be responsible for the task. The assignee will be notified when the task is created.

### Checklist

Add verification items that must be completed. Each item supports variables:

```
- Analyze reported issue
- Contact customer {{customer.name}}
- Check service history
- Resolve issue
- Follow up with customer
```

## Using Variables

Text fields (title, description, and checklist) support flow variables:

### Customer Variables

```
{{customer.name}}       - Customer name
{{customer.phone}}      - Phone
{{customer.email}}      - Email
{{customer.cpf}}        - CPF (if registered)
```

### Input Variables

```
{{input.variable_name}} - Value captured by an Input node
```

### Custom Variables

```
{{defined_variable}}    - Variable defined in the flow
```

## Connections

| Handle | Position | Description |
|--------|----------|-------------|
| Input | Left | Receives connection from previous node |
| Output | Right | Continues after creating the task |

## Automatic Data

The node automatically links to the task:

- **Customer** - Customer from the current service
- **Conversation** - Chat/conversation where the flow is running
- **Organization** - Flow organization

## Usage Examples

### Technical Support

Create task when customer reports an issue:

```
[Input] → Describe the problem
[Create Task] → Project: Technical Support
                Stage: Triage
                Title: Support - {{customer.name}}
                Description: {{input.issue}}
                Priority: High
                Due Date: 24 hours
                Checklist:
                  - Analyze issue
                  - Resolve
                  - Follow up with customer
```

### Follow-up Scheduling

Create follow-up task:

```
[Text] → We'll contact you soon!
[Create Task] → Project: Sales
                Stage: Follow-up
                Title: Follow up - {{customer.name}}
                Description: Customer showed interest in {{input.product}}
                Priority: Medium
                Due Date: 48 hours
                Assignee: John Smith
```

### Lead Qualification

Create task when qualifying lead:

```
[Condition] → If interest = "high"
[Create Task] → Project: Sales
                Stage: Hot Leads
                Title: Qualified Lead - {{customer.name}}
                Priority: High
                Due Date: 24 hours
                Checklist:
                  - Send proposal
                  - Schedule meeting
                  - Negotiate values
```

### Service Request

```
[Input] → What service do you need?
[Input] → What's the urgency? (low/medium/high)
[Create Task] → Project: Services
                Stage: New Requests
                Title: {{input.service}} - {{customer.name}}
                Priority: {{input.urgency}}
                Due Date: 72 hours
```

## Best Practices

::: tip Descriptive Titles
Use titles that quickly identify the task content, including the customer name.
:::

::: tip Standardized Checklists
Create checklists that ensure all process steps are followed.
:::

::: tip Realistic Deadlines
Set deadlines that allow proper task execution without creating unnecessary urgency.
:::

::: tip Defined Assignees
Whenever possible, set an assignee to prevent tasks from being ownerless.
:::

::: tip Contextual Variables
Use variables to create personalized tasks with information collected during service.
:::

## Restrictions

::: warning Attention
- Project and stage are required
- Title is required and must have at least 3 characters
- The task is only created if the flow executes successfully up to this node
:::

## Next Steps

- [Node: Update Customer](/en/guide/flows/nodes/update-customer)
- [Node: Private Note](/en/guide/flows/nodes/private-note)
- [Node: Close Attendance](/en/guide/flows/nodes/close-attendance)
