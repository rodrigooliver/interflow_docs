# Reconciliation

Mark posted entries that were matched to the bank and, if you want, close the register period.

::: tip Access
**Financial → Entries**. Reconciliation only exists on the statement, on paid or received items.
:::

## What it's for

Reconciling records that the entry was checked. A reconciled item can no longer be changed, deleted, or used to settle open items.

The register **reconciliation date** is a separate lock: posted entries with a payment on or before that date cannot be created, edited, or deleted on that register. You can reconcile one by one without filling in that date.

## Reconcile entries

1. Open **Financial → Entries** and choose the register
2. Select one or more entries and use **Reconcile**, or open the row menu and choose **Reconcile**
3. Check the count and the total
4. Save

The item gets a **Reconciled** badge, with the date on the detail.

## Register cutoff date

In the same confirmation, turn on **Set a cutoff date** if you want to lock the period.

- With one register, the date applies to it
- With entries from more than one register, the date applies to the registers involved
- The suggested date is the latest payment among the selected entries
- If the register already has a cutoff, the screen shows the current date

You can also edit **Reconciliation date** in **Financial → Cashiers**, when creating or editing the register. The effect is the same: a payment on or before that date is locked.

## What stays locked

| Situation | What you cannot do |
|-----------|--------------------|
| Entry with a **Reconciled** badge | Edit it, delete it, or settle open items on it |
| Payment on or before the register reconciliation date | Create, edit, or delete posted entries on that date |

Obligations still open (receivables and payables) are not reconciled on this screen. A transfer between registers can be reconciled as a posted entry, but it does not enter results.

## Back

- [Financial — overview](/en/guide/financial/)
- [Import a statement](/en/guide/financial/import)
