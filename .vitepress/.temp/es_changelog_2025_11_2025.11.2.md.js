import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.2","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/11/2025.11.2.md","filePath":"es/changelog/2025/11/2025.11.2.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/11/2025.11.2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-2" tabindex="-1">v2025.11.2 <a class="header-anchor" href="#v2025-11-2" aria-label="Permalink to &quot;v2025.11.2&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>05 de Noviembre de 2025</strong></p><hr><h2 id="nueva-funcionalidad" tabindex="-1">Nueva Funcionalidad <a class="header-anchor" href="#nueva-funcionalidad" aria-label="Permalink to &quot;Nueva Funcionalidad&quot;">​</a></h2><h3 id="envio-de-multiples-fotos-en-mobile" tabindex="-1">Envío de Múltiples Fotos en Mobile <a class="header-anchor" href="#envio-de-multiples-fotos-en-mobile" aria-label="Permalink to &quot;Envío de Múltiples Fotos en Mobile&quot;">​</a></h3><p>Ahora puedes seleccionar y enviar varias fotos a la vez a través de la aplicación mobile.</p><h4 id="¿como-usar" tabindex="-1">¿Cómo usar? <a class="header-anchor" href="#¿como-usar" aria-label="Permalink to &quot;¿Cómo usar?&quot;">​</a></h4><ol><li>Abre una conversación en la app mobile</li><li>Toca el ícono de adjuntar 📎</li><li>Selecciona <strong>&quot;Galería de Fotos&quot;</strong></li><li>Toca para seleccionar múltiples imágenes</li><li>Confirma la selección</li><li>Todas las fotos son enviadas en secuencia</li></ol><h4 id="recursos" tabindex="-1">Recursos: <a class="header-anchor" href="#recursos" aria-label="Permalink to &quot;Recursos:&quot;">​</a></h4><ul><li>📸 Selección de imágenes en lote</li><li>🔢 Contador muestra cuántas están seleccionadas</li><li>⚡ Upload paralelo para envío más rápido</li><li>✅ Confirmación de envío para cada una</li></ul><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Nunca más enviar foto por foto</li><li>✅ Atención más rápida a los clientes</li><li>✅ Mejor experiencia mobile</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/11/2025.11.2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_2 as default
};
