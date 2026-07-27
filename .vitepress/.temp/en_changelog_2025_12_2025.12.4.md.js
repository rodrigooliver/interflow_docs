import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.4","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/12/2025.12.4.md","filePath":"en/changelog/2025/12/2025.12.4.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/12/2025.12.4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-4" tabindex="-1">v2025.12.4 <a class="header-anchor" href="#v2025-12-4" aria-label="Permalink to &quot;v2025.12.4&quot;">​</a></h1><p>Release date: <strong>December 09, 2025</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="option-to-disable-automatic-ai-summary" tabindex="-1">Option to Disable Automatic AI Summary <a class="header-anchor" href="#option-to-disable-automatic-ai-summary" aria-label="Permalink to &quot;Option to Disable Automatic AI Summary&quot;">​</a></h3><p>You can now choose to close or transfer support without generating automatic summary, saving AI tokens.</p><h4 id="how-to-configure" tabindex="-1">How to configure? <a class="header-anchor" href="#how-to-configure" aria-label="Permalink to &quot;How to configure?&quot;">​</a></h4><ol><li>Go to <strong>⚙️ Settings</strong> in the sidebar</li><li>Navigate to the <strong>&quot;General&quot;</strong> tab</li><li>Locate the <strong>&quot;AI and Automation&quot;</strong> section (purple card)</li><li>Enable desired options: <ul><li><strong>Disable AI Summary on Resolution</strong> - Does not generate summary when closing</li><li><strong>Disable AI Summary on Transfer</strong> - Does not generate summary when transferring/leaving</li></ul></li><li>Click <strong>&quot;Save&quot;</strong></li></ol><div class="tip custom-block"><p class="custom-block-title">Benefit</p><p>When disabling these options, you save API calls and AI tokens. The summary field remains available for manual filling.</p></div><hr><h3 id="android-schedule-improvements" tabindex="-1">Android Schedule Improvements <a class="header-anchor" href="#android-schedule-improvements" aria-label="Permalink to &quot;Android Schedule Improvements&quot;">​</a></h3><p>Usability improvements for the schedule on the Android app:</p><h4 id="what-improved" tabindex="-1">What improved? <a class="header-anchor" href="#what-improved" aria-label="Permalink to &quot;What improved?&quot;">​</a></h4><ul><li><strong>Protection against accidental gestures</strong>: Block or confirmation for finger movement actions</li><li><strong>Expanded weekly view</strong>: Display of 6 or 7 days at a time</li><li><strong>Week starting on Sunday</strong>: Better week overview</li><li><strong>Event creation and editing</strong>: Now available directly through the Android app</li></ul><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ AI token savings</li><li>✅ More control over costs</li><li>✅ Better mobile experience</li><li>✅ Greater practicality in schedule use</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/12/2025.12.4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_4 as default
};
