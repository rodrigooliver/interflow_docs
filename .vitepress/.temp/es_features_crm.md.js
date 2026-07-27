import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CRM y clientes","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/crm.md","filePath":"es/features/crm.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/crm.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="crm-y-clientes" tabindex="-1">CRM y clientes <a class="header-anchor" href="#crm-y-clientes" aria-label="Permalink to &quot;CRM y clientes&quot;">​</a></h1><p>Gestión de clientes, campos personalizados y embudos Kanban con automatización.</p><h2 id="destacados" tabindex="-1">Destacados <a class="header-anchor" href="#destacados" aria-label="Permalink to &quot;Destacados&quot;">​</a></h2><ul><li>Perfil completo, historial y campos personalizados</li><li><a href="/es/guide/crm/funnels">Embudos de venta</a> con flujo <code>crm_stage_change</code></li><li>Segmentación por tags y etapas</li></ul><h2 id="guias" tabindex="-1">Guías <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guías&quot;">​</a></h2><ul><li><a href="/es/guide/crm/customers">Gestión de clientes</a></li><li><a href="/es/guide/crm/funnels">Embudos de venta</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/crm.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const crm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  crm as default
};
