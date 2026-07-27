import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Update Customer Address","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/change-customer-address.md","filePath":"en/guide/ai-agents/tools/change-customer-address.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/change-customer-address.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="update-customer-address" tabindex="-1">Update Customer Address <a class="header-anchor" href="#update-customer-address" aria-label="Permalink to &quot;Update Customer Address&quot;">​</a></h1><p>Allows the AI to <strong>save or update the customer address</strong> in the record when they provide the details in the conversation (street, number, city, state, ZIP code, etc.) or send a <strong>GPS location</strong>.</p><p><strong>When to use:</strong></p><ul><li>Customer provides a delivery or billing address</li><li>Customer sends a location pin on WhatsApp</li><li>Update of an existing default address</li><li>Address collection in order or visit flows</li></ul><p><strong>What the AI can save:</strong></p><ul><li>Street and number (or full address line)</li><li>Complement, city, state, and ZIP code</li><li>Country and optional address label</li><li>Latitude and longitude (GPS)</li><li>Delivery/access instructions (e.g. intercom, gate)</li><li>Address marked as default (updates the existing one or creates a new one)</li></ul><p><strong>GPS location:</strong></p><ul><li>Accepts separate coordinates (<code>latitude</code> / <code>longitude</code>) or the location-message format (e.g. <code>-3.03, -59.98</code>)</li><li>If only GPS arrives, the system tries to complete street, city, and related fields via reverse geocoding (Google Maps with a configured key, or Nominatim)</li></ul><p><strong>Usage example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: My address is 120 Flower St, apt 3, São Paulo - SP, ZIP 01310-100</span></span>
<span class="line"><span>🤖 AI: Done! I&#39;ve saved that address to your record. Anything else you need?</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: [sends map location]</span></span>
<span class="line"><span>🤖 AI: Got your location — I&#39;ve updated the address on your record.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">💡 Automatic context</p><p>Saved addresses are also included in the agent’s first <strong>Customer info</strong> context message, so the AI does not need to ask again.</p></div><div class="info custom-block"><p class="custom-block-title">⚠️ Unique</p><p>This action can be added only once per agent.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/change-customer-address.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCustomerAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCustomerAddress as default
};
