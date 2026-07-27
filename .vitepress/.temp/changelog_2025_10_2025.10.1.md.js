import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.10.1","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/10/2025.10.1.md","filePath":"changelog/2025/10/2025.10.1.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/10/2025.10.1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-10-1" tabindex="-1">v2025.10.1 <a class="header-anchor" href="#v2025-10-1" aria-label="Permalink to &quot;v2025.10.1&quot;">​</a></h1><p>Data de lançamento: <strong>25 de Outubro de 2025</strong></p><hr><h2 id="nova-funcionalidade" tabindex="-1">Nova Funcionalidade <a class="header-anchor" href="#nova-funcionalidade" aria-label="Permalink to &quot;Nova Funcionalidade&quot;">​</a></h2><h3 id="opcao-de-pausar-ou-manter-fluxo-ao-atender" tabindex="-1">Opção de Pausar ou Manter Fluxo ao Atender <a class="header-anchor" href="#opcao-de-pausar-ou-manter-fluxo-ao-atender" aria-label="Permalink to &quot;Opção de Pausar ou Manter Fluxo ao Atender&quot;">​</a></h3><p>Ao clicar em &quot;Atender&quot; um chat com fluxo ativo, agora você pode escolher o que fazer.</p><h4 id="como-funciona" tabindex="-1">Como funciona? <a class="header-anchor" href="#como-funciona" aria-label="Permalink to &quot;Como funciona?&quot;">​</a></h4><p><strong>Configuração em Configurações:</strong></p><ul><li><strong>ATIVADO</strong> ✅ = Sempre pausa automaticamente (sem perguntar)</li><li><strong>DESATIVADO</strong> ❌ = Pergunta o que fazer quando há fluxo ativo</li></ul><h4 id="modal-de-opcoes" tabindex="-1">Modal de opções: <a class="header-anchor" href="#modal-de-opcoes" aria-label="Permalink to &quot;Modal de opções:&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Opção</th><th>O que acontece</th></tr></thead><tbody><tr><td>🟡 <strong>Pausar Fluxo e Atender</strong></td><td>Pausa o fluxo, você assume</td></tr><tr><td>🔵 <strong>Continuar Fluxo e Atender</strong></td><td>Mantém fluxo ativo</td></tr><tr><td>⚪ <strong>Cancelar</strong></td><td>Não atende</td></tr></tbody></table><h4 id="quando-usar-cada-opcao" tabindex="-1">Quando usar cada opção? <a class="header-anchor" href="#quando-usar-cada-opcao" aria-label="Permalink to &quot;Quando usar cada opção?&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Situação</th><th>Escolha</th></tr></thead><tbody><tr><td>Cliente confuso/frustrado</td><td>🟡 Pausar</td></tr><tr><td>Problema complexo</td><td>🟡 Pausar</td></tr><tr><td>Só quer supervisionar</td><td>🔵 Continuar</td></tr><tr><td>Fluxo está indo bem</td><td>🔵 Continuar</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">Atenção</p><p>&quot;Continuar Fluxo&quot; = Cliente recebe mensagens suas E do fluxo!</p></div><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Controle sobre automações ao atender</li><li>✅ Evita confusão do cliente com mensagens duplicadas</li><li>✅ Flexibilidade para cada situação</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/10/2025.10.1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_10_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_10_1 as default
};
