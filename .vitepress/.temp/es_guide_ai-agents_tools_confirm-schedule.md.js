import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Confirmar Cita","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/ai-agents/tools/confirm-schedule.md","filePath":"es/guide/ai-agents/tools/confirm-schedule.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/guide/ai-agents/tools/confirm-schedule.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="confirmar-cita" tabindex="-1">Confirmar Cita <a class="header-anchor" href="#confirmar-cita" aria-label="Permalink to &quot;Confirmar Cita&quot;">​</a></h1><p>Confirma citas existentes del cliente.</p><p><strong>Configuración:</strong></p><ul><li><strong>Agenda</strong>: Seleccione qué agenda consultar</li></ul><p><strong>Comportamiento:</strong></p><ul><li>La IA identifica citas pendientes del cliente</li><li>Presenta los detalles para confirmación</li><li>Marca como confirmada después de la aceptación</li></ul><p><strong>Ejemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 IA: ¡Hola! Vi que tienes una cita mañana a las 10am.</span></span>
<span class="line"><span>       ¿Puedo confirmar tu asistencia?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 Cliente: Sí, confirmo</span></span>
<span class="line"><span>🤖 IA: ¡Perfecto! Tu cita está confirmada. ¡Hasta mañana! ✅</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/ai-agents/tools/confirm-schedule.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const confirmSchedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  confirmSchedule as default
};
