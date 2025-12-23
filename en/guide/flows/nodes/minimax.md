# Nó: Minimax TTS

Converte texto em áudio usando a tecnologia de síntese de voz da Minimax.

## Visão Geral

O nó **Minimax TTS** (Text-to-Speech) transforma texto em áudio usando a API da Minimax. Uma alternativa para geração de áudio por IA.

## Pré-requisitos

1. Conta na Minimax
2. Chave de API válida
3. Integração configurada em **Configurações > Integrações**

## Configurações

### Texto

O texto que será convertido em áudio. Suporta variáveis:

```
Olá {{customer_name}}! Obrigado por entrar em contato.
```

### Voz

Selecione a voz disponível na sua integração Minimax.

### Salvar Áudio

Selecione uma variável para armazenar a URL do áudio gerado.

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Entrada | Esquerda | Cinza | Recebe conexão do nó anterior |
| Sucesso | Direita | Verde | Áudio gerado com sucesso |
| Erro | Inferior | Vermelho | Falha na geração |

## Exemplos de Uso

### Mensagem Personalizada

```
[Minimax TTS]
  Texto: "Bom dia, {{customer_name}}! 
          Temos novidades especiais para você."
  Variável: audio_mensagem

[Enviar Áudio] → {{audio_mensagem}}
```

### Resposta de IA em Áudio

```
[OpenAI] → Gera resposta em texto
           Variável: resposta_texto

[Minimax TTS]
  Texto: {{resposta_texto}}
  Variável: resposta_audio

[Enviar Áudio] → {{resposta_audio}}
```

## Boas Práticas

::: tip Textos Claros
Use textos bem pontuados para uma pronúncia natural.
:::

::: tip Teste
Sempre teste o áudio gerado antes de publicar.
:::

::: tip Tratamento de Erros
Configure a saída de erro para fallback em texto.
:::

## Próximos Passos

- [Nó: ElevenLabs TTS](/guide/flows/nodes/elevenlabs)
- [Nó: Enviar Áudio](/guide/flows/nodes/audio)

