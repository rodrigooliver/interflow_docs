import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.4.9","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2026/04/2026.4.9.md","filePath":"changelog/2026/04/2026.4.9.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2026/04/2026.4.9.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-4-9" tabindex="-1">v2026.4.9 <a class="header-anchor" href="#v2026-4-9" aria-label="Permalink to &quot;v2026.4.9&quot;">​</a></h1><p>Data de lançamento: <strong>22 de abril de 2026</strong></p><hr><h2 id="correcoes" tabindex="-1">Correções <a class="header-anchor" href="#correcoes" aria-label="Permalink to &quot;Correções&quot;">​</a></h2><h3 id="selecao-multipla-de-mensagens-no-chat-criar-tarefa" tabindex="-1">Seleção múltipla de mensagens no chat (criar tarefa) <a class="header-anchor" href="#selecao-multipla-de-mensagens-no-chat-criar-tarefa" aria-label="Permalink to &quot;Seleção múltipla de mensagens no chat (criar tarefa)&quot;">​</a></h3><p>No modo de seleção de mensagens (por exemplo, para gerar tarefas a partir do chat), o clique <strong>diretamente no ícone do checkbox</strong> às vezes desmarcava a seleção ou encerrava o modo de forma inesperada, enquanto o clique no corpo da mensagem funcionava corretamente.</p><p>A causa era a combinação de <code>&lt;label&gt;</code> com <code>&lt;input type=&quot;checkbox&quot;&gt;</code> oculto: o evento de alteração e o de clique da linha podiam disparar o mesmo <code>handleSelectMessage</code> em sequência, revertendo a seleção. A interface foi ajustada para um único handler de clique com <code>stopPropagation</code>, mantendo o mesmo visual do checkbox.</p><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Seleção múltipla previsível ao clicar no checkbox ou na mensagem</li><li>✅ Fluxo de criação de tarefas a partir de várias mensagens mais rápido e menos confuso</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2026/04/2026.4.9.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_4_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_4_9 as default
};
