import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Partner Portal","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/partner.md","filePath":"en/features/partner.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/partner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="partner-portal" tabindex="-1">Partner Portal <a class="header-anchor" href="#partner-portal" aria-label="Permalink to &quot;Partner Portal&quot;">​</a></h1><p>Manage resold organizations, plans, invoices, commissions, and Asaas wallet.</p><h2 id="guide" tabindex="-1">Guide <a class="header-anchor" href="#guide" aria-label="Permalink to &quot;Guide&quot;">​</a></h2><ul><li><a href="/en/guide/partner/">Partner portal</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/partner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  partner as default
};
