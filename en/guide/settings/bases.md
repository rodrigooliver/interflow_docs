# Bases

Bases stores organization records in a table: columns, pages, views, and forms. It does not replace the customer profile or the custom fields on that profile.

> Changelog: [v2026.10.17](/en/changelog/2026/10/2026.10.17)

## Where to open it

1. At the bottom of the sidebar, open **Settings**
2. In the **Customers** group, click **Bases** (under Custom fields)

People without the Bases module permission do not see the item.

## Create a base

1. Type a name and click **Create**
2. The base starts with a **Name** column
3. At the top, set the title, the base description, and the link

The link is what each page can point to:

| Link | Use |
|------|-----|
| None | A standalone list |
| Customer | The page shows on the customer profile |
| Chat | The page stores the chat id |
| Appointment | The page stores the appointment id |

## Columns

Click the column name, or open **Columns** and the pencil.

- **Name** is the label in the table
- **Description** becomes the header tooltip and the empty-field placeholder
- **Type** sets the value format

Types: text, number, yes/no, date, select, multi-select, email, phone, link, files, relation, formula, and rollup.

Select and multi-select need options. A formula references another column by its key in braces, such as `{preco} * {qtd}`. A relation points at another base. A rollup aggregates a relation (count, sum, min, max, or average).

A base can have at most 40 columns.

## Pages, views, and forms

- **New page** adds a row. Edit it in the table or open the page.
- **Views** change the layout: table, calendar, chart, or report. Filters, sort, and visible columns belong to the view.
- **Forms** choose which fields appear, which are required, and who can submit (everyone, a role, a team, or a user).

On the calendar, the date column sets the day. On a chart, pick the group column and, for a sum, a numeric column.

## Export

From the view menu, export the current view as CSV or HTML.

## Limits

- Formula and rollup are not on the form: the value is calculated
- A column description is at most 400 characters
- Bases linked to a chat or appointment ask for that record id when you create a page
