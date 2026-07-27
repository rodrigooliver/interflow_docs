import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change Customer Name","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/change-customer-name.md","filePath":"en/guide/ai-agents/tools/change-customer-name.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/change-customer-name.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="change-customer-name" tabindex="-1">Change Customer Name <a class="header-anchor" href="#change-customer-name" aria-label="Permalink to &quot;Change Customer Name&quot;">​</a></h1><p>Allows the AI to update the customer&#39;s name in the record during conversation.</p><p><strong>When to use:</strong></p><ul><li>Customer provides a different name than registered</li><li>First interaction where the name is collected</li><li>Correction of misspelled names</li></ul><p><strong>Usage example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: My name is John Smith, not John Santos</span></span>
<span class="line"><span>🤖 AI: Done, John! I&#39;ve updated your record. How can I help you?</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="info custom-block"><p class="custom-block-title">⚠️ Unique</p><p>This action can only be added once per agent.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/change-customer-name.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCustomerName = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCustomerName as default
};
