import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Schedule & Appointments","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/schedule.md","filePath":"en/features/schedule.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/schedule.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="schedule-appointments" tabindex="-1">Schedule &amp; Appointments <a class="header-anchor" href="#schedule-appointments" aria-label="Permalink to &quot;Schedule &amp; Appointments&quot;">​</a></h1><p>Calendars, availability, reminders, silent flows, and public booking.</p><h2 id="highlights" tabindex="-1">Highlights <a class="header-anchor" href="#highlights" aria-label="Permalink to &quot;Highlights&quot;">​</a></h2><ul><li>Multiple schedules, availability, and holidays</li><li><a href="/en/guide/schedule/push-reminders">Push reminders</a></li><li><a href="/en/guide/schedule/silent-flows">Silent flows by status</a></li><li><a href="/en/guide/schedule/booking">Public booking</a></li></ul><h2 id="guides" tabindex="-1">Guides <a class="header-anchor" href="#guides" aria-label="Permalink to &quot;Guides&quot;">​</a></h2><ul><li><a href="/en/guide/schedule/">Schedule overview</a></li><li><a href="/en/guide/schedule/push-reminders">Push reminders</a></li><li><a href="/en/guide/schedule/silent-flows">Silent flows</a></li><li><a href="/en/guide/schedule/booking">Public booking</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/schedule.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  schedule as default
};
