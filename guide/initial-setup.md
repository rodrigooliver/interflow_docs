# Configuração Inicial

Configure sua organização para começar a usar a Interflow.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua.
:::

## Checklist de Configuração

Siga este checklist para configurar sua organização:

- [ ] Dados da organização
- [ ] Conectar primeiro canal
- [ ] Configurar horário de atendimento
- [ ] Criar equipes
- [ ] Convidar membros
- [ ] Configurar respostas rápidas
- [ ] Criar primeiro fluxo

## Dados da Organização

### Informações Básicas

1. Vá em **Configurações** → **Organização**
2. Preencha:
   - Nome da empresa
   - Logo (recomendado: 200x200px)
   - Cores da marca
   - Descrição

### Fuso Horário

Configure o fuso horário correto para:
- Horários nos relatórios
- Agendamentos
- Histórico de conversas

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Configurações da organização</p>
</div>

## Horário de Atendimento

Configure quando sua equipe está disponível:

1. Vá em **Configurações** → **Horário de Atendimento**
2. Defina os dias e horários
3. Configure mensagem fora do horário

**Exemplo:**

| Dia | Horário |
|-----|---------|
| Segunda a Sexta | 09:00 - 18:00 |
| Sábado | 09:00 - 13:00 |
| Domingo | Fechado |

### Mensagem Fora do Horário

Configure uma resposta automática:

```
Olá! 👋

No momento estamos fora do horário de atendimento.

📅 Nosso horário:
Segunda a Sexta: 9h às 18h
Sábado: 9h às 13h

Retornaremos assim que possível!
```

## Criar Equipes

Organize seus atendentes em equipes:

1. Vá em **Configurações** → **Equipes**
2. Clique em **"Nova equipe"**
3. Configure:
   - Nome da equipe (ex: Suporte, Vendas, Financeiro)
   - Descrição
   - Canais vinculados

### Exemplo de Estrutura

```
📁 Organização
├── 👥 Equipe Suporte
│   ├── Ana (Atendente)
│   └── Carlos (Atendente)
├── 👥 Equipe Vendas
│   ├── Bruno (Atendente)
│   └── Diana (Atendente)
└── 👥 Equipe Financeiro
    └── Eduardo (Atendente)
```

## Convidar Membros

Adicione sua equipe à plataforma:

1. Vá em **Configurações** → **Membros**
2. Clique em **"Convidar"**
3. Informe:
   - Email do membro
   - Perfil de acesso
   - Equipes
4. Envie o convite

### Perfis de Acesso

| Perfil | Permissões |
|--------|------------|
| **Administrador** | Acesso total |
| **Gerente** | Gerencia equipes, vê relatórios |
| **Atendente** | Atende conversas, acessa CRM |
| **Visualizador** | Apenas visualiza |

## Respostas Rápidas

Configure mensagens prontas:

1. Vá em **Configurações** → **Respostas Rápidas**
2. Crie respostas comuns:

**Sugestões:**

| Atalho | Mensagem |
|--------|----------|
| `/ola` | Olá! Como posso ajudá-lo? |
| `/aguarde` | Um momento, estou verificando... |
| `/obrigado` | Obrigado pelo contato! |
| `/horario` | Nosso horário de atendimento é... |

## Primeiro Fluxo

Crie um fluxo de boas-vindas:

1. Vá em **Fluxos** → **Novo fluxo**
2. Use o template **"Boas-vindas básico"**
3. Personalize as mensagens
4. Ative o fluxo

<!-- Placeholder para vídeo -->
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 48px;">▶️</span>
  <p style="color: white; margin-top: 8px; font-size: 18px;">Vídeo: Configuração inicial (em breve)</p>
</div>

## Notificações

Configure como receber alertas:

1. Vá em **Configurações** → **Notificações**
2. Configure:
   - Notificações no navegador
   - Sons de alerta
   - Notificações push (mobile)
   - Email de resumo

## Personalização

### Aparência

- Escolha entre tema claro e escuro
- Configure cores da marca

### Idioma

- Português (Brasil)
- English
- Español

## Próximos Passos

Com a configuração básica pronta:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/guide/channels/" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📱</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Conectar Canais</p>
  </div>
</a>

<a href="/guide/chat/interface" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">💬</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Interface de Chat</p>
  </div>
</a>

<a href="/guide/flows/builder" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">🤖</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Criar Fluxos</p>
  </div>
</a>

</div>

