# Integração com OpenAI

Para usar os recursos de IA do Interflow além dos tokens inclusos no seu plano, você precisa configurar sua chave de API da OpenAI. Siga as instruções abaixo para obter sua chave.

::: warning PAGAMENTO OBRIGATÓRIO
É necessário adicionar um método de pagamento válido à sua conta OpenAI para utilizar a API, que funciona por consumo com recarga mínima de **$5 USD**.
:::

## Como obter uma chave de API da OpenAI

### Opção 1: Nova conta (sem organizações)

1. Acesse o site da OpenAI e faça login na sua conta (ou crie uma nova)
2. Clique em **"Start Building"** no canto superior direito
3. Siga o processo guiado que irá:
   - Criar sua organização
   - Gerar sua API Key
   - Solicitar método de pagamento automaticamente
4. Copie a chave gerada e cole no Interflow

### Opção 2: Conta existente (com organizações)

1. Acesse o site da OpenAI e faça login na sua conta
2. Navegue até **"API Keys"** no menu lateral
3. Clique em **"Create new secret key"**
4. Dê um nome para identificar a chave (ex: "Interflow")
5. Adicione um método de pagamento (se ainda não tiver)
6. Copie a chave gerada e cole no Interflow

::: danger ATENÇÃO
Você só poderá ver a chave **uma única vez** após a criação. Guarde-a em local seguro antes de fechar a janela.
:::

## Configurar no Interflow

1. No Interflow, vá em **Configurações** → **Integrações**
2. Localize a seção **OpenAI**
3. Cole sua chave de API no campo indicado
4. Clique em **Salvar**

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Configuração da chave OpenAI no Interflow</p>
</div>

## Links úteis

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 20px 0;">

<a href="https://platform.openai.com" target="_blank" style="text-decoration: none;">
  <div style="background: #10a37f; color: white; border-radius: 8px; padding: 12px 20px; display: flex; align-items: center; gap: 8px;">
    <span>🔗</span>
    <span>Visitar o site da OpenAI</span>
  </div>
</a>

<a href="https://platform.openai.com/account/billing" target="_blank" style="text-decoration: none;">
  <div style="background: #1a1a1a; color: white; border-radius: 8px; padding: 12px 20px; display: flex; align-items: center; gap: 8px;">
    <span>💳</span>
    <span>Adicionar método de pagamento</span>
  </div>
</a>

</div>

## Preços e consumo

A OpenAI cobra por **tokens consumidos**. O custo varia de acordo com o modelo utilizado.

::: info MODELOS DISPONÍVEIS
Abaixo estão os **modelos principais**, mas você pode escolher qualquer outro modelo disponível na OpenAI. Consulte a [documentação oficial](https://platform.openai.com/docs/models) para ver todos os modelos.
:::

### Modelos com raciocínio

| Modelo | Entrada | Saída | Observação |
|--------|---------|-------|------------|
| GPT-5.2 | $1.75 / 1M tokens | $14.00 / 1M tokens | Modelo principal para coding e agentes |
| GPT-5 mini | $0.25 / 1M tokens | $2.00 / 1M tokens | Versão rápida e econômica |
| GPT-5 nano | $0.05 / 1M tokens | $0.40 / 1M tokens | Mais econômico da família |

### Modelos sem raciocínio

| Modelo | Entrada | Saída | Observação |
|--------|---------|-------|------------|
| GPT-4.1 | $2.00 / 1M tokens | $8.00 / 1M tokens | Modelo inteligente e versátil |
| GPT-4.1 mini | $0.40 / 1M tokens | $1.60 / 1M tokens | Baixo custo com bom desempenho |
| GPT-4.1 nano | $0.10 / 1M tokens | $0.40 / 1M tokens | Mais econômico, ideal para tarefas leves |

::: tip DICA
Para a maioria dos casos de atendimento, o **GPT-5 nano** ou **GPT-5 mini** oferecem excelente custo-benefício com respostas de alta qualidade. Use **GPT-4.1** quando não precisar de recursos de raciocínio avançado.
:::

## Precisa de ajuda?

Se tiver dúvidas sobre a integração:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Disponível na plataforma

