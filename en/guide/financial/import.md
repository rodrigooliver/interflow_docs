# Import a statement

Bring a bank CSV or OFX into a cash register and decide, line by line, what to save.

::: tip Access
**Financial → Entries → Import**. The register already open on the screen, if any, comes preselected.
:::

## What it's for

A bank statement arrives with dates and amounts that may already exist as a payable, a receivable, or a posted entry. Import does not save everything at once: each line becomes **create new**, **settle an open item**, or **skip**.

## How to import

1. Open **Financial → Entries** and click **Import**
2. Choose the **register**
3. Download the **sample CSV** if you need the template, then upload the file (CSV or OFX)
4. Check **Invert signs** only when purchases come in as positive amounts, as on a card invoice
5. Continue

### CSV

The **Columns** step asks for the mapping, because each bank uses different names. The first row of the file is shown as a preview.

Required:

- **Date** and the format (`dd/MM/yyyy`, `dd-MM-yyyy`, `yyyy-MM-dd`, or `MM/dd/yyyy`)
- **Description**
- **Amount**, or **debit** and **credit** together

Optional: document **number** (NSU, check, or reference), **category**, and **cost center**. When the category name already exists, the line arrives filled in.

### OFX

OFX already includes date, description, and amount. The screen skips columns and opens **mapping** directly.

## Review each line

| Action | When to use it |
|--------|----------------|
| **Create new** | There is no matching obligation or posted entry |
| **Settle pending** | The line pays an open account. You must choose which one |
| **Skip** | The line should not be saved |

On review, category, cost center, payment method, and customer each have their own column. If the table does not fit, scroll sideways.

New lines require a **category** (marked with *). Cost center, payment method, and customer are optional. You can set defaults at the top (income category, expense category, cost center on expenses, and payment method) and **Apply to new lines**. Those category lists open as a tree you can search: a subcategory is indented under its parent.

If the file includes a category name that does not exist yet, the line shows **Not registered** and the name. **Register** creates that category (income or expense, matching the line) and fills the other matching lines that were still empty.

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
- [Changelog v2026.10.29](/en/changelog/2026/10/2026.10.29)
