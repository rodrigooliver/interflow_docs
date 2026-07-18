# Chaves de API

Gere chaves para integrar sistemas externos à [API da Interflow](/api/).

::: tip Acesso
**Configurações → API Keys**
:::

## Criar uma chave

1. Abra **Configurações → API Keys**
2. Clique em **Nova chave**
3. Dê um nome descritivo (ex.: “ERP produção”)
4. Copie a chave gerada e guarde em local seguro
5. Use o header de autenticação documentado em [Autenticação](/api/authentication)

::: danger
A chave secreta costuma ser exibida **apenas uma vez**. Se perder, revogue e crie outra.
:::

## Boas práticas

- Uma chave por sistema/ambiente
- Revogue chaves não utilizadas
- Nunca embuta chaves em apps client-side públicos
- Monitore erros 401/403 na API

## Relacionados

- [API — Introdução](/api/)
- [Autenticação](/api/authentication)
- [Enviar mensagem](/api/messages/send)
