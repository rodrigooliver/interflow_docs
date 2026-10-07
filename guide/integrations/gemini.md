# Integração com Gemini

O Gemini entra na conversa (agente, teste de prompt e copiloto) e nas vozes do sistema. A mesma chave da API serve os dois.

Com a chave da organização, o Google cobra a sua conta. Sem chave, os modelos Gemini do catálogo Interflow usam o saldo de créditos de IA, na tarifa Standard.

## Chave

1. Crie uma chave em [Google AI Studio](https://aistudio.google.com/apikey)
2. No Interflow, abra **Configurações** → **Integrações** → **Gemini**
3. Valide a chave e salve

## Conversa

No agente, escolha a integração Gemini e um modelo da lista (Flash, Flash-Lite ou Pro). Com créditos Interflow, os mesmos modelos aparecem no catálogo, sem integração.

Em **Parâmetros**, o que vale para o Gemini é o **nível de raciocínio** (baixo, médio ou alto) e o **máximo de tokens**. Esse limite inclui os tokens do raciocínio. A temperatura, a verbosidade e o resumo configurável da OpenAI não se aplicam. No teste do prompt, o resumo do que o modelo pensou aparece enquanto a resposta é gerada. No atendimento ao cliente sai só a resposta.

No copiloto, os mesmos níveis baixo, médio e alto valem para o Gemini. A resposta chega em streaming e o resumo do raciocínio aparece no painel. No Gemini 3 o nível é o da API (`low`, `medium`, `high`). O 3.8 não aceita o nível mínimo. No 2.5 o nível vira um orçamento de tokens. O 2.5 Flash-Lite no baixo não raciocina.

Preços de referência, USD por 1 milhão de tokens (entrada / saída), tarifa Standard até 31/12/2026:

| Modelo | Entrada | Saída |
|--------|---------|-------|
| Gemini 3.8, 3.7 e 3.6 Flash | 0,75 | 3,75 |
| Gemini 3.5 Flash | 1,50 | 9,00 |
| Gemini 3.5 Flash-Lite | 0,30 | 2,50 |
| Gemini 3.1 Flash-Lite | 0,25 | 1,50 |
| Gemini 3 Flash | 0,50 | 3,00 |
| Gemini 3.1 Pro | 2,00 | 12,00 |
| Gemini 2.5 Pro | 1,25 | 10,00 |
| Gemini 2.5 Flash | 0,30 | 2,50 |
| Gemini 2.5 Flash-Lite | 0,10 | 0,40 |

A partir de 01/01/2027 o Google dobra o preço dos Flash 3.6, 3.7 e 3.8. Prompts acima de 200 mil tokens nos modelos Pro usam a faixa mais alta.

## Voz

Em **Vozes** → **Catálogo** → **Gemini**, clique em **Testar texto**. O campo já vem com uma frase e o modelo padrão (3.8 Flash-Lite TTS). Dá para trocar o modelo dentro do teste. O áudio sai em MP3.

**Usar esta voz** grava o preset. Em **Minhas vozes** e no formulário, **Testar texto** repete o teste com as opções da voz. O mesmo modal existe na ElevenLabs.

A voz pode usar a chave da integração ou o saldo Interflow. O débito segue os tokens de texto de entrada e de áudio de saída informados pela API.

> Changelog: [v2026.10.11](/changelog/2026/10/2026.10.11)
