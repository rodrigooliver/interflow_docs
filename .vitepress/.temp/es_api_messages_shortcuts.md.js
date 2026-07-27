import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Atalhos e sequências","description":"","frontmatter":{},"headers":[],"relativePath":"es/api/messages/shortcuts.md","filePath":"es/api/messages/shortcuts.md","lastUpdated":1784707561000}');
const _sfc_main = { name: "es/api/messages/shortcuts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="atalhos-e-sequencias" tabindex="-1">Atalhos e sequências <a class="header-anchor" href="#atalhos-e-sequencias" aria-label="Permalink to &quot;Atalhos e sequências&quot;">​</a></h1><p>Use estes endpoints para enviar respostas rápidas ou várias mensagens em ordem.</p><h2 id="o-que-esta-disponivel" tabindex="-1">O que está disponível <a class="header-anchor" href="#o-que-esta-disponivel" aria-label="Permalink to &quot;O que está disponível&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Recurso</th><th>Endpoint</th></tr></thead><tbody><tr><td>Enviar uma mensagem</td><td><a href="/api/messages/send">Enviar mensagem</a></td></tr><tr><td>Enviar sequência (até 10 passos)</td><td><a href="/api/messages/sequence">Sequência</a></td></tr><tr><td>Reutilizar arquivos (<code>attachment_ids</code>)</td><td>Nos endpoints de mensagem</td></tr></tbody></table><p>Não há endpoint para criar ou gerenciar o catálogo de atalhos. Monte o conteúdo da sequência na sua integração e envie via API.</p><h2 id="fluxo-recomendado" tabindex="-1">Fluxo recomendado <a class="header-anchor" href="#fluxo-recomendado" aria-label="Permalink to &quot;Fluxo recomendado&quot;">​</a></h2><ol><li>Defina os passos (textos e, se necessário, <code>attachment_ids</code> de arquivos da organização)</li><li>Chame <code>POST /api/{organizationId}/chat/{chatId}/message-sequence</code> com <code>steps</code></li><li>Para uma única mensagem, use <code>POST .../message</code></li></ol><h2 id="ver-tambem" tabindex="-1">Ver também <a class="header-anchor" href="#ver-tambem" aria-label="Permalink to &quot;Ver também&quot;">​</a></h2><ul><li><a href="/api/messages/sequence">Sequência de mensagens</a></li><li><a href="/api/messages/send">Enviar mensagem</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/api/messages/shortcuts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shortcuts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shortcuts as default
};
