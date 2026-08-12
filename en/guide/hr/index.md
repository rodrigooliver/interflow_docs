# HR / Time clock

Workday control with time clock, workplaces (geofence), hour bank, calendar, absences, and managerial payroll.

> Changelog: [v2026.8.3](/en/changelog/2026/08/2026.8.3) · [v2026.7.11](/en/changelog/2026/07/2026.7.11)

## Overview

The **HR / Time clock** module lets you:

- Punch time (clock-in, break, return, clock-out) with photo and GPS
- Define allowed locations (geofence) or allow home office per person
- Configure a **schedule with real times** (clock-in, lunch, clock-out) and a **contractual load** (44h by default)
- Register **holidays / non-working days** and individual **certificates / days off**
- Track the hour bank, **monthly report**, and payroll preview **with the 4 punches of the day**
- Choose where overtime goes (bank, offset, or pay) under **HR settings**
- Notify managers by push when someone punches
- Separate the employee view (**My HR profile**) from the admin view

::: warning Important
The module is **not** enabled by default. A superadmin must turn on **HR / Time clock** under **Admin → Organizations → Modules**.
:::

::: tip Punching without the calendar
You do **not** need to register holidays to punch. Calendar and absences only affect **payroll** (expected hours for the day).
:::

## How to enable the module

1. Go to **Admin → Organizations**
2. Edit the organization and open the **Modules** tab
3. Enable **HR / Time clock** and save
4. Reload the app — **HR / Time clock** appears in the menu

## Punching in

1. Open **HR / Time clock → Punch**
2. Allow **location** (if the organization requires GPS)
3. If a photo is required:
   - With a webcam: the preview is mirrored (selfie-style)
   - Without a webcam: use **Upload photo**
4. Click **Clock in** (or break / return / clock out, depending on status)

### Punch types

| Type | Meaning |
|------|---------|
| Clock in | Start of the workday |
| Break | Start of the break |
| Return | End of the break |
| Clock out | End of the workday |

## Workplaces / Geofence

1. Open **HR / Time clock → Workplaces**
2. Add name, coordinates, and radius (meters)
3. Under **Employees**, set each person’s geofence mode:

| Mode | Behavior |
|------|----------|
| Inherit org | Uses the organization default |
| Required | Must be inside an allowed location |
| Home office | Geofence off for that person |
| Custom locations | Uses only locations linked to that person |

## Employees and schedule (admin)

Under **HR / Time clock → Employees**, admins register job title, **schedule**, geofence, vacation, and compensation (when allowed). The schedule can also be edited on the person detail, **Schedule** tab.

### Presence times and contractual load

These are two different concepts:

| Concept | Meaning | Office example |
|---------|---------|----------------|
| Presence schedule | When the person should be at work | Mon–Fri, 08:00–12:00 and 13:30–18:30 (9h/day) |
| Contractual load | “Regular” hours in the week (44h CLT) | 8h48 per workday — the extra hour in the week is overtime |

In the editor:

1. Enable the days the person works
2. Set **morning** and **afternoon** (start and end), or use **Office schedule**
3. Optional: **Copy to weekdays**
4. Weekly contractual load: leave empty to inherit 44h from the organization, or set a custom value
5. Save

Payroll compares **worked time** to the contractual load (not to the 9h presence window). Meeting the office times yields **12 extra minutes per day = 1h per week**. Disabled days do not generate absence.

Lateness is clock-in after the first registered slot, minus the organization tolerance.

Opening a person’s card:

- **Punches** — entries with filters; use **Details** for photo and evidence
- **Schedule** — real times and contractual load
- **Hour bank** — period balance, credits, debits, and movements
- **Payroll** — preview with totals (lateness, OT, absences, bank delta) and **4 punches per day**
- **Absences** — medical certificates and individual days off (with attachment)
- **Notifications** — who receives push when that person punches

## HR calendar (holidays / non-working days)

Under **HR / Time clock → Calendar** (admin):

1. Add the date and a title
2. Choose the type: **Holiday** or **No work**
3. Optional: mark **yearly recurrence** (same month/day)

Those days **zero expected hours** in payroll for everyone (no absence penalty). If someone punches that day, time may count as overtime.

## Absences (certificate and day off)

On the employee detail → **Absences** tab:

1. Click **Register**
2. Type: **Medical certificate** or **Individual day off**
3. Enter start/end, a note (e.g. where the certificate was presented), and attach a PDF/image if needed
4. Save

For **Individual day off**, check **Debit the day’s load from the hour bank** if the day off should come out of the balance (bank enabled).

Absences also **zero expected hours** on covered days, for that person only.

## My HR profile (employee)

Under **HR / Time clock → My HR profile**, the employee sees:

- Their punches (no photo, no IP)
- Hour bank
- Payroll preview with totals and **hours per day** (hours only, no sensitive salary amounts)

The route and screen are **separate** from the admin view for privacy.

## Punches (admin)

Under **HR / Time clock → Punches**:

- Filter by employee, type, and period
- The **Photo** column only shows whether an attachment exists (`Yes` / `—`) — images are **not** loaded in the list
- Click **Details** to open the modal (on-demand photo, IP, GPS, device)
- GPS in the row or modal opens the map
- Chronological order (oldest → newest)

## Hour bank and payroll

- **Hour bank** — current balance, month filter, opening/closing balance, credits, debits, and CSV; admins can post adjustments
- **Payroll** — managerial period preview:
  - Totals per employee (regular, OT, lateness, absences, bank delta, estimates)
  - **Hours per day** section (in, lunch out, lunch return, out, worked, expected, lateness, OT, absence)
  - **Period CSV** or **daily CSV** export
  - **Close period** saves the snapshot **and** posts to the hour bank according to policy

### Where overtime goes

Under **HR / Time clock → HR settings**:

| Mode | Behavior on close |
|------|-------------------|
| Offset then bank (default) | OT offsets lateness/absence in the period; the remainder credits the bank |
| Hour bank only | OT credits; absences debit |
| Pay overtime | OT stays on payroll; the bank does not move |

You can also set late tolerance, default weekly load (2640 min = 44h), timezone, bank cap, and compensation deadline.

::: tip Note
Payroll in Interflow is **managerial** and does not replace official payroll / eSocial.
:::

### Day status on payroll

| Status | Meaning |
|--------|---------|
| Work | Day with expected hours |
| Off | No hours on that person’s schedule |
| Holiday / No work | Organization calendar |
| Medical certificate / Individual day off | Absence on the employee |

## Push notifications

1. Open the admin employee detail
2. **Notifications** tab
3. Select users who should receive the OneSignal push
4. Save

When the person punches, recipients get a notification linking to their HR profile.

## Permissions and privacy

| Who | What they see |
|-----|----------------|
| Employee | Punch, My HR profile, own hour bank/payroll (no photo/IP) |
| Admin / Owner | Employees, schedule, punch details/photo, workplaces, calendar, payroll, hour bank, absences, notifications, HR settings |

On the server, punch responses for non-admins **do not include** photo, IP, or user-agent.
