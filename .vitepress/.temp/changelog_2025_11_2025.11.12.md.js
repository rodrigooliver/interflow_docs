import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.12","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/11/2025.11.12.md","filePath":"changelog/2025/11/2025.11.12.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/11/2025.11.12.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-12" tabindex="-1">v2025.11.12 <a class="header-anchor" href="#v2025-11-12" aria-label="Permalink to &quot;v2025.11.12&quot;">​</a></h1><p>Data de lançamento: <strong>22 de Novembro de 2025</strong></p><hr><h2 id="melhoria" tabindex="-1">Melhoria <a class="header-anchor" href="#melhoria" aria-label="Permalink to &quot;Melhoria&quot;">​</a></h2><h3 id="processo-de-reenvio-do-app-whatsapp-para-analise-do-meta" tabindex="-1">Processo de Reenvio do App WhatsApp para Análise do Meta <a class="header-anchor" href="#processo-de-reenvio-do-app-whatsapp-para-analise-do-meta" aria-label="Permalink to &quot;Processo de Reenvio do App WhatsApp para Análise do Meta&quot;">​</a></h3><p>Facilitação do reenvio do aplicativo para análise quando necessário.</p><h4 id="problema-resolvido" tabindex="-1">Problema resolvido: <a class="header-anchor" href="#problema-resolvido" aria-label="Permalink to &quot;Problema resolvido:&quot;">​</a></h4><p>Ao cadastrar canal com API oficial do WhatsApp, pode ocorrer erro de login que requer reenvio do app para análise do Meta.</p><h4 id="solucao" tabindex="-1">Solução: <a class="header-anchor" href="#solucao" aria-label="Permalink to &quot;Solução:&quot;">​</a></h4><ul><li>Sistema detecta automaticamente a necessidade de reenvio</li><li>Botão ou instrução clara para iniciar o processo</li><li>Acompanhamento do status até aprovação</li></ul><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Autonomia para resolver sem suporte externo</li><li>✅ Processo guiado e simplificado</li><li>✅ Menos atrito na integração do WhatsApp</li><li>✅ Acompanhamento do status de aprovação</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/11/2025.11.12.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_12 as default
};
