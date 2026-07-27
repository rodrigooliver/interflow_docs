import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.5","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/12/2025.12.5.md","filePath":"es/changelog/2025/12/2025.12.5.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/12/2025.12.5.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-5" tabindex="-1">v2025.12.5 <a class="header-anchor" href="#v2025-12-5" aria-label="Permalink to &quot;v2025.12.5&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>10 de Diciembre de 2025</strong></p><hr><h2 id="nueva-funcionalidad" tabindex="-1">Nueva Funcionalidad <a class="header-anchor" href="#nueva-funcionalidad" aria-label="Permalink to &quot;Nueva Funcionalidad&quot;">​</a></h2><h3 id="ia-crea-resumen-automatico-al-transferir-conversacion" tabindex="-1">IA Crea Resumen Automático al Transferir Conversación <a class="header-anchor" href="#ia-crea-resumen-automatico-al-transferir-conversacion" aria-label="Permalink to &quot;IA Crea Resumen Automático al Transferir Conversación&quot;">​</a></h3><p>Cuando la IA transfiere una conversación a un equipo o agente humano, ahora genera automáticamente un resumen de lo que ocurrió hasta ese momento.</p><h4 id="¿que-se-genera-en-el-resumen" tabindex="-1">¿Qué se genera en el resumen? <a class="header-anchor" href="#¿que-se-genera-en-el-resumen" aria-label="Permalink to &quot;¿Qué se genera en el resumen?&quot;">​</a></h4><ul><li>Motivo del contacto</li><li>Principales dudas del cliente</li><li>Pasos ya realizados</li><li>Datos importantes recolectados</li></ul><h4 id="¿como-activar" tabindex="-1">¿Cómo activar? <a class="header-anchor" href="#¿como-activar" aria-label="Permalink to &quot;¿Cómo activar?&quot;">​</a></h4><ol><li>Accede a <strong>&quot;Agente IA&quot;</strong> en el menú lateral</li><li>Selecciona el agente que deseas configurar</li><li>Haz clic en la pestaña <strong>&quot;Herramientas&quot;</strong></li><li>Localiza la acción <strong>&quot;Transferir para equipo&quot;</strong></li><li>Haz clic en el ícono de editar (✏️)</li><li>Marca la casilla: ✅ <strong>&quot;Generar resumen de la atención al transferir&quot;</strong></li><li>Haz clic en <strong>&quot;Guardar&quot;</strong></li></ol><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Transición suave entre IA y humanos</li><li>✅ Agente entiende el contexto rápidamente</li><li>✅ Sin necesidad de leer toda la conversación</li><li>✅ Atención más ágil y eficiente</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/12/2025.12.5.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_5 as default
};
