# Teams

Organize agents into groups, define leaders, and configure automatic conversation distribution.

## Overview

Teams group organization users to:

- Filter conversations by group in the chat list
- Transfer conversations between specialized groups (sales, support, billing)
- Trigger automatic flows when receiving a transfer
- **Automatically distribute conversations via round-robin** among available members

## Accessing Teams

1. In the main menu, go to **Settings**
2. Click the **Teams** tab
3. Create, edit, or manage members for each team

::: tip 💡 Permission
Team management requires **Owner** or **Admin** profile.
:::

## Create and edit a team

| Field | Description |
|-------|-------------|
| **Name** | Team identifier |
| **Description** | Optional internal documentation |
| **Default team** | Used as default destination for new conversations |
| **Automatic flow** | *Team transfer* flow type started when a chat is transferred to this team |

## Team members

Each member can be a **Leader** or **Member**. Leaders can be notified when round-robin finds no available agent (configurable).

**Per-member actions (⋮ menu):**

| Action | Effect |
|--------|--------|
| **Manual break** | Member temporarily skipped in round-robin |
| **On-call** | Prioritized even outside schedule (when fallback uses on-call) |
| **Availability schedules** | Weekly schedule and exceptions by timezone |
| **Include / Exclude from round-robin** | Remove or re-add member to automatic queue |
| **Move up / down** | Change position in round-robin order |
| **Set as next** | Next distributed conversation goes to this member (if available) |

---

## Automatic round-robin distribution {#automatic-round-robin-distribution}

Automatic distribution sends **pending**, **unassigned** conversations to the next eligible team member following the configured order.

### When is round-robin triggered?

Configure one or more **triggers**:

| Trigger | Description |
|---------|-------------|
| **New conversation** | Individual chat created and entering the team queue |
| **Team transfer** | Chat transferred to this team |
| **Agent leave** | Agent closes/leaves and chat returns to pending |
| **Flow node (round-robin)** | Automation flow triggers distribution |

::: info ℹ️ Eligibility
Round-robin only acts on **pending**, **unassigned** chats from **non-spam** customers that are **not external groups**.
:::

### Assignment modes

| Mode | Chat status | Behavior |
|------|-------------|----------|
| **Auto-attend** | `in_progress` | Automatically starts the conversation for the chosen agent |
| **Reserve agent** | `pending` | Keeps pending but already indicates who should attend |

#### Auto-attend mode

- Agent receives push notification
- System message: *"Automatically assigned by round-robin to {name}"*
- Best when the team should take over immediately

#### Reserve agent mode

- Chat stays **pending** in the queue
- `assigned_to` points to the reserved agent
- System message: *"Reserved by round-robin for {name}"*
- Reserved agent clicks **Attend** when ready
- Best when agents need time to prepare before starting

### Locked reservation (Reserve agent mode)

Set minutes to restrict who can attend:

| Field | When it applies |
|-------|-----------------|
| **Working hours reservation (min)** | Agent within configured schedule |
| **Off hours reservation (min)** | Outside schedule, manual break, or fallback assignment |

**With lock active:**

- Only the reserved agent can click **Attend**
- Other members see: *"Reserved for {name} until {time}"*
- After expiry, any team member can attend

**With empty fields:**

- Reservation indicates the agent but **does not block** other members

::: tip 💡 Tip
Use a shorter working-hours period (e.g. 5 min) and longer off-hours period (e.g. 15 min) when fallback assigns outside schedule.
:::

### Fallback — when no one is available

If no member is eligible during working hours, the system tries **strategies in configured order**:

| Strategy | Description |
|----------|-------------|
| **Automatic retry** | Reschedules attempt after X minutes |
| **Ignore schedule** | Round-robin outside working hours (respects manual break) |
| **On-call** | Only members marked on-call |
| **Customer's last agent** | Who previously served this customer |
| **Least busy** | Agent with fewest in-progress conversations |
| **Team leader** | Assigns to an available leader |
| **Overflow team** | Transfers to another team |
| **Team queue** | Keeps unassigned; can notify leaders |

Also configure:

- **Retry interval** (minutes)
- **Max attempts** (or unlimited)
- **Overflow team**
- **Notify leader on queue fallback**

### Round-robin status

On each team card with round-robin enabled, the **Round-robin status** panel shows:

- **Next** — who receives the next distribution
- **Last** — who received the last one
- **Queue order** — full list with availability badges

Managers can use **⋮ → Set as next** to manually adjust the queue.

### Availability schedules

Per member, configure:

- **Timezone**
- **Weekly schedule** (intervals per weekday)
- **Exceptions** (holidays, one-off time off)

Outside working hours, the member is **skipped in strict round-robin** (but may be reached via fallback).

**Priorities:**

1. Manual break → always skipped
2. On-call → prioritized in `on_call` fallback
3. Weekly schedule → defines working hours
4. Exceptions → block specific dates/times

### Round-robin in automation flows

Use the **Round-robin** node in the flow builder to trigger distribution:

- Can use the chat's **current team** or select another team
- Useful after automated triage or bot steps

---

## List and chat experience

### Badge in the conversation list

Pending chats with active reservation show a marker:

| Viewer | Badge |
|--------|-------|
| Reserved agent | **Reserved for you** (indigo) |
| Other members | **Reserved · {name}** (amber) |

Hover for expiry time and mode (working/off hours).

### Inside the chat (pending mode)

- Reserved agent: **Attend** button available
- Other members: amber banner with warning, button hidden
- System messages record reservation or auto-assignment

---

## Best practices

1. **Order the queue** based on your operation (experience, rotation, etc.)
2. **Enable schedules** to avoid notifications outside working hours
3. **Use manual break** for lunch and meetings — no need to exclude from round-robin
4. **Test fallback** with a small team before production
5. **Pending mode + reservation** works well when agents must finish current chats first

---

## Next Steps

- [Settings](/en/guide/settings/) — general support preferences
- [Chat Interface](/en/guide/chat/interface) — list, filters, and actions
- [Flow Builder](/en/guide/flows/builder) — automations with round-robin node
