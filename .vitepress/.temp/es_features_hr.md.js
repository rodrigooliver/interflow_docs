import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RRHH / Fichaje","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/hr.md","filePath":"es/features/hr.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/hr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rrhh-fichaje" tabindex="-1">RRHH / Fichaje <a class="header-anchor" href="#rrhh-fichaje" aria-label="Permalink to &quot;RRHH / Fichaje&quot;">​</a></h1><p>Control de jornada con fichaje, geofence, banco de horas y nómina.</p><h2 id="destacados" tabindex="-1">Destacados <a class="header-anchor" href="#destacados" aria-label="Permalink to &quot;Destacados&quot;">​</a></h2><ul><li>Fichajes con foto y GPS</li><li>Locales (geofence) y jornada semanal</li><li>Calendario, ausencias, banco de horas y nómina</li><li>Notificaciones push para gestores</li></ul><h2 id="guia" tabindex="-1">Guía <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guía&quot;">​</a></h2><ul><li><a href="/es/guide/hr/">RRHH / Fichaje</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/hr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hr as default
};
