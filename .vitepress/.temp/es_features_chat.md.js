import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chat y atención","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/chat.md","filePath":"es/features/chat.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/chat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chat-y-atencion" tabindex="-1">Chat y atención <a class="header-anchor" href="#chat-y-atencion" aria-label="Permalink to &quot;Chat y atención&quot;">​</a></h1><p>Herramientas del día a día: bandeja, atajos, tags, cierre y campañas.</p><h2 id="destacados" tabindex="-1">Destacados <a class="header-anchor" href="#destacados" aria-label="Permalink to &quot;Destacados&quot;">​</a></h2><ul><li><a href="/es/guide/chat/interface">Interfaz de chat</a></li><li><a href="/es/guide/chat/bulk-messages">Disparos masivos</a></li><li><a href="/es/guide/chat/tags">Tags</a> y <a href="/es/guide/chat/closure-types">tipos de cierre</a></li><li><a href="/es/guide/chat/message-shortcuts">Atajos</a> y <a href="/es/guide/chat/text-enhancer">mejorador de texto</a></li><li>Chat interno entre agentes</li><li><a href="/es/guide/tasks">Mis tareas</a></li></ul><h2 id="guias" tabindex="-1">Guías <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guías&quot;">​</a></h2><ul><li><a href="/es/guide/chat/interface">Interfaz de chat</a></li><li><a href="/es/guide/chat/bulk-messages">Disparos masivos</a></li><li><a href="/es/guide/chat/tags">Tags</a></li><li><a href="/es/guide/chat/closure-types">Tipos de cierre</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chat as default
};
