import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.1","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/12/2025.12.1.md","filePath":"es/changelog/2025/12/2025.12.1.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/12/2025.12.1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-1" tabindex="-1">v2025.12.1 <a class="header-anchor" href="#v2025-12-1" aria-label="Permalink to &quot;v2025.12.1&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>03 de Diciembre de 2025</strong></p><hr><h2 id="nueva-funcionalidad" tabindex="-1">Nueva Funcionalidad <a class="header-anchor" href="#nueva-funcionalidad" aria-label="Permalink to &quot;Nueva Funcionalidad&quot;">​</a></h2><h3 id="ia-ajusta-automaticamente-follow-ups-segun-contexto-de-la-conversacion" tabindex="-1">IA Ajusta Automáticamente Follow-ups Según Contexto de la Conversación <a class="header-anchor" href="#ia-ajusta-automaticamente-follow-ups-segun-contexto-de-la-conversacion" aria-label="Permalink to &quot;IA Ajusta Automáticamente Follow-ups Según Contexto de la Conversación&quot;">​</a></h3><p>La IA ahora adapta o pausa el follow-up según el progreso de la conversación, evitando contactos automáticos inapropiados.</p><h4 id="¿que-cambia" tabindex="-1">¿Qué cambia? <a class="header-anchor" href="#¿que-cambia" aria-label="Permalink to &quot;¿Qué cambia?&quot;">​</a></h4><ul><li><strong>Reprogramación inteligente</strong>: La IA reprograma el follow-up para una fecha específica cuando el cliente lo solicita (ej: &quot;hablamos el jueves&quot; o &quot;vuelvo el 25&quot;)</li><li><strong>Cancelación automática</strong>: Si el cliente ya cerró negocio o confirmó cita, el follow-up se pausa</li><li><strong>Contexto preservado</strong>: La IA retoma la conversación sabiendo exactamente qué tratar</li></ul><h4 id="¿como-habilitar" tabindex="-1">¿Cómo habilitar? <a class="header-anchor" href="#¿como-habilitar" aria-label="Permalink to &quot;¿Cómo habilitar?&quot;">​</a></h4><ol><li>Accede a <strong>Prompts</strong> en el menú lateral</li><li>Selecciona el prompt vinculado a tu flujo</li><li>Haz clic en <strong>Editar → Herramientas</strong></li><li>Agrega la acción <strong>&quot;Alterar Fecha de Retorno&quot;</strong></li><li>Configura el flujo y nodo de destino</li><li>Guarda los cambios</li></ol><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Atención más inteligente y humanizada</li><li>✅ Mejora la experiencia del cliente</li><li>✅ Reduce contactos innecesarios</li><li>✅ Libera la agenda de los agentes</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/12/2025.12.1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_1 as default
};
