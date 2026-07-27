import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UTM / Tracking de campañas","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/utm/index.md","filePath":"es/guide/utm/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/utm/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="utm-tracking-de-campanas" tabindex="-1">UTM / Tracking de campañas <a class="header-anchor" href="#utm-tracking-de-campanas" aria-label="Permalink to &quot;UTM / Tracking de campañas&quot;">​</a></h1><p>Campañas, leads, links de WhatsApp, formularios y píxeles.</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p>Menú → <strong>UTM</strong>. Requiere módulo <code>utm</code>.</p></div><h2 id="areas" tabindex="-1">Áreas <a class="header-anchor" href="#areas" aria-label="Permalink to &quot;Áreas&quot;">​</a></h2><p>Dashboard · Campañas · Detalles · Leads · Analytics · WhatsApp · Formularios · Píxeles (Facebook, Google Ads, GA)</p><h2 id="crear-una-campana" tabindex="-1">Crear una campaña <a class="header-anchor" href="#crear-una-campana" aria-label="Permalink to &quot;Crear una campaña&quot;">​</a></h2><ol><li><strong>UTM → Campañas → Nueva</strong></li><li>Defina nombre y parámetros UTM</li><li>Configure links WhatsApp, forms y píxeles</li><li>Revise leads y conviértalos en clientes del CRM</li></ol><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/crm/funnels">Embudos CRM</a></li><li><a href="/es/guide/crm/customers">Clientes</a></li><li><a href="/es/guide/chat/bulk-messages">Disparos masivos</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/utm/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
