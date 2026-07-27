import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Actualizar Datos del Cliente","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/ai-agents/tools/update-customer-data.md","filePath":"es/guide/ai-agents/tools/update-customer-data.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/guide/ai-agents/tools/update-customer-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="actualizar-datos-del-cliente" tabindex="-1">Actualizar Datos del Cliente <a class="header-anchor" href="#actualizar-datos-del-cliente" aria-label="Permalink to &quot;Actualizar Datos del Cliente&quot;">​</a></h1><p>Actualiza campos personalizados del registro del cliente.</p><p><strong>Configuración:</strong></p><ol><li>Seleccione los campos que la IA puede actualizar</li><li>Defina si son obligatorios u opcionales</li><li>Guarde</li></ol><p><strong>Campos disponibles:</strong></p><ul><li>Campos personalizados creados en Configuraciones</li><li>Campos estándar del sistema</li></ul><p><strong>Ejemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Mi email es juan@email.com</span></span>
<span class="line"><span>🤖 IA: ¡Perfecto! Ya guardé tu email. Ahora puedo enviar confirmaciones por ahí.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/ai-agents/tools/update-customer-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const updateCustomerData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  updateCustomerData as default
};
