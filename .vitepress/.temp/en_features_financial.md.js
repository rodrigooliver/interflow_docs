import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Financial Module","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/financial.md","filePath":"en/features/financial.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/financial.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="financial-module" tabindex="-1">Financial Module <a class="header-anchor" href="#financial-module" aria-label="Permalink to &quot;Financial Module&quot;">​</a></h1><p>Income, expenses, cashiers, categories, and payment methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Different from <a href="/en/features/billing">Customer Billing</a> (contracts/Asaas) and Interflow subscription billing.</p></div><h2 id="guide" tabindex="-1">Guide <a class="header-anchor" href="#guide" aria-label="Permalink to &quot;Guide&quot;">​</a></h2><ul><li><a href="/en/guide/financial/">Financial overview</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/financial.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const financial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  financial as default
};
