import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automation & AI","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/automation.md","filePath":"en/features/automation.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/features/automation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="automation-ai" tabindex="-1">Automation &amp; AI <a class="header-anchor" href="#automation-ai" aria-label="Permalink to &quot;Automation &amp; AI&quot;">​</a></h1><p>Visual flows, AI agents, and integrations to automate support.</p><h2 id="highlights" tabindex="-1">Highlights <a class="header-anchor" href="#highlights" aria-label="Permalink to &quot;Highlights&quot;">​</a></h2><ul><li>Drag-and-drop builder with dozens of nodes</li><li>AI agents with tools and knowledge bases</li><li>Automations for CRM stages, closure, transfers, and schedule silent flows</li><li>Integrations: OpenAI, DeepSeek, ElevenLabs, Minimax, Firecrawl</li></ul><h2 id="guides" tabindex="-1">Guides <a class="header-anchor" href="#guides" aria-label="Permalink to &quot;Guides&quot;">​</a></h2><ul><li><a href="/en/guide/flows/builder">Flow builder</a></li><li><a href="/en/guide/flows/nodes/">Node types</a></li><li><a href="/en/guide/ai-agents/">AI agents</a></li><li><a href="/en/guide/ai-agents/tools/">AI tools</a></li><li><a href="/en/guide/integrations/openai">Integrations</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/automation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const automation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  automation as default
};
