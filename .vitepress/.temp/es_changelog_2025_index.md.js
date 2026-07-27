import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Changelog 2025","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/index.md","filePath":"es/changelog/2025/index.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="changelog-2025" tabindex="-1">Changelog 2025 <a class="header-anchor" href="#changelog-2025" aria-label="Permalink to &quot;Changelog 2025&quot;">​</a></h1><p>Todas las actualizaciones de la plataforma Interflow en 2025.</p><h2 id="meses" tabindex="-1">Meses <a class="header-anchor" href="#meses" aria-label="Permalink to &quot;Meses&quot;">​</a></h2><h3 id="diciembre" tabindex="-1">Diciembre <a class="header-anchor" href="#diciembre" aria-label="Permalink to &quot;Diciembre&quot;">​</a></h3><ul><li><a href="/es/changelog/2025/12/">Diciembre 2025</a> - 9 releases, 14 mejoras</li></ul><h3 id="noviembre" tabindex="-1">Noviembre <a class="header-anchor" href="#noviembre" aria-label="Permalink to &quot;Noviembre&quot;">​</a></h3><ul><li><a href="/es/changelog/2025/11/">Noviembre 2025</a> - 14 releases, 25 mejoras</li></ul><h3 id="octubre" tabindex="-1">Octubre <a class="header-anchor" href="#octubre" aria-label="Permalink to &quot;Octubre&quot;">​</a></h3><ul><li><a href="/es/changelog/2025/10/">Octubre 2025</a> - 5 releases, 10 mejoras</li></ul><hr><div class="tip custom-block"><p class="custom-block-title">Consejo</p><p>Usa la navegación lateral para acceder rápidamente a las versiones específicas.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
