import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Agendamento Público (Booking)","description":"","frontmatter":{},"headers":[],"relativePath":"guide/schedule/booking.md","filePath":"guide/schedule/booking.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "guide/schedule/booking.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agendamento-publico-booking" tabindex="-1">Agendamento Público (Booking) <a class="header-anchor" href="#agendamento-publico-booking" aria-label="Permalink to &quot;Agendamento Público (Booking)&quot;">​</a></h1><p>Permita que clientes marquem horários por um link público da agenda.</p><h2 id="como-funciona" tabindex="-1">Como funciona <a class="header-anchor" href="#como-funciona" aria-label="Permalink to &quot;Como funciona&quot;">​</a></h2><ol><li>Em <strong>Agendas</strong>, edite a agenda desejada</li><li>Ative a opção de agenda <strong>pública</strong> (<code>is_public</code>)</li><li>Compartilhe o link no formato:</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://&lt;seu-dominio-publico&gt;/booking/&lt;orgId&gt;/&lt;scheduleId&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>O link de booking costuma ser servido pelo <strong>site público</strong> da Interflow (não pela rota interna <code>/app</code>).</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Combine com <a href="/guide/schedule/push-reminders">lembretes push</a> e <a href="/guide/schedule/silent-flows">fluxos silenciosos por status</a> para automatizar confirmação e no-show.</p></div><h2 id="boas-praticas" tabindex="-1">Boas práticas <a class="header-anchor" href="#boas-praticas" aria-label="Permalink to &quot;Boas práticas&quot;">​</a></h2><ul><li>Configure disponibilidade e feriados antes de publicar</li><li>Use templates de notificação da agenda</li><li>Teste o link em aba anônima</li></ul><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/guide/schedule/">Agenda — visão geral</a></li><li><a href="/guide/schedule/push-reminders">Lembretes push</a></li><li><a href="/guide/schedule/silent-flows">Fluxos silenciosos</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/schedule/booking.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const booking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  booking as default
};
