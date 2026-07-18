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
| **Payment methods** | Credit, fees, installments |
| **Reports** | Module reports |

::: info
**Billing** (contracts/Asaas) is a separate module — see [Billing](/en/guide/billing/).
:::

## Create a transaction

1. Open **Financial → Transactions** (or use the dashboard shortcut)
2. Choose **Income** or **Expense**
3. Fill required fields: description, amount, category, due date
4. Optional: payment method, cashier, customer, notes, recurrence/installments
5. Save

### Statuses

Pending · Paid/Received · Overdue · Cancelled

## Cashiers

Create cashiers, add **operators**, and set per-cashier permissions (view, create, edit, delete, admin). Users only see cashiers they belong to (unless special permissions apply).

## Permissions

- Module `financial` enabled
- Special group permissions: all transactions, approve, export reports
- Per-cashier operator permissions

## Related

- [Billing](/en/guide/billing/)
- [POS](/en/guide/pos/)
- [Reports](/en/guide/reports/)
