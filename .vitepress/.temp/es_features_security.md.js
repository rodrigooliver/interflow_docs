import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Seguridad y API","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/security.md","filePath":"es/features/security.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/security.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="seguridad-y-api" tabindex="-1">Seguridad y API <a class="header-anchor" href="#seguridad-y-api" aria-label="Permalink to &quot;Seguridad y API&quot;">​</a></h1><p>Permisos granulares, claves de API y aislamiento por organización.</p><h2 id="guias" tabindex="-1">Guías <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guías&quot;">​</a></h2><ul><li><a href="/es/guide/settings/">Configuración</a></li><li><a href="/es/guide/teams/">Equipos</a></li><li><a href="/es/guide/integrations/api-keys">Claves de API</a></li><li><a href="/es/api/">API</a></li><li><a href="/es/api/authentication">Autenticación</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/security.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const security = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  security as default
};
