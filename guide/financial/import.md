# Importar extrato

Traga um CSV ou OFX do banco para o caixa e decida, linha a linha, o que gravar.

::: tip Acesso
**Financeiro → Lançamentos → Importar**. O caixa da tela, se houver, já vem selecionado.
:::

## Para que serve

O extrato do banco chega com datas e valores que podem já existir como conta a pagar, conta a receber ou lançamento. A importação não grava tudo de uma vez: cada linha vira **criar novo**, **baixar pendente** ou **pular**.

## Como importar

1. Abra **Financeiro → Lançamentos** e clique em **Importar**
2. Escolha o **caixa** e o arquivo (CSV ou OFX)
3. Marque **Inverter sinais** só quando as compras vierem positivas, como em fatura de cartão
4. Continue

### CSV

O passo **Colunas** pede o mapeamento, porque cada banco usa nomes diferentes. A primeira linha do arquivo aparece como prévia.

Obrigatório:

- **Data** e o formato (`dd/MM/yyyy`, `dd-MM-yyyy`, `yyyy-MM-dd` ou `MM/dd/yyyy`)
- **Descrição**
- **Valor**, ou **débito** e **crédito** juntos

Opcional: **número** do documento (NSU, cheque ou referência).

### OFX

O OFX já traz data, descrição e valor. A tela pula as colunas e abre direto o **mapeamento**.

## Revisar cada linha

| Ação | Quando usar |
|------|-------------|
| **Criar novo** | Não existe obrigação nem lançamento correspondente |
| **Baixar pendente** | A linha quita uma conta em aberto. É preciso escolher qual |
| **Pular** | A linha não deve ser gravada |

Linhas novas exigem **categoria**. Dá para definir padrões do caixa (categoria de receita, categoria de despesa, centro de custo nas despesas e forma de pagamento) e **aplicar nas novas**. Cliente continua opcional em cada linha.

O sistema sugere a ação:

- Mesma data e mesmo valor já lançados no caixa: vem como ignorar. Use **importar mesmo assim** se for outro movimento
- Já importada deste extrato: permanece ignorada
- Pendente compatível: vem como baixar, com a conta sugerida. Dá para buscar outra

O resumo no rodapé conta quantas linhas serão novas, quantas serão baixas e quantas serão ignoradas.

## Confirmar

**Confirmar importação** grava só o que não está pulado. A mensagem final informa quantos foram criados, quantos foram baixados e quantos foram ignorados.

O que nasce como lançamento entra no extrato do caixa, com a data e o valor da linha. O que baixa uma pendente quita aquela obrigação.

## Limitações

- A importação vale para um caixa por vez
- Sem categoria, a linha nova não grava
- Sem a pendente escolhida, a baixa não grava
- Período já conciliado no caixa não aceita lançamento novo nessa data — veja [Conciliação](/guide/financial/reconciliation)

## Voltar

- [Financeiro — visão geral](/guide/financial/)
