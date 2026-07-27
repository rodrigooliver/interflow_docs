import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cuando No Sepa Responder","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/ai-agents/tools/unknown-response.md","filePath":"es/guide/ai-agents/tools/unknown-response.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/guide/ai-agents/tools/unknown-response.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cuando-no-sepa-responder" tabindex="-1">Cuando No Sepa Responder <a class="header-anchor" href="#cuando-no-sepa-responder" aria-label="Permalink to &quot;Cuando No Sepa Responder&quot;">​</a></h1><p>Define el comportamiento de la IA cuando no encuentra la respuesta en el contexto.</p><p><strong>Opciones:</strong></p><table tabindex="0"><thead><tr><th>Opción</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>Pausar agente</strong></td><td>Pausa la IA y espera intervención humana</td></tr><tr><td><strong>Guardar pregunta</strong></td><td>Registra la pregunta para análisis posterior</td></tr></tbody></table><p><strong>Por qué usar:</strong></p><ul><li>Identificar brechas en el entrenamiento del agente</li><li>Evitar respuestas inventadas</li><li>Recopilar preguntas frecuentes para mejorar el contexto</li></ul><p><strong>Visualizando preguntas guardadas:</strong></p><ol><li>En la pestaña Contexto, haga clic en <strong>&quot;Preguntas&quot;</strong></li><li>Vea todas las preguntas no respondidas</li><li>Use para mejorar el contexto del agente</li></ol><div class="info custom-block"><p class="custom-block-title">⚠️ Única</p><p>Esta acción solo puede ser agregada una vez por agente.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/ai-agents/tools/unknown-response.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unknownResponse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unknownResponse as default
};
