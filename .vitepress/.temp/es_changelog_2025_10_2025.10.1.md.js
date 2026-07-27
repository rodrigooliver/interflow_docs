import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.10.1","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/10/2025.10.1.md","filePath":"es/changelog/2025/10/2025.10.1.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/10/2025.10.1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-10-1" tabindex="-1">v2025.10.1 <a class="header-anchor" href="#v2025-10-1" aria-label="Permalink to &quot;v2025.10.1&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>25 de Octubre de 2025</strong></p><hr><h2 id="nueva-funcionalidad" tabindex="-1">Nueva Funcionalidad <a class="header-anchor" href="#nueva-funcionalidad" aria-label="Permalink to &quot;Nueva Funcionalidad&quot;">​</a></h2><h3 id="opcion-de-pausar-o-mantener-flujo-al-atender" tabindex="-1">Opción de Pausar o Mantener Flujo al Atender <a class="header-anchor" href="#opcion-de-pausar-o-mantener-flujo-al-atender" aria-label="Permalink to &quot;Opción de Pausar o Mantener Flujo al Atender&quot;">​</a></h3><p>Al hacer clic en &quot;Atender&quot; un chat con flujo activo, ahora puedes elegir qué hacer.</p><h4 id="¿como-funciona" tabindex="-1">¿Cómo funciona? <a class="header-anchor" href="#¿como-funciona" aria-label="Permalink to &quot;¿Cómo funciona?&quot;">​</a></h4><p><strong>Configuración en Configuraciones:</strong></p><ul><li><strong>ACTIVADO</strong> ✅ = Siempre pausa automáticamente (sin preguntar)</li><li><strong>DESACTIVADO</strong> ❌ = Pregunta qué hacer cuando hay flujo activo</li></ul><h4 id="modal-de-opciones" tabindex="-1">Modal de opciones: <a class="header-anchor" href="#modal-de-opciones" aria-label="Permalink to &quot;Modal de opciones:&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Opción</th><th>Qué sucede</th></tr></thead><tbody><tr><td>🟡 <strong>Pausar Flujo y Atender</strong></td><td>Pausa el flujo, tú asumes</td></tr><tr><td>🔵 <strong>Continuar Flujo y Atender</strong></td><td>Mantiene flujo activo</td></tr><tr><td>⚪ <strong>Cancelar</strong></td><td>No atiende</td></tr></tbody></table><h4 id="¿cuando-usar-cada-opcion" tabindex="-1">¿Cuándo usar cada opción? <a class="header-anchor" href="#¿cuando-usar-cada-opcion" aria-label="Permalink to &quot;¿Cuándo usar cada opción?&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Situación</th><th>Elección</th></tr></thead><tbody><tr><td>Cliente confundido/frustrado</td><td>🟡 Pausar</td></tr><tr><td>Problema complejo</td><td>🟡 Pausar</td></tr><tr><td>Solo quiere supervisar</td><td>🔵 Continuar</td></tr><tr><td>Flujo va bien</td><td>🔵 Continuar</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">Atención</p><p>&quot;Continuar Flujo&quot; = ¡El cliente recibe mensajes tuyos Y del flujo!</p></div><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Control sobre automatizaciones al atender</li><li>✅ Evita confusión del cliente con mensajes duplicados</li><li>✅ Flexibilidad para cada situación</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/10/2025.10.1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_10_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_10_1 as default
};
