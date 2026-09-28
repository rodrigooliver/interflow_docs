# Decision before the agent

Before the conversation model runs, the AI Agent can decide whether it should act. The decision uses JEV and does not write the reply to the customer.

Changelog: [v2026.9.15](/en/changelog/2026/09/2026.9.15)

---

## Where to configure it

1. Open the AI Agent
2. Go to the **Decision** tab
3. Turn on **Evaluate before running the agent**

Starting a flow by hand skips this decision. Running the agent on a single message skips it too.

---

## Conditions before the decision

Optional. If the customer is already on a tag or stage, the rule applies without calling JEV.

| Type | What happens |
|------|----------------|
| Block the agent | No reply on this message. The next automatic message is evaluated again |
| Skip the decision and run | The conversation agent replies as usual |

If a block rule and a skip rule both match, block wins.

---

## Outcome options

JEV picks one option from the instruction and each option's text.

| Effect | What happens |
|--------|----------------|
| Continue | The conversation agent runs. Later messages in the same session do not go through the decision again |
| Pause automatic | No reply, and automatic attendance on this chat does not start again. A manual start still works |
| Try again | No reply now. The customer's next message goes through the decision again |

On any effect you can also add tags, remove tags, or move the stage. That is extra to the decision.

When the agent does not continue, the chat shows a system message with the reason.
