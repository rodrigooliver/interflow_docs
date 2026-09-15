# Financial Module

Track income, expenses, cash registers, categories, and payment methods.

::: tip Access
Sidebar → **Financial**. The `financial` module must be enabled for the organization.
:::

## Overview

| Area | Purpose |
|------|--------|
| **Dashboard** | Receivables, payables, and cash-register balances you can access |
| **Receivables / Payables** | Open obligations, overdue and upcoming |
| **Posted entries** | Statement of what was already paid or received, including transfers between cashiers |
| **Customers** | Directory used as payer or payee |
| **Cashiers** | Cash accounts and operators (under Settings) |
| **Categories** | Income/expense categories |
| **Cost centers** | Areas responsible for expenses |
| **Payment methods** | Credit, fees, installments |
| **Reports** | Cash flow, categories, cost centers, receivable/payable, and by register |

::: info
**Billing** (contracts/Asaas) is a separate module — see [Billing](/en/guide/billing/).
:::

## Receivables and payables

**Receivables** lists open income. **Payables** lists open expenses. Both screens split **overdue** (due date in the past) from **upcoming**, with separate totals.

1. Open **Finance → Receivables** or **Payables**
2. Use **New income** or **New expense**
3. Fill description, amount, category, and due date
4. Optional: cost center (for expenses), payment method, cash register, payer or payee, notes, payment details (PIX, barcode, or bank account), and recurrence
5. Save

Quick filters at the top: **today**, **through today**, **through tomorrow**, **next 7 days**, **through month end**, and **this month only**. Overdue and upcoming totals follow the filter.

A late obligation appears under **Overdue** by date, even if the status is still pending.

### Statuses

Pending · Paid/Received · Overdue · Cancelled

## Posted entries

In **Finance → Posted entries** you see the statement: what was already paid or received. Quick filters: **this month** and **last month**. The amount shown is the posted amount; if it differs from the original obligation, the original appears as well.

To **move balance between cash registers**, use **Transfer** on this screen — see [Transfer between cashiers](#transfer-between-cashiers).

## Post a payment

To settle an obligation, use **Post payment** or **Post receipt** — do not just mark it as paid.

1. Open the obligation in **Receivables** or **Payables**
2. Choose **Post payment** or **Post receipt**
3. Check the **original amount** and, if needed, change the **posted amount**
4. Adjust date, cash register (among those you operate), and payment details
5. Save

The system stores who posted and when. PIX, barcode, or bank details can be copied, edited, or removed after you save.

## Recurrence

When you create with a frequency other than once, choose **how many occurrences to generate** up front (up to 12). The system keeps future due dates in the queue, whether or not you have already posted one.

When you edit an item in the series, choose:

- **This one only** — change only this open obligation
- **All upcoming** — copy description, category, and cash register to items not yet posted
- **Apply amount** and **Apply payment details** — only if you also want those fields to change on upcoming items
- **Include due date** — only if you want to shift the following dates by the same interval

Already posted entries are not part of that change.

## Transfer between cashiers

Moves balance from one cash register to another **immediately**. It is not a payable or receivable: it does not enter results as income or expense. It only changes register balances and appears on the statement.

1. Open **Finance → Posted entries**
2. Click **Transfer**
3. Choose source, destination, amount, description, and date
4. Save

The statement shows both sides with a **Transfer** badge and the other register. Editing amount, description, or date updates the pair. Deleting one side removes both.

You must be an operator with **create** permission on both registers. There is no recurrence or pending state: the movement is posted as soon as you save.

## Due-today notice

Every day at **8:00 a.m.** (Brasília time), register operators with view permission (or register admins) get a push for obligations **due today**. One notice per person per register, with no repeat on the same day.

Tapping opens **Payables** or **Receivables** already on that register and the **today** filter. Transfers between cashiers do not trigger a notice. App notifications must stay on.

> Changelog: [v2026.9.11](/en/changelog/2026/09/2026.9.11)

## Cashiers

Create cashiers, add **operators**, and set per-cashier permissions (view, create, edit, delete, admin). Users only see cashiers they belong to (unless special permissions apply).

## Cost centers

Use **Financial → Cost centers** to track where company resources are consumed.

1. Enter a unique code, name, and optional description
2. Select the cost center when creating or editing an **expense**
3. Filter by cost center in **Receivables**, **Payables**, or **Posted entries**
4. Deactivate centers that are no longer used; previous entries remain linked

Cost centers are optional and exclusive to expenses. Categories describe **the type of expense**; cost centers identify **the area responsible for it**.

## Reports

In **Financial → Reports** you only see cash registers where you are **admin** or have **Can view reports**:

1. Pick a period and, optionally, a cash register (or all you can access)
2. **Cash flow** — settled and open income/expenses over time (transfers between cashiers are excluded)
3. **By category** — management P&L (settled and open)
4. **By cost center** — settled, open, and total expenses by area
5. **Receivable / payable** — aging (current, 1–30, 31–60, 61–90, 90+)
6. **By register** — balance and movement comparison

Profiles with export permission can download the current tab as CSV.

## Permissions

- Module `financial` enabled
- Special group permissions: all transactions, approve, export reports
- Per-cashier operator permissions (including **Can view reports**)

## Related

- [Billing](/en/guide/billing/)
- [POS](/en/guide/pos/)
- [Reports](/en/guide/reports/)
