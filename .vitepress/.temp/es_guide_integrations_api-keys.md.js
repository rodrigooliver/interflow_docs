import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Claves de API","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/integrations/api-keys.md","filePath":"es/guide/integrations/api-keys.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/integrations/api-keys.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="claves-de-api" tabindex="-1">Claves de API <a class="header-anchor" href="#claves-de-api" aria-label="Permalink to &quot;Claves de API&quot;">​</a></h1><p>Genere claves para la <a href="/es/api/">API de Interflow</a>.</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p><strong>Configuración → API Keys</strong></p></div><ol><li><strong>Nueva clave</strong> → nombre → copie una vez → guarde segura</li><li>Autentíquese según <a href="/es/api/authentication">Autenticación</a></li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>La clave secreta suele mostrarse <strong>una sola vez</strong>.</p></div><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/api/">API</a></li><li><a href="/es/api/messages/send">Enviar mensaje</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/integrations/api-keys.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const apiKeys = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  apiKeys as default
};
