import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Update Customer Data","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/update-customer-data.md","filePath":"en/guide/ai-agents/tools/update-customer-data.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/update-customer-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="update-customer-data" tabindex="-1">Update Customer Data <a class="header-anchor" href="#update-customer-data" aria-label="Permalink to &quot;Update Customer Data&quot;">​</a></h1><p>Updates custom fields in the customer record.</p><p><strong>Configuration:</strong></p><ol><li>Select the fields the AI can update</li><li>Define if they are required or optional</li><li>Save</li></ol><p><strong>Available fields:</strong></p><ul><li>Custom fields created in Settings</li><li>Standard system fields</li></ul><p><strong>Usage example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: My email is john@email.com</span></span>
<span class="line"><span>🤖 AI: Perfect! I&#39;ve saved your email. I can send confirmations there now.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/update-customer-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const updateCustomerData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  updateCustomerData as default
};
