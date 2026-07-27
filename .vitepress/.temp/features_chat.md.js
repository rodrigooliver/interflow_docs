import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chat e Atendimento","description":"","frontmatter":{},"headers":[],"relativePath":"features/chat.md","filePath":"features/chat.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/chat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chat-e-atendimento" tabindex="-1">Chat e Atendimento <a class="header-anchor" href="#chat-e-atendimento" aria-label="Permalink to &quot;Chat e Atendimento&quot;">​</a></h1><p>Ferramentas do dia a dia do atendente: inbox, atalhos, tags, encerramento e campanhas.</p><h2 id="destaques" tabindex="-1">Destaques <a class="header-anchor" href="#destaques" aria-label="Permalink to &quot;Destaques&quot;">​</a></h2><ul><li><a href="/guide/chat/interface">Interface de chat</a> unificada</li><li><a href="/guide/chat/bulk-messages">Disparos em massa</a> (mensagem, fluxo ou fluxo silencioso)</li><li><a href="/guide/chat/tags">Tags</a> e <a href="/guide/chat/closure-types">tipos de encerramento</a></li><li><a href="/guide/chat/message-shortcuts">Atalhos de mensagem</a> e <a href="/guide/chat/text-enhancer">melhorador de texto</a></li><li>Chat interno entre agentes</li><li><a href="/guide/tasks">Minhas tarefas</a></li></ul><h2 id="guias" tabindex="-1">Guias <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guias&quot;">​</a></h2><ul><li><a href="/guide/chat/interface">Interface de chat</a></li><li><a href="/guide/chat/bulk-messages">Disparos em massa</a></li><li><a href="/guide/chat/tags">Tags</a></li><li><a href="/guide/chat/closure-types">Tipos de encerramento</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chat as default
};
