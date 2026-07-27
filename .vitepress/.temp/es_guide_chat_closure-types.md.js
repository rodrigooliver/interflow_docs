import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tipos de cierre","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/chat/closure-types.md","filePath":"es/guide/chat/closure-types.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/chat/closure-types.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tipos-de-cierre" tabindex="-1">Tipos de cierre <a class="header-anchor" href="#tipos-de-cierre" aria-label="Permalink to &quot;Tipos de cierre&quot;">​</a></h1><p>Estandarice el motivo al cerrar un chat y, opcionalmente, dispare un flujo <code>attendance_closure</code> (p. ej. CSAT).</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p>Menú → <strong>Tipos de cierre</strong>.</p></div><ol><li>Cree un tipo (nombre)</li><li>Vincule un flujo <code>attendance_closure</code> si desea</li><li>El agente lo elige al cerrar</li></ol><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/chat/interface">Interfaz de chat</a></li><li><a href="/es/guide/flows/builder">Constructor de flujos</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/chat/closure-types.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const closureTypes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  closureTypes as default
};
