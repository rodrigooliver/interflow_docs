import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.2","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/11/2025.11.2.md","filePath":"changelog/2025/11/2025.11.2.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/11/2025.11.2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-2" tabindex="-1">v2025.11.2 <a class="header-anchor" href="#v2025-11-2" aria-label="Permalink to &quot;v2025.11.2&quot;">​</a></h1><p>Data de lançamento: <strong>05 de Novembro de 2025</strong></p><hr><h2 id="nova-funcionalidade" tabindex="-1">Nova Funcionalidade <a class="header-anchor" href="#nova-funcionalidade" aria-label="Permalink to &quot;Nova Funcionalidade&quot;">​</a></h2><h3 id="envio-de-multiplas-fotos-no-mobile" tabindex="-1">Envio de Múltiplas Fotos no Mobile <a class="header-anchor" href="#envio-de-multiplas-fotos-no-mobile" aria-label="Permalink to &quot;Envio de Múltiplas Fotos no Mobile&quot;">​</a></h3><p>Agora é possível selecionar e enviar várias fotos de uma vez pelo chat mobile.</p><h4 id="como-funciona" tabindex="-1">Como funciona? <a class="header-anchor" href="#como-funciona" aria-label="Permalink to &quot;Como funciona?&quot;">​</a></h4><p><strong>No Celular:</strong></p><ol><li>Toque no botão <strong>➕</strong> ao lado do campo de mensagem</li><li>Selecione <strong>&quot;📎 Arquivos&quot;</strong></li><li>A galeria abre automaticamente</li><li>Selecione múltiplas fotos (toque e segure)</li><li>Arquivos até 10MB são anexados automaticamente</li></ol><p><strong>No Desktop:</strong></p><ol><li>Clique no <strong>➕</strong> → <strong>&quot;📎 Arquivos&quot;</strong></li><li>Use <strong>Ctrl+Clique</strong> (Windows) ou <strong>⌘+Clique</strong> (Mac)</li><li>Selecione vários arquivos de uma vez</li></ol><h4 id="limites" tabindex="-1">Limites: <a class="header-anchor" href="#limites" aria-label="Permalink to &quot;Limites:&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Tamanho</th><th>Comportamento</th></tr></thead><tbody><tr><td>Até 10MB</td><td>✅ Anexo automático direto</td></tr><tr><td>10-50MB</td><td>🔗 Envia como link de download</td></tr><tr><td>Acima 50MB</td><td>❌ Não suportado</td></tr></tbody></table><h4 id="outras-formas-de-adicionar" tabindex="-1">Outras formas de adicionar: <a class="header-anchor" href="#outras-formas-de-adicionar" aria-label="Permalink to &quot;Outras formas de adicionar:&quot;">​</a></h4><ul><li><strong>Arrastar e Soltar</strong> - Arraste da pasta para o chat</li><li><strong>Colar</strong> - Ctrl+V para colar imagens da área de transferência</li></ul><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Atendimento mais ágil</li><li>✅ Menos cliques para enviar múltiplos arquivos</li><li>✅ Experiência mobile otimizada</li><li>✅ Suporte a diversos formatos</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/11/2025.11.2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_2 as default
};
