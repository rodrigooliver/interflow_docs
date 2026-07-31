# Erros WhatsApp Business API — healthy ecosystem engagement e experiment

Códigos de erro retornados pela Meta no WhatsApp Oficial (Cloud API). A Interflow exibe a mensagem recebida da API; a causa e a solução dependem das regras da Meta.

Esta página cobre falhas comuns de envio e entrega. Comece pelo código ou pela mensagem em inglês que aparece no status da mensagem.

## Índice de erros

| Código | Mensagem (Meta) | Resumo |
|--------|-----------------|--------|
| [130472](#130472--users-phone-number-is-part-of-an-experiment) | `Failed to send message because this user's phone number is part of an experiment` | Destinatário em experimento de marketing da Meta |
| [131049](#131049--this-message-was-not-delivered-to-maintain-healthy-ecosystem-engagement) | `This message was not delivered to maintain healthy ecosystem engagement.` | Limite per-user de templates de marketing |

Voltar para [WhatsApp Business API](/guide/channels/whatsapp-business).

## 130472 — User's phone number is part of an experiment

**Mensagem:** `Failed to send message because this user's phone number is part of an experiment`

### O que causa esse erro?

A Meta realiza experimentos periódicos para avaliar o impacto das mensagens na experiência e no engajamento dos usuários do WhatsApp. Não há data de término fixa e não é possível optar por sair do experimento.

Como parte desse experimento, uma **pequena parcela** dos usuários do WhatsApp (em documentação anterior da Meta, cerca de 1%) pode ser incluída em um grupo de teste que **impede o recebimento de templates de Marketing** enviados por empresas — a menos que exista uma janela de conversa elegível.

Nesses casos, a mensagem não é entregue e a API retorna o código de erro **130472**.

::: warning Importante
Esse erro **não significa** que sua conta WhatsApp está bloqueada ou com qualidade baixa. Ele afeta apenas destinatários que estão no grupo experimental da Meta.
:::

### Quando o envio é permitido?

Templates de marketing podem ser enviados normalmente se **uma** das condições abaixo for atendida:

- Existe uma **janela de atendimento ao cliente (24 horas)** aberta entre a empresa e o cliente
- Existe uma **conversa de marketing** já aberta entre a empresa e o cliente
- Existe uma **conversa de entrada gratuita (Free Entry Point)** aberta (por exemplo, anúncio Clique para WhatsApp ou fluxo equivalente)

### O que acontece quando esse erro ocorre?

| Efeito | Detalhe |
|--------|---------|
| Entrega | A mensagem **não** é entregue |
| Conversa | Nenhuma conversa é criada |
| Cobrança | Em geral **não há** cobrança pelo envio sem entrega |
| Webhook | Status `failed` com código `130472` |
| Reenvio | Novas tentativas do mesmo template **sem** janela aberta resultam no mesmo erro |

### Como solucionar?

Essa restrição é aplicada pela Meta. **Não existe configuração na Interflow** que contorne o bloqueio.

Se for necessário entregar a mensagem:

1. Contate o cliente por **outro canal** (telefone, e-mail, SMS, etc.)
2. Peça que o cliente **envie uma mensagem** pelo WhatsApp para a sua empresa
3. Com a janela de 24 horas aberta, **reenvie** o template (ou continue a conversa normalmente)

::: tip DICA
Não fique reenviando o mesmo template em loop: enquanto o número estiver no experimento e não houver janela elegível, o erro 130472 se repetirá.
:::

### Referências oficiais da Meta

- [Experimentos do WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/experiments)
- [Códigos de erro do WhatsApp](https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes)

---

## 131049 — This message was not delivered to maintain healthy ecosystem engagement

**Mensagem:** `This message was not delivered to maintain healthy ecosystem engagement.`

### O que causa esse erro?

A Meta aplica **limites per-user de templates de Marketing**: quantas mensagens de marketing um usuário do WhatsApp pode receber de **qualquer empresa**, em um período, quando está menos propenso a engajar.

O limite é **adaptativo** e considera fatores como:

- Taxa recente de leitura de mensagens de marketing
- Volume de mensagens na caixa de entrada (pessoais e de empresas)
- Engajamento geral do usuário com marketing no WhatsApp

Quando o destinatário está no limite (ou quando há retentativas excessivas para quem já atingiu o limite), a mensagem **não é entregue** e a API / webhook retorna o código **131049**.

::: warning Importante
- Afeta principalmente templates da categoria **Marketing**
- Pode ocorrer mesmo no **primeiro** envio da sua empresa — o limite é do destinatário entre todas as empresas
- **Não** indica que sua WABA está banida ou com qualidade baixa
- Em algumas regiões, a Meta pode restringir marketing (ex.: regras específicas para usuários nos EUA — confirme a documentação atual da Meta)
:::

### O que acontece quando esse erro ocorre?

| Efeito | Detalhe |
|--------|---------|
| Entrega | A mensagem **não** é entregue |
| Webhook | Status `failed` com código `131049` |
| Reenvio imediato | Pode falhar de novo; retentativas repetidas em 24h podem estender o bloqueio para aquele usuário |
| Outros clientes | Em geral você **continua** podendo enviar marketing para outros números |
| Janela de 24h | Se o cliente responder a um marketing, abre janela de atendimento; marketings **dentro** dessa janela **não contam** para o limite |

### Como solucionar?

Essa decisão é da Meta. **Não existe configuração na Interflow** que ignore o limite per-user.

Recomendações:

1. **Aguarde pelo menos 24 horas** antes de reenviar o mesmo template de marketing para aquele número (orientação oficial da Meta)
2. **Não faça retry em loop** — isso pode piorar a disponibilidade de entrega para esse usuário por até 24 horas
3. Se o conteúdo for realmente utilitário ou de autenticação, use template na categoria correta (**Utility** / **Authentication**) — **não** recategorize promoção como utilitário só para contornar o erro
4. Peça que o cliente **inicie a conversa** (ou responda) para abrir a janela de 24h e continuar o atendimento
5. Segmente campanhas para contatos engajados e evite disparos frios em excesso

::: tip DICA
Um `200` na chamada de envio **não** garante entrega. Confirme sempre o status no webhook (`failed` + `131049`).
:::

### Como prevenir

- Espaçar disparos de marketing para o mesmo contato
- Priorizar leads com engajamento (leitura/resposta)
- Manter opt-in e qualidade dos templates
- Monitorar taxa de falhas `131049` nas campanhas

### Referências oficiais da Meta

- [Per-user marketing template message limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits)
- [Códigos de erro do WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Próximos Passos

- [WhatsApp Business API](/guide/channels/whatsapp-business)
- [Templates WhatsApp](/guide/channels/whatsapp-templates)
- [Automação com Fluxos](/guide/flows/builder)
