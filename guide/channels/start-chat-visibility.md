# Restrição de canais ao iniciar conversa

Controle quem pode ver e selecionar cada canal ao iniciar uma nova conversa com um cliente.

## O que é?

Cada canal pode ter uma regra de **visibilidade ao iniciar conversa**:

| Opção | Comportamento |
|-------|----------------|
| **Todos** | Qualquer membro da organização vê o canal (padrão) |
| **Por perfil** | Só usuários com os perfis selecionados |
| **Usuários** | Só as pessoas selecionadas |

**Proprietários e administradores** sempre veem todos os canais principais, para operação e configuração.

**Canais auxiliares** (ligados a um canal principal) **nunca** aparecem na lista ao iniciar conversa — só o canal principal.

## Para que serve?

| Cenário | Exemplo |
|---------|---------|
| Número oficial restrito | Só gerentes e um grupo de usuários podem iniciar pelo número principal |
| Canal de vendas | Visível apenas para o perfil de vendas |
| Evitar uso indevido | Impedir que atendentes usem um canal de cobrança ou VIP |

## Onde acessar

| Área | Caminho |
|------|---------|
| **Configurar** | Canais → abrir o canal → Configurações → **Quem pode iniciar conversa por este canal** |
| **Usar** | Ao iniciar conversa a partir de um contato (cliente, lista, nova conversa, etc.) |

## Como configurar

1. Abra o canal em **Canais**
2. Clique em **Configurações**
3. Na seção de visibilidade, escolha **Todos**, **Por perfil** ou **Usuários**
4. Se escolher perfil ou usuários, marque as opções desejadas
5. Salve

::: tip 💡 Padrão
Canais sem configuração específica continuam liberados para **todos**. Nada muda até você restringir.
:::

## O que o usuário vê

- A lista ao iniciar conversa mostra só canais **ativos**, do **tipo compatível** com o contato e **permitidos** para o perfil
- Se nenhum canal estiver disponível, a plataforma informa que não há canal para aquele perfil
- A restrição também é validada no servidor: sem permissão, a criação da conversa é bloqueada

## Limitações

- A regra vale ao **iniciar nova conversa** (seleção de canal). Não altera sozinha os filtros da caixa de entrada
- Integrações por chave de API da organização não aplicam a restrição por perfil/usuário (continua bloqueando canais auxiliares)
- Perfis personalizados usam o **perfil base** do membro (como em outros controles de visibilidade da plataforma)

## Relacionado

- [Changelog v2026.7.5](/changelog/2026/07/2026.7.5)
- [Canais de Atendimento](/guide/channels/)
