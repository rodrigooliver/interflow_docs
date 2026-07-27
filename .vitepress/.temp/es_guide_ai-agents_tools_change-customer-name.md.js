import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cambiar Nombre del Cliente","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/ai-agents/tools/change-customer-name.md","filePath":"es/guide/ai-agents/tools/change-customer-name.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/guide/ai-agents/tools/change-customer-name.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cambiar-nombre-del-cliente" tabindex="-1">Cambiar Nombre del Cliente <a class="header-anchor" href="#cambiar-nombre-del-cliente" aria-label="Permalink to &quot;Cambiar Nombre del Cliente&quot;">​</a></h1><p>Permite que la IA actualice el nombre del cliente en el registro durante la conversación.</p><p><strong>Cuándo usar:</strong></p><ul><li>Cliente informa nombre diferente al registrado</li><li>Primera interacción donde se recopila el nombre</li><li>Corrección de nombres escritos incorrectamente</li></ul><p><strong>Ejemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Mi nombre es Juan García, no Juan Santos</span></span>
<span class="line"><span>🤖 IA: ¡Listo, Juan! Ya actualicé tu registro. ¿Cómo puedo ayudarte?</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="info custom-block"><p class="custom-block-title">⚠️ Única</p><p>Esta acción solo puede ser agregada una vez por agente.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/ai-agents/tools/change-customer-name.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCustomerName = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCustomerName as default
};
