# Instagram Direct

Conecte o Instagram Direct para atender seus seguidores diretamente na Interflow.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua.
:::

## Visão Geral

Integre sua conta do Instagram Business ou Creator para receber mensagens diretas (DMs) na plataforma Interflow.

## Requisitos

- [x] Conta do Instagram Business ou Creator
- [x] Página do Facebook vinculada
- [x] Conta Meta Business verificada

## Funcionalidades

| Recurso | Suporte |
|---------|---------|
| Mensagens de texto | |
| Imagens | |
| Vídeos | |
| Stories (respostas) | |
| Reactions | |
| Stickers | Parcial |
| Áudio | |

## Configuração

### Passo 1: Converter para Conta Business

Se sua conta é pessoal, converta para Business:

1. Abra o Instagram
2. Vá em **Configurações** → **Conta**
3. Selecione **Mudar para conta profissional**
4. Escolha **Business** ou **Creator**

### Passo 2: Vincular ao Facebook

1. No Instagram, vá em **Configurações** → **Conta** → **Compartilhamento em outras mídias**
2. Conecte sua Página do Facebook
3. Confirme a vinculação

### Passo 3: Conectar na Interflow

1. Na Interflow, vá em **Configurações** → **Canais**
2. Clique em **"Adicionar canal"** → **Instagram**
3. Faça login com sua conta do Facebook
4. Selecione a Página vinculada ao Instagram
5. Autorize as permissões necessárias

<!-- Placeholder para vídeo -->
<div style="background: linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%); border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 48px;">▶</span>
  <p style="color: white; margin-top: 8px; font-size: 18px;">Vídeo: Conectando Instagram (em breve)</p>
</div>

## Permissões Necessárias

A integração solicita as seguintes permissões:

- `instagram_basic` - Acesso básico ao perfil
- `instagram_manage_messages` - Gerenciar mensagens
- `pages_messaging` - Mensagens da página

## Limitações

### Janela de 24 Horas

O Instagram possui regras de mensagens:

- **Dentro de 24h**: Você pode responder livremente
- **Fora de 24h**: Limitações podem se aplicar

### Tipos de Conta

- **Business**: Funcionalidades completas
- **Creator**: Funcionalidades completas
- **Pessoal**: Não suportado

## Respondendo Stories

Quando um seguidor responde ao seu Story:

1. A mensagem aparece no chat
2. O Story é exibido como contexto
3. Você pode responder normalmente

## Comentários {#comentarios}

O canal também pode responder comentários dos posts que você escolher. O comentário não vira conversa. A caixa de entrada só abre se a pessoa responder o Direct enviado na primeira vez.

1. Reconecte o canal e autorize comentários
2. No cabeçalho do canal, abra **Posts** e escolha os posts
3. Em cada post, palavra-chave e decisão por IA são opcionais e só ligam ou desligam a automação
4. A resposta pública e o Direct podem ser texto pronto ou texto gerado. No texto pronto, use `{{comment_text}}` e `{{username}}`
5. **Ver comentários** abre a thread. **Não respondidos** mostra só comentários de outras pessoas sem resposta nossa
6. **Responder** envia outra resposta pública e mantém as anteriores. A resposta manual não manda Direct
7. O ícone de avião mostra o texto do Direct automático, que só acontece uma vez

## Solução de Problemas

### Canal não conecta

1. Verifique se a conta é Business/Creator
2. Confirme a vinculação com Facebook
3. Revise as permissões autorizadas

### Mensagens não chegam

1. Verifique se o canal está conectado
2. Confirme que webhooks estão configurados
3. Teste enviando uma mensagem de teste

### Não consigo responder

1. Verifique se a janela de 24h não expirou
2. Confirme que o canal está ativo
3. Teste a conexão

## Próximos Passos

- [Interface de Chat](/guide/chat/interface)
- [Automação com Fluxos](/guide/flows/builder)
- [Configurar Outros Canais](/guide/channels/)

