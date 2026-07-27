import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change Return Date","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/change-return-date.md","filePath":"en/guide/ai-agents/tools/change-return-date.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/change-return-date.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="change-return-date" tabindex="-1">Change Return Date <a class="header-anchor" href="#change-return-date" aria-label="Permalink to &quot;Change Return Date&quot;">​</a></h1><p>Reschedules the customer&#39;s automatic follow-up.</p><p><strong>Configuration:</strong></p><ol><li>Select the return <strong>Flow</strong></li><li>Select the return starting <strong>Node</strong></li><li>Save</li></ol><p><strong>When to use:</strong></p><ul><li>Customer mentions future date (&quot;Call me next week&quot;)</li><li>Customer can&#39;t talk now (&quot;I&#39;m busy&quot;)</li><li>Follow-up rescheduling</li></ul><p><strong>Usage example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: Not now, call me Thursday</span></span>
<span class="line"><span>🤖 AI: No problem! I&#39;ll get in touch on Thursday. </span></span>
<span class="line"><span>       Have a great day! 👋</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[System: Follow-up rescheduled for Thursday]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/change-return-date.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeReturnDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeReturnDate as default
};
