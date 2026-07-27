import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pesquisar informações em sites","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/research-websites.md","filePath":"guide/ai-agents/tools/research-websites.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/research-websites.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pesquisar-informacoes-em-sites" tabindex="-1">Pesquisar informações em sites <a class="header-anchor" href="#pesquisar-informacoes-em-sites" aria-label="Permalink to &quot;Pesquisar informações em sites&quot;">​</a></h1><p>Permite que a IA <strong>leia conteúdo de páginas web</strong> durante o atendimento e use o texto (em markdown) para responder com informações atualizadas — limitada aos sites que você liberar.</p><p><strong>Quando usar:</strong></p><ul><li>Consultar catálogo, estoque, preços ou políticas no site da empresa</li><li>Acompanhar docs, changelogs ou páginas de produto sem colar o texto no prompt</li><li>Sites com JavaScript (motor Firecrawl) ou HTML estático (motor HTML puro)</li></ul><p><strong>Configuração:</strong></p><ol><li>Adicione a ação <strong>Pesquisar informações sobre…</strong></li><li>Escolha o motor: <ul><li><strong>Firecrawl</strong> — precisa da <a href="/guide/integrations/firecrawl">integração</a> (API key da organização); renderiza JS e permite busca livre opcional</li><li><strong>HTML puro</strong> — fetch estático, sem chave; melhor para páginas sem SPA</li></ul></li><li>Cadastre os <strong>sites</strong> (URL + descrição do que há em cada um)</li><li>Com Firecrawl: opcionalmente ative a <strong>busca livre na web</strong></li><li>Salve o prompt</li></ol><p><strong>Comportamento:</strong></p><ul><li>A IA pode mudar query params (ex.: <code>?search=Civic</code> → <code>?search=Corolla</code>)</li><li>Pode abrir <strong>subpáginas</strong> sob o mesmo path do site configurado</li><li>Se a página for só um índice, o resultado pode trazer <code>followUpLinks</code> para uma segunda chamada</li></ul><div class="warning custom-block"><p class="custom-block-title">⚠️ Motor HTML</p><p>Sites feitos só com React/Next podem voltar vazios ou incompletos no HTML puro. Prefira <strong>Firecrawl</strong>.</p></div><div class="tip custom-block"><p class="custom-block-title">💡 Segurança</p><p>Com a busca livre <strong>desligada</strong>, o servidor só aceita URLs dos sites configurados (e subpáginas do mesmo path).</p></div><p><strong>Exemplo:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Vocês têm Corolla 2022 no estoque?</span></span>
<span class="line"><span>🤖 IA: [scrape do site com ?search=Corolla] Sim — encontrei 3 unidades…</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>Changelog: <a href="/changelog/2026/07/2026.7.13">v2026.7.13</a> · Integração: <a href="/guide/integrations/firecrawl">Firecrawl</a></p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/research-websites.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const researchWebsites = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  researchWebsites as default
};
