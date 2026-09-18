# Schedule & Appointments

Manage appointments, schedules, and automatic reminders in Interflow.

## Overview

The Interflow Schedule module allows you to manage appointments, consultations, and meetings integrated with customer service. With features like recurring appointments, automatic reminders, and AI integration, your team can offer a complete experience to customers.

## Accessing the Schedule

1. In the main menu, click on **Schedule** (📅)
2. Choose the desired view (day, week, month)
3. Navigate between dates using arrows or the calendar

## Managing schedules

### Duplicate a schedule

Use a configured schedule as a template. The copy gets services, professionals, locations, hours, holidays, and notifications. Appointments are **not** copied.

1. Open **Schedule** → **Schedules**
2. On the card, click **Duplicate schedule** — or, inside the schedule, use the button next to edit and delete
3. Confirm or change the name (the default is `{name} (copy)`)
4. The copy opens on the management screen

Organization flows stay the same: the new schedule only reuses the status and template links. Recurring series, reminders already sent, and agent actions tied only to the original schedule are left out.

> Changelog: [v2026.9.12](/en/changelog/2026/09/2026.9.12)

### Locations on the list card

When the schedule uses locations, the card in **Schedule** → **Schedules** shows how many locations are registered, next to the professional and service counts.

> Changelog: [v2026.9.12](/en/changelog/2026/09/2026.9.12)

## Schedule Interface

### Available Views

| View | Description |
|------|-------------|
| **List** | Appointments as cards, grouped by day |
| **Day** | Displays all appointments for a single day |
| **Week** | Displays 6-7 days with expanded view |
| **Month** | Monthly calendar with appointment summary |

### Column split

In **List** and **Day** views, you can split the screen into columns by **professional** or by **schedule**.

1. Open the view menu in the header
2. Choose **By professional** or **By schedule**
3. Check who (or which schedules) should appear and confirm

The choice is saved in the browser. In the list, times line up on the same row across columns. With more than one column, cards become compact; on desktop, hover to see details and actions (confirm, start, cancel).

When status is **Scheduled**, you can also **Start** the appointment without confirming first.

> Changelog: [v2026.9.4](/en/changelog/2026/09/2026.9.4)

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `←` `→` | Navigate between days |
| `T` | Go to today |
| `N` | New appointment |
| `Esc` | Close modal |

## Creating Appointments

### Manual Appointment

1. Click on the desired time slot, or click **"New"**
2. Fill in the fields:
   - **Customer**: Search or create new
   - **Service**: Select service type
   - **Professional**: Who will attend
   - **Date and Time**: When the appointment will be
   - **Duration**: Estimated time
   - **Notes**: Internal notes
3. Click **"Save"**

### Appointment via Flow

Configure automated flows to allow customers to schedule directly via WhatsApp or other channels. The AI can:

- Check available times
- Confirm date and time
- Send automatic confirmation

::: tip 💡 Tip
Use the **AI Agent** node with the scheduling tool to offer a complete conversational experience.
:::

## Recurring Appointments

Create appointments that repeat automatically.

### How to Create

1. When creating an appointment, enable **"Recurring"**
2. Configure recurrence:
   - **Frequency**: Daily, Weekly, Biweekly, Monthly
   - **Days of week**: For weekly recurrence
   - **End**: After X occurrences or specific date
3. Click **"Create"**
4. All occurrences are created automatically

### Managing Recurrences

| Action | Behavior |
|--------|----------|
| **Edit single** | Changes only selected occurrence |
| **Edit all** | Changes all future occurrences |
| **Delete single** | Removes only one occurrence |
| **Delete all** | Removes entire series |

## Move appointments between schedules

When editing an appointment (one-off or recurring), the **Schedule** field lets you move the booking to another schedule without deleting and recreating it.

1. Open the appointment and choose the new **Schedule**
2. Select **Service** and **Provider** again from the destination schedule
3. Save
4. If it is recurring, choose the scope: this only, this and future, or all

History, chat, and other appointment links remain intact.

## Automatic Reminders

Configure automatic messages to remind customers of their appointments.

### Configuration

1. Go to **Settings** → **Schedule**
2. Locate **"Automatic Reminders"** section
3. Enable desired reminders:
   - ✅ **48 hours before**
   - ✅ **24 hours before**
   - ✅ **2 hours before** (optional)
