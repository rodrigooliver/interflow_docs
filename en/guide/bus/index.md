# Buses

The module draws the vehicle, opens trips, and holds a seat during service. The hold occupies the seat. It does not charge and it does not issue a ticket.

The menu only shows when the organization has the **Buses** module turned on in the organization list.

## Where to open it

Under **Appointments**, **Buses** opens the trips. **Buses** on the inner list opens the fleet.

## Drawing

Each deck has its own layout: one or two columns on each side. Click a slot to set a seat, an empty space, a door, stairs, a bathroom, a water fountain, or the driver. The emergency exit stays on the outer side of the row.

**Reorganize** renumbers from the front to the back. A reservation follows the number. Changing one number only works if that number does not exist yet.

Saving the bus updates the trips of that vehicle. The same seat number keeps its reservation.

## Trip

A trip has a departure and a duration. The same bus cannot take another time that overlaps the trip plus a two-hour gap.

On the trip page, click a free seat to reserve it. You can pick the customer and one of their chats. Click a taken seat to release it.

## AI attendant

On the prompt, the **Bus seats** action lets the agent list trips, read the map, and reserve. Without that action, the tool is not part of the conversation.

Released in [v2026.11.5](/en/changelog/2026/11/2026.11.5).
