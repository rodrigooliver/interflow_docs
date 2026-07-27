import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cambiar Fecha de Retorno","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/ai-agents/tools/change-return-date.md","filePath":"es/guide/ai-agents/tools/change-return-date.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/guide/ai-agents/tools/change-return-date.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cambiar-fecha-de-retorno" tabindex="-1">Cambiar Fecha de Retorno <a class="header-anchor" href="#cambiar-fecha-de-retorno" aria-label="Permalink to &quot;Cambiar Fecha de Retorno&quot;">​</a></h1><p>Reprograma el seguimiento automático del cliente.</p><p><strong>Configuración:</strong></p><ol><li>Seleccione el <strong>Flujo</strong> de retorno</li><li>Seleccione el <strong>Nodo</strong> inicial del retorno</li><li>Guarde</li></ol><p><strong>Cuándo usar:</strong></p><ul><li>Cliente menciona fecha futura (&quot;Llámame la próxima semana&quot;)</li><li>Cliente no puede conversar ahora (&quot;Estoy ocupado&quot;)</li><li>Reprogramación de seguimiento</li></ul><p><strong>Ejemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Ahora no puedo, llámame el jueves</span></span>
<span class="line"><span>🤖 IA: ¡Sin problema! Me comunico contigo el jueves. </span></span>
<span class="line"><span>       ¡Que tengas un excelente día! 👋</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Sistema: Seguimiento reprogramado para el jueves]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/ai-agents/tools/change-return-date.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeReturnDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeReturnDate as default
};
