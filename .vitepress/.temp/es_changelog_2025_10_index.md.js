import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Octubre 2025","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/10/index.md","filePath":"es/changelog/2025/10/index.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/10/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="octubre-2025" tabindex="-1">Octubre 2025 <a class="header-anchor" href="#octubre-2025" aria-label="Permalink to &quot;Octubre 2025&quot;">​</a></h1><p>Actualizaciones del mes de octubre de 2025.</p><h2 id="versiones" tabindex="-1">Versiones <a class="header-anchor" href="#versiones" aria-label="Permalink to &quot;Versiones&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Versión</th><th>Fecha</th><th>Destacados</th></tr></thead><tbody><tr><td><a href="/es/changelog/2025/10/2025.10.5">2025.10.5</a></td><td>31/10</td><td>Mensajes fijados, Nodo nota privada, Reactivar archivados</td></tr><tr><td><a href="/es/changelog/2025/10/2025.10.4">2025.10.4</a></td><td>30/10</td><td>Filtro multi-equipos, Informes avanzados clientes</td></tr><tr><td><a href="/es/changelog/2025/10/2025.10.3">2025.10.3</a></td><td>29/10</td><td>Ocultar datos sensibles de agentes</td></tr><tr><td><a href="/es/changelog/2025/10/2025.10.2">2025.10.2</a></td><td>27/10</td><td>Cascada en campos select, Importar calendario</td></tr><tr><td><a href="/es/changelog/2025/10/2025.10.1">2025.10.1</a></td><td>25/10</td><td>Pausar flujo al atender</td></tr></tbody></table><hr><h2 id="resumen-del-mes" tabindex="-1">Resumen del Mes <a class="header-anchor" href="#resumen-del-mes" aria-label="Permalink to &quot;Resumen del Mes&quot;">​</a></h2><h3 id="nuevas-funcionalidades-9" tabindex="-1">Nuevas Funcionalidades (9) <a class="header-anchor" href="#nuevas-funcionalidades-9" aria-label="Permalink to &quot;Nuevas Funcionalidades (9)&quot;">​</a></h3><ul><li>Mensajes fijados en el chat</li><li>Nodo de nota privada en flujo</li><li>Reactivar conversación archivada con nuevo mensaje</li><li>Opción para no ejecutar flujo en transferencia</li><li>Filtro de chat con múltiples equipos</li><li>Informes avanzados de clientes</li><li>Importar eventos del calendario con filtro de fecha</li><li>Cascada de alteración en campos select</li><li>Pausar flujo al atender</li></ul><h3 id="seguridad-1" tabindex="-1">Seguridad (1) <a class="header-anchor" href="#seguridad-1" aria-label="Permalink to &quot;Seguridad (1)&quot;">​</a></h3><ul><li>Ocultar datos sensibles para agentes</li></ul><hr><div class="info custom-block"><p class="custom-block-title">Total</p><p><strong>5 releases</strong> con <strong>10 mejoras</strong> este mes!</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/10/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
