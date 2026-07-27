import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.9","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/11/2025.11.9.md","filePath":"en/changelog/2025/11/2025.11.9.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/11/2025.11.9.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-9" tabindex="-1">v2025.11.9 <a class="header-anchor" href="#v2025-11-9" aria-label="Permalink to &quot;v2025.11.9&quot;">​</a></h1><p>Release date: <strong>November 17, 2025</strong></p><hr><h2 id="new-feature" tabindex="-1">New Feature <a class="header-anchor" href="#new-feature" aria-label="Permalink to &quot;New Feature&quot;">​</a></h2><h3 id="duplicate-customer-blocking" tabindex="-1">Duplicate Customer Blocking <a class="header-anchor" href="#duplicate-customer-blocking" aria-label="Permalink to &quot;Duplicate Customer Blocking&quot;">​</a></h3><p>System now automatically detects and blocks duplicate customer creation.</p><h4 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-label="Permalink to &quot;How does it work?&quot;">​</a></h4><p>When trying to create a customer with data that already exists:</p><ol><li>System checks for existing records</li><li>If duplicate found, shows alert</li><li>Option to view existing customer</li><li>Or merge data into existing</li></ol><h4 id="detection-criteria" tabindex="-1">Detection criteria: <a class="header-anchor" href="#detection-criteria" aria-label="Permalink to &quot;Detection criteria:&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Field</th><th>Detection</th></tr></thead><tbody><tr><td>Phone</td><td>✅ Exact (ignores formatting)</td></tr><tr><td>Email</td><td>✅ Exact (case insensitive)</td></tr><tr><td>WhatsApp</td><td>✅ Exact (normalized)</td></tr></tbody></table><h4 id="what-happens-if-duplicate-is-found" tabindex="-1">What happens if duplicate is found? <a class="header-anchor" href="#what-happens-if-duplicate-is-found" aria-label="Permalink to &quot;What happens if duplicate is found?&quot;">​</a></h4><ul><li>🚫 New creation is blocked</li><li>🔗 Link to existing record shown</li><li>🔄 Option to merge data</li><li>✏️ Option to update existing</li></ul><div class="warning custom-block"><p class="custom-block-title">Attention</p><p>Automatic merge can be disabled in Settings → Customers → &quot;Allow duplicates&quot;.</p></div><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Clean customer base</li><li>✅ No split histories</li><li>✅ More accurate reports</li><li>✅ Better customer experience</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/11/2025.11.9.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_9 as default
};
