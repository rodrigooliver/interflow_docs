# Nó: Template do WhatsApp

Envie templates aprovados em fluxos executados por canais WhatsApp Oficial.

## Quando usar

O WhatsApp Oficial permite mensagens diretas durante as 24 horas seguintes à última mensagem do cliente. Fora dessa janela, use um template aprovado.

O fluxo pode decidir entre os dois caminhos com o nó **Condição**:

1. Adicione o tipo **Janela de 24h do WhatsApp**
2. Escolha **Está aberta** ou **Está fechada**
3. Conecte cada saída à ação correspondente

Essa condição só é avaliada em canais **WhatsApp Oficial**. Em outros canais, ela é considerada não aplicável.

## Configurar o nó

1. Arraste **Template do WhatsApp** da categoria **Enviar**
2. Clique no nó para abrir a configuração
3. Adicione um mapeamento
4. Selecione o canal WhatsApp Oficial
5. Selecione um template aprovado desse canal
6. Preencha todas as variáveis do template
7. Salve a configuração

## Mapeamentos por canal

Templates pertencem ao canal no qual foram cadastrados. Se o mesmo fluxo puder rodar em vários canais oficiais, adicione um mapeamento para cada canal.

Na execução, o nó identifica o canal da conversa e envia apenas o template associado a ele. Se não existir mapeamento ou se o template não estiver aprovado, o fluxo segue pela saída **Erro**, quando conectada.

## Variáveis

Cada parâmetro `{{1}}`, `{{2}}` e assim por diante aceita:

- Texto fixo
- Variável do fluxo
- Dados do cliente disponíveis no seletor de variáveis

Exemplo:

```text
{{1}} = {{customer.name}}
{{2}} = {{numero_pedido}}
```

## Exemplo de fluxo

```text
Condição: canal = WhatsApp Oficial
  └─ Condição: janela de 24h está aberta
       ├─ Sim → Mensagem de Texto
       └─ Senão → Template do WhatsApp
```

## Restrições

- Disponível somente para canais WhatsApp Oficial
- Lista apenas templates com status aprovado
- Cada template deve pertencer ao mesmo canal da conversa
- Não está disponível em fluxos de campanha silenciosa em massa

## Próximos passos

- [Nó: Condição](/guide/flows/nodes/condition)
- [Tipos de Nós](/guide/flows/nodes/)
- [Templates do WhatsApp](/guide/channels/whatsapp-templates)
- [Changelog v2026.9.3](/changelog/2026/09/2026.9.3)
