import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.18","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2026/07/2026.7.18.md","filePath":"es/changelog/2026/07/2026.7.18.md","lastUpdated":1785187292000}');
const _sfc_main = { name: "es/changelog/2026/07/2026.7.18.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-18" tabindex="-1">v2026.7.18 <a class="header-anchor" href="#v2026-7-18" aria-label="Permalink to &quot;v2026.7.18&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>27 de julio de 2026</strong></p><hr><h2 id="nuevas-funcionalidades" tabindex="-1">Nuevas Funcionalidades <a class="header-anchor" href="#nuevas-funcionalidades" aria-label="Permalink to &quot;Nuevas Funcionalidades&quot;">​</a></h2><h3 id="renombrar-carpetas-de-archivos-en-el-agente-de-ia" tabindex="-1">Renombrar carpetas de archivos en el Agente de IA <a class="header-anchor" href="#renombrar-carpetas-de-archivos-en-el-agente-de-ia" aria-label="Permalink to &quot;Renombrar carpetas de archivos en el Agente de IA&quot;">​</a></h3><p>En la pestaña <strong>Archivos</strong> del Agente de IA, ahora es posible <strong>renombrar carpetas</strong> (categorías) directamente en la interfaz. El cambio se guarda de inmediato y queda disponible para todos los miembros de la organización.</p><h4 id="¿para-que-sirve" tabindex="-1">¿Para qué sirve? <a class="header-anchor" href="#¿para-que-sirve" aria-label="Permalink to &quot;¿Para qué sirve?&quot;">​</a></h4><ul><li>Corregir nombres de carpetas sin reorganizar archivo por archivo</li><li>Facilitar la identificación del material usado en la atención</li><li>Mantener la organización de los documentos alineada con la operación del equipo</li></ul><h4 id="¿como-usarlo" tabindex="-1">¿Cómo usarlo? <a class="header-anchor" href="#¿como-usarlo" aria-label="Permalink to &quot;¿Cómo usarlo?&quot;">​</a></h4><ol><li>Abre el <strong>Agente de IA</strong> deseado</li><li>Ve a la pestaña <strong>Archivos</strong></li><li>En el encabezado de la carpeta, haz clic en el icono de <strong>lápiz</strong> (renombrar)</li><li>Ingresa el nuevo nombre y guarda</li><li>Los archivos de la carpeta siguen accesibles con el nuevo nombre</li></ol><div class="tip custom-block"><p class="custom-block-title">Nombre único</p><p>No es posible usar un nombre que ya exista en otra carpeta del mismo agente.</p></div><blockquote><p>Guía completa: <a href="/es/guide/ai-agents/">Agentes IA — Archivos</a></p></blockquote><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>Más control sobre la organización de los documentos del agente</li><li>Corrección rápida de nombres sin perder archivos</li><li>Organización consistente para todo el equipo de la organización</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2026/07/2026.7.18.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_18 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_18 as default
};
