import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Agenda y citas","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/schedule.md","filePath":"es/features/schedule.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/schedule.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agenda-y-citas" tabindex="-1">Agenda y citas <a class="header-anchor" href="#agenda-y-citas" aria-label="Permalink to &quot;Agenda y citas&quot;">​</a></h1><p>Calendarios, disponibilidad, recordatorios, flujos silenciosos y reserva pública.</p><h2 id="destacados" tabindex="-1">Destacados <a class="header-anchor" href="#destacados" aria-label="Permalink to &quot;Destacados&quot;">​</a></h2><ul><li>Múltiples agendas, disponibilidad y feriados</li><li><a href="/es/guide/schedule/push-reminders">Recordatorios push</a></li><li><a href="/es/guide/schedule/silent-flows">Flujos silenciosos por estado</a></li><li><a href="/es/guide/schedule/booking">Reserva pública</a></li></ul><h2 id="guias" tabindex="-1">Guías <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guías&quot;">​</a></h2><ul><li><a href="/es/guide/schedule/">Agenda</a></li><li><a href="/es/guide/schedule/push-reminders">Recordatorios push</a></li><li><a href="/es/guide/schedule/silent-flows">Flujos silenciosos</a></li><li><a href="/es/guide/schedule/booking">Booking público</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/schedule.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  schedule as default
};
