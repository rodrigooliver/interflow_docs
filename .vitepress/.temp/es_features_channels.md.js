import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Atención multicanal","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/channels.md","filePath":"es/features/channels.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/channels.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="atencion-multicanal" tabindex="-1">Atención multicanal <a class="header-anchor" href="#atencion-multicanal" aria-label="Permalink to &quot;Atención multicanal&quot;">​</a></h1><p>Centralice WhatsApp (Official y WAHA), Instagram, Facebook Messenger y Email en una sola bandeja.</p><h2 id="destacados" tabindex="-1">Destacados <a class="header-anchor" href="#destacados" aria-label="Permalink to &quot;Destacados&quot;">​</a></h2><ul><li>Historial, media, notas internas y transferencias</li><li><a href="/es/guide/channels/whatsapp-templates">Plantillas WhatsApp</a> fuera de la ventana de 24h</li><li>Estado de entrega/lectura en tiempo real</li></ul><h2 id="guias" tabindex="-1">Guías <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guías&quot;">​</a></h2><ul><li><a href="/es/guide/channels/">Canales</a></li><li><a href="/es/guide/channels/whatsapp-business">WhatsApp Business</a></li><li><a href="/es/guide/channels/whatsapp-waha">WhatsApp WAHA</a></li><li><a href="/es/guide/channels/instagram">Instagram</a></li><li><a href="/es/guide/channels/facebook">Facebook Messenger</a></li><li><a href="/es/guide/channels/email">Email</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/channels.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const channels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  channels as default
};
