import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tipos de Encerramento","description":"","frontmatter":{},"headers":[],"relativePath":"guide/chat/closure-types.md","filePath":"guide/chat/closure-types.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "guide/chat/closure-types.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tipos-de-encerramento" tabindex="-1">Tipos de Encerramento <a class="header-anchor" href="#tipos-de-encerramento" aria-label="Permalink to &quot;Tipos de Encerramento&quot;">​</a></h1><p>Padronize o motivo ao fechar um atendimento e, opcionalmente, dispare um fluxo (ex.: pesquisa CSAT).</p><div class="tip custom-block"><p class="custom-block-title">Acesso</p><p>Menu → <strong>Tipos de encerramento</strong>.</p></div><h2 id="como-funcionam" tabindex="-1">Como funcionam <a class="header-anchor" href="#como-funcionam" aria-label="Permalink to &quot;Como funcionam&quot;">​</a></h2><p>Ao finalizar um chat, o atendente escolhe um <strong>tipo de encerramento</strong>. Isso:</p><ul><li>Padroniza métricas e motivos de fechamento</li><li>Pode iniciar um fluxo do tipo <strong><code>attendance_closure</code></strong> (ex.: enviar pesquisa de satisfação)</li></ul><h2 id="cadastrar-um-tipo" tabindex="-1">Cadastrar um tipo <a class="header-anchor" href="#cadastrar-um-tipo" aria-label="Permalink to &quot;Cadastrar um tipo&quot;">​</a></h2><ol><li>Abra <strong>Tipos de encerramento</strong></li><li>Clique em <strong>Novo</strong></li><li>Informe o nome (ex.: “Resolvido”, “Sem resposta”, “Spam”)</li><li>(Opcional) Vincule um fluxo <code>attendance_closure</code></li><li>Salve</li></ol><div class="tip custom-block"><p class="custom-block-title">Fluxo de encerramento</p><p>Crie o fluxo antes em <strong>Fluxos</strong>, com tipo adequado a encerramento de atendimento, e depois selecione-o no tipo.</p></div><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/guide/chat/interface">Interface de chat</a></li><li><a href="/guide/flows/builder">Construtor de fluxos</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/chat/closure-types.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const closureTypes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  closureTypes as default
};
