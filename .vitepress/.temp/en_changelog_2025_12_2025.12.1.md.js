import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.1","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/12/2025.12.1.md","filePath":"en/changelog/2025/12/2025.12.1.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/12/2025.12.1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-1" tabindex="-1">v2025.12.1 <a class="header-anchor" href="#v2025-12-1" aria-label="Permalink to &quot;v2025.12.1&quot;">​</a></h1><p>Release date: <strong>December 03, 2025</strong></p><hr><h2 id="new-feature" tabindex="-1">New Feature <a class="header-anchor" href="#new-feature" aria-label="Permalink to &quot;New Feature&quot;">​</a></h2><h3 id="ai-automatically-adjusts-follow-ups-based-on-conversation-context" tabindex="-1">AI Automatically Adjusts Follow-ups Based on Conversation Context <a class="header-anchor" href="#ai-automatically-adjusts-follow-ups-based-on-conversation-context" aria-label="Permalink to &quot;AI Automatically Adjusts Follow-ups Based on Conversation Context&quot;">​</a></h3><p>AI now adapts or pauses follow-ups based on conversation progress, avoiding inappropriate automatic contacts.</p><h4 id="what-changes" tabindex="-1">What changes? <a class="header-anchor" href="#what-changes" aria-label="Permalink to &quot;What changes?&quot;">​</a></h4><ul><li><strong>Smart rescheduling</strong>: AI reschedules follow-up to a specific date when customer requests (e.g., &quot;let&#39;s talk on Thursday&quot; or &quot;I&#39;ll be back on the 25th&quot;)</li><li><strong>Automatic cancellation</strong>: If customer already closed the deal or confirmed appointment, follow-up is paused</li><li><strong>Context preserved</strong>: AI resumes conversation knowing exactly what to discuss</li></ul><h4 id="how-to-enable" tabindex="-1">How to enable? <a class="header-anchor" href="#how-to-enable" aria-label="Permalink to &quot;How to enable?&quot;">​</a></h4><ol><li>Go to <strong>Prompts</strong> in the sidebar</li><li>Select the prompt linked to your flow</li><li>Click <strong>Edit → Tools</strong></li><li>Add the <strong>&quot;Change Return Date&quot;</strong> action</li><li>Configure the target flow and node</li><li>Save changes</li></ol><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Smarter and more humanized service</li><li>✅ Improves customer experience</li><li>✅ Reduces unnecessary contacts</li><li>✅ Frees up agent schedules</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/12/2025.12.1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_1 as default
};
