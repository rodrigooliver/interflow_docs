import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.8","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/11/2025.11.8.md","filePath":"changelog/2025/11/2025.11.8.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/11/2025.11.8.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-8" tabindex="-1">v2025.11.8 <a class="header-anchor" href="#v2025-11-8" aria-label="Permalink to &quot;v2025.11.8&quot;">​</a></h1><p>Data de lançamento: <strong>14 de Novembro de 2025</strong></p><hr><h2 id="nova-funcionalidade" tabindex="-1">Nova Funcionalidade <a class="header-anchor" href="#nova-funcionalidade" aria-label="Permalink to &quot;Nova Funcionalidade&quot;">​</a></h2><h3 id="integracao-com-facebook-messenger" tabindex="-1">Integração com Facebook Messenger <a class="header-anchor" href="#integracao-com-facebook-messenger" aria-label="Permalink to &quot;Integração com Facebook Messenger&quot;">​</a></h3><p>Conexão completa do Facebook Messenger ao Interflow para atendimento centralizado.</p><h4 id="funcionalidades" tabindex="-1">Funcionalidades: <a class="header-anchor" href="#funcionalidades" aria-label="Permalink to &quot;Funcionalidades:&quot;">​</a></h4><ul><li>✅ Vincular páginas do Facebook</li><li>✅ Receber e enviar mensagens pelo Messenger</li><li>✅ Associação automática ao cliente no CRM</li><li>✅ Roteamento por equipe/usuário</li><li>✅ Histórico de anexos e status</li><li>✅ Respostas automáticas e regras de triagem</li></ul><h4 id="como-configurar" tabindex="-1">Como configurar? <a class="header-anchor" href="#como-configurar" aria-label="Permalink to &quot;Como configurar?&quot;">​</a></h4><p><strong>Passo 1: Criar o Canal</strong></p><ol><li>Vá em <strong>Canais</strong> → <strong>Novo Canal</strong></li><li>Selecione <strong>Facebook Messenger</strong></li><li>Digite um nome e clique <strong>Salvar</strong></li></ol><p><strong>Passo 2: Configurar no Facebook Developers</strong></p><ol><li>Acesse <a href="https://developers.facebook.com" target="_blank" rel="noreferrer">developers.facebook.com</a></li><li>Crie um novo aplicativo</li><li>Configure o Webhook com a URL e Token do Interflow</li><li>Gere o Token de Acesso da página</li></ol><p><strong>Passo 3: Conectar</strong></p><ol><li>Cole as credenciais na plataforma</li><li>Clique em <strong>Testar e Salvar</strong></li><li>Ative o canal</li></ol><h4 id="eventos-configurados" tabindex="-1">Eventos configurados: <a class="header-anchor" href="#eventos-configurados" aria-label="Permalink to &quot;Eventos configurados:&quot;">​</a></h4><ul><li>messages</li><li>messaging_optins</li><li>message_deliveries</li><li>messaging_referrals</li><li>E mais...</li></ul><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Todas as mensagens em um só lugar</li><li>✅ Histórico consolidado do cliente</li><li>✅ Menos sistemas para gerenciar</li><li>✅ Atendimento mais rápido e organizado</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/11/2025.11.8.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_8 as default
};
