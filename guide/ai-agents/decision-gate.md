# Decisão antes do agente

Antes do modelo de conversa, o Agente IA pode decidir se deve agir. A decisão usa o JEV e não escreve a resposta ao cliente.

Changelog: [v2026.9.15](/changelog/2026/09/2026.9.15)

---

## Onde configurar

1. Abra o Agente IA
2. Vá na aba **Decisão**
3. Ative **Avaliar antes de executar o agente**

Início manual do fluxo não passa por esta decisão. Executar o agente em uma mensagem também não.

---

## Condições antes da decisão

Opcionais. Se o cliente já estiver em uma tag ou estágio, a regra vale sem chamar o JEV.

| Tipo | O que acontece |
|------|----------------|
| Bloquear o agente | Não responde nesta mensagem. A próxima mensagem automática avalia de novo |
| Chamar outro Agente IA | O JEV não é chamado. O mesmo fluxo segue com o agente escolhido |
| Pular a decisão e executar | O agente de conversa responde normalmente |

Se bloquear e chamar outro agente baterem juntos, bloquear prevalece.

---

## Opções de saída

O JEV escolhe uma opção a partir do nome do caso e do critério. Só entram as opções cuja tag ou estágio o cliente cumpre. Sem filtro, a opção entra sempre. Com tag e estágio, o cliente precisa dos dois. Se nenhuma opção passar, o JEV não é chamado e este agente executa.

| Efeito | O que acontece |
|--------|----------------|
| Executar o agente | Este agente responde. As mensagens seguintes da mesma sessão não passam de novo pela decisão |
| Chamar outro Agente IA | O fluxo continua com o agente escolhido. A sessão fica decidida e não reavalia na próxima mensagem |
| Não responder | Não executa agora. A próxima mensagem do cliente passa pela decisão outra vez |
| Não responder e pausar | Não responde e o automático deste chat não entra de novo. O início manual continua disponível |

Em qualquer efeito dá para, se quiser, adicionar tags, remover tags ou mover o estágio. Isso é extra em relação à decisão.

Quando o agente não continua, o chat mostra uma mensagem de sistema com o motivo.
