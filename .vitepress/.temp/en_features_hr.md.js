import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"HR / Time Clock","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/hr.md","filePath":"en/features/hr.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/hr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hr-time-clock" tabindex="-1">HR / Time Clock <a class="header-anchor" href="#hr-time-clock" aria-label="Permalink to &quot;HR / Time Clock&quot;">​</a></h1><p>Time tracking with punch, geofence, hour bank, and payroll preview.</p><h2 id="highlights" tabindex="-1">Highlights <a class="header-anchor" href="#highlights" aria-label="Permalink to &quot;Highlights&quot;">​</a></h2><ul><li>Punches with photo and GPS</li><li>Workplaces (geofence) and weekly schedules</li><li>Calendar, absences, hour bank, and payroll preview</li><li>Push notifications for managers</li></ul><h2 id="guide" tabindex="-1">Guide <a class="header-anchor" href="#guide" aria-label="Permalink to &quot;Guide&quot;">​</a></h2><ul><li><a href="/en/guide/hr/">HR / Time clock overview</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/hr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hr as default
};
