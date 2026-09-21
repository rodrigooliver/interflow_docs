# Locations and rooms

Register **rooms, booths, or units** with a free name. When the schedule uses locations, the location becomes the control center: hours, overlap, and the appointment depend on the room.

## Difference from professionals

| Feature | What it controls | When to use it |
|---------|------------------|----------------|
| **Professionals** | Who serves | A clinic with dentists, doctors, or attendants |
| **Locations** | Where it happens | Rooms, booths, offices, or units that cannot overlap |

Both options can stay on at the same time. The location does not replace the professional: it defines the space.

## Turn on locations

1. Open **Schedule** → **Schedules**
2. Edit the schedule
3. Turn on **Use locations**
4. To block two appointments in the same room, turn on **Block duplicate location (this schedule)**
5. Save

With **Use locations** on, the **Location** field is required when creating or editing an appointment.

## Add a location

1. Open the schedule and go to **Professionals/Services**
2. Click **Add location**
3. Enter the name (e.g. Room 01) and, if you want, a description and color
4. Choose the **services** that location can run — empty = every service on the schedule
5. If the schedule uses professionals, choose who can work there — empty = any professional
6. Save

Inactive locations disappear from the appointment picker, but they stay in management.

## Availability per location

1. Open the **Availability** tab
2. Select the location
3. Set the days and hours for that room

Occupancy follows the location hours. With overlap blocking on, the same room cannot take two appointments at the same time.

## Day to day

- **New appointment**: pick the location along with service and professional
- **List**: the appointment card shows the location
- **Filter**: filter the list by location
- **Columns**: in **List** and **Day** views, split **By location**
- **Schedules list**: the card shows how many locations that schedule has

## AI Agent

On the agent’s schedule actions, you choose **all locations** or **specific locations**. The agent only suggests and creates slots in the allowed rooms.

## Limits

- Locations belong to one schedule: each schedule has its own list
- Duplicating a schedule copies locations and hours; appointments are not copied
- Saved agent actions still point to the original schedule until you update them

> Changelog: [v2026.9.12](/en/changelog/2026/09/2026.9.12)
