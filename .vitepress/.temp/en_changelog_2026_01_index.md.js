import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"January 2026","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/01/index.md","filePath":"en/changelog/2026/01/index.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2026/01/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="january-2026" tabindex="-1">January 2026 <a class="header-anchor" href="#january-2026" aria-label="Permalink to &quot;January 2026&quot;">​</a></h1><p>Updates for January 2026.</p><h2 id="versions" tabindex="-1">Versions <a class="header-anchor" href="#versions" aria-label="Permalink to &quot;Versions&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Version</th><th>Date</th><th>Highlights</th></tr></thead><tbody><tr><td><a href="/en/changelog/2026/01/2026.1.2">2026.1.2</a></td><td>01/21</td><td><strong>Granular CRM access control</strong>, Customer query by permission</td></tr><tr><td><a href="/en/changelog/2026/01/2026.1.1">2026.1.1</a></td><td>01/20</td><td><strong>Official WhatsApp Templates in bulk messaging</strong>, Flows triggered on any message</td></tr></tbody></table><hr><h2 id="monthly-summary" tabindex="-1">Monthly Summary <a class="header-anchor" href="#monthly-summary" aria-label="Permalink to &quot;Monthly Summary&quot;">​</a></h2><h3 id="new-features-4" tabindex="-1">New Features (4) <a class="header-anchor" href="#new-features-4" aria-label="Permalink to &quot;New Features (4)&quot;">​</a></h3><ul><li><strong>Granular CRM access control</strong> - Complete permissions system for agents to view only their customers in CRM</li><li><strong>Customer query by user permission</strong> - Agents with <code>agent_limited</code> view only their customers across all modules</li><li><strong>Official WhatsApp Templates in bulk messaging</strong> - Send pre-approved templates to multiple contacts</li><li><strong>Flows triggered on any message</strong> - Create intelligent automations based on keywords throughout the conversation</li></ul><hr><div class="info custom-block"><p class="custom-block-title">Total</p><p><strong>2 releases</strong> with <strong>4 features</strong> this month!</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/01/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
