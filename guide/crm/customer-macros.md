# Macros de cliente

Botões de automação no cadastro do cliente: um clique executa várias ações (trocar tipo, preencher campos, atribuir responsáveis, criar tarefa ou iniciar fluxo).

> Changelog: [v2026.8.4](/changelog/2026/08/2026.8.4)

## O que é?

Uma **macro** é um botão configurável que aparece no **editar cliente**. Você define:

- **Aparência** — nome interno, texto e cor do botão
- **Quando exibir** — condições (tipo, funil, estágio, tag ou campo)
- **Perguntar no clique** — wizard com campos a preencher antes de executar
- **Ações** — o que acontece depois

## Onde acessar

| Área | Caminho |
|------|---------|
| **Configurar** | Menu → **Macros de Cliente** |
| **Usar** | Editar cliente → aba **Geral** (topo) e menu de ações (⋮) do cabeçalho |

## Criar uma macro

1. Abra **Macros de Cliente** e clique em **Nova macro**
2. Defina nome interno, texto do botão e cor
3. Em **Quando exibir**, deixe vazio para todos os clientes ou adicione condições (todas / qualquer uma)
4. Em **Perguntar no clique**, adicione campos que o operador deve informar (só se estiver vazio, ou sempre)
5. Em **Ações**, escolha o que executar
6. Salve e ative a macro

### Ações disponíveis

| Ação | O que faz |
|------|-----------|
| Trocar tipo de cliente | Lead ou cliente (fechado) |
| Preencher campo (valor fixo) | Campo padrão ou personalizado |
| Definir vendedor / suporte / indicação | Usuário atual, membro escolhido ou limpar |
| Criar tarefa | Projeto, título, prazo, responsáveis |
| Iniciar fluxo silencioso | Fluxo da organização (com ou sem chat) |

### Perguntar no clique

O wizard usa os mesmos rótulos e placeholders do cadastro. Se o campo já tiver valor, vem preenchido.

## Usar no cliente

1. Abra o cliente
2. Na aba **Geral**, os botões visíveis aparecem no topo; o mesmo conjunto está no menu **⋮**
3. Clique na macro
4. Se houver perguntas, complete e execute

Só entram macros **ativas** cujas condições batem com o cliente atual.

## Tipo de cliente

O cadastro tem **Lead (venda)** ou **Cliente (fechado)**. Use na lista (filtro) e nas condições/ações das macros.

## Próximos passos

- [Gerenciamento de Clientes](/guide/crm/customers)
- [Funis de Venda](/guide/crm/funnels)
