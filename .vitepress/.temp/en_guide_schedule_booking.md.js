import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Public Booking","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/schedule/booking.md","filePath":"en/guide/schedule/booking.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/schedule/booking.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="public-booking" tabindex="-1">Public Booking <a class="header-anchor" href="#public-booking" aria-label="Permalink to &quot;Public Booking&quot;">​</a></h1><p>Let customers book slots through a public schedule link.</p><ol><li>Edit the schedule and enable <strong>public</strong> (<code>is_public</code>)</li><li>Share:</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://&lt;public-domain&gt;/booking/&lt;orgId&gt;/&lt;scheduleId&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The booking page is served by the public Interflow site (not the <code>/app</code> shell).</p><p>Combine with <a href="/en/guide/schedule/push-reminders">push reminders</a> and <a href="/en/guide/schedule/silent-flows">silent flows</a>.</p><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/guide/schedule/">Schedule overview</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/schedule/booking.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const booking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  booking as default
};
