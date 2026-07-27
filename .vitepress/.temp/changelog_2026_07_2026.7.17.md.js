import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.17","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2026/07/2026.7.17.md","filePath":"changelog/2026/07/2026.7.17.md","lastUpdated":1785186611000}');
const _sfc_main = { name: "changelog/2026/07/2026.7.17.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-17" tabindex="-1">v2026.7.17 <a class="header-anchor" href="#v2026-7-17" aria-label="Permalink to &quot;v2026.7.17&quot;">​</a></h1><p>Data de lançamento: <strong>27 de julho de 2026</strong></p><hr><h2 id="novas-funcionalidades" tabindex="-1">Novas Funcionalidades <a class="header-anchor" href="#novas-funcionalidades" aria-label="Permalink to &quot;Novas Funcionalidades&quot;">​</a></h2><h3 id="variavel-de-cpf-cnpj-em-atalhos-de-mensagem" tabindex="-1">Variável de CPF/CNPJ em atalhos de mensagem <a class="header-anchor" href="#variavel-de-cpf-cnpj-em-atalhos-de-mensagem" aria-label="Permalink to &quot;Variável de CPF/CNPJ em atalhos de mensagem&quot;">​</a></h3><p>Os atalhos de mensagem passam a aceitar a variável <code>{{customer.document}}</code>, que é substituída automaticamente pelo <strong>CPF/CNPJ</strong> cadastrado do cliente no momento do envio.</p><h4 id="para-que-serve" tabindex="-1">Para que serve? <a class="header-anchor" href="#para-que-serve" aria-label="Permalink to &quot;Para que serve?&quot;">​</a></h4><ul><li>Incluir o documento do cliente em mensagens prontas sem digitar manualmente</li><li>Reduzir erros de digitação em processos que exigem CPF/CNPJ</li><li>Manter o valor sempre alinhado ao cadastro do cliente</li></ul><h4 id="como-usar" tabindex="-1">Como usar? <a class="header-anchor" href="#como-usar" aria-label="Permalink to &quot;Como usar?&quot;">​</a></h4><ol><li>Acesse <strong>Organização</strong> → <strong>Atalhos de Mensagem</strong></li><li>Crie ou edite um atalho</li><li>No seletor de variáveis, escolha <strong>customer.document</strong> (Informações básicas)</li><li>Salve o atalho</li><li>No atendimento, use <code>/</code> para aplicar o atalho — o documento do cliente é preenchido automaticamente</li></ol><div class="tip custom-block"><p class="custom-block-title">Cliente sem documento</p><p>Se o cliente não tiver CPF/CNPJ cadastrado, a variável é substituída por texto vazio.</p></div><blockquote><p>Guia completo: <a href="/guide/chat/message-shortcuts">Atalhos de Mensagem</a></p></blockquote><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>Mais agilidade no atendimento com dados cadastrais prontos</li><li>Menor risco de erro ao informar CPF/CNPJ</li><li>Personalização consistente das mensagens prontas</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2026/07/2026.7.17.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_17 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_17 as default
};
