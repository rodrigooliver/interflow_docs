import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cambiar Embudo","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/ai-agents/tools/change-funnel.md","filePath":"es/guide/ai-agents/tools/change-funnel.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/guide/ai-agents/tools/change-funnel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cambiar-embudo" tabindex="-1">Cambiar Embudo <a class="header-anchor" href="#cambiar-embudo" aria-label="Permalink to &quot;Cambiar Embudo&quot;">​</a></h1><p>Mueve al cliente entre etapas del embudo de ventas/atención.</p><p><strong>Configuración:</strong></p><table tabindex="0"><thead><tr><th>Campo</th><th>Descripción</th></tr></thead><tbody><tr><td><strong>Etapas de origen</strong></td><td>De qué etapas el cliente puede salir</td></tr><tr><td><strong>Etapas de destino</strong></td><td>A qué etapas puede ser movido</td></tr></tbody></table><p><strong>Cuándo usar:</strong></p><ul><li>Cliente demuestra interés (mover a &quot;Calificado&quot;)</li><li>Cliente cierra negocio (mover a &quot;Vendido&quot;)</li><li>Cliente pide no ser contactado (mover a &quot;No interesado&quot;)</li></ul><p><strong>Ejemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Quiero cerrar el plan Pro</span></span>
<span class="line"><span>🤖 IA: ¡Excelente elección! Voy a registrar tu decisión y un consultor </span></span>
<span class="line"><span>       se pondrá en contacto para finalizar.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Sistema: Cliente movido a etapa &quot;Cierre&quot;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/ai-agents/tools/change-funnel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeFunnel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeFunnel as default
};
