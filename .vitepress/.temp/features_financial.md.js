import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Módulo Financeiro","description":"","frontmatter":{},"headers":[],"relativePath":"features/financial.md","filePath":"features/financial.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/financial.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="modulo-financeiro" tabindex="-1">Módulo Financeiro <a class="header-anchor" href="#modulo-financeiro" aria-label="Permalink to &quot;Módulo Financeiro&quot;">​</a></h1><p>Receitas, despesas, caixas, categorias e métodos de pagamento da operação.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Diferente de <a href="/features/billing">Cobrança</a> (contratos/Asaas) e da assinatura Interflow.</p></div><h2 id="guia" tabindex="-1">Guia <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guia&quot;">​</a></h2><ul><li><a href="/guide/financial/">Financeiro — visão geral</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/financial.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const financial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  financial as default
};
