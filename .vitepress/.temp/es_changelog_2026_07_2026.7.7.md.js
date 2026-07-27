import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.7","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2026/07/2026.7.7.md","filePath":"es/changelog/2026/07/2026.7.7.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2026/07/2026.7.7.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-7" tabindex="-1">v2026.7.7 <a class="header-anchor" href="#v2026-7-7" aria-label="Permalink to &quot;v2026.7.7&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>10 de julio de 2026</strong></p><hr><h2 id="nuevas-funcionalidades" tabindex="-1">Nuevas Funcionalidades <a class="header-anchor" href="#nuevas-funcionalidades" aria-label="Permalink to &quot;Nuevas Funcionalidades&quot;">​</a></h2><h3 id="busqueda-de-clientes-en-el-embudo-de-ventas" tabindex="-1">Búsqueda de clientes en el Embudo de Ventas <a class="header-anchor" href="#busqueda-de-clientes-en-el-embudo-de-ventas" aria-label="Permalink to &quot;Búsqueda de clientes en el Embudo de Ventas&quot;">​</a></h3><p>En <strong>CRM → Embudo de Ventas</strong>, ahora es posible <strong>buscar clientes por nombre</strong> en la parte superior del embudo. Los resultados muestran en qué <strong>etapa</strong> y en qué <strong>posición</strong> está el cliente — y, al hacer clic, se abre el modal de edición.</p><h4 id="¿para-que-sirve" tabindex="-1">¿Para qué sirve? <a class="header-anchor" href="#¿para-que-sirve" aria-label="Permalink to &quot;¿Para qué sirve?&quot;">​</a></h4><ul><li>Encontrar rápidamente un contacto en embudos con muchos cards</li><li>Saber la etapa y la posición sin recorrer el tablero</li><li>Abrir el cliente de inmediato, aunque el card aún no esté en la página cargada de la columna</li></ul><h4 id="¿como-usarlo" tabindex="-1">¿Cómo usarlo? <a class="header-anchor" href="#¿como-usarlo" aria-label="Permalink to &quot;¿Cómo usarlo?&quot;">​</a></h4><ol><li>Abra el <strong>Embudo de Ventas</strong> en el CRM</li><li>En la parte superior del embudo, escriba el nombre en <strong>Buscar cliente por nombre...</strong></li><li>Revise la lista con etapa (badge de color) y posición (<code>#N de T</code>)</li><li>Haga clic en el resultado para abrir el <strong>modal de edición</strong> del cliente</li><li>Si el card ya está visible en la columna, también se destaca en el tablero</li></ol><div class="tip custom-block"><p class="custom-block-title">Consejo</p><p>La búsqueda respeta los filtros <strong>Solo míos</strong> y <strong>Ocultar finalizados</strong>. Cubre todo el embudo actual, no solo los cards ya cargados en pantalla.</p></div><blockquote><p>Guía completa: <a href="/es/guide/crm/customers#embudo-de-ventas">Gestión de Clientes — Embudo de Ventas</a></p></blockquote><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Localización rápida de clientes en embudos grandes</li><li>✅ Visibilidad inmediata de la etapa y la posición en el tablero</li><li>✅ Acceso directo al registro sin depender de la paginación de las columnas</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2026/07/2026.7.7.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_7 as default
};
