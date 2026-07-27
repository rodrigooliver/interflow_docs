import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PDV (Ponto de Venda)","description":"","frontmatter":{},"headers":[],"relativePath":"features/pos.md","filePath":"features/pos.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/pos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pdv-ponto-de-venda" tabindex="-1">PDV (Ponto de Venda) <a class="header-anchor" href="#pdv-ponto-de-venda" aria-label="Permalink to &quot;PDV (Ponto de Venda)&quot;">​</a></h1><p>Vendas no balcão, produtos, pedidos, estoque e mesas.</p><h2 id="guia" tabindex="-1">Guia <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guia&quot;">​</a></h2><ul><li><a href="/guide/pos/">PDV — visão geral</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/pos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pos as default
};
