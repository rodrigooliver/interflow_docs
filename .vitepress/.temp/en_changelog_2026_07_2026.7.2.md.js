import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.2","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/07/2026.7.2.md","filePath":"en/changelog/2026/07/2026.7.2.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2026/07/2026.7.2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-2" tabindex="-1">v2026.7.2 <a class="header-anchor" href="#v2026-7-2" aria-label="Permalink to &quot;v2026.7.2&quot;">​</a></h1><p>Release date: <strong>July 3, 2026</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="deepseek-support-for-ai-agents" tabindex="-1">DeepSeek Support for AI Agents <a class="header-anchor" href="#deepseek-support-for-ai-agents" aria-label="Permalink to &quot;DeepSeek Support for AI Agents&quot;">​</a></h3><p>Interflow now supports <strong>DeepSeek</strong> as an alternative AI provider, in addition to OpenAI. The <strong>DeepSeek V4 Flash</strong> and <strong>DeepSeek V4 Pro</strong> models become available when you register your own DeepSeek API key — the platform&#39;s default mode (Interflow credits) remains OpenAI-only.</p><h4 id="what-is-it-for" tabindex="-1">What is it for? <a class="header-anchor" href="#what-is-it-for" aria-label="Permalink to &quot;What is it for?&quot;">​</a></h4><ul><li>Use DeepSeek models in your flow&#39;s AI Agent, in Test Prompt, and in Improve Text</li><li>Enable DeepSeek&#39;s <strong>Thinking Mode</strong> (chain-of-thought reasoning), with effort control (High/Maximum)</li><li>Get more cost and performance flexibility when choosing between AI providers</li></ul><h4 id="how-to-use-it" tabindex="-1">How to use it? <a class="header-anchor" href="#how-to-use-it" aria-label="Permalink to &quot;How to use it?&quot;">​</a></h4><ol><li>Register your DeepSeek key in <strong>Settings → Integrations → Add DeepSeek</strong> (or directly from the prompt form, via &quot;+ Add DeepSeek&quot;)</li><li>When editing a prompt, select the DeepSeek integration and choose the model (<strong>DeepSeek V4 Flash</strong> or <strong>DeepSeek V4 Pro</strong>)</li><li>Optionally, enable <strong>Thinking Mode</strong> and choose the reasoning effort level (High or Maximum)</li><li>Save and use it normally in the flow&#39;s AI Agent, Test Prompt, or Improve Text</li></ol><blockquote><p>💡 <strong>Note</strong>: with Thinking Mode enabled, temperature is ignored by DeepSeek (a limitation of the API itself).</p></blockquote><blockquote><p>Full guide: <a href="/en/guide/integrations/deepseek">DeepSeek Integration</a></p></blockquote><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ One more AI provider available, at no extra cost to Interflow</li><li>✅ Full client control over their own key and the model used</li><li>✅ Configurable Thinking Mode for more elaborate reasoning responses</li><li>✅ Structure ready for future providers (Gemini, Claude)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/07/2026.7.2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_2 as default
};
