# Nó: ElevenLabs TTS

Converte texto em áudio usando a tecnologia de síntese de voz da ElevenLabs.

## Visão Geral

O nó **ElevenLabs TTS** (Text-to-Speech) transforma texto em áudio com vozes realistas. Ideal para:

- Mensagens de áudio personalizadas
- Acessibilidade
- Humanização do atendimento
- Conteúdo em áudio

## Pré-requisitos

1. Conta na [ElevenLabs](https://elevenlabs.io)
2. Chave de API da ElevenLabs
3. Integração configurada em **Configurações > Integrações**

## Configurações

### Texto

O texto que será convertido em áudio. Suporta variáveis:

```
Olá {{customer_name}}, seu pedido {{order_number}} foi confirmado!
```

### Voz

Selecione a voz a ser usada. A ElevenLabs oferece diversas vozes:

- Vozes pré-definidas
- Vozes clonadas (se disponível na sua conta)

### Configurações de Áudio

| Parâmetro | Descrição |
|-----------|-----------|
| **Estabilidade** | Consistência da voz (0-1) |
| **Clareza** | Clareza e similaridade (0-1) |
| **Estilo** | Expressividade (0-1) |

### Salvar Áudio

Selecione uma variável para armazenar a URL do áudio gerado.

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Entrada | Esquerda | Cinza | Recebe conexão do nó anterior |
| Sucesso | Direita | Verde | Áudio gerado com sucesso |
| Erro | Inferior | Vermelho | Falha na geração |

## Exemplos de Uso

### Mensagem de Boas-vindas

```
[ElevenLabs TTS]
  Texto: "Olá! Seja bem-vindo ao nosso atendimento. 
          Como posso ajudá-lo hoje?"
  Voz: Rachel (português)
  Variável: audio_bemvindo

[Enviar Áudio] → {{audio_bemvindo}}
```

### Confirmação de Pedido

```
[ElevenLabs TTS]
  Texto: "{{customer_name}}, seu pedido número 
          {{order_number}} foi confirmado e 
          será entregue em {{delivery_date}}."
  Variável: audio_confirmacao

[Enviar Áudio] → {{audio_confirmacao}}
```

### Instruções em Áudio

```
[ElevenLabs TTS]
  Texto: "Para acessar sua conta, digite seu CPF 
          seguido da tecla cerquilha."
  Variável: audio_instrucao

[Enviar Áudio] → {{audio_instrucao}}
```

## Boas Práticas

::: tip Textos Curtos
Prefira textos curtos para reduzir tempo de geração e custos.
:::

::: tip Pontuação
Use pontuação adequada para pausas naturais na fala.
:::

::: tip Teste as Vozes
Experimente diferentes vozes para encontrar a ideal para seu contexto.
:::

::: tip Cache
Para textos fixos, considere pré-gerar os áudios e usar URLs estáticas.
:::

::: warning Custos
A ElevenLabs cobra por caractere. Monitore seu uso.
:::

## Próximos Passos

- [Nó: Minimax TTS](/guide/flows/nodes/minimax)
- [Nó: Enviar Áudio](/guide/flows/nodes/audio)

