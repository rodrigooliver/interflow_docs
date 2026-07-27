import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PDV (punto de venta)","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/pos.md","filePath":"es/features/pos.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/pos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pdv-punto-de-venta" tabindex="-1">PDV (punto de venta) <a class="header-anchor" href="#pdv-punto-de-venta" aria-label="Permalink to &quot;PDV (punto de venta)&quot;">​</a></h1><p>Ventas de mostrador, productos, pedidos, inventario y mesas.</p><h2 id="guia" tabindex="-1">Guía <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guía&quot;">​</a></h2><ul><li><a href="/es/guide/pos/">PDV</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/pos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pos as default
};
