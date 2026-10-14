# Bases

Bases guarda registros da organização em tabela: colunas, páginas, views e formulários. Não substitui o cadastro do cliente nem os campos personalizados da ficha.

> Changelog: [v2026.10.17](/changelog/2026/10/2026.10.17)

## Onde acessar

1. No rodapé da barra lateral, abra **Configurações**
2. No grupo **Clientes**, clique em **Bases** (abaixo de Campos personalizados)

Quem não tem permissão do módulo Bases não vê o item.

## Criar uma base

1. Digite o nome e clique em **Criar**
2. A base nasce com a coluna **Nome**
3. No topo, ajuste o título, a descrição da base e o vínculo

O vínculo define o que cada página pode apontar:

| Vínculo | Uso |
|---------|-----|
| Sem vínculo | Lista solta |
| Cliente | A página fica na ficha do cliente |
| Chat | A página guarda o id do chat |
| Agendamento | A página guarda o id do agendamento |

## Colunas

Clique no nome da coluna, ou em **Colunas** e no lápis.

- **Nome** é o rótulo na tabela
- **Descrição** vira a dica do cabeçalho e o texto de exemplo do campo vazio
- **Tipo** escolhe o formato do valor

Tipos: texto, número, sim/não, data, seleção, seleção múltipla, e-mail, telefone, link, arquivos, relação, fórmula e resumo.

Seleção e seleção múltipla precisam de opções. A fórmula referencia outra coluna pelo nome interno entre chaves, como `{preco} * {qtd}`. Relação aponta para outra base. Resumo agrega valores de uma relação (contagem, soma, mínimo, máximo ou média).

Há no máximo 40 colunas por base.

## Páginas, views e formulários

- **Nova página** cria uma linha. Dá para editar na tabela ou abrir a página.
- **Views** mudam a apresentação: tabela, calendário, gráfico ou relatório. Filtros, ordenação e colunas visíveis ficam na view.
- **Formulários** escolhem quais campos aparecem, quais são obrigatórios e quem pode enviar (todos, papel, equipe ou usuário).

No calendário, a coluna de data define o dia. No gráfico, escolha a coluna de agrupamento e, na soma, uma coluna numérica.

## Exportar

No menu da view, exporte a visão atual em CSV ou HTML.

## Limitações

- Fórmula e resumo não entram no formulário: o valor é calculado
- A descrição da coluna tem até 400 caracteres
- Bases ligadas a chat ou agendamento pedem o id desse registro ao criar a página
