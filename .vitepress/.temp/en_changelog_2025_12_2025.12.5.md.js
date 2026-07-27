import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.5","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/12/2025.12.5.md","filePath":"en/changelog/2025/12/2025.12.5.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/12/2025.12.5.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-5" tabindex="-1">v2025.12.5 <a class="header-anchor" href="#v2025-12-5" aria-label="Permalink to &quot;v2025.12.5&quot;">​</a></h1><p>Release date: <strong>December 10, 2025</strong></p><hr><h2 id="new-feature" tabindex="-1">New Feature <a class="header-anchor" href="#new-feature" aria-label="Permalink to &quot;New Feature&quot;">​</a></h2><h3 id="ai-creates-automatic-summary-when-transferring-conversation" tabindex="-1">AI Creates Automatic Summary When Transferring Conversation <a class="header-anchor" href="#ai-creates-automatic-summary-when-transferring-conversation" aria-label="Permalink to &quot;AI Creates Automatic Summary When Transferring Conversation&quot;">​</a></h3><p>When AI transfers a conversation to a team or human agent, it now automatically generates a summary of what happened up to that point.</p><h4 id="what-is-generated-in-the-summary" tabindex="-1">What is generated in the summary? <a class="header-anchor" href="#what-is-generated-in-the-summary" aria-label="Permalink to &quot;What is generated in the summary?&quot;">​</a></h4><ul><li>Contact reason</li><li>Customer&#39;s main questions</li><li>Steps already taken</li><li>Important data collected</li></ul><h4 id="how-to-enable" tabindex="-1">How to enable? <a class="header-anchor" href="#how-to-enable" aria-label="Permalink to &quot;How to enable?&quot;">​</a></h4><ol><li>Go to <strong>&quot;AI Agent&quot;</strong> in the sidebar</li><li>Select the agent you want to configure</li><li>Click on the <strong>&quot;Tools&quot;</strong> tab</li><li>Locate the <strong>&quot;Transfer to team&quot;</strong> action</li><li>Click the edit icon (✏️)</li><li>Check the checkbox: ✅ <strong>&quot;Generate support summary when transferring&quot;</strong></li><li>Click <strong>&quot;Save&quot;</strong></li></ol><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Smooth transition between AI and humans</li><li>✅ Agent quickly understands context</li><li>✅ No need to read entire conversation</li><li>✅ More agile and efficient support</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/12/2025.12.5.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_5 as default
};
