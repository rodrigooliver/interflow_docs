import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.6","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2026/07/2026.7.6.md","filePath":"changelog/2026/07/2026.7.6.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2026/07/2026.7.6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-6" tabindex="-1">v2026.7.6 <a class="header-anchor" href="#v2026-7-6" aria-label="Permalink to &quot;v2026.7.6&quot;">​</a></h1><p>Data de lançamento: <strong>10 de julho de 2026</strong></p><hr><h2 id="novas-funcionalidades" tabindex="-1">Novas Funcionalidades <a class="header-anchor" href="#novas-funcionalidades" aria-label="Permalink to &quot;Novas Funcionalidades&quot;">​</a></h2><h3 id="ocultar-finalizados-no-funil-de-vendas" tabindex="-1">Ocultar finalizados no Funil de Vendas <a class="header-anchor" href="#ocultar-finalizados-no-funil-de-vendas" aria-label="Permalink to &quot;Ocultar finalizados no Funil de Vendas&quot;">​</a></h3><p>No <strong>CRM → Funil de Vendas</strong>, agora é possível ocultar clientes cuja última conversa está <strong>Finalizada</strong> (ou marcada como resolvida). Assim, o time enxerga só quem ainda precisa de atendimento — sem apagar histórico nem dados do sistema.</p><h4 id="para-que-serve" tabindex="-1">Para que serve? <a class="header-anchor" href="#para-que-serve" aria-label="Permalink to &quot;Para que serve?&quot;">​</a></h4><ul><li>Focar nos clientes <strong>pendentes</strong> ou <strong>em atendimento</strong></li><li>Reduzir ruído no kanban quando há muitos cards já encerrados</li><li>Manter o histórico completo para consultas e relatórios</li></ul><h4 id="como-usar" tabindex="-1">Como usar? <a class="header-anchor" href="#como-usar" aria-label="Permalink to &quot;Como usar?&quot;">​</a></h4><ol><li>Abra o <strong>Funil de Vendas</strong> no CRM</li><li>No topo do funil, marque a opção <strong>Ocultar finalizados</strong></li><li>As colunas passam a listar apenas clientes sem última conversa finalizada</li><li>Desmarque a opção a qualquer momento para voltar a ver todos</li></ol><div class="tip custom-block"><p class="custom-block-title">Dica</p><p>A opção combina com o filtro <strong>Somente meus</strong>. Clientes sem conversa continuam visíveis no funil.</p></div><blockquote><p>Guia completo: <a href="/guide/crm/customers#funil-de-vendas">Gerenciamento de Clientes — Funil de Vendas</a></p></blockquote><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Visão mais limpa do funil no dia a dia</li><li>✅ Priorização dos atendimentos em aberto</li><li>✅ Histórico e dados preservados — só a visualização muda</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2026/07/2026.7.6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_6 as default
};
