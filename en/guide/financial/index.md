# Financial Module

Track income, expenses, cash registers, categories, and payment methods.

::: tip Access
Sidebar → **Financial**. The `financial` module must be enabled for the organization.
:::

## Overview

| Area | Where | Purpose |
|------|-------|---------|
| **Overview** | Financial | Receivables, payables, and balances of registers you can access |
| **To receive / To pay** | Module menu | Open obligations, overdue and upcoming |
| **Entries** | Module menu | Statement of what was already paid or received, including transfers |
| **Cashiers** | Module menu | Accounts and operators, with permission per person |
| **Categories** | Module menu | Income and expense, with subcategories |
| **Cost centers** | Module menu | Area responsible for the expense |
| **Payment methods** | Module menu | Credit, fee, installments, and an integration key |
| **Reports** | Module menu | Cash flow, categories, cost centers, aging, and by register |
| **Import a statement** | On Entries | CSV or OFX, line by line, before anything is saved |
| **Reconciliation** | On Entries | Locks what was already matched to the bank |

The payer or payee on an obligation is a **CRM customer**. There is no customer screen inside the financial menu.

::: info
**Billing** (contracts and Asaas) is a separate module — see [Billing](/en/guide/billing/).
:::

## Dashboard

1. Open **Financial**
2. See **receivables** and **payables** through the end of the month, only on registers you can access, and the **cash balance**
3. Each card shows the count and, when there are any, how many are overdue
4. Click **To receive** or **To pay** to open the list. Click a register to open its statement
5. Use **New receivable** or **New payable** to create an obligation

Without a linked register, the module stays blocked. An organization admin or owner can create the first register on this screen. Everyone else asks an admin to be added as an operator.

## Receivables and payables

**Receivables** lists open income. **Payables** lists open expenses. Both screens split **overdue** (due date in the past) from **upcoming**, with separate totals and the **total** in the middle.

1. Open **Financial → To receive** or **To pay**
2. Use **New receivable** or **New payable** (shortcut `N`)
3. Fill description, amount, category, and due date
4. Optional: cost center (expenses only), payment method, cash register, payer or payee, notes, payment details, and attachments
5. Save

You can view **all registers** or one register. Search is by description.

Quick filters: **today**, **until today**, **until tomorrow**, **next 7 days**, **until month end**, **this month only**, and **next month**. **Filters** also has category, cost center, and a due-date range. Totals follow the filter, and clicking a shortcut shows a loading state.

A late obligation appears under **Overdue** by date, even if the status is still pending.

Row menu: view, edit, duplicate, post payment or receipt, and delete.

### Statuses

| Status | Meaning |
|--------|---------|
| Pending | Not posted yet |
| Paid / Received | Already on the statement |
| Overdue | Past the due date and not posted |
| Cancelled | Closed without posting |

## Posted entries

**Financial → Entries** is the statement of one cash register: what was already paid or received. A register must be selected on this screen.

The header shows **inflows**, **outflows**, **net**, and the register **balance**. Quick filters: **this month** and **last month**. **Filters**: category, cost center, and payment-date range. Search is by description.

The amount shown is the posted amount. If it differs from the original obligation, the original appears as well. Who posted it, and when, is on the detail.

Shortcuts: `R` new posted income, `D` new posted expense, `T` transfer.

