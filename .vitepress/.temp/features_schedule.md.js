import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Agenda e Agendamentos","description":"","frontmatter":{},"headers":[],"relativePath":"features/schedule.md","filePath":"features/schedule.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/schedule.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agenda-e-agendamentos" tabindex="-1">Agenda e Agendamentos <a class="header-anchor" href="#agenda-e-agendamentos" aria-label="Permalink to &quot;Agenda e Agendamentos&quot;">​</a></h1><p>Calendários, disponibilidade, lembretes, fluxos silenciosos e booking público.</p><h2 id="destaques" tabindex="-1">Destaques <a class="header-anchor" href="#destaques" aria-label="Permalink to &quot;Destaques&quot;">​</a></h2><ul><li>Múltiplas agendas, disponibilidade e feriados</li><li><a href="/guide/schedule/push-reminders">Lembretes push</a></li><li><a href="/guide/schedule/silent-flows">Fluxos silenciosos por status</a></li><li><a href="/guide/schedule/booking">Agendamento público</a></li></ul><h2 id="guias" tabindex="-1">Guias <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guias&quot;">​</a></h2><ul><li><a href="/guide/schedule/">Visão geral da agenda</a></li><li><a href="/guide/schedule/push-reminders">Lembretes push</a></li><li><a href="/guide/schedule/silent-flows">Fluxos silenciosos</a></li><li><a href="/guide/schedule/booking">Booking público</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/schedule.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  schedule as default
};
