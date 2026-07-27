import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reserva pública (Booking)","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/schedule/booking.md","filePath":"es/guide/schedule/booking.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/schedule/booking.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="reserva-publica-booking" tabindex="-1">Reserva pública (Booking) <a class="header-anchor" href="#reserva-publica-booking" aria-label="Permalink to &quot;Reserva pública (Booking)&quot;">​</a></h1><p>Permita que los clientes reserven con un link público de la agenda.</p><ol><li>Edite la agenda y active <strong>pública</strong> (<code>is_public</code>)</li><li>Comparta:</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://&lt;dominio-publico&gt;/booking/&lt;orgId&gt;/&lt;scheduleId&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>La página se sirve en el sitio público (no en <code>/app</code>).</p><p>Combine con <a href="/es/guide/schedule/push-reminders">recordatorios push</a> y <a href="/es/guide/schedule/silent-flows">flujos silenciosos</a>.</p><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/schedule/">Agenda</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/schedule/booking.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const booking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  booking as default
};
