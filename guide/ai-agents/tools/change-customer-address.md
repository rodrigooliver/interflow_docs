# Alterar Endereço do Cliente

Permite que a IA **salve ou atualize o endereço** do cliente no cadastro quando ele informar os dados na conversa (rua, número, cidade, estado, CEP, etc.) ou enviar uma **localização GPS**.

**Quando usar:**
- Cliente informa endereço de entrega ou cobrança
- Cliente envia o pin de localização no WhatsApp
- Atualização do endereço padrão já cadastrado
- Coleta de endereço em fluxos de pedido ou visita

**O que a IA pode gravar:**
- Rua e número (ou linha completa do endereço)
- Complemento, cidade, estado e CEP
- País e rótulo opcional do endereço
- Latitude e longitude (GPS)
- Instruções de entrega/acesso (ex.: interfone, portão)
- Endereço marcado como padrão (atualiza o existente ou cria um novo)

**Localização GPS:**
- Aceita coordenadas separadas (`latitude` / `longitude`) ou no formato da mensagem de localização (ex.: `-3.03, -59.98`)
- Se só o GPS chegar, o sistema tenta completar rua, cidade e demais campos por geocoding reverso (Google Maps com chave configurada, ou Nominatim)

**Exemplo de uso:**
```text
👤 Cliente: Meu endereço é Rua das Flores, 120, apto 3, São Paulo - SP, CEP 01310-100
🤖 IA: Pronto! Já salvei esse endereço no seu cadastro. Precisa de mais alguma coisa?
```

```text
👤 Cliente: [envia localização no mapa]
🤖 IA: Recebi sua localização e já atualizei o endereço no cadastro.
```

::: tip 💡 Contexto automático
Os endereços já cadastrados também entram no **Customer info** da primeira mensagem de contexto do agente, para a IA não precisar perguntar de novo.
:::

::: info ⚠️ Única
Esta ação pode ser adicionada apenas uma vez por agente.
:::

