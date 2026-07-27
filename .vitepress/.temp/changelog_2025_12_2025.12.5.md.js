import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.5","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/12/2025.12.5.md","filePath":"changelog/2025/12/2025.12.5.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/12/2025.12.5.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-5" tabindex="-1">v2025.12.5 <a class="header-anchor" href="#v2025-12-5" aria-label="Permalink to &quot;v2025.12.5&quot;">​</a></h1><p>Data de lançamento: <strong>10 de Dezembro de 2025</strong></p><hr><h2 id="nova-funcionalidade" tabindex="-1">Nova Funcionalidade <a class="header-anchor" href="#nova-funcionalidade" aria-label="Permalink to &quot;Nova Funcionalidade&quot;">​</a></h2><h3 id="ia-cria-resumo-automatico-ao-transferir-conversa" tabindex="-1">IA Cria Resumo Automático ao Transferir Conversa <a class="header-anchor" href="#ia-cria-resumo-automatico-ao-transferir-conversa" aria-label="Permalink to &quot;IA Cria Resumo Automático ao Transferir Conversa&quot;">​</a></h3><p>Quando a IA transfere uma conversa para uma equipe ou atendente humano, agora gera automaticamente um resumo do que ocorreu até aquele momento.</p><h4 id="o-que-e-gerado-no-resumo" tabindex="-1">O que é gerado no resumo? <a class="header-anchor" href="#o-que-e-gerado-no-resumo" aria-label="Permalink to &quot;O que é gerado no resumo?&quot;">​</a></h4><ul><li>Motivo do contato</li><li>Principais dúvidas do cliente</li><li>Passos já realizados</li><li>Dados importantes coletados</li></ul><h4 id="como-ativar" tabindex="-1">Como ativar? <a class="header-anchor" href="#como-ativar" aria-label="Permalink to &quot;Como ativar?&quot;">​</a></h4><ol><li>Acesse <strong>&quot;Agent IA&quot;</strong> no menu lateral</li><li>Selecione o agente que deseja configurar</li><li>Clique na aba <strong>&quot;Ferramentas&quot;</strong></li><li>Localize a ação <strong>&quot;Transferir para equipe&quot;</strong></li><li>Clique no ícone de editar (✏️)</li><li>Marque a checkbox: ✅ <strong>&quot;Gerar resumo do atendimento ao transferir&quot;</strong></li><li>Clique em <strong>&quot;Salvar&quot;</strong></li></ol><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Transição suave entre IA e humanos</li><li>✅ Atendente entende o contexto rapidamente</li><li>✅ Sem necessidade de ler toda a conversa</li><li>✅ Atendimento mais ágil e eficiente</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/12/2025.12.5.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_5 as default
};
