import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Portal del socio","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/partner.md","filePath":"es/features/partner.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/partner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="portal-del-socio" tabindex="-1">Portal del socio <a class="header-anchor" href="#portal-del-socio" aria-label="Permalink to &quot;Portal del socio&quot;">​</a></h1><p>Gestione organizaciones revendidas, planes, facturas, comisiones y wallet Asaas.</p><h2 id="guia" tabindex="-1">Guía <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guía&quot;">​</a></h2><ul><li><a href="/es/guide/partner/">Portal del socio</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/partner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  partner as default
};
