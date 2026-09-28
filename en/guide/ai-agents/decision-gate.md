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
| Block only this interaction | No reply on this message. The next automatic message is evaluated again |
| Block and pause | No reply, and later messages do not enter the flow. A manual start still works |
| Call another AI Agent | JEV is not called. The same flow continues with the chosen agent |
| Skip the decision and run | The conversation agent replies as usual |

If block and pause matches together with the other rules, it wins.

---

## Outcome options

JEV picks one option from the case name and the criteria. Only options whose tag or stage the customer matches are included. With no filter, the option is always included. With both a tag and a stage, the customer must match both. If none match, JEV is not called and this agent runs.

| Effect | What happens |
|--------|----------------|
| Run the agent | This agent replies. Later messages in the same session do not go through the decision again |
| Call another AI Agent | The flow continues with the chosen agent. The session is marked decided and is not evaluated again on the next message |
| Do not reply | Does not run now. The customer's next message goes through the decision again |
| Do not reply and pause | No reply, and automatic attendance on this chat does not start again. A manual start still works |

On any effect you can also add tags, remove tags, or move the stage. That is extra to the decision.

When the agent does not continue, the chat shows a system message with the reason.
