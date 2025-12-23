# Schedule & Appointments

Manage appointments, schedules, and automatic reminders in Interflow.

## Overview

The Interflow Schedule module allows you to manage appointments, consultations, and meetings integrated with customer service. With features like recurring appointments, automatic reminders, and AI integration, your team can offer a complete experience to customers.

## Accessing the Schedule

1. In the main menu, click on **Schedule** (📅)
2. Choose the desired view (day, week, month)
3. Navigate between dates using arrows or the calendar

## Schedule Interface

### Available Views

| View | Description |
|------|-------------|
| **Day** | Displays all appointments for a single day |
| **Week** | Displays 6-7 days with expanded view |
| **Month** | Monthly calendar with appointment summary |

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

## Next Steps

- [AI Agents](/en/guide/ai-agents/) - Configure AI for scheduling
- [Flow Builder](/en/guide/flows/builder) - Automate scheduling process
- [Reports](/en/guide/reports/) - Scheduling metrics

