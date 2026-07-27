import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.7","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/12/2025.12.7.md","filePath":"en/changelog/2025/12/2025.12.7.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/12/2025.12.7.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-7" tabindex="-1">v2025.12.7 <a class="header-anchor" href="#v2025-12-7" aria-label="Permalink to &quot;v2025.12.7&quot;">​</a></h1><p>Release date: <strong>December 16, 2025</strong></p><hr><h2 id="fix" tabindex="-1">Fix <a class="header-anchor" href="#fix" aria-label="Permalink to &quot;Fix&quot;">​</a></h2><h3 id="ai-agent-now-respects-configured-schedule-time-offs" tabindex="-1">AI Agent Now Respects Configured Schedule Time-offs <a class="header-anchor" href="#ai-agent-now-respects-configured-schedule-time-offs" aria-label="Permalink to &quot;AI Agent Now Respects Configured Schedule Time-offs&quot;">​</a></h3><p>AI Agent was fixed to always respect the time-off and unavailability settings in the schedule.</p><h4 id="what-was-fixed" tabindex="-1">What was fixed? <a class="header-anchor" href="#what-was-fixed" aria-label="Permalink to &quot;What was fixed?&quot;">​</a></h4><p>Before, AI Agent continued offering days and times even when there were configured time-offs. Now:</p><ul><li>❌ <strong>Does NOT offer</strong> times during time-off periods</li><li>❌ <strong>Does NOT allow</strong> creating appointments on blocked days</li><li>✅ <strong>Explains to customer</strong> the reason for unavailability</li><li>✅ <strong>Automatically suggests</strong> available alternative dates</li></ul><h4 id="supported-time-off-types" tabindex="-1">Supported time-off types <a class="header-anchor" href="#supported-time-off-types" aria-label="Permalink to &quot;Supported time-off types&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>Full day</strong></td><td>Blocks complete day (holidays, scheduled time-offs)</td></tr><tr><td><strong>Specific time</strong></td><td>Blocks only a period (lunch, meetings)</td></tr><tr><td><strong>By professional</strong></td><td>Applies time-off only to a specific professional</td></tr><tr><td><strong>Everyone</strong></td><td>Applies time-off to entire team</td></tr></tbody></table><h4 id="example-ai-response" tabindex="-1">Example AI response <a class="header-anchor" href="#example-ai-response" aria-label="Permalink to &quot;Example AI response&quot;">​</a></h4><blockquote><p>&quot;Unfortunately we don&#39;t have service on 12/25 due to <strong>Christmas</strong>. Can I check other available days for you?&quot;</p></blockquote><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Only really available times are offered</li><li>✅ Avoids conflicts and rework</li><li>✅ Better customer experience</li><li>✅ Professional schedules respected</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/12/2025.12.7.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_7 as default
};
