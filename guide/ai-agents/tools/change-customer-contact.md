# Alterar Contato do Cliente

Permite que a IA **salve ou atualize telefone, WhatsApp ou e-mail** do cliente quando ele informar o contato na conversa.

**Quando usar:**
- Cliente informa um telefone ou WhatsApp adicional
- Atualização do e-mail informado no chat
- Coleta de contato em fluxos de cadastro ou confirmação

**Configuração:**
1. Adicione a ação **Alterar Contato do Cliente**
2. Selecione os tipos permitidos: telefone, WhatsApp e/ou e-mail
3. Salve o prompt

::: tip 💡 E-mail
Quando o tipo for e-mail, o valor também atualiza o campo principal de e-mail do cliente.
:::

**Exemplo de uso:**
```text
👤 Cliente: Meu WhatsApp é (11) 98888-7777
🤖 IA: Perfeito! Já salvei esse WhatsApp no seu cadastro.
```

::: info ⚠️ Única
Esta ação pode ser adicionada apenas uma vez por agente.
:::

