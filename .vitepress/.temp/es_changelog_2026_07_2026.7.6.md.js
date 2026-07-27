import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.6","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2026/07/2026.7.6.md","filePath":"es/changelog/2026/07/2026.7.6.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2026/07/2026.7.6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-6" tabindex="-1">v2026.7.6 <a class="header-anchor" href="#v2026-7-6" aria-label="Permalink to &quot;v2026.7.6&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>10 de julio de 2026</strong></p><hr><h2 id="nuevas-funcionalidades" tabindex="-1">Nuevas Funcionalidades <a class="header-anchor" href="#nuevas-funcionalidades" aria-label="Permalink to &quot;Nuevas Funcionalidades&quot;">​</a></h2><h3 id="ocultar-finalizados-en-el-embudo-de-ventas" tabindex="-1">Ocultar finalizados en el Embudo de Ventas <a class="header-anchor" href="#ocultar-finalizados-en-el-embudo-de-ventas" aria-label="Permalink to &quot;Ocultar finalizados en el Embudo de Ventas&quot;">​</a></h3><p>En <strong>CRM → Embudo de Ventas</strong>, ahora es posible ocultar clientes cuya última conversación está <strong>Finalizada</strong> (o marcada como resuelta). Así, el equipo ve solo a quien aún necesita atención — sin borrar historial ni datos del sistema.</p><h4 id="¿para-que-sirve" tabindex="-1">¿Para qué sirve? <a class="header-anchor" href="#¿para-que-sirve" aria-label="Permalink to &quot;¿Para qué sirve?&quot;">​</a></h4><ul><li>Enfocarse en clientes <strong>pendientes</strong> o <strong>en atención</strong></li><li>Reducir ruido en el tablero cuando hay muchos cards ya cerrados</li><li>Mantener el historial completo para consultas e informes</li></ul><h4 id="¿como-usarlo" tabindex="-1">¿Cómo usarlo? <a class="header-anchor" href="#¿como-usarlo" aria-label="Permalink to &quot;¿Cómo usarlo?&quot;">​</a></h4><ol><li>Abra el <strong>Embudo de Ventas</strong> en el CRM</li><li>En la parte superior del embudo, active <strong>Ocultar finalizados</strong></li><li>Las columnas listarán solo clientes sin última conversación finalizada</li><li>Desactive la opción en cualquier momento para ver a todos de nuevo</li></ol><div class="tip custom-block"><p class="custom-block-title">Consejo</p><p>La opción se combina con el filtro <strong>Solo míos</strong>. Los clientes sin conversación siguen visibles en el embudo.</p></div><blockquote><p>Guía completa: <a href="/es/guide/crm/customers#embudo-de-ventas">Gestión de Clientes — Embudo de Ventas</a></p></blockquote><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Vista más limpia del embudo en el día a día</li><li>✅ Priorización de las atenciones abiertas</li><li>✅ Historial y datos preservados — solo cambia la visualización</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2026/07/2026.7.6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_6 as default
};
