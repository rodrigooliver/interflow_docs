import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Transferir para Equipe","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/transfer-to-team.md","filePath":"guide/ai-agents/tools/transfer-to-team.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/transfer-to-team.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="transferir-para-equipe" tabindex="-1">Transferir para Equipe <a class="header-anchor" href="#transferir-para-equipe" aria-label="Permalink to &quot;Transferir para Equipe&quot;">​</a></h1><p>Encaminha o atendimento para uma equipe humana.</p><p><strong>Opções de configuração:</strong></p><table tabindex="0"><thead><tr><th>Opção</th><th>Descrição</th></tr></thead><tbody><tr><td><strong>Equipes permitidas</strong></td><td>Selecione quais equipes a IA pode transferir</td></tr><tr><td><strong>Pausar agente</strong></td><td>Pausa a IA após a transferência</td></tr><tr><td><strong>Pular fluxo relacionado</strong></td><td>Não executa fluxos vinculados à equipe</td></tr><tr><td><strong>Gerar resumo</strong></td><td>Cria resumo automático da conversa</td></tr></tbody></table><p><strong>Resumo Automático:</strong></p><p>Quando ativado, o resumo inclui:</p><ul><li>Motivo do contato</li><li>Principais dúvidas do cliente</li><li>Passos já realizados pela IA</li><li>Dados coletados durante a conversa</li></ul><p><strong>Exemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Preciso falar com um humano sobre um problema técnico</span></span>
<span class="line"><span>🤖 IA: Entendi! Vou transferir você para nossa equipe de suporte técnico. </span></span>
<span class="line"><span>       Um momento, por favor...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Sistema: Chat transferido para &quot;Suporte Técnico&quot; com resumo]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/transfer-to-team.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transferToTeam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  transferToTeam as default
};
