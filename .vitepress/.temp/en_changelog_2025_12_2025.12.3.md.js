import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.3","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/12/2025.12.3.md","filePath":"en/changelog/2025/12/2025.12.3.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/12/2025.12.3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-3" tabindex="-1">v2025.12.3 <a class="header-anchor" href="#v2025-12-3" aria-label="Permalink to &quot;v2025.12.3&quot;">​</a></h1><p>Release date: <strong>December 08, 2025</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="auto-archive-for-ongoing-conversations" tabindex="-1">Auto Archive for Ongoing Conversations <a class="header-anchor" href="#auto-archive-for-ongoing-conversations" aria-label="Permalink to &quot;Auto Archive for Ongoing Conversations&quot;">​</a></h3><p>You can now archive conversations that are in &quot;ongoing&quot; status, allowing better organization of active chat lists.</p><h4 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-label="Permalink to &quot;How does it work?&quot;">​</a></h4><ul><li>Archive active conversations to organize your list</li><li>When customer sends a new message, conversation is <strong>automatically unarchived</strong></li><li>No important message is lost</li></ul><hr><h3 id="ai-lists-only-future-appointments" tabindex="-1">AI Lists Only Future Appointments <a class="header-anchor" href="#ai-lists-only-future-appointments" aria-label="Permalink to &quot;AI Lists Only Future Appointments&quot;">​</a></h3><p>AI now shows only appointments that will still happen, disregarding past times.</p><h4 id="what-changes" tabindex="-1">What changes? <a class="header-anchor" href="#what-changes" aria-label="Permalink to &quot;What changes?&quot;">​</a></h4><ul><li>When requesting an appointment list, only future appointments are displayed</li><li>Outdated information no longer appears</li><li>Greater agility to find upcoming appointments</li></ul><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ More organized support</li><li>✅ Always relevant information</li><li>✅ Greater daily efficiency</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/12/2025.12.3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_3 as default
};
