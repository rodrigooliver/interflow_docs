# Conversation filters

Besides the quick filters (Mine, Unassigned, Groups), the advanced panel cuts the queue by team, tag, channel, status, funnel, and **customer custom fields**.

Changelog: [v2026.8.14](/en/changelog/2026/08/2026.8.14)

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
