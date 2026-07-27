import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.4.9","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2026/04/2026.4.9.md","filePath":"es/changelog/2026/04/2026.4.9.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2026/04/2026.4.9.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-4-9" tabindex="-1">v2026.4.9 <a class="header-anchor" href="#v2026-4-9" aria-label="Permalink to &quot;v2026.4.9&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>22 de abril de 2026</strong></p><hr><h2 id="correcciones" tabindex="-1">Correcciones <a class="header-anchor" href="#correcciones" aria-label="Permalink to &quot;Correcciones&quot;">​</a></h2><h3 id="seleccion-multiple-de-mensajes-en-el-chat-crear-tarea" tabindex="-1">Selección múltiple de mensajes en el chat (crear tarea) <a class="header-anchor" href="#seleccion-multiple-de-mensajes-en-el-chat-crear-tarea" aria-label="Permalink to &quot;Selección múltiple de mensajes en el chat (crear tarea)&quot;">​</a></h3><p>En el modo de selección de mensajes (por ejemplo, para generar tareas desde el chat), al hacer clic <strong>directamente en el icono de la casilla</strong> a veces se perdía la selección o se salía del modo de forma inesperada, mientras que el clic en el cuerpo del mensaje funcionaba bien.</p><p>La causa era la combinación de <code>&lt;label&gt;</code> con <code>&lt;input type=&quot;checkbox&quot;&gt;</code> oculto: el evento de cambio y el clic de la fila podían invocar el mismo <code>handleSelectMessage</code> dos veces seguidas, revirtiendo la selección. La interfaz ahora usa un solo manejador de clic con <code>stopPropagation</code>, conservando el mismo aspecto de casilla.</p><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Selección múltiple fiable al pulsar en la casilla o en el mensaje</li><li>✅ Flujo más claro y rápido al crear tareas a partir de varios mensajes</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2026/04/2026.4.9.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_4_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_4_9 as default
};
