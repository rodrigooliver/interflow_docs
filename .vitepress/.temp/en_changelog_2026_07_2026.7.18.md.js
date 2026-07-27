import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.18","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/07/2026.7.18.md","filePath":"en/changelog/2026/07/2026.7.18.md","lastUpdated":1785187292000}');
const _sfc_main = { name: "en/changelog/2026/07/2026.7.18.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-18" tabindex="-1">v2026.7.18 <a class="header-anchor" href="#v2026-7-18" aria-label="Permalink to &quot;v2026.7.18&quot;">​</a></h1><p>Release date: <strong>July 27, 2026</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="rename-file-folders-in-the-ai-agent" tabindex="-1">Rename file folders in the AI Agent <a class="header-anchor" href="#rename-file-folders-in-the-ai-agent" aria-label="Permalink to &quot;Rename file folders in the AI Agent&quot;">​</a></h3><p>In the AI Agent <strong>Files</strong> tab, you can now <strong>rename folders</strong> (categories) directly in the interface. The change is saved immediately and becomes available to all organization members.</p><h4 id="what-is-it-for" tabindex="-1">What is it for? <a class="header-anchor" href="#what-is-it-for" aria-label="Permalink to &quot;What is it for?&quot;">​</a></h4><ul><li>Fix folder names without reorganizing files one by one</li><li>Make it easier to identify materials used during support</li><li>Keep document organization aligned with the team&#39;s operation</li></ul><h4 id="how-to-use-it" tabindex="-1">How to use it? <a class="header-anchor" href="#how-to-use-it" aria-label="Permalink to &quot;How to use it?&quot;">​</a></h4><ol><li>Open the desired <strong>AI Agent</strong></li><li>Go to the <strong>Files</strong> tab</li><li>In the folder header, click the <strong>pencil</strong> icon (rename)</li><li>Enter the new name and save</li><li>Files in the folder remain accessible under the new name</li></ol><div class="tip custom-block"><p class="custom-block-title">Unique name</p><p>You cannot use a name that already exists in another folder of the same agent.</p></div><blockquote><p>Full guide: <a href="/en/guide/ai-agents/">AI Agents — Files</a></p></blockquote><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>More control over how agent documents are organized</li><li>Quick name fixes without losing files</li><li>Consistent organization for the entire organization team</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/07/2026.7.18.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_18 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_18 as default
};
