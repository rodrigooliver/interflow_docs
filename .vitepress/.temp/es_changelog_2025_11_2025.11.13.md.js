import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.13","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/11/2025.11.13.md","filePath":"es/changelog/2025/11/2025.11.13.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/11/2025.11.13.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-13" tabindex="-1">v2025.11.13 <a class="header-anchor" href="#v2025-11-13" aria-label="Permalink to &quot;v2025.11.13&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>25 de Noviembre de 2025</strong></p><hr><h2 id="correccion" tabindex="-1">Corrección <a class="header-anchor" href="#correccion" aria-label="Permalink to &quot;Corrección&quot;">​</a></h2><h3 id="seleccion-de-horarios-en-el-flujo" tabindex="-1">Selección de Horarios en el Flujo <a class="header-anchor" href="#seleccion-de-horarios-en-el-flujo" aria-label="Permalink to &quot;Selección de Horarios en el Flujo&quot;">​</a></h3><p>Corregido un bug donde la selección de horarios en el flujo no funcionaba correctamente.</p><h4 id="¿que-fue-corregido" tabindex="-1">¿Qué fue corregido? <a class="header-anchor" href="#¿que-fue-corregido" aria-label="Permalink to &quot;¿Qué fue corregido?&quot;">​</a></h4><ul><li>❌ <strong>Antes</strong>: Al seleccionar un horario en el flujo, el slot no estaba siendo reservado correctamente</li><li>✅ <strong>Después</strong>: La selección de horario ahora reserva el slot correctamente y valida la disponibilidad</li></ul><h4 id="escenarios-afectados" tabindex="-1">Escenarios afectados: <a class="header-anchor" href="#escenarios-afectados" aria-label="Permalink to &quot;Escenarios afectados:&quot;">​</a></h4><ul><li>📅 Agendamiento de citas vía flujo</li><li>⏰ Selección de horarios disponibles</li><li>🔄 Confirmación de slot reservado</li></ul><h4 id="comportamiento-despues-de-la-correccion" tabindex="-1">Comportamiento después de la corrección: <a class="header-anchor" href="#comportamiento-despues-de-la-correccion" aria-label="Permalink to &quot;Comportamiento después de la corrección:&quot;">​</a></h4><ol><li>Cliente selecciona el horario deseado</li><li>Sistema valida disponibilidad en tiempo real</li><li>Slot es temporalmente reservado</li><li>Al confirmar, se hace la reserva permanente</li><li>Si cancela, slot es liberado</li></ol><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Sin más reservas duplicadas</li><li>✅ Disponibilidad precisa</li><li>✅ Agendamiento confiable</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/11/2025.11.13.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_13 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_13 as default
};
