# Billing Module

The Billing module is Interflow's integrated financial system. It allows you to manage contracts, installments, revenue splits among payees, payment gateway integration, and charge issuance/recording — all within the same platform.

::: tip 💡 Access
The module is available at **Left sidebar → Billing** (wallet icon).
:::

---

## Overview

The module consists of five main areas:

| Area | Description |
|------|-------------|
| **Contracts** | Manage client contracts, installments and status |
| **Payees** | Register who receives revenue splits |
| **Templates** | Reusable models for quick contract creation |
| **Payout Report** | View generated splits and control distributions |
| **Settings** | Payment gateway integration (Asaas) |

---

## Contracts

### What is a contract?

A contract represents a payment agreement with a client. It defines:

- **Linked client** – who will pay
- **Total amount and number of installments**
- **Charge mode** – per individual installment or single payment link
- **Currency**
- **Payment gateway** used (e.g. Asaas)
- **Revenue split** – how the received amount will be distributed among payees

### Contract Status

| Status | Description |
|--------|-------------|
| `Draft` | Contract created but not yet activated |
| `Active` | Contract in progress; charges can be generated |
| `Completed` | All installments have been paid |
| `Cancelled` | Contract manually closed |

### Creating a Contract

1. Go to **Billing → Contracts**
2. Click **New contract**
3. Choose between **creating from scratch** or **using a template**
4. Select the **client** (who will pay)
5. Fill in title, amount, installments, currency and gateway
6. Configure the **revenue split** (optional but recommended)
7. Click **Save**

> If the title is empty when selecting a template and client, it is automatically filled as **"Template Name – Client Name"**.

### Activating a Contract

Newly created contracts start as **Draft**. To put them into operation:

1. Open the contract
2. Click **Activate**
3. Confirm in the confirmation dialog

### Cancelling a Contract

When cancelling an **active** contract with Asaas integration:

- Pending/overdue installments are cancelled in the database
- Open charges in Asaas are **removed sequentially** (last to first — Asaas requirement for installment plans)
- An audit event is recorded

### Installments

Each contract has automatically generated installments. Each installment has:

- Number and due date
- Amount
- Status: `Pending`, `Overdue`, `Paid`, `Cancelled`
- Link to gateway charge (when generated)
- Payment origin indicator (**Asaas** or **Manual**)

#### Installment actions

| Action | When available |
|--------|----------------|
| Generate charge | "Per installment" mode, no existing charge |
| Generate payment link | "Payment link" mode, no existing charge |
| Mark as paid | Pending or overdue installments |

### Manually Recording a Payment

When an installment needs to be settled outside the gateway (e.g. cash payment, direct transfer):

1. Click **Mark as paid** on the installment
2. Enter the **amount received** (pre-filled with the installment amount)
3. Enter the **payment date** (default: today)
4. Click **Confirm payment**

