import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Research information on websites","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/research-websites.md","filePath":"en/guide/ai-agents/tools/research-websites.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/research-websites.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="research-information-on-websites" tabindex="-1">Research information on websites <a class="header-anchor" href="#research-information-on-websites" aria-label="Permalink to &quot;Research information on websites&quot;">​</a></h1><p>Lets the AI <strong>read web page content</strong> during support and use the text (as markdown) to answer with up-to-date information — limited to the sites you allow.</p><p><strong>When to use:</strong></p><ul><li>Look up catalog, inventory, pricing, or policies on the company site</li><li>Follow docs, changelogs, or product pages without pasting text into the prompt</li><li>JavaScript sites (Firecrawl engine) or static HTML (Plain HTML engine)</li></ul><p><strong>Configuration:</strong></p><ol><li>Add the <strong>Research information about…</strong> action</li><li>Choose the engine: <ul><li><strong>Firecrawl</strong> — requires the <a href="/en/guide/integrations/firecrawl">integration</a> (organization API key); renders JS and allows optional free search</li><li><strong>Plain HTML</strong> — static fetch, no key; best for non-SPA pages</li></ul></li><li>Register the <strong>sites</strong> (URL + description of what is on each)</li><li>With Firecrawl: optionally enable <strong>free web search</strong></li><li>Save the prompt</li></ol><p><strong>Behavior:</strong></p><ul><li>The AI can change query params (e.g. <code>?search=Civic</code> → <code>?search=Corolla</code>)</li><li>It can open <strong>subpages</strong> under the same path as the configured site</li><li>If the page is only an index, the result may include <code>followUpLinks</code> for a second call</li></ul><div class="warning custom-block"><p class="custom-block-title">⚠️ HTML engine</p><p>Sites built only with React/Next may return empty or incomplete results with Plain HTML. Prefer <strong>Firecrawl</strong>.</p></div><div class="tip custom-block"><p class="custom-block-title">💡 Security</p><p>With free search <strong>off</strong>, the server only accepts URLs from configured sites (and subpages under the same path).</p></div><p><strong>Example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: Do you have a 2022 Corolla in stock?</span></span>
<span class="line"><span>🤖 AI: [scrapes the site with ?search=Corolla] Yes — I found 3 units…</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>Changelog: <a href="/en/changelog/2026/07/2026.7.13">v2026.7.13</a> · Integration: <a href="/en/guide/integrations/firecrawl">Firecrawl</a></p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/research-websites.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const researchWebsites = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  researchWebsites as default
};
