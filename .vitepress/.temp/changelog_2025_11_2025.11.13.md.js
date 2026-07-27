import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.13","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/11/2025.11.13.md","filePath":"changelog/2025/11/2025.11.13.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/11/2025.11.13.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-13" tabindex="-1">v2025.11.13 <a class="header-anchor" href="#v2025-11-13" aria-label="Permalink to &quot;v2025.11.13&quot;">​</a></h1><p>Data de lançamento: <strong>25 de Novembro de 2025</strong></p><hr><h2 id="correcao" tabindex="-1">Correção <a class="header-anchor" href="#correcao" aria-label="Permalink to &quot;Correção&quot;">​</a></h2><h3 id="correcao-na-abertura-da-selecao-de-horarios-no-fluxo" tabindex="-1">Correção na Abertura da Seleção de Horários no Fluxo <a class="header-anchor" href="#correcao-na-abertura-da-selecao-de-horarios-no-fluxo" aria-label="Permalink to &quot;Correção na Abertura da Seleção de Horários no Fluxo&quot;">​</a></h3><p>Corrigido problema que impedia a exibição de horários disponíveis no fluxo.</p><h4 id="problema" tabindex="-1">Problema: <a class="header-anchor" href="#problema" aria-label="Permalink to &quot;Problema:&quot;">​</a></h4><ul><li>Ao acessar o fluxo, a seleção de horários não era exibida</li><li>Usuários não conseguiam escolher horários para agendamento</li><li>Processo era interrompido</li></ul><h4 id="solucao" tabindex="-1">Solução: <a class="header-anchor" href="#solucao" aria-label="Permalink to &quot;Solução:&quot;">​</a></h4><ul><li>Opções de horários agora aparecem corretamente</li><li>Navegação fluida até a conclusão</li><li>Dias e horários disponíveis exibidos normalmente</li></ul><h4 id="resultado" tabindex="-1">Resultado: <a class="header-anchor" href="#resultado" aria-label="Permalink to &quot;Resultado:&quot;">​</a></h4><ul><li>✅ Atendimentos finalizados sem impedimentos</li><li>✅ Melhor experiência para usuário e equipe</li><li>✅ Agendamentos completados com sucesso</li></ul><hr><div class="tip custom-block"><p class="custom-block-title">Dica</p><p>Se ainda encontrar problemas ao escolher dias e horários, entre em contato com o suporte.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/11/2025.11.13.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_13 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_13 as default
};