The system then:
- Marks the charge as received in Asaas via `receiveInCash` (if there's an open charge — no financial movement in the Asaas account)
- Records the payment with `gateway: manual` and saves who made the entry
- Processes revenue splits automatically
- Checks whether the contract was completed

> If the installment has a gateway charge, a yellow warning is shown before confirmation.

---

## Payees

Payees are the people or companies that receive portions of contract revenue (splits).

### Payee Types

| Type | Description |
|------|-------------|
| `Percentage` | Receives a fixed percentage of the paid amount |
| `Fixed` | Receives a fixed amount per payment |
| `Fee` | Internal control of gateway fee (filled automatically) |
| `Remainder` | Receives what's left after all other splits |

### Registering a Payee

1. Go to **Billing → Payees**
2. Click **New payee**
3. Fill in name, type and optional details (CPF/CNPJ, bank/PIX in "Notes")
4. Save

::: tip Notes
The **Notes** field is ideal for storing the payee's PIX key or bank details. This information is shown when recording a payout, making the transfer easier.
:::

---

## Contract Templates

Templates let you standardize settings that repeat across contracts.

### What is configured in a template?

- Base title, amount, number of installments
- Currency and default payment gateway
- Charge mode (per installment or payment link)
- Pre-configured revenue split

### Required Payee in Template

When configuring a split in a template, you can mark **"Required payee"**. This means:

- In the template, the payee doesn't need to be filled
- When **generating a contract** from the template, the system requires that payee to be selected

Useful for splits whose payee varies per contract (e.g. the fee goes to the professional responsible for each case).

---

## Revenue Split

The revenue split defines how the amount paid by the client is distributed. Splits are configured per contract (or template) and processed automatically with each payment.

### Split Types

| Type | Behavior |
|------|----------|
| `Percentage` | Calculates X% of the paid amount. Sent to Asaas gateway automatically. |
| `Fixed` | Fixed amount per payment. Sent to the gateway. |
| `Fee` | Gateway fee amount (reported by Asaas in webhook). Marked as distributed automatically on payment date. **Never sent to the gateway.** |
| `Remainder` | Calculated after all other splits. Gateway fee deducted if configured. **Never sent to the gateway — always manual.** |

> Only **one Fee split** and **one Remainder split** are allowed per contract/template.

### Auto-distribute

The **Auto-distribute** field on a split makes the generated payout automatically marked as distributed at the time of payment. Ideal for internal payouts where no real transfer happens (e.g. the split goes to the company itself).

### Recording a Distribution

Non-automatic splits need to be manually recorded:

1. In the **Payout Report**, find the payout
2. Click **Record**
3. Enter the distribution date and amount paid
4. Confirm

---

## Payout Report

The report centralizes all splits generated by payments.

### Available filters

- **Period** – Filter by payout due date
- **Contract** – Filter by specific contract (modal selector)
- **Payee** – Filter by payee (modal selector)
- **Distribution type** – Auto or manual
- **Status** – Distributed or pending

### Report columns

| Column | Description |
|--------|-------------|
| Payee | Payee name |
| Type | Split type (percentage, fixed, fee, remainder) |
| Amount Due | Calculated amount for this split |
| Due Date | Payout due date |
| Installment Due | Client installment due date |
| Payment Date | Date when the client made the payment |
| Distribution | Type (auto/manual) |
| Distributed | Status (yes/no) |

---

## Payment Settings

### Integrating with Asaas

1. Go to **Billing → Settings**
2. Select **Asaas**
3. Enter your **API key** (starts with `$aact_...`)
4. Choose the environment (**Sandbox** for testing, **Production** for real use)
5. Save

> Stripe and Mercado Pago are coming soon.

### Configuring the Webhook

To receive payment notifications automatically:

1. In the Asaas panel → **My Account → Settings → Integrations → Webhook**
2. Add the URL: `https://node.interflow.chat/webhooks/asaas`
3. Select the events: `PAYMENT_RECEIVED`, `PAYMENT_CONFIRMED`, `PAYMENT_RECEIVED_IN_CASH`
4. In the **Authentication token** field, generate or define a secret key and copy the value
5. Save in Asaas
6. Paste that same key in the **Webhook secret key** field under **Billing → Settings** in Interflow

::: warning Security
The secret key ensures only legitimate Asaas events are processed. Without it, any request to the webhook URL would be accepted. **Keep the key in a safe place — it cannot be viewed again in Asaas.**
:::

### Charge Modes

| Mode | Description |
|------|-------------|
| **Per installment** | Each installment generates an individual charge in Asaas (bank slip, PIX, etc.) |
| **Payment link** | A single installment payment link is generated for the entire contract |

### Webhooks

Asaas sends events to Interflow whenever a payment is processed. The system:

- Automatically identifies if the payment belongs to a contract
- Records the payment with idempotency (avoids duplicates)
- Processes splits automatically
- **Ignores webhooks for already-paid installments** (e.g. `RECEIVED_IN_CASH` arriving after a manual entry)

---

## Full Flow

```
Create Template → Create Contract → Activate → Generate Charge → Client Pays
                                                                      ↓
                                                Asaas Webhook / Manual Entry
                                                                      ↓
                                                Splits processed automatically
                                                                      ↓
                                                Payout Report updated
                                                                      ↓
                                                Record distribution (manual or auto)
```

---

## FAQ

**Can I have multiple splits in the same contract?**
Yes. You can combine percentage + fixed + fee + remainder. The only restriction is one split of each type for `fee` and `remainder`.

**What happens if the Asaas webhook arrives after a manual entry?**
The system checks if the installment is already in `paid` status before processing. If already paid, the webhook is silently ignored.

**Is the "remainder" split sent to Asaas?**
No. The remainder is calculated internally after payment and fee deduction. It always remains pending for manual recording.

**How does the Asaas cancellation order work?**
For installment plans, Asaas requires charges to be cancelled from **last installment to first**. The system does this automatically when cancelling a contract.
