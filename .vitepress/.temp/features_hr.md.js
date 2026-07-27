import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RH / Ponto","description":"","frontmatter":{},"headers":[],"relativePath":"features/hr.md","filePath":"features/hr.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/hr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rh-ponto" tabindex="-1">RH / Ponto <a class="header-anchor" href="#rh-ponto" aria-label="Permalink to &quot;RH / Ponto&quot;">​</a></h1><p>Controle de jornada com cartão ponto, geofence, banco de horas e folha.</p><h2 id="destaques" tabindex="-1">Destaques <a class="header-anchor" href="#destaques" aria-label="Permalink to &quot;Destaques&quot;">​</a></h2><ul><li>Batidas com foto e GPS</li><li>Locais (geofence) e jornada semanal por colaborador</li><li>Calendário, ausências, banco de horas e prévia de folha</li><li>Notificações push para gestores</li></ul><h2 id="guia" tabindex="-1">Guia <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guia&quot;">​</a></h2><ul><li><a href="/guide/hr/">RH / Ponto — visão geral</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/hr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hr as default
};
