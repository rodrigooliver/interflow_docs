import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Disparos masivos","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/chat/bulk-messages.md","filePath":"es/guide/chat/bulk-messages.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/chat/bulk-messages.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="disparos-masivos" tabindex="-1">Disparos masivos <a class="header-anchor" href="#disparos-masivos" aria-label="Permalink to &quot;Disparos masivos&quot;">​</a></h1><p>Campañas por segmentos: mensaje directo, flujo WAHA o <strong>flujo silencioso</strong> en el último chat.</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p>Menú → <strong>Disparos masivos</strong>. Requiere <code>bulkMessages</code>.</p></div><h2 id="modos-de-envio" tabindex="-1">Modos de envío <a class="header-anchor" href="#modos-de-envio" aria-label="Permalink to &quot;Modos de envío&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Modo</th><th>Comportamiento</th><th>Notas</th></tr></thead><tbody><tr><td><code>message</code></td><td>Envía texto/plantilla</td><td>Plantillas oficiales <strong>APPROVED</strong></td></tr><tr><td><code>flow</code></td><td>Dispara flujo <code>general</code> vía WAHA</td><td>Delay ≥ 20s</td></tr><tr><td><code>silent_flow</code></td><td>Ejecuta <code>bulk_silent</code> en el <strong>último chat</strong> sin mensaje al cliente</td><td>Delay ≥ 5s; nodos de media/texto/input bloqueados</td></tr></tbody></table><h2 id="crear-campana" tabindex="-1">Crear campaña <a class="header-anchor" href="#crear-campana" aria-label="Permalink to &quot;Crear campaña&quot;">​</a></h2><ol><li>Abra <strong>Disparos masivos</strong> → <strong>Nueva</strong></li><li>Elija modo y filtros (canal, tags, etapas CRM, estado…)</li><li>Configure mensaje/plantilla/flujo e intervalo</li><li>Inicie — puede pausar o cancelar después</li></ol><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/channels/whatsapp-templates">Plantillas WhatsApp</a></li><li><a href="/es/guide/chat/tags">Tags</a></li><li><a href="/es/guide/crm/funnels">Embudos CRM</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/chat/bulk-messages.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bulkMessages = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bulkMessages as default
};
