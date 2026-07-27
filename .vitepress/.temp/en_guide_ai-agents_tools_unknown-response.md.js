import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"When Unable to Answer","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/unknown-response.md","filePath":"en/guide/ai-agents/tools/unknown-response.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/unknown-response.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="when-unable-to-answer" tabindex="-1">When Unable to Answer <a class="header-anchor" href="#when-unable-to-answer" aria-label="Permalink to &quot;When Unable to Answer&quot;">​</a></h1><p>Defines AI behavior when the answer isn&#39;t found in context.</p><p><strong>Options:</strong></p><table tabindex="0"><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><strong>Pause agent</strong></td><td>Pauses AI and awaits human intervention</td></tr><tr><td><strong>Save question</strong></td><td>Records the question for later analysis</td></tr></tbody></table><p><strong>Why use:</strong></p><ul><li>Identify gaps in agent training</li><li>Avoid made-up answers</li><li>Collect FAQs to improve context</li></ul><p><strong>Viewing saved questions:</strong></p><ol><li>In the Context tab, click <strong>&quot;Questions&quot;</strong></li><li>See all unanswered questions</li><li>Use to improve agent context</li></ol><div class="info custom-block"><p class="custom-block-title">⚠️ Unique</p><p>This action can only be added once per agent.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/unknown-response.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unknownResponse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unknownResponse as default
};
