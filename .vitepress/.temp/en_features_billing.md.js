import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customer Billing","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/billing.md","filePath":"en/features/billing.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/billing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="customer-billing" tabindex="-1">Customer Billing <a class="header-anchor" href="#customer-billing" aria-label="Permalink to &quot;Customer Billing&quot;">​</a></h1><p>Contracts, installments, splits, payees, and Asaas integration.</p><h2 id="guide" tabindex="-1">Guide <a class="header-anchor" href="#guide" aria-label="Permalink to &quot;Guide&quot;">​</a></h2><ul><li><a href="/en/guide/billing/">Billing overview</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/billing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billing as default
};
