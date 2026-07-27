import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.18","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2026/07/2026.7.18.md","filePath":"changelog/2026/07/2026.7.18.md","lastUpdated":1785187292000}');
const _sfc_main = { name: "changelog/2026/07/2026.7.18.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-18" tabindex="-1">v2026.7.18 <a class="header-anchor" href="#v2026-7-18" aria-label="Permalink to &quot;v2026.7.18&quot;">​</a></h1><p>Data de lançamento: <strong>27 de julho de 2026</strong></p><hr><h2 id="novas-funcionalidades" tabindex="-1">Novas Funcionalidades <a class="header-anchor" href="#novas-funcionalidades" aria-label="Permalink to &quot;Novas Funcionalidades&quot;">​</a></h2><h3 id="renomear-pastas-de-arquivos-no-agente-de-ia" tabindex="-1">Renomear pastas de arquivos no Agente de IA <a class="header-anchor" href="#renomear-pastas-de-arquivos-no-agente-de-ia" aria-label="Permalink to &quot;Renomear pastas de arquivos no Agente de IA&quot;">​</a></h3><p>Na aba <strong>Arquivos</strong> do Agente de IA, agora é possível <strong>renomear pastas</strong> (categorias) diretamente na interface. A alteração é salva na hora e fica disponível para todos os membros da organização.</p><h4 id="para-que-serve" tabindex="-1">Para que serve? <a class="header-anchor" href="#para-que-serve" aria-label="Permalink to &quot;Para que serve?&quot;">​</a></h4><ul><li>Corrigir nomes de pastas sem reorganizar arquivo por arquivo</li><li>Facilitar a identificação do material usado no atendimento</li><li>Manter a organização dos documentos alinhada à operação da equipe</li></ul><h4 id="como-usar" tabindex="-1">Como usar? <a class="header-anchor" href="#como-usar" aria-label="Permalink to &quot;Como usar?&quot;">​</a></h4><ol><li>Abra o <strong>Agente de IA</strong> desejado</li><li>Vá até a aba <strong>Arquivos</strong></li><li>No cabeçalho da pasta, clique no ícone de <strong>lápis</strong> (renomear)</li><li>Informe o novo nome e salve</li><li>Os arquivos da pasta permanecem acessíveis com o novo nome</li></ol><div class="tip custom-block"><p class="custom-block-title">Nome único</p><p>Não é possível usar um nome que já exista em outra pasta do mesmo agente.</p></div><blockquote><p>Guia completo: <a href="/guide/ai-agents/">Agentes IA — Arquivos</a></p></blockquote><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>Mais controle sobre a organização dos documentos do agente</li><li>Correção rápida de nomes sem perder arquivos</li><li>Organização consistente para toda a equipe da organização</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2026/07/2026.7.18.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_18 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_18 as default
};
