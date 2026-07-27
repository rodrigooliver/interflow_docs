import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Módulo financiero","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/financial.md","filePath":"es/features/financial.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/financial.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="modulo-financiero" tabindex="-1">Módulo financiero <a class="header-anchor" href="#modulo-financiero" aria-label="Permalink to &quot;Módulo financiero&quot;">​</a></h1><p>Ingresos, gastos, cajas, categorías y métodos de pago.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Distinto de <a href="/es/features/billing">Facturación</a> (contratos/Asaas) y de la suscripción Interflow.</p></div><h2 id="guia" tabindex="-1">Guía <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guía&quot;">​</a></h2><ul><li><a href="/es/guide/financial/">Financiero</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/financial.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const financial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  financial as default
};
