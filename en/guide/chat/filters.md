# Conversation filters

Besides the quick filters (Mine, Unassigned, Groups), the advanced panel cuts the queue by team, tag, channel, status, funnel, **unread messages**, and **customer custom fields**.

Changelog: [v2026.8.17](/en/changelog/2026/08/2026.8.17) · [v2026.8.14](/en/changelog/2026/08/2026.8.14)

---

## Where to filter

| Surface | What it does |
|---------|--------------|
| Filters panel in **Chats** | Cuts the list and the counts |
| **Export report** | Applies the same cut and lets you check custom fields as columns |
| **Configure quick filters** | Stores the criteria on the team shortcut |

---

## Custom fields

The filter uses the **customer record** linked to the conversation — the same field set as Customers.

Types included:

- Select (one value)
- Multi-select
- Date
- Date and time

For each field, choose a mode:

| Mode | Result |
|------|--------|
| All values / All dates | The field does not restrict the list |
| Blank | Only conversations whose customer **has no value** on the field |
| Specific values / Specific period | Only conversations whose customer matches the options or the range |

Several active fields combine: the customer must match **all** of them.

---

## How to use the panel

1. In **Chats**, open the filters panel
2. Expand **Custom fields**
3. Pick the mode and, if needed, the options or the period
4. Apply — the list, active chips, and counts follow

Admins can add the same criteria in **Configure quick filters**, so the team opens the queue already narrowed.

---

## Unread messages

The **Unread only** cut can live in the panel, the header button, and **custom quick filters**.

| Where | What it does |
|-------|--------------|
| **Unread** button in the list header | Quick cut of the current list, without storing it on the shortcut |
| Filters panel | Same criterion, visible with the other cuts |
| **Configure quick filters** | Stores unread on the shortcut, combined with assignee, team, channel, and the rest |

1. In **Chats**, open **Configure quick filters**
2. Duplicate a filter (or edit a custom one) and open **Settings**
3. Check **Unread only** and combine it with the other criteria
4. Save — when you click the shortcut, the list, chip, and count follow

The header button is still available to refine the list on the spot. Switching to a system tab turns unread off. Archived remains a separate toggle.

---

## Columns in the report

On **Export report**, the column list includes **all** organization custom fields (text, number, select, date, date/time, and yes/no — not only the ones that filter).

1. Open **Export report** in Chats
2. On the right, scroll to **Custom fields**
3. Check the fields that should become columns in the file
4. Export

Fields start unchecked. A group or conversation without a customer gets an empty cell.

---

## What is not included

- WhatsApp groups and internal chats (they have no customer)
- Individual conversations **without** a linked customer
- Text, number, and yes/no fields — they do not filter the list yet (they only appear as report columns)

---

## Related

- [Chat Interface](/en/guide/chat/interface#custom-filters)
- [Customers — Custom Fields](/en/guide/crm/customers#custom-fields)
