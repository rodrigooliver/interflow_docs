import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Changelog 2025","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/index.md","filePath":"changelog/2025/index.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="changelog-2025" tabindex="-1">Changelog 2025 <a class="header-anchor" href="#changelog-2025" aria-label="Permalink to &quot;Changelog 2025&quot;">​</a></h1><p>Todas as atualizações da plataforma Interflow em 2025.</p><h2 id="meses" tabindex="-1">Meses <a class="header-anchor" href="#meses" aria-label="Permalink to &quot;Meses&quot;">​</a></h2><h3 id="dezembro" tabindex="-1">Dezembro <a class="header-anchor" href="#dezembro" aria-label="Permalink to &quot;Dezembro&quot;">​</a></h3><ul><li><a href="/changelog/2025/12/">Dezembro 2025</a> - 9 releases, 14 melhorias</li></ul><h3 id="novembro" tabindex="-1">Novembro <a class="header-anchor" href="#novembro" aria-label="Permalink to &quot;Novembro&quot;">​</a></h3><ul><li><a href="/changelog/2025/11/">Novembro 2025</a> - 14 releases, 25 melhorias</li></ul><h3 id="outubro" tabindex="-1">Outubro <a class="header-anchor" href="#outubro" aria-label="Permalink to &quot;Outubro&quot;">​</a></h3><ul><li><a href="/changelog/2025/10/">Outubro 2025</a> - 5 releases, 10 melhorias</li></ul><hr><div class="tip custom-block"><p class="custom-block-title">Dica</p><p>Use a navegação lateral para acessar rapidamente as versões específicas.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
