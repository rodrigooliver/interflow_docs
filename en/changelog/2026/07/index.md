# July 2026

Updates for July 2026.

## Versions

| Version | Date | Highlights |
|---------|------|------------|
| [2026.7.2](/en/changelog/2026/07/2026.7.2) | 07/03 | **DeepSeek Support** — new AI provider (V4 Flash/Pro models) available with your own key, in the AI Agent, Test Prompt, and Improve Text, with configurable Thinking Mode |
| [2026.7.1](/en/changelog/2026/07/2026.7.1) | 07/01 | **Flow Test Chat** — side panel in FlowBuilder to simulate conversations in real time, with active node indicator, debounce override and split mode with agent view |

---

## Month Summary

### ✨ New Features (4)
- **DeepSeek Support** (v2026.7.2) — new AI provider (DeepSeek V4 Flash/Pro) available with your own key, with configurable Thinking Mode (High/Maximum)
- **Flow Test Chat** (v2026.7.1) — complete environment in FlowBuilder for testing flows with a real customer, side panel, split view, real-time node indicator, and debounce override
- **Test Channel Badge** (v2026.7.1) — amber visual identifier in the chat header when the conversation is on a `test` type channel
- **Floating active node indicator** (v2026.7.1) — badge below the flow button in the agent header showing node name, debounce state, and time tooltip

### 🐛 Bug Fixes (2)
- **FK error when deleting test chat** (v2026.7.1) — deletion in correct order to avoid constraint violation between `chats` and `flow_sessions`
- **Debounce override not propagated** (v2026.7.1) — `debounceOverrideMs` now correctly passed to `createFlowEngine`

---

::: info 📝 Total
**2 releases** this month!
:::
