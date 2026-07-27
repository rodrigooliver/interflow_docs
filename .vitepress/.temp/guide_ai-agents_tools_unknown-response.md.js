import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Quando Não Souber Responder","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/unknown-response.md","filePath":"guide/ai-agents/tools/unknown-response.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/unknown-response.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="quando-nao-souber-responder" tabindex="-1">Quando Não Souber Responder <a class="header-anchor" href="#quando-nao-souber-responder" aria-label="Permalink to &quot;Quando Não Souber Responder&quot;">​</a></h1><p>Define o comportamento da IA quando não encontra a resposta no contexto.</p><p><strong>Opções:</strong></p><table tabindex="0"><thead><tr><th>Opção</th><th>Descrição</th></tr></thead><tbody><tr><td><strong>Pausar agente</strong></td><td>Pausa a IA e aguarda intervenção humana</td></tr><tr><td><strong>Salvar pergunta</strong></td><td>Registra a pergunta para análise posterior</td></tr></tbody></table><p><strong>Por que usar:</strong></p><ul><li>Identificar gaps no treinamento do agente</li><li>Evitar respostas inventadas</li><li>Coletar perguntas frequentes para melhorar o contexto</li></ul><p><strong>Visualizando perguntas salvas:</strong></p><ol><li>Na aba Contexto, clique em <strong>&quot;Questões&quot;</strong></li><li>Veja todas as perguntas não respondidas</li><li>Use para melhorar o contexto do agente</li></ol><div class="info custom-block"><p class="custom-block-title">⚠️ Única</p><p>Esta ação pode ser adicionada apenas uma vez por agente.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/unknown-response.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unknownResponse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unknownResponse as default
};
