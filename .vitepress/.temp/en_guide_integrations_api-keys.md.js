import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"API Keys","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/integrations/api-keys.md","filePath":"en/guide/integrations/api-keys.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/integrations/api-keys.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="api-keys" tabindex="-1">API Keys <a class="header-anchor" href="#api-keys" aria-label="Permalink to &quot;API Keys&quot;">​</a></h1><p>Generate keys to call the <a href="/en/api/">Interflow API</a>.</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p><strong>Settings → API Keys</strong></p></div><ol><li><strong>New key</strong> → name it → copy once → store securely</li><li>Authenticate as described in <a href="/en/api/authentication">Authentication</a></li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Secret keys are usually shown <strong>only once</strong>. Revoke and recreate if lost.</p></div><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/api/">API intro</a></li><li><a href="/en/api/messages/send">Send message</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/integrations/api-keys.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const apiKeys = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  apiKeys as default
};
