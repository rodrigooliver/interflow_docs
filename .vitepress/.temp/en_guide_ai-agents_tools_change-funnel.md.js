import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change Funnel","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/change-funnel.md","filePath":"en/guide/ai-agents/tools/change-funnel.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/change-funnel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="change-funnel" tabindex="-1">Change Funnel <a class="header-anchor" href="#change-funnel" aria-label="Permalink to &quot;Change Funnel&quot;">​</a></h1><p>Moves the customer between sales/service funnel stages.</p><p><strong>Configuration:</strong></p><table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><strong>Source stages</strong></td><td>Which stages the customer can leave from</td></tr><tr><td><strong>Target stages</strong></td><td>Which stages they can be moved to</td></tr></tbody></table><p><strong>When to use:</strong></p><ul><li>Customer shows interest (move to &quot;Qualified&quot;)</li><li>Customer closes deal (move to &quot;Sold&quot;)</li><li>Customer asks not to be contacted (move to &quot;Not interested&quot;)</li></ul><p><strong>Usage example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: I want to close the Pro plan</span></span>
<span class="line"><span>🤖 AI: Excellent choice! I&#39;ll record your decision and a consultant </span></span>
<span class="line"><span>       will contact you to finalize.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[System: Customer moved to &quot;Closing&quot; stage]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/change-funnel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeFunnel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeFunnel as default
};
