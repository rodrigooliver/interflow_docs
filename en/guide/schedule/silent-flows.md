# Silent flows by status

Automate **internal** processes on each appointment status change — without sending messages to the customer.

## Difference from notifications

| Feature | Customer communication | Where to configure |
|---------|------------------------|-------------------|
| **Notification templates** | Yes (WhatsApp, email or visible flow) | **Notifications** tab |
| **Silent flows** | No — runs in the background | **Silent flows** tab |

Use notifications when the customer needs to be notified. Use silent flows for integrations, internal records, tasks or team alerts.

## Accessing configuration

1. In the menu, click **Schedule**
2. Open the desired schedule and click **Manage**
3. Select the **Silent flows** tab

The same tab bar includes **Professionals and services**, **Availability**, **Holidays**, **Notifications** and **Silent flows**.

## Creating the flow

1. On the **Silent flows** tab, click **Create appointment flow**
2. Enter name and description — type **Appointment status change** is pre-selected
3. After creation, you are redirected to the editor to build the automation
4. Return to the **Silent flows** tab and associate the flow with the desired status

You can also create flows manually in **Flows** → type **Appointment status change**.

## Associating flows with statuses

For each operational status, optionally choose a flow in the select:

| Status | When it triggers |
|--------|------------------|
| **Scheduled** | Creation or transition to scheduled |
| **Confirmed** | Appointment confirmation |
| **Started** | Service started |
| **Completed** | Completion |
| **Canceled** | Cancellation |
| **No-show** | Marked as no-show |

With a flow selected, use the **Edit** (✏️) button next to the select to open the editor.

Click **Save** to persist the schedule associations.

## Flow variables

When triggered, the flow receives context variables:

```
appointment_id              → Appointment ID
appointment_status          → New status
appointment_previous_status → Previous status (empty on creation)
schedule_id                 → Schedule ID
```

## Flow type restrictions

**Appointment status change** flows do not allow nodes that wait for customer input (`input` / `interactive`), because execution is silent and in the background.

## Bulk operations

**Recurring appointments** and **calendar import (.ics)** show a notice in the form: bulk operations **do not trigger** notifications, silent flows or other status automations, to avoid excessive volume.

## When automations trigger

Every status change made through the UI (confirm, start, complete, cancel, queue check-in, etc.) goes through the server and may trigger:

- Configured notification templates
- Silent flow for the destination status (if configured)

::: tip 💡 Tip
Configure a silent flow on **Completed** to create an internal follow-up task, and a notification template on **Completed** to thank the customer — each with its own purpose.
:::

## Next steps

- [Schedule — overview](/en/guide/schedule/) — general module features
- [Conversation flows](/en/guide/flows/builder) — flow editor
- [Changelog v2026.6.10](/en/changelog/2026/06/2026.6.10) — release details
