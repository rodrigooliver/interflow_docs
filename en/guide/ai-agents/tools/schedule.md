# Schedule

Creates new appointments directly through conversation.

**Configuration:**

| Field | Description |
|-------|-------------|
| **Calendar** | Select which calendar to use |
| **Services** | All or specific |
| **Professionals** | All or specific |
| **Operations** | Allowed operation types |

**Appointment flow:**
1. Customer requests appointment
2. AI checks available times
3. Customer chooses date/time
4. AI confirms and registers the appointment

**Usage example:**
```text
👤 Customer: I want to schedule an appointment
🤖 AI: Sure! We have availability Monday through Friday.
       What day and time do you prefer?

👤 Customer: Thursday at 2pm
🤖 AI: ✅ Appointment confirmed!
       📅 Thursday, December 26, 2025 at 2:00 PM
       I'll send a reminder 24h before!
```

