# Integração com DeepSeek

A DeepSeek é um provedor alternativo de IA que você pode conectar com sua própria chave de API. Diferente da OpenAI, o uso da DeepSeek **não consome os tokens inclusos no seu plano Interflow** — a cobrança é feita diretamente pela DeepSeek, na sua própria conta.

::: warning PAGAMENTO OBRIGATÓRIO
É necessário adicionar créditos/método de pagamento à sua conta DeepSeek para utilizar a API, que funciona por consumo de tokens.
:::

## Como obter uma chave de API da DeepSeek

1. Acesse a [plataforma da DeepSeek](https://platform.deepseek.com/api_keys) e faça login na sua conta (ou crie uma nova)
2. Navegue até **"API Keys"** no menu do painel
3. Clique em **"Create new API key"**, dê um nome para identificar a chave (ex: "Interflow") e adicione um método de pagamento
4. Copie a chave gerada e cole no Interflow

::: danger ATENÇÃO
Você só poderá ver a chave **uma única vez** após a criação. Guarde-a em local seguro antes de fechar a janela.
:::

## Configurar no Interflow

Você pode cadastrar sua chave DeepSeek de duas formas:

### Opção 1: Pela tela de Integrações

1. No Interflow, vá em **Configurações** → **Integrações**
2. Clique em **"Adicionar DeepSeek"**
3. Dê um título para a integração e cole sua chave de API
4. Clique em **Validar** e, em seguida, em **Salvar**

### Opção 2: Direto no formulário do Prompt

1. Ao criar ou editar um Agente de IA, abra o campo de **Integração**
2. Selecione **"+ Adicionar DeepSeek"**
3. Preencha o título e a chave de API, valide e salve
4. A integração criada já fica selecionada para o prompt atual

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Configuração da chave DeepSeek no Interflow</p>
</div>

## Modelos disponíveis

| Modelo | Entrada (cache miss) | Entrada (cache hit) | Saída | Observação |
|--------|----------------------|----------------------|-------|------------|
| DeepSeek V4 Flash | $0.14 / 1M tokens | $0.0028 / 1M tokens | $0.28 / 1M tokens | Rápido e econômico, ideal para a maioria dos casos |
| DeepSeek V4 Pro | $0.435 / 1M tokens | $0.003625 / 1M tokens | $0.87 / 1M tokens | Mais capaz, indicado para tarefas complexas |

::: info FONTE DOS PREÇOS
Valores consultados na [página oficial de preços da DeepSeek](https://api-docs.deepseek.com/quick_start/pricing). Podem ser alterados pela DeepSeek sem aviso prévio.
:::

## Thinking Mode (raciocínio)

Ambos os modelos suportam um modo de raciocínio em cadeia opcional, chamado **Thinking Mode**. Quando um modelo DeepSeek está selecionado no prompt, o formulário exibe um controle exclusivo:

- **Ativar/desativar** o Thinking Mode
- **Esforço de raciocínio**: Alto ou Máximo

::: tip DICA
Com o Thinking Mode ativado, a **temperatura é ignorada** — essa é uma limitação da própria API da DeepSeek, que não permite combinar raciocínio em cadeia com controle de temperatura.
:::

## Onde o modelo DeepSeek pode ser usado

Depois de configurar a integração e selecionar um modelo DeepSeek no seu prompt, ele passa a ser usado automaticamente em:

- **Agente de IA** dos seus fluxos
- **Testar Prompt** (dentro da tela de edição do prompt)
- **Melhorar Texto** (quando o prompt associado usa DeepSeek)

## Precisa de ajuda?

Se tiver dúvidas sobre a integração:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Disponível na plataforma
