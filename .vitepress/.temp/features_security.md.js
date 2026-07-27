import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Segurança e API","description":"","frontmatter":{},"headers":[],"relativePath":"features/security.md","filePath":"features/security.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/security.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="seguranca-e-api" tabindex="-1">Segurança e API <a class="header-anchor" href="#seguranca-e-api" aria-label="Permalink to &quot;Segurança e API&quot;">​</a></h1><p>Permissões granulares, chaves de API e boas práticas de isolamento por organização.</p><h2 id="guias" tabindex="-1">Guias <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guias&quot;">​</a></h2><ul><li><a href="/guide/settings/">Configurações</a></li><li><a href="/guide/teams/">Equipes</a></li><li><a href="/guide/integrations/api-keys">Chaves de API</a></li><li><a href="/api/">API — introdução</a></li><li><a href="/api/authentication">Autenticação da API</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/security.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const security = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  security as default
};
