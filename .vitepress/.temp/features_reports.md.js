import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Relatórios e Analytics","description":"","frontmatter":{},"headers":[],"relativePath":"features/reports.md","filePath":"features/reports.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/reports.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="relatorios-e-analytics" tabindex="-1">Relatórios e Analytics <a class="header-anchor" href="#relatorios-e-analytics" aria-label="Permalink to &quot;Relatórios e Analytics&quot;">​</a></h1><p>Volume por agente/equipe, exportações e dashboards operacionais.</p><h2 id="guias" tabindex="-1">Guias <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guias&quot;">​</a></h2><ul><li><a href="/guide/reports/">Relatórios — visão geral</a></li><li><a href="/guide/reports/volume-reports">Volume de mensagens</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/reports.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reports as default
};
