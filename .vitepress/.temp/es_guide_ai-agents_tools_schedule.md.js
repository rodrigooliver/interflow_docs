import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Agendar","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/ai-agents/tools/schedule.md","filePath":"es/guide/ai-agents/tools/schedule.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/guide/ai-agents/tools/schedule.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agendar" tabindex="-1">Agendar <a class="header-anchor" href="#agendar" aria-label="Permalink to &quot;Agendar&quot;">​</a></h1><p>Crea nuevas citas directamente a través de la conversación.</p><p><strong>Configuración:</strong></p><table tabindex="0"><thead><tr><th>Campo</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>Agenda</strong></td><td>Seleccione qué agenda utilizar</td></tr><tr><td><strong>Servicios</strong></td><td>Todos o específicos</td></tr><tr><td><strong>Profesionales</strong></td><td>Todos o específicos</td></tr><tr><td><strong>Operaciones</strong></td><td>Tipos de operación permitidos</td></tr></tbody></table><p><strong>Flujo de agendamiento:</strong></p><ol><li>Cliente solicita cita</li><li>IA verifica horarios disponibles</li><li>Cliente elige fecha/horario</li><li>IA confirma y registra la cita</li></ol><p><strong>Ejemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Quiero agendar una consulta</span></span>
<span class="line"><span>🤖 IA: ¡Claro! Tenemos disponibilidad de lunes a viernes.</span></span>
<span class="line"><span>       ¿Qué día y horario prefieres?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 Cliente: Jueves a las 2pm</span></span>
<span class="line"><span>🤖 IA: ✅ ¡Cita confirmada!</span></span>
<span class="line"><span>       📅 Jueves, 26 de diciembre de 2025 a las 14:00</span></span>
<span class="line"><span>       ¡Te enviaré un recordatorio 24h antes!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/ai-agents/tools/schedule.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  schedule as default
};
