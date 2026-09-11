# Financial Module

Track income, expenses, cash registers, categories, and payment methods.

::: tip Access
Sidebar → **Financial**. The `financial` module must be enabled for the organization.
:::

## Overview

| Area | Purpose |
|------|--------|
| **Dashboard** | Balances, summary, quick income/expense |
| **Transactions** | List, filter, create, mark paid/received |
| **Cashiers** | Cash accounts and operators |
| **Categories** | Income/expense categories |
| **Cost centers** | Areas responsible for expenses |
| **Payment methods** | Credit, fees, installments |
| **Reports** | Cash flow, categories, cost centers, receivable/payable, and by register |

::: info
**Billing** (contracts/Asaas) is a separate module — see [Billing](/en/guide/billing/).
:::

## Create a transaction

1. Open **Financial → Transactions** (or use the dashboard shortcut)
2. Choose **Income** or **Expense**
3. Fill required fields: description, amount, category, due date
4. Optional: cost center (for expenses), payment method, cashier, customer, notes, recurrence/installments
5. Save

### Statuses

Pending · Paid/Received · Overdue · Cancelled

## Cashiers

Create cashiers, add **operators**, and set per-cashier permissions (view, create, edit, delete, admin). Users only see cashiers they belong to (unless special permissions apply).

## Cost centers

Use **Financial → Cost centers** to track where company resources are consumed.

1. Enter a unique code, name, and optional description
2. Select the cost center when creating or editing an **expense**
3. Filter entries by cost center in **Transactions**
4. Deactivate centers that are no longer used; previous entries remain linked

Cost centers are optional and exclusive to expenses. Categories describe **the type of expense**; cost centers identify **the area responsible for it**.

## Reports

In **Financial → Reports** you only see cash registers where you are **admin** or have **Can view reports**:

1. Pick a period and, optionally, a cash register (or all you can access)
2. **Cash flow** — settled and open income/expenses over time
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
