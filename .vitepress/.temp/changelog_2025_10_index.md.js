import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Outubro 2025","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/10/index.md","filePath":"changelog/2025/10/index.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/10/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="outubro-2025" tabindex="-1">Outubro 2025 <a class="header-anchor" href="#outubro-2025" aria-label="Permalink to &quot;Outubro 2025&quot;">​</a></h1><p>Atualizações do mês de outubro de 2025.</p><h2 id="versoes" tabindex="-1">Versões <a class="header-anchor" href="#versoes" aria-label="Permalink to &quot;Versões&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Versão</th><th>Data</th><th>Destaques</th></tr></thead><tbody><tr><td><a href="/changelog/2025/10/2025.10.5">2025.10.5</a></td><td>31/10</td><td>Mensagens fixadas, Node nota privada, Reativar arquivados</td></tr><tr><td><a href="/changelog/2025/10/2025.10.4">2025.10.4</a></td><td>30/10</td><td>Filtro multi-equipes, Relatórios avançados clientes</td></tr><tr><td><a href="/changelog/2025/10/2025.10.3">2025.10.3</a></td><td>29/10</td><td>Ocultar dados sensíveis de atendentes</td></tr><tr><td><a href="/changelog/2025/10/2025.10.2">2025.10.2</a></td><td>27/10</td><td>Cascata em campos select, Importar calendário</td></tr><tr><td><a href="/changelog/2025/10/2025.10.1">2025.10.1</a></td><td>25/10</td><td>Pausar fluxo ao atender</td></tr></tbody></table><hr><h2 id="resumo-do-mes" tabindex="-1">Resumo do Mês <a class="header-anchor" href="#resumo-do-mes" aria-label="Permalink to &quot;Resumo do Mês&quot;">​</a></h2><h3 id="novas-funcionalidades-9" tabindex="-1">Novas Funcionalidades (9) <a class="header-anchor" href="#novas-funcionalidades-9" aria-label="Permalink to &quot;Novas Funcionalidades (9)&quot;">​</a></h3><ul><li>Mensagens fixadas no chat</li><li>Node de nota privada no fluxo</li><li>Reativar conversa arquivada com nova mensagem</li><li>Opção para não executar fluxo na transferência</li><li>Filtro de chat com múltiplas equipes</li><li>Relatórios avançados de clientes</li><li>Importar eventos do calendário com filtro de data</li><li>Cascata de alteração em campos select</li><li>Pausar fluxo ao atender</li></ul><h3 id="seguranca-1" tabindex="-1">Segurança (1) <a class="header-anchor" href="#seguranca-1" aria-label="Permalink to &quot;Segurança (1)&quot;">​</a></h3><ul><li>Ocultar dados sensíveis para atendentes</li></ul><hr><div class="info custom-block"><p class="custom-block-title">Total</p><p><strong>5 releases</strong> com <strong>10 melhorias</strong> neste mês!</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/10/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
