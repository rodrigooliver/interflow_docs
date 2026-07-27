import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Informes y analytics","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/reports.md","filePath":"es/features/reports.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/reports.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="informes-y-analytics" tabindex="-1">Informes y analytics <a class="header-anchor" href="#informes-y-analytics" aria-label="Permalink to &quot;Informes y analytics&quot;">​</a></h1><p>Volumen por agente/equipo, exportaciones y dashboards.</p><h2 id="guias" tabindex="-1">Guías <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guías&quot;">​</a></h2><ul><li><a href="/es/guide/reports/">Informes</a></li><li><a href="/es/guide/reports/volume-reports">Volumen de mensajes</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/reports.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reports as default
};
