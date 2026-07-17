# HR / Time clock

Workday control with time clock, workplaces (geofence), hour bank, and managerial payroll.

> Changelog: [v2026.7.11](/en/changelog/2026/07/2026.7.11)

## Overview

The **HR / Time clock** module lets you:

- Punch time (clock-in, break, return, clock-out) with photo and GPS
- Define allowed locations (geofence) or allow home office per person
- Track hour bank and payroll preview
- Notify managers by push when someone punches
- Separate the employee view (**My HR profile**) from the admin view

::: warning Important
The module is **not** enabled by default. A superadmin must turn on **HR / Time clock** under **Admin → Organizations → Modules**.
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

## Employees (admin)

Under **HR / Time clock → Employees**, admins register job title, schedule, geofence, vacation, and compensation (when allowed).

Opening a person’s card:

- **Punches** — entries with filters, **photo**, and map
- **Hour bank** — balance and movements
- **Payroll** — period preview (with estimated amounts for admins)
- **Notifications** — who receives push when that person punches

## My HR profile (employee)

Under **HR / Time clock → My HR profile**, the employee sees:

- Their punches (no photo, no IP)
- Hour bank
- Payroll preview (hours only, no sensitive salary amounts)

The route and screen are **separate** from the admin view for privacy.

## Punches (admin)

Under **HR / Time clock → Punches**:

- Filter by employee, type, and period
- See photo, GPS (click opens the map), and IP
- Chronological order (oldest → newest)

## Hour bank and payroll

- **Hour bank** — balance and history; admins can post adjustments
- **Payroll** — managerial period preview, closing, and CSV export

::: tip Note
Payroll in Interflow is **managerial** and does not replace official payroll / eSocial.
:::

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
| Admin / Owner | Employees, punches with photo/IP, workplaces, payroll, notifications |

On the server, punch responses for non-admins **do not include** photo, IP, or user-agent.
