import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Templates WhatsApp (API Oficial)","description":"","frontmatter":{},"headers":[],"relativePath":"guide/channels/whatsapp-templates.md","filePath":"guide/channels/whatsapp-templates.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "guide/channels/whatsapp-templates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="templates-whatsapp-api-oficial" tabindex="-1">Templates WhatsApp (API Oficial) <a class="header-anchor" href="#templates-whatsapp-api-oficial" aria-label="Permalink to &quot;Templates WhatsApp (API Oficial)&quot;">​</a></h1><p>Gerencie templates oficiais do Meta para iniciar conversas fora da janela de 24h, disparos e novos chats.</p><div class="tip custom-block"><p class="custom-block-title">Acesso</p><p><strong>Canais →</strong> selecione um canal <strong>WhatsApp Business (Official)</strong> → <strong>Templates</strong></p></div><h2 id="visao-geral" tabindex="-1">Visão geral <a class="header-anchor" href="#visao-geral" aria-label="Permalink to &quot;Visão geral&quot;">​</a></h2><p>Templates precisam estar <strong>aprovados (APPROVED)</strong> na Meta para uso em:</p><ul><li>Início de conversa / criar chat</li><li><a href="/guide/chat/bulk-messages">Disparos em massa</a></li><li>Envios manuais que exigem template</li></ul><h2 id="sincronizar-e-gerenciar" tabindex="-1">Sincronizar e gerenciar <a class="header-anchor" href="#sincronizar-e-gerenciar" aria-label="Permalink to &quot;Sincronizar e gerenciar&quot;">​</a></h2><ol><li>Abra o canal WhatsApp Official</li><li>Vá em <strong>Templates</strong></li><li>Use <strong>Sincronizar</strong> para puxar o status da Meta</li><li>Crie ou edite templates conforme a política do WhatsApp</li><li>Aguarde aprovação antes de usar em produção</li></ol><h3 id="status-comuns" tabindex="-1">Status comuns <a class="header-anchor" href="#status-comuns" aria-label="Permalink to &quot;Status comuns&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Status</th><th>Significado</th></tr></thead><tbody><tr><td>APPROVED</td><td>Pronto para uso</td></tr><tr><td>PENDING</td><td>Aguardando análise</td></tr><tr><td>REJECTED</td><td>Recusado — revise o conteúdo</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Disparos com template não aprovado falham. Sempre confira o status antes de iniciar uma campanha.</p></div><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/guide/channels/whatsapp-business">WhatsApp Business</a></li><li><a href="/guide/chat/bulk-messages">Disparos em massa</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/channels/whatsapp-templates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const whatsappTemplates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  whatsappTemplates as default
};
