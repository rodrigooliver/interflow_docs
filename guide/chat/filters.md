# Filtros de conversas

Além dos filtros rápidos (Minhas, Não atribuídas, Grupos), o painel avançado recorta a fila por equipe, tag, canal, status, funil, **mensagens não lidas** e **campos personalizados do cliente**.

Changelog: [v2026.8.17](/changelog/2026/08/2026.8.17) · [v2026.8.14](/changelog/2026/08/2026.8.14)

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

## Mensagens não lidas

O recorte **Não lidos** pode ir no painel, no botão do header e nos **filtros rápidos personalizados**.

| Onde | O que faz |
|------|-----------|
| Botão **Não lidos** no header da lista | Recorte rápido da lista atual, sem gravar no atalho |
| Painel de filtros | Mesmo critério, visível junto com os outros recortes |
| **Configurar filtros rápidos** | Grava “não lidas” no atalho, combinado com responsável, equipe, canal e o restante |

1. Em **Chats**, abra **Configurar filtros rápidos**
2. Duplique um filtro (ou edite um personalizado) e abra **Configurações**
3. Marque **Não lidos** e combine com os outros critérios
4. Salve — ao clicar no atalho, a lista, o chip e o contador acompanham

O botão do header continua disponível para refinar a lista na hora. Trocar para uma aba padrão do sistema desliga o recorte de não lidas. Arquivados segue como toggle separado.

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
