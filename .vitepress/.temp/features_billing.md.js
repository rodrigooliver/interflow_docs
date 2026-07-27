import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cobrança (Contratos)","description":"","frontmatter":{},"headers":[],"relativePath":"features/billing.md","filePath":"features/billing.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/billing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cobranca-contratos" tabindex="-1">Cobrança (Contratos) <a class="header-anchor" href="#cobranca-contratos" aria-label="Permalink to &quot;Cobrança (Contratos)&quot;">​</a></h1><p>Contratos, parcelas, splits, recebedores e integração Asaas.</p><h2 id="guia" tabindex="-1">Guia <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guia&quot;">​</a></h2><ul><li><a href="/guide/billing/">Cobrança — visão geral</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/billing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billing as default
};
