import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Embudo de Ventas (CRM Kanban)","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/crm/funnels.md","filePath":"es/guide/crm/funnels.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/crm/funnels.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="embudo-de-ventas-crm-kanban" tabindex="-1">Embudo de Ventas (CRM Kanban) <a class="header-anchor" href="#embudo-de-ventas-crm-kanban" aria-label="Permalink to &quot;Embudo de Ventas (CRM Kanban)&quot;">​</a></h1><p>Siga clientes en pipelines visuales con etapas personalizadas y automatizaciones.</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p>Menú → <strong>CRM</strong> → <strong>Embudos</strong>.</p></div><h2 id="crear-un-embudo" tabindex="-1">Crear un embudo <a class="header-anchor" href="#crear-un-embudo" aria-label="Permalink to &quot;Crear un embudo&quot;">​</a></h2><ol><li>Abra <strong>CRM → Embudos</strong></li><li><strong>Nuevo embudo</strong> → nombre + modo (<code>sales</code>, <code>pipeline</code>, <code>support</code>, <code>hidden</code>)</li><li>Etapas por defecto: Nuevo / En progreso / Concluido</li></ol><h2 id="etapas" tabindex="-1">Etapas <a class="header-anchor" href="#etapas" aria-label="Permalink to &quot;Etapas&quot;">​</a></h2><ul><li>Renombrar, reordenar, agregar</li><li>Vincular flujo <strong><code>crm_stage_change</code></strong></li><li>Mover clientes entre etapas/embudos</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>No se puede eliminar un embudo/etapa con clientes. Muévalos antes.</p></div><h2 id="kanban" tabindex="-1">Kanban <a class="header-anchor" href="#kanban" aria-label="Permalink to &quot;Kanban&quot;">​</a></h2><p>Arrastre tarjetas · Busque en el embudo · <strong>Solo míos</strong> · <strong>Ocultar finalizados</strong></p><div class="danger custom-block"><p class="custom-block-title">Evite bucles</p><p>Los flujos de cambio de etapa no deben usar nodos interactivos ni actualizar el embudo de forma que reentren en la misma etapa.</p></div><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/crm/customers">Clientes</a></li><li><a href="/es/guide/utm/">UTM</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/crm/funnels.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const funnels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  funnels as default
};
