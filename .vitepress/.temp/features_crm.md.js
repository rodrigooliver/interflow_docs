import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CRM e Clientes","description":"","frontmatter":{},"headers":[],"relativePath":"features/crm.md","filePath":"features/crm.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/crm.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="crm-e-clientes" tabindex="-1">CRM e Clientes <a class="header-anchor" href="#crm-e-clientes" aria-label="Permalink to &quot;CRM e Clientes&quot;">​</a></h1><p>Gestão de clientes, campos personalizados e funis Kanban com automação.</p><h2 id="destaques" tabindex="-1">Destaques <a class="header-anchor" href="#destaques" aria-label="Permalink to &quot;Destaques&quot;">​</a></h2><ul><li>Perfil completo, histórico e campos personalizados</li><li><a href="/guide/crm/funnels">Funis de venda</a> com fluxo <code>crm_stage_change</code></li><li>Segmentação por tags e estágios para campanhas</li></ul><h2 id="guias" tabindex="-1">Guias <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guias&quot;">​</a></h2><ul><li><a href="/guide/crm/customers">Gerenciamento de clientes</a></li><li><a href="/guide/crm/funnels">Funis de venda</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/crm.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const crm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  crm as default
};
