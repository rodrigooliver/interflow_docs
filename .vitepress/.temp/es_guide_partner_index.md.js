import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Portal del socio","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/partner/index.md","filePath":"es/guide/partner/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/partner/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="portal-del-socio" tabindex="-1">Portal del socio <a class="header-anchor" href="#portal-del-socio" aria-label="Permalink to &quot;Portal del socio&quot;">​</a></h1><p>Organizaciones revendidas, planes, facturas, comisiones y wallet Asaas.</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p>Menú → <strong>Portal del socio</strong>. Solo socios con programa aceptado y estado <strong>activo</strong>.</p></div><h2 id="pestanas" tabindex="-1">Pestañas <a class="header-anchor" href="#pestanas" aria-label="Permalink to &quot;Pestañas&quot;">​</a></h2><p>Organizaciones · Facturas · Comisiones · Cartera</p><h2 id="wallet" tabindex="-1">Wallet <a class="header-anchor" href="#wallet" aria-label="Permalink to &quot;Wallet&quot;">​</a></h2><p>Configure <code>asaas_wallet_id</code> en <strong>Cartera</strong>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Sin wallet, el split del socio <strong>no se aplica</strong>.</p></div><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/billing/">Facturación</a></li><li><a href="/es/guide/settings/">Configuración</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/partner/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
