# Push reminders (app and web)

Send automatic alerts to the **team** before each appointment — in the mobile app and browser.

## Difference from other reminders

| Feature | Recipient | Channel | Where to configure |
|---------|-----------|---------|-------------------|
| **Push reminders** | Provider + notified users | App and web (push) | Schedule form |
| **Notification templates** | Customer | WhatsApp, email or flow | **Notifications** tab (schedule management) |
| **"Before appointment" reminder** | Customer | WhatsApp or email | **Notifications** tab |

Use push reminders when the **team** needs an internal alert. Use notification templates when the **customer** should receive the message.

## Accessing configuration

1. In the menu, click **Schedule**
2. Create a new schedule or edit an existing one (**Edit**)
3. Scroll to **Push reminders (app and web)**

Configuration is on the same schedule form, together with **Notified users** — the field that defines who besides the provider receives alerts.

## Configuring reminders

### Enable or disable

Check **Send push reminders before the appointment** to enable alerts for this schedule. Uncheck to turn off without removing saved times.

**Default for new schedules:** enabled with **1 hour** reminder.

### Preset times

Select one or more chips:

| Chip | Lead time |
|------|-----------|
| 15 min | 15 minutes before |
| 30 min | 30 minutes before |
| 1 h | 1 hour before |
| 2 h | 2 hours before |

Click a selected chip again to remove it.

### Custom time

1. Click **+ Add custom time**
2. Enter the value and choose **minutes** or **hours**
3. Click **Add**
4. To remove, click the custom chip (with **×**)

**Limits:**

- Maximum of **5 times** total (presets + custom)
- Maximum of **1 week** (10,080 minutes) before the appointment
- Duplicate times are not allowed

### Notified users

Above the push section, configure **Notified users** to include managers, assistants or other team members. The appointment **provider** always receives reminders.

## What recipients receive

Each alert includes:

- Customer name
- Service or appointment type
- Date and time
- Time remaining (e.g. "in 60 min")

Text is shown in each recipient's **profile language** (Portuguese, English or Spanish).

Besides pre-appointment reminders, the team also receives a push when an appointment is **created** (when applicable).

## When reminders are updated

The system automatically recalculates send times when:

- An appointment is **created** or **updated** (date, time, provider)
- The schedule reminder settings are **saved**
- An appointment is **canceled** or deleted

Pending reminders for canceled appointments are **canceled** — they will not be sent.

## Requirements

To receive push:

- The user must have logged in to the app or web at least once (the device is registered to receive push notifications)
- Browser or app notifications must be allowed on the device

::: tip 💡 Tip
Combine a **1 h** push reminder for the team to prepare and a **24 h** WhatsApp template for the customer to confirm — each channel with its purpose.
:::

## Next steps

- [Schedule — overview](/en/guide/schedule/) — general module features
- [Silent flows by status](/en/guide/schedule/silent-flows) — internal automations on status change
- [Changelog v2026.6.11](/en/changelog/2026/06/2026.6.11) — details of this release
