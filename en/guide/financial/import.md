# Import a statement

Bring a bank CSV or OFX into a cash register and decide, line by line, what to save.

::: tip Access
**Financial → Entries → Import**. The register already open on the screen, if any, comes preselected.
:::

## What it's for

A bank statement arrives with dates and amounts that may already exist as a payable, a receivable, or a posted entry. Import does not save everything at once: each line becomes **create new**, **settle an open item**, or **skip**.

## How to import

1. Open **Financial → Entries** and click **Import**
2. Choose the **register** and the file (CSV or OFX)
3. Check **Invert signs** only when purchases come in as positive amounts, as on a card invoice
4. Continue

### CSV

The **Columns** step asks for the mapping, because each bank uses different names. The first row of the file is shown as a preview.

Required:

- **Date** and the format (`dd/MM/yyyy`, `dd-MM-yyyy`, `yyyy-MM-dd`, or `MM/dd/yyyy`)
- **Description**
- **Amount**, or **debit** and **credit** together

Optional: document **number** (NSU, check, or reference).

### OFX

OFX already includes date, description, and amount. The screen skips columns and opens **mapping** directly.

## Review each line

| Action | When to use it |
|--------|----------------|
| **Create new** | There is no matching obligation or posted entry |
| **Settle pending** | The line pays an open account. You must choose which one |
| **Skip** | The line should not be saved |

New lines require a **category**. You can set register defaults (income category, expense category, cost center on expenses, and payment method) and **Apply to new lines**. Customer stays optional on each line.

The system suggests the action:

- Same date and same amount already posted on the register: it comes in as skip. Use **Import anyway** if it is a different movement
- Already imported from this statement: it stays skipped
- A matching open item: it comes in as settle, with the suggested account. You can search for another

The footer summary counts how many lines will be new, how many will settle an open item, and how many will be skipped.

## Confirm

**Confirm import** saves only what is not skipped. The final message reports how many were created, how many were settled, and how many were skipped.

What is created as a posted entry lands on that register's statement, with the line's date and amount. What settles an open item closes that obligation.

## Limits

- Import applies to one register at a time
- Without a category, a new line is not saved
- Without the chosen open item, the settlement is not saved
- A period already reconciled on the register does not accept a new entry on that date — see [Reconciliation](/en/guide/financial/reconciliation)

## Back

- [Financial — overview](/en/guide/financial/)
