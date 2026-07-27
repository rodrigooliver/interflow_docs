import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.17","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2026/07/2026.7.17.md","filePath":"es/changelog/2026/07/2026.7.17.md","lastUpdated":1785186611000}');
const _sfc_main = { name: "es/changelog/2026/07/2026.7.17.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-17" tabindex="-1">v2026.7.17 <a class="header-anchor" href="#v2026-7-17" aria-label="Permalink to &quot;v2026.7.17&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>27 de julio de 2026</strong></p><hr><h2 id="nuevas-funcionalidades" tabindex="-1">Nuevas Funcionalidades <a class="header-anchor" href="#nuevas-funcionalidades" aria-label="Permalink to &quot;Nuevas Funcionalidades&quot;">​</a></h2><h3 id="variable-de-cpf-cnpj-en-atajos-de-mensaje" tabindex="-1">Variable de CPF/CNPJ en atajos de mensaje <a class="header-anchor" href="#variable-de-cpf-cnpj-en-atajos-de-mensaje" aria-label="Permalink to &quot;Variable de CPF/CNPJ en atajos de mensaje&quot;">​</a></h3><p>Los atajos de mensaje ahora admiten la variable <code>{{customer.document}}</code>, que se sustituye automáticamente por el <strong>CPF/CNPJ</strong> del cliente al enviar el mensaje.</p><h4 id="¿para-que-sirve" tabindex="-1">¿Para qué sirve? <a class="header-anchor" href="#¿para-que-sirve" aria-label="Permalink to &quot;¿Para qué sirve?&quot;">​</a></h4><ul><li>Incluir el documento del cliente en mensajes listos sin escribirlo a mano</li><li>Reducir errores de tipeo en procesos que exigen CPF/CNPJ</li><li>Mantener el valor siempre alineado con el registro del cliente</li></ul><h4 id="¿como-usarlo" tabindex="-1">¿Cómo usarlo? <a class="header-anchor" href="#¿como-usarlo" aria-label="Permalink to &quot;¿Cómo usarlo?&quot;">​</a></h4><ol><li>Ve a <strong>Organización</strong> → <strong>Atajos de Mensaje</strong></li><li>Crea o edita un atajo</li><li>En el selector de variables, elige <strong>customer.document</strong> (Información básica)</li><li>Guarda el atajo</li><li>En la atención, usa <code>/</code> para aplicar el atajo — el documento del cliente se completa automáticamente</li></ol><div class="tip custom-block"><p class="custom-block-title">Cliente sin documento</p><p>Si el cliente no tiene CPF/CNPJ registrado, la variable se sustituye por texto vacío.</p></div><blockquote><p>Guía completa: <a href="/es/guide/chat/message-shortcuts">Atajos de Mensaje</a></p></blockquote><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>Más agilidad en la atención con datos del cliente listos</li><li>Menor riesgo de error al informar CPF/CNPJ</li><li>Personalización consistente de los mensajes listos</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2026/07/2026.7.17.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_17 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_17 as default
};
