# Online / Away status

Agents can show whether they are **Online** or **Away** in the sidebar, next to the avatar. Being away affects new-chat rotation and, if configured, sends an automatic message to customers in chats assigned to them.

Changelog: [v2026.8.5](/en/changelog/2026/08/2026.8.5)

---

## What happens while away

| Behavior | Detail |
|----------|--------|
| Rotation | The agent stops receiving new chats in their teams |
| Pending reservations | Chats reserved for them in `pending` are released and redistributed |
| Automatic message | Optional — only for chats **assigned** to them, when the customer writes |
| Cooldown | At most 1 notice every **30 minutes** per conversation |

Chats already with the agent (`in_progress`) are **not** transferred automatically. Work continues with them when they return.

---

## How to go away

1. In the sidebar, next to the avatar, click the **Online** / **Away** indicator
2. In the modal:
   - (Optional) enable **Send automatic message to customers in my chats**
   - Edit the text or use the default message
3. Confirm **Go away**
4. To return, open the status and choose **Go online**
5. Use **Refresh** in the modal to sync status from the server

---

## Automatic message

- Sent only if the option is enabled for that away session
- Only in chats **assigned** to the away agent
- Internally tagged as an automatic away message
- If the customer sends several messages in a row, the notice is not repeated within 30 minutes on that chat — even if the agent goes online and away again in that window

---

## Limitations

- Does not broadcast to all open chats when the pause is activated
- Does not cover customers in the queue without assignment to the agent
- On channels with a messaging window (e.g. official WhatsApp), delivery depends on channel rules
