import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Janeiro 2026","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2026/01/index.md","filePath":"changelog/2026/01/index.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2026/01/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="janeiro-2026" tabindex="-1">Janeiro 2026 <a class="header-anchor" href="#janeiro-2026" aria-label="Permalink to &quot;Janeiro 2026&quot;">​</a></h1><p>Atualizações do mês de janeiro de 2026.</p><h2 id="versoes" tabindex="-1">Versões <a class="header-anchor" href="#versoes" aria-label="Permalink to &quot;Versões&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Versão</th><th>Data</th><th>Destaques</th></tr></thead><tbody><tr><td><a href="/changelog/2026/01/2026.1.2">2026.1.2</a></td><td>21/01</td><td><strong>Controle de acesso granular ao CRM</strong>, Consulta de clientes por permissão</td></tr><tr><td><a href="/changelog/2026/01/2026.1.1">2026.1.1</a></td><td>20/01</td><td><strong>Templates WhatsApp Oficial em disparo em massa</strong>, Fluxos acionados em qualquer mensagem</td></tr></tbody></table><hr><h2 id="resumo-do-mes" tabindex="-1">Resumo do Mês <a class="header-anchor" href="#resumo-do-mes" aria-label="Permalink to &quot;Resumo do Mês&quot;">​</a></h2><h3 id="novas-funcionalidades-4" tabindex="-1">Novas Funcionalidades (4) <a class="header-anchor" href="#novas-funcionalidades-4" aria-label="Permalink to &quot;Novas Funcionalidades (4)&quot;">​</a></h3><ul><li><strong>Controle de acesso granular ao CRM</strong> - Sistema completo de permissões para atendentes visualizarem apenas seus clientes no CRM</li><li><strong>Consulta de clientes por permissão de usuário</strong> - Agentes com <code>agent_limited</code> visualizam apenas seus clientes em todos os módulos</li><li><strong>Templates de WhatsApp Oficial em disparo em massa</strong> - Envie templates pré-aprovados para múltiplos contatos</li><li><strong>Fluxos acionados em qualquer mensagem</strong> - Crie automações inteligentes baseadas em palavras-chave durante toda a conversa</li></ul><hr><div class="info custom-block"><p class="custom-block-title">Total</p><p><strong>2 releases</strong> com <strong>4 funcionalidades</strong> neste mês!</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2026/01/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
