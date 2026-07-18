# Portal do Parceiro

Gerencie organizações revendidas, planos, faturas, comissões e carteira (wallet) de split.

::: tip Acesso
Menu → **Portal do Parceiro**. Disponível apenas para parceiros com programa **aceito** e status **ativo**.
:::

## Abas principais

| Aba | Função |
|-----|--------|
| **Organizações** | Criar e gerir orgs sob sua conta |
| **Faturas** | Acompanhar cobranças das orgs |
| **Comissões** | Ver comissões geradas |
| **Carteira** | Configurar wallet Asaas para split |

## Organizações e planos

1. Abra **Portal do Parceiro → Organizações**
2. Crie uma organização e associe um plano
3. Gerencie planos customizados em **Planos** (CRUD)
4. Acompanhe o status e o faturamento da org

## Faturas e comissões

- Em **Faturas**, veja o histórico de cobranças
- Em **Comissões**, acompanhe os valores devidos/pagos pelo programa

## Carteira (Asaas)

Configure o `asaas_wallet_id` na aba **Carteira**.

::: warning Sem wallet, sem split
Se a carteira não estiver configurada, o split de receita do parceiro **não é aplicado**.
:::

## Quem vê o portal?

Somente usuários vinculados a um parceiro com:

- `program_accepted_at` preenchido
- `status === 'active'`

Organizações com billing gerenciado pelo parceiro veem aviso correspondente nas configurações de assinatura.

## Relacionados

- [Cobrança (tenant)](/guide/billing/)
- [Configurações / assinatura](/guide/settings/)
