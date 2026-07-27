import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Recursos","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/index.md","filePath":"es/features/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="recursos" tabindex="-1">Recursos <a class="header-anchor" href="#recursos" aria-label="Permalink to &quot;Recursos&quot;">​</a></h1><p>Explore las capacidades de Interflow. Use el <strong>menú izquierdo</strong> para navegar por área.</p><h2 id="vision-general" tabindex="-1">Visión general <a class="header-anchor" href="#vision-general" aria-label="Permalink to &quot;Visión general&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Recurso</th><th>Qué hace</th></tr></thead><tbody><tr><td><a href="/es/features/channels">Atención multicanal</a></td><td>WhatsApp, Instagram, Facebook y Email en una bandeja</td></tr><tr><td><a href="/es/features/chat">Chat y atención</a></td><td>Bandeja, tags, disparos, atajos y chat interno</td></tr><tr><td><a href="/es/features/automation">Automatización e IA</a></td><td>Flujos visuales, agentes IA e integraciones</td></tr><tr><td><a href="/es/features/crm">CRM y clientes</a></td><td>Perfiles, campos personalizados y embudos Kanban</td></tr><tr><td><a href="/es/features/schedule">Agenda</a></td><td>Calendario, recordatorios, flujos silenciosos y booking</td></tr><tr><td><a href="/es/features/hr">RRHH / Fichaje</a></td><td>Fichaje, geofence, banco de horas y nómina</td></tr><tr><td><a href="/es/features/documents">Documentos</a></td><td>Plantillas con variables y condicionales</td></tr><tr><td><a href="/es/features/financial">Financiero</a></td><td>Ingresos, gastos, cajas y categorías</td></tr><tr><td><a href="/es/features/billing">Facturación</a></td><td>Contratos, cuotas, splits y Asaas</td></tr><tr><td><a href="/es/features/pos">PDV</a></td><td>Ventas, productos, pedidos, inventario y mesas</td></tr><tr><td><a href="/es/features/utm">UTM</a></td><td>Campañas, leads, formularios y píxeles</td></tr><tr><td><a href="/es/features/medical">Médico (EMR)</a></td><td>Pacientes, consultas, historias y recetas</td></tr><tr><td><a href="/es/features/reports">Informes</a></td><td>Volumen por agente/equipo y exportaciones</td></tr><tr><td><a href="/es/features/partner">Portal del socio</a></td><td>Organizaciones, planes, comisiones y wallet</td></tr><tr><td><a href="/es/features/security">Seguridad y API</a></td><td>Permisos granulares y claves de API</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">¿Prefiere el paso a paso?</p><p>Las <strong>Guías</strong> traen la configuración completa. Cada recurso enlaza a la documentación detallada.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
