import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Update Customer Contact","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/change-customer-contact.md","filePath":"en/guide/ai-agents/tools/change-customer-contact.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/change-customer-contact.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="update-customer-contact" tabindex="-1">Update Customer Contact <a class="header-anchor" href="#update-customer-contact" aria-label="Permalink to &quot;Update Customer Contact&quot;">​</a></h1><p>Allows the AI to <strong>save or update the customer’s phone, WhatsApp, or email</strong> when they share the contact in the conversation.</p><p><strong>When to use:</strong></p><ul><li>Customer provides an additional phone or WhatsApp</li><li>Update of the email shared in chat</li><li>Contact collection in onboarding or confirmation flows</li></ul><p><strong>Configuration:</strong></p><ol><li>Add the <strong>Update Customer Contact</strong> action</li><li>Select the allowed types: phone, WhatsApp, and/or email</li><li>Save the prompt</li></ol><div class="tip custom-block"><p class="custom-block-title">💡 Email</p><p>When the type is email, the value also updates the customer’s main email field.</p></div><p><strong>Usage example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: My WhatsApp is (11) 98888-7777</span></span>
<span class="line"><span>🤖 AI: Perfect! I&#39;ve saved that WhatsApp to your record.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="info custom-block"><p class="custom-block-title">⚠️ Unique</p><p>This action can be added only once per agent.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/change-customer-contact.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCustomerContact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCustomerContact as default
};