To **move balance between registers**, use **Transfer** — see [Transfer between cashiers](#transfer-between-cashiers).

Other actions on this screen:

- [Import a statement](/en/guide/financial/import)
- [Post multiple and settle pending items](/en/guide/financial/grouping)
- [Reconcile](/en/guide/financial/reconciliation)

## Post a payment

To settle an obligation, use **Post payment** or **Post receipt**.

1. Open the obligation in **To receive** or **To pay**
2. Choose **Post payment** or **Post receipt**
3. Check the **original amount** and, if needed, change the **paid amount** or **received amount**
4. Adjust the date, the register (among those you operate), and the payment details
5. Save

The system stores who posted and when.

### Payment details

On the form, under **Payment details**, you can add:

| Type | Use |
|------|-----|
| PIX code | Copy and paste; generates a QR code to scan in the bank app |
| Barcode | Generates the barcode image to scan |
| Digitable line | Boleto with 47 or 48 digits, or a 44-digit code |
| Bank details | Bank, branch, account, and beneficiary |
| Other | A field with a free-form name |

After you save, these details can be copied, edited, or removed.

### Attachments

On the same form, under **Attachments**, click or drag files. The limit is **50 MB** per file. On a new obligation, the file uploads when you save.

### Duplicate

In the row menu, **Duplicate** opens a new obligation with the original data. It does not duplicate a transfer, a grouped entry, or a cancelled item.

### Payment-method installments

If the frequency is **once** and the payment method **allows installments**, the form asks for the number of installments, up to the maximum set on the method.

## Recurrence

When you create with a frequency other than **once**, choose the mode:

| Mode | What happens |
|------|----------------|
| **Open-ended** | Creates 12 installments. The system keeps 12 ahead |
| **Exact quantity** | Creates only the number you enter (1 to 60) and does not generate more |

Frequencies: daily, weekly, monthly, quarterly, semiannual, and annual.

When you edit an item in the series that is not yet posted, choose:

- **This one only** — change only this obligation
- **All upcoming** — copy description, category, and register to items not yet posted
- **Apply amount** and **Apply payment details** — only if you also want those fields to change on upcoming items
- **Include due date** — only if you want to shift the following dates by the same interval

Already posted entries are not part of that change.

When you delete an item in the series, choose **only this**, **this and later**, or **all pending**.

## Transfer between cashiers

Moves balance from one register to another **immediately**. It is not a payable or a receivable: it does not enter results as income or expense. It only changes register balances and appears on the statement.

1. Open **Financial → Entries**
2. Click **Transfer** (shortcut `T`)
3. Choose source, destination, amount, description, and date
4. Save

The statement shows both sides with a **Transfer** badge and the other register. Editing amount, description, or date updates the pair. Deleting one side removes both.

You must be an operator with **create** permission on both registers. There is no recurrence or pending state: the movement is posted as soon as you save. A transfer does not trigger the due-today notice, is not part of settling open items, and stays out of result reports.

## Due-today notice

Every day at **8:00 a.m.** (Brasília time), register operators with view permission (or register admins) get a push for obligations **due today**. One notice per person per register, with no repeat on the same day.

Tapping opens **To pay** or **To receive** already on that register and the **today** filter. Transfers between cashiers do not trigger a notice. App notifications must stay on.

> Changelog: [v2026.9.11](/en/changelog/2026/09/2026.9.11)

## Cashiers

1. Open **Financial → Cashiers**
2. Create a register with a name, a description, and whether it is active
3. In **Manage Operators**, add people and set what each one can do on that register

Operator permissions:

| Permission | Effect |
|------------|--------|
| Administrator | Full access on that register, including reports |
| Can view | Sees entries and receives the due-today notice |
| Can view reports | Opens **Reports** for this register |
| Can create | Adds obligations, posted entries, and transfers |
| Can edit any record / only their own | Changes what already exists |
| Can delete any record / only their own | Removes what already exists |

You cannot remove the only operator on a register. Each person only sees registers where they are an operator.

**Reconciliation date** on the register blocks creating, editing, and deleting posted entries with a payment on or before that date. You can reconcile one by one without filling in that date. The steps are in [Reconciliation](/en/guide/financial/reconciliation).

## Categories

In **Financial → Categories**:

- Split **income** and **expense**
- Use a parent category to create subcategories
- Set a color
- A category that still has subcategories cannot be deleted

**Generate with AI** asks for a description of the business, suggests income and expense categories, and saves only after you review them.

## Payment methods

In **Financial → Payment methods**, register:

- Name and description
- Optional key, used by integrations
- Whether it is a credit payment and whether it requires confirmation
- Whether it allows installments and the maximum number
- Fee percentage (for example, a card fee)
- Whether it is active

The method chosen on an obligation or a posted entry uses these rules.

## Cost centers

Use **Financial → Cost centers** to track where company resources are consumed.

1. Enter a unique code, name, and optional description
2. Select the cost center when creating or editing an **expense**
3. Filter by cost center in **To receive**, **To pay**, or **Entries**
4. Deactivate centers that are no longer used; previous entries remain linked

Cost centers are optional and exclusive to expenses. Categories describe **the type of expense**; cost centers identify **the area responsible for it**.

## Reports

In **Financial → Reports** you only see registers where you are an **admin** or have **Can view reports**:

1. Pick a period and, optionally, a register (or all you can access)
2. **Cash flow** — settled and open income and expenses over time (transfers between registers are excluded)
3. **By category** — settled and open, with the parent category
4. **By cost center** — settled, open, and total expenses by area
5. **Receivable / payable** — aging on the period end date (current, 1–30, 31–60, 61–90, 90+)
6. **By register** — balance and movement comparison

Profiles with export permission download the current tab as CSV. A posted entry that only groups several accounts does not go into the report: the original accounts do, each with its category and cost center. See [Post multiple and settle pending items](/en/guide/financial/grouping).

## Permissions

- Module `financial` enabled
- Group permissions, when they exist: view all transactions, approve, and export reports
- Per-register permissions for each operator

## Guides in this module

- [Import a statement](/en/guide/financial/import)
- [Reconciliation](/en/guide/financial/reconciliation)
- [Post multiple and settle pending items](/en/guide/financial/grouping)

## Related

- [Billing](/en/guide/billing/)
- [POS](/en/guide/pos/)
- [Reports](/en/guide/reports/)
