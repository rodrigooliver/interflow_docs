import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.13","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/11/2025.11.13.md","filePath":"en/changelog/2025/11/2025.11.13.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/11/2025.11.13.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-13" tabindex="-1">v2025.11.13 <a class="header-anchor" href="#v2025-11-13" aria-label="Permalink to &quot;v2025.11.13&quot;">​</a></h1><p>Release date: <strong>November 25, 2025</strong></p><hr><h2 id="fix" tabindex="-1">Fix <a class="header-anchor" href="#fix" aria-label="Permalink to &quot;Fix&quot;">​</a></h2><h3 id="time-slot-selection-in-flow" tabindex="-1">Time Slot Selection in Flow <a class="header-anchor" href="#time-slot-selection-in-flow" aria-label="Permalink to &quot;Time Slot Selection in Flow&quot;">​</a></h3><p>Fixed a bug where time slot selection in flow was not working correctly.</p><h4 id="what-was-fixed" tabindex="-1">What was fixed? <a class="header-anchor" href="#what-was-fixed" aria-label="Permalink to &quot;What was fixed?&quot;">​</a></h4><ul><li>❌ <strong>Before</strong>: When selecting a time in the flow, the slot was not being properly reserved</li><li>✅ <strong>After</strong>: Time selection now correctly reserves the slot and validates availability</li></ul><h4 id="affected-scenarios" tabindex="-1">Affected scenarios: <a class="header-anchor" href="#affected-scenarios" aria-label="Permalink to &quot;Affected scenarios:&quot;">​</a></h4><ul><li>📅 Appointment scheduling via flow</li><li>⏰ Available time selection</li><li>🔄 Confirmation of reserved slot</li></ul><h4 id="behavior-after-fix" tabindex="-1">Behavior after fix: <a class="header-anchor" href="#behavior-after-fix" aria-label="Permalink to &quot;Behavior after fix:&quot;">​</a></h4><ol><li>Customer selects desired time</li><li>System validates availability in real-time</li><li>Slot is temporarily reserved</li><li>Upon confirmation, permanent reservation is made</li><li>If cancelled, slot is released</li></ol><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ No more double bookings</li><li>✅ Accurate availability</li><li>✅ Reliable appointment scheduling</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/11/2025.11.13.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_13 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_13 as default
};
