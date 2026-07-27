import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Facturación (contratos)","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/billing.md","filePath":"es/features/billing.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/billing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="facturacion-contratos" tabindex="-1">Facturación (contratos) <a class="header-anchor" href="#facturacion-contratos" aria-label="Permalink to &quot;Facturación (contratos)&quot;">​</a></h1><p>Contratos, cuotas, splits, receptores e integración Asaas.</p><h2 id="guia" tabindex="-1">Guía <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guía&quot;">​</a></h2><ul><li><a href="/es/guide/billing/">Facturación</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/billing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billing as default
};
