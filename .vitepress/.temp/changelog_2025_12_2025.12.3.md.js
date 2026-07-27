import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.3","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/12/2025.12.3.md","filePath":"changelog/2025/12/2025.12.3.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/12/2025.12.3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-3" tabindex="-1">v2025.12.3 <a class="header-anchor" href="#v2025-12-3" aria-label="Permalink to &quot;v2025.12.3&quot;">​</a></h1><p>Data de lançamento: <strong>08 de Dezembro de 2025</strong></p><hr><h2 id="novas-funcionalidades" tabindex="-1">Novas Funcionalidades <a class="header-anchor" href="#novas-funcionalidades" aria-label="Permalink to &quot;Novas Funcionalidades&quot;">​</a></h2><h3 id="arquivo-automatico-para-conversas-em-atendimento" tabindex="-1">Arquivo Automático para Conversas em Atendimento <a class="header-anchor" href="#arquivo-automatico-para-conversas-em-atendimento" aria-label="Permalink to &quot;Arquivo Automático para Conversas em Atendimento&quot;">​</a></h3><p>Agora é possível arquivar conversas que estão no status &quot;em atendimento&quot;, permitindo melhor organização da lista de chats ativos.</p><h4 id="como-funciona" tabindex="-1">Como funciona? <a class="header-anchor" href="#como-funciona" aria-label="Permalink to &quot;Como funciona?&quot;">​</a></h4><ul><li>Arquive conversas ativas para organizar sua lista</li><li>Quando o cliente enviar uma nova mensagem, a conversa é <strong>desarquivada automaticamente</strong></li><li>Nenhuma mensagem importante é perdida</li></ul><h4 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h4><ul><li>✅ Foque no que é mais prioritário</li><li>✅ Mantenha a lista de atendimentos organizada</li><li>✅ Receba atualizações automaticamente</li></ul><hr><h3 id="ia-lista-apenas-agendamentos-futuros" tabindex="-1">IA Lista Apenas Agendamentos Futuros <a class="header-anchor" href="#ia-lista-apenas-agendamentos-futuros" aria-label="Permalink to &quot;IA Lista Apenas Agendamentos Futuros&quot;">​</a></h3><p>A IA agora mostra apenas agendamentos que ainda vão acontecer, desconsiderando horários passados.</p><h4 id="o-que-muda" tabindex="-1">O que muda? <a class="header-anchor" href="#o-que-muda" aria-label="Permalink to &quot;O que muda?&quot;">​</a></h4><ul><li>Ao pedir uma lista de agendamentos, apenas compromissos futuros são exibidos</li><li>Informações desatualizadas não aparecem mais</li><li>Maior agilidade para encontrar próximos compromissos</li></ul><hr><h2 id="beneficios-1" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios-1" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Atendimento mais organizado</li><li>✅ Informações sempre relevantes</li><li>✅ Maior eficiência no dia a dia</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/12/2025.12.3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_3 as default
};
