import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Transfer to Team","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/transfer-to-team.md","filePath":"en/guide/ai-agents/tools/transfer-to-team.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/transfer-to-team.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="transfer-to-team" tabindex="-1">Transfer to Team <a class="header-anchor" href="#transfer-to-team" aria-label="Permalink to &quot;Transfer to Team&quot;">​</a></h1><p>Forwards the service to a human team.</p><p><strong>Configuration options:</strong></p><table tabindex="0"><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><strong>Allowed teams</strong></td><td>Select which teams the AI can transfer to</td></tr><tr><td><strong>Pause agent</strong></td><td>Pauses the AI after transfer</td></tr><tr><td><strong>Skip related flow</strong></td><td>Doesn&#39;t execute flows linked to the team</td></tr><tr><td><strong>Generate summary</strong></td><td>Creates automatic conversation summary</td></tr></tbody></table><p><strong>Automatic Summary:</strong></p><p>When enabled, the summary includes:</p><ul><li>Reason for contact</li><li>Main customer questions</li><li>Steps already taken by AI</li><li>Data collected during conversation</li></ul><p><strong>Usage example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: I need to speak to a human about a technical issue</span></span>
<span class="line"><span>🤖 AI: Got it! I&#39;ll transfer you to our technical support team. </span></span>
<span class="line"><span>       One moment, please...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[System: Chat transferred to &quot;Technical Support&quot; with summary]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/transfer-to-team.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transferToTeam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  transferToTeam as default
};
