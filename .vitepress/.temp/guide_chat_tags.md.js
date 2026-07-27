import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tags","description":"","frontmatter":{},"headers":[],"relativePath":"guide/chat/tags.md","filePath":"guide/chat/tags.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "guide/chat/tags.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tags" tabindex="-1">Tags <a class="header-anchor" href="#tags" aria-label="Permalink to &quot;Tags&quot;">​</a></h1><p>Organize conversas, clientes e automações com etiquetas coloridas.</p><div class="tip custom-block"><p class="custom-block-title">Acesso</p><p>Menu → <strong>Tags</strong>.</p></div><h2 id="para-que-servem" tabindex="-1">Para que servem <a class="header-anchor" href="#para-que-servem" aria-label="Permalink to &quot;Para que servem&quot;">​</a></h2><ul><li>Filtrar a caixa de entrada e listagens</li><li>Segmentar públicos em <a href="/guide/chat/bulk-messages">disparos em massa</a></li><li>Organizar clientes e contextos de atendimento</li><li>Condicionar comportamentos em fluxos e prompts (quando configurado)</li></ul><h2 id="criar-e-gerenciar" tabindex="-1">Criar e gerenciar <a class="header-anchor" href="#criar-e-gerenciar" aria-label="Permalink to &quot;Criar e gerenciar&quot;">​</a></h2><ol><li>Abra <strong>Tags</strong></li><li>Clique em <strong>Nova tag</strong></li><li>Defina <strong>nome</strong> e <strong>cor</strong></li><li>Salve — a tag fica disponível para uso no chat e filtros</li></ol><p>Para editar ou excluir, use as ações na lista de tags.</p><div class="warning custom-block"><p class="custom-block-title">Exclusão</p><p>Apagar uma tag <strong>não remove</strong> automaticamente o histórico de uso em mensagens ou prompts já associados. A etiqueta deixa de existir para novos usos.</p></div><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/guide/chat/interface">Interface de chat</a></li><li><a href="/guide/chat/bulk-messages">Disparos em massa</a></li><li><a href="/guide/crm/customers">Clientes</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/chat/tags.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tags = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tags as default
};