4. Customize message template
5. Save settings

### Notification template variables

| Variable | Content |
|----------|---------|
| `{{name}}` | Customer name |
| `{{document}}` / `{{cpf}}` | Tax ID |
| `{{email}}` | Email |
| `{{phone}}` | Phone |
| `{{whatsapp}}` | WhatsApp |
| `{{address}}` | Full address |
| `{{city}}` | City |
| `{{state}}` | State |
| `{{postal_code}}` | ZIP / postal code |
| `{{provider}}` | Provider |
| `{{service}}` | Service |
| `{{schedule}}` | Schedule |
| `{{date}}` | Date |
| `{{hour}}` / `{{start_time}}` | Start time |
| `{{end_time}}` | End time |
| `{{organization}}` | Organization |

```
Hello, {{name}}!

Reminder of your appointment:

Date: {{date}}
Time: {{hour}}
Service: {{service}}
Provider: {{provider}}

Document: {{document}}
Contact: {{phone}}
Address: {{address}}

Reply "YES" to confirm.
Reply "RESCHEDULE" to change the time.
```

### Behavior

- ✅ Sent only for **confirmed** appointments
- ❌ Does not send if **cancelled**
- 🔄 Respects configured business hours
- 📊 Events logged for reports

## AI Integration

### Conversational Scheduling

AI can manage appointments naturally:

1. **Check availability**: "What times are available for tomorrow?"
2. **Create appointment**: "I want to book for Thursday at 2pm"
3. **Reschedule**: "I need to change my appointment to next week"
4. **Cancel**: "I need to cancel my appointment"

### AI Respects Time-offs

AI automatically:
- ❌ **Does not offer** times during time-off periods
- ❌ **Does not allow** creating appointments on blocked days
- ✅ **Explains to customer** reason for unavailability
- ✅ **Automatically suggests** available alternative dates

## Import Events

### Import from Google Calendar

1. Export from Google Calendar (`.ics` file)
2. In **Schedule** → **New** → **Import Events**
3. Select the file
4. Configure date filter (optional)
5. Select schedule and professional
6. Click **"Process File"**
7. Map services and status for each event
8. Click **"Import Events"**

## Appointment Status

| Status | Color | Description |
|--------|-------|-------------|
| **Pending** | 🟡 Yellow | Awaiting confirmation |
| **Confirmed** | 🟢 Green | Customer confirmed |
| **In progress** | 🔵 Blue | Service started |
| **Completed** | ⚪ Gray | Service finished |
| **Cancelled** | 🔴 Red | Cancelled |
| **No-show** | ⚫ Black | Customer didn't show |

## Mobile App

### Android Features

- ✅ 6-7 day week view
- ✅ Week starting on Sunday
- ✅ Create and edit events
- ✅ Protection against accidental gestures
- ✅ Reminder notifications

## Status automations

Besides reminders and notification templates (customer-facing), each schedule can have **silent flows** — internal automations that run in the background when status changes.

| Feature | Customer communication | Where to configure |
|---------|------------------------|-------------------|
| Notification templates | Yes | **Notifications** tab |
| Silent flows | No | **Silent flows** tab |

> Full guide: [Silent flows by status](/en/guide/schedule/silent-flows)

## Push reminders for the team

Automatic alerts in the **app** and **web** for the provider and selected users **before** each appointment — separate from WhatsApp/email reminders sent to the customer.

| Feature | Recipient | Channel | Where to configure |
|---------|-----------|---------|-------------------|
| Push reminders | Provider + notified users | App and web | Schedule form |
| Templates / customer reminders | Customer | WhatsApp, email | **Notifications** tab |

> Full guide: [Push reminders](/en/guide/schedule/push-reminders)

## Next Steps

- [Push reminders](/en/guide/schedule/push-reminders) — internal alerts before appointments
- [Silent flows by status](/en/guide/schedule/silent-flows) — internal automations on each status change
- [AI Agents](/en/guide/ai-agents/) — Configure AI for scheduling
- [Flow Builder](/en/guide/flows/builder) — Automate scheduling process
- [Reports](/en/guide/reports/) — Scheduling metrics




