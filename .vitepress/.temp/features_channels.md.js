import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Atendimento Multicanal","description":"","frontmatter":{},"headers":[],"relativePath":"features/channels.md","filePath":"features/channels.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/channels.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="atendimento-multicanal" tabindex="-1">Atendimento Multicanal <a class="header-anchor" href="#atendimento-multicanal" aria-label="Permalink to &quot;Atendimento Multicanal&quot;">​</a></h1><p>Centralize WhatsApp (Official e WAHA), Instagram, Facebook Messenger e Email em uma única caixa de entrada.</p><h2 id="destaques" tabindex="-1">Destaques <a class="header-anchor" href="#destaques" aria-label="Permalink to &quot;Destaques&quot;">​</a></h2><ul><li>Histórico completo, mídia, notas internas e transferência entre equipes</li><li><a href="/guide/channels/whatsapp-templates">Templates WhatsApp</a> para conversas fora da janela de 24h</li><li>Status de entrega/leitura em tempo real</li></ul><h2 id="guias" tabindex="-1">Guias <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guias&quot;">​</a></h2><ul><li><a href="/guide/channels/">Visão geral dos canais</a></li><li><a href="/guide/channels/whatsapp-business">WhatsApp Business</a></li><li><a href="/guide/channels/whatsapp-waha">WhatsApp WAHA</a></li><li><a href="/guide/channels/instagram">Instagram</a></li><li><a href="/guide/channels/facebook">Facebook Messenger</a></li><li><a href="/guide/channels/email">Email</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/channels.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const channels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  channels as default
};
