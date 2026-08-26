# Filtros de conversas

Além dos filtros rápidos (Minhas, Não atribuídas, Grupos), o painel avançado recorta a fila por equipe, tag, canal, status, funil e **campos personalizados do cliente**.

Changelog: [v2026.8.14](/changelog/2026/08/2026.8.14)

---

## Onde filtrar

| Superfície | O que faz |
|------------|-----------|
| Painel de filtros em **Chats** | Recorta a lista e os contadores |
| **Exportar relatório** | Aplica o mesmo recorte e permite marcar campos personalizados como colunas |
| **Configurar filtros rápidos** | Grava o critério no atalho da equipe |

---

## Campos personalizados

O filtro usa o **cadastro do cliente** ligado à conversa — o mesmo conjunto de campos de Clientes.

Tipos que entram:

- Lista (um valor)
- Múltipla escolha
- Data
- Data e hora

Para cada campo, escolha um modo:

| Modo | Resultado |
|------|-----------|
| Todos os valores / Todas as datas | O campo não restringe a lista |
| Sem valor | Só conversas cujo cliente **não preencheu** o campo |
| Valores específicos / Período específico | Só conversas cujo cliente bate com as opções ou com o intervalo |

Vários campos ativos ao mesmo tempo se combinam: o cliente precisa satisfazer **todos**.

---

## Como usar no painel

1. Em **Chats**, abra o painel de filtros
2. Expanda **Campos personalizados**
3. Marque o modo e, se for o caso, as opções ou o período
4. Aplique — a lista, os chips ativos e os contadores acompanham

Administradores podem incluir os mesmos critérios em **Configurar filtros rápidos**, para a equipe abrir a fila já recortada.

---

## Colunas no relatório

Na tela **Exportar relatório**, a lista de colunas inclui **todos** os campos personalizados da organização (texto, número, lista, data, data/hora e sim/não — não só os que filtram).

1. Abra **Exportar relatório** em Chats
2. À direita, role até **Campos personalizados**
3. Marque os campos que devem virar colunas no arquivo
4. Exporte

Os campos saem desmarcados por padrão. Grupo ou conversa sem cliente fica com a célula vazia.

---

## O que não entra

- Grupos do WhatsApp e chats internos (não têm cliente)
- Conversas individuais **sem** cliente vinculado
- Campos de texto, número e sim/não — ainda não filtram a lista (entram só como colunas no relatório)

---

## Relacionado

- [Interface de Chat](/guide/chat/interface#filtros-personalizados)
- [Clientes — Campos personalizados](/guide/crm/customers#campos-personalizados)
