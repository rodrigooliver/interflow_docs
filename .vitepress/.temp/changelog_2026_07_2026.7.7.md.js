import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.7","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2026/07/2026.7.7.md","filePath":"changelog/2026/07/2026.7.7.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2026/07/2026.7.7.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-7" tabindex="-1">v2026.7.7 <a class="header-anchor" href="#v2026-7-7" aria-label="Permalink to &quot;v2026.7.7&quot;">​</a></h1><p>Data de lançamento: <strong>10 de julho de 2026</strong></p><hr><h2 id="novas-funcionalidades" tabindex="-1">Novas Funcionalidades <a class="header-anchor" href="#novas-funcionalidades" aria-label="Permalink to &quot;Novas Funcionalidades&quot;">​</a></h2><h3 id="busca-de-clientes-no-funil-de-vendas" tabindex="-1">Busca de clientes no Funil de Vendas <a class="header-anchor" href="#busca-de-clientes-no-funil-de-vendas" aria-label="Permalink to &quot;Busca de clientes no Funil de Vendas&quot;">​</a></h3><p>No <strong>CRM → Funil de Vendas</strong>, agora é possível <strong>pesquisar clientes pelo nome</strong> diretamente no topo do funil. Os resultados mostram em qual <strong>etapa</strong> e em qual <strong>posição</strong> o cliente está — e, ao clicar, o cadastro abre no modal de edição.</p><h4 id="para-que-serve" tabindex="-1">Para que serve? <a class="header-anchor" href="#para-que-serve" aria-label="Permalink to &quot;Para que serve?&quot;">​</a></h4><ul><li>Encontrar rapidamente um contato em funis com muitos cards</li><li>Saber em qual estágio e posição o cliente está sem rolar o kanban</li><li>Abrir o cliente na hora, mesmo se ele ainda não estiver na página carregada da coluna</li></ul><h4 id="como-usar" tabindex="-1">Como usar? <a class="header-anchor" href="#como-usar" aria-label="Permalink to &quot;Como usar?&quot;">​</a></h4><ol><li>Abra o <strong>Funil de Vendas</strong> no CRM</li><li>No topo do funil, digite o nome no campo <strong>Buscar cliente por nome...</strong></li><li>Veja a lista com etapa (badge colorido) e posição (<code>#N de T</code>)</li><li>Clique no resultado para abrir o <strong>modal de edição</strong> do cliente</li><li>Se o card já estiver visível na coluna, ele também é destacado no quadro</li></ol><div class="tip custom-block"><p class="custom-block-title">Dica</p><p>A busca respeita os filtros <strong>Somente meus</strong> e <strong>Ocultar finalizados</strong>. A pesquisa cobre todo o funil atual, não só os cards já carregados na tela.</p></div><blockquote><p>Guia completo: <a href="/guide/crm/customers#funil-de-vendas">Gerenciamento de Clientes — Funil de Vendas</a></p></blockquote><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Localização rápida de clientes em funis grandes</li><li>✅ Visibilidade imediata da etapa e da posição no kanban</li><li>✅ Acesso direto ao cadastro sem depender da paginação das colunas</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2026/07/2026.7.7.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_7 as default
};
