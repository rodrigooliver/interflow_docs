import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Transferir a Equipo","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/ai-agents/tools/transfer-to-team.md","filePath":"es/guide/ai-agents/tools/transfer-to-team.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/guide/ai-agents/tools/transfer-to-team.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="transferir-a-equipo" tabindex="-1">Transferir a Equipo <a class="header-anchor" href="#transferir-a-equipo" aria-label="Permalink to &quot;Transferir a Equipo&quot;">​</a></h1><p>Reenvía la atención a un equipo humano.</p><p><strong>Opciones de configuración:</strong></p><table tabindex="0"><thead><tr><th>Opción</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>Equipos permitidos</strong></td><td>Seleccione qué equipos la IA puede transferir</td></tr><tr><td><strong>Pausar agente</strong></td><td>Pausa la IA después de la transferencia</td></tr><tr><td><strong>Saltar flujo relacionado</strong></td><td>No ejecuta flujos vinculados al equipo</td></tr><tr><td><strong>Generar resumen</strong></td><td>Crea resumen automático de la conversación</td></tr></tbody></table><p><strong>Resumen Automático:</strong></p><p>Cuando está activado, el resumen incluye:</p><ul><li>Motivo del contacto</li><li>Principales dudas del cliente</li><li>Pasos ya realizados por la IA</li><li>Datos recopilados durante la conversación</li></ul><p><strong>Ejemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Necesito hablar con un humano sobre un problema técnico</span></span>
<span class="line"><span>🤖 IA: ¡Entendido! Te voy a transferir a nuestro equipo de soporte técnico. </span></span>
<span class="line"><span>       Un momento, por favor...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Sistema: Chat transferido a &quot;Soporte Técnico&quot; con resumen]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/ai-agents/tools/transfer-to-team.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transferToTeam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  transferToTeam as default
};
