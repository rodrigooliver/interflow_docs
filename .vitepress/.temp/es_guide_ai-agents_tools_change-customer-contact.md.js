import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cambiar Contacto del Cliente","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/ai-agents/tools/change-customer-contact.md","filePath":"es/guide/ai-agents/tools/change-customer-contact.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/guide/ai-agents/tools/change-customer-contact.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cambiar-contacto-del-cliente" tabindex="-1">Cambiar Contacto del Cliente <a class="header-anchor" href="#cambiar-contacto-del-cliente" aria-label="Permalink to &quot;Cambiar Contacto del Cliente&quot;">​</a></h1><p>Permite que la IA <strong>guarde o actualice teléfono, WhatsApp o e-mail</strong> del cliente cuando informe el contacto en la conversación.</p><p><strong>Cuándo usar:</strong></p><ul><li>El cliente informa un teléfono o WhatsApp adicional</li><li>Actualización del e-mail informado en el chat</li><li>Recolección de contacto en flujos de registro o confirmación</li></ul><p><strong>Configuración:</strong></p><ol><li>Agregue la acción <strong>Cambiar Contacto del Cliente</strong></li><li>Seleccione los tipos permitidos: teléfono, WhatsApp y/o e-mail</li><li>Guarde el prompt</li></ol><div class="tip custom-block"><p class="custom-block-title">💡 E-mail</p><p>Cuando el tipo sea e-mail, el valor también actualiza el campo principal de e-mail del cliente.</p></div><p><strong>Ejemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Mi WhatsApp es (11) 98888-7777</span></span>
<span class="line"><span>🤖 IA: ¡Perfecto! Ya guardé ese WhatsApp en tu registro.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="info custom-block"><p class="custom-block-title">⚠️ Única</p><p>Esta acción puede agregarse solo una vez por agente.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/ai-agents/tools/change-customer-contact.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCustomerContact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCustomerContact as default
};
