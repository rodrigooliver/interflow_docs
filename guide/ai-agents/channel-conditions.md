# Canal e condições no Agente IA

O mesmo Agente IA pode atender em vários canais e adaptar o texto, os contextos adicionais e as ferramentas prontas conforme a **origem da conversa**, o **estágio do funil** e as **tags** do cliente.

Changelog: [v2026.8.8](/changelog/2026/08/2026.8.8)

---

## Canal no contexto

A cada interação, o agente recebe o canal atual na mensagem de contexto do sistema:

- nome (ex.: WhatsApp Vendas)
- tipo (WhatsApp, Instagram, e-mail, etc.)
- ID
- identificador (número, @ do Instagram, e-mail…)

Assim a IA diferencia conversas e pode adaptar tom, ofertas e transferências.

---

## Regras das condições

As mesmas regras valem no prompt, nos contextos adicionais e nas ferramentas prontas.

| Configuração | Resultado |
|--------------|-----------|
| Nenhum filtro | Sempre entra |
| Vários canais (ou estágios, ou tags) | OU — basta um |
| Canal **e** funil **e** tags | E — todos os tipos preenchidos precisam bater |

Exemplo: canais A e B + tag VIP → a condição vale se o canal for A ou B **e** o cliente tiver a tag VIP.

---

## Se / senão no texto do prompt

Na aba **Contexto**, o editor tem um botão de ramificação para inserir um bloco condicional.

1. Escolha canal, estágio e/ou tags
2. Preencha o texto **se verdadeiro**
3. (Opcional) preencha **se falso**
4. O bloco entra no prompt; no editor, <code v-pre>{{#if}}</code>, <code v-pre>{{else}}</code> e <code v-pre>{{/if}}</code> aparecem destacados

Só o texto da ramificação que bate vai para a IA. Sem `se falso`, o bloco some quando a condição não é atendida.

---

## Contextos adicionais

Cada contexto extra pode ter **Exibir quando**. Os que passam na condição são concatenados em **um único texto** no final.

- Sem condição = entra sempre
- Lista do WhatsApp continua disponível como modelo
- O tipo em branco serve para textos condicionais (tom, regras, ofertas por canal)

---

## Ferramentas prontas

Em cada ação do sistema, use **Disponível quando**. A ferramenta só é enviada à IA se a condição bater.

Ferramentas personalizadas e a base de conhecimento **não** usam esse filtro nesta versão.

---

## Testar

Na aba **Teste**, abra **Simular contexto** e escolha canal, estágio e tags. O teste aplica as mesmas regras da conversa real (blocos se / senão e contextos adicionais).

---

## Limitações

- Sem aninhamento de se / senão (vários blocos em sequência, sim)
- Condições ainda não se aplicam a ferramentas personalizadas nem à base de conhecimento
- O agente continua ligado aos canais pelo **fluxo / gatilho**; esta feature não cria um vínculo direto prompt↔canal
