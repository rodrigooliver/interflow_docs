import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Portal do Parceiro","description":"","frontmatter":{},"headers":[],"relativePath":"features/partner.md","filePath":"features/partner.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/partner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="portal-do-parceiro" tabindex="-1">Portal do Parceiro <a class="header-anchor" href="#portal-do-parceiro" aria-label="Permalink to &quot;Portal do Parceiro&quot;">​</a></h1><p>Organize organizações revendidas, planos, faturas, comissões e wallet Asaas.</p><h2 id="guia" tabindex="-1">Guia <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guia&quot;">​</a></h2><ul><li><a href="/guide/partner/">Portal do Parceiro</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/partner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  partner as default
};
