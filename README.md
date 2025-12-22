# Interflow Docs

📚 Documentação oficial da plataforma Interflow.

🌐 **Site**: [docs.interflow.chat](https://docs.interflow.chat)

## Sobre

Este é o projeto de documentação pública da Interflow, uma plataforma de atendimento multicanal e CRM. A documentação é construída com [VitePress](https://vitepress.dev/) e suporta múltiplos idiomas.

## Idiomas Suportados

- 🇧🇷 **Português (Brasil)** - Idioma principal
- 🇺🇸 **English** - English version
- 🇪🇸 **Español** - Versión en español

## Desenvolvimento

### Requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/rodrigooliver/interflow-docs.git
cd interflow-docs

# Instale as dependências
npm install
```

### Comandos

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Servidor de Desenvolvimento

O servidor será iniciado em `http://localhost:5173`.

## Estrutura do Projeto

```
interflow_docs/
├── .vitepress/
│   └── config.mts          # Configuração do VitePress
├── public/
│   ├── logo.svg            # Logo do site
│   ├── hero-image.svg      # Imagem da home
│   └── images/             # Imagens da documentação
├── guia/                   # Guias em português
│   ├── introducao.md
│   ├── inicio-rapido.md
│   ├── canais/
│   ├── chat/
│   ├── fluxos/
│   ├── crm/
│   └── ...
├── api/                    # Documentação da API (PT)
├── recursos/               # Recursos (PT)
├── en/                     # Versão em inglês
│   ├── guide/
│   ├── api/
│   └── ...
├── es/                     # Versão em espanhol
│   ├── guia/
│   ├── api/
│   └── ...
├── index.md                # Página inicial (PT)
├── changelog.md            # Histórico de versões
├── package.json
└── README.md
```

## Contribuindo

### Adicionando Conteúdo

1. Crie ou edite arquivos `.md` na pasta correspondente
2. Use Markdown padrão com extensões VitePress
3. Adicione imagens em `public/images/`
4. Atualize a sidebar em `.vitepress/config.mts` se necessário

### Padrões de Conteúdo

- Use o aviso de "Em Atualização" no início de páginas incompletas
- Inclua placeholders para screenshots e vídeos
- Mantenha consistência entre os idiomas
- Use tabelas para informações estruturadas
- Inclua exemplos de código quando relevante

### Exemplo de Placeholder

```markdown
<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; ...">
  <span>📸</span>
  <p>Screenshot: Descrição</p>
</div>
```

### Bloco de Aviso

```markdown
::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua.
:::
```

## Deploy

A documentação é automaticamente deployada quando há push para a branch `main`.

**Plataformas suportadas:**
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### Variáveis de Ambiente

```env
DOCS_URL=https://docs.interflow.chat
NODE_ENV=production
```

## Tecnologias

- [VitePress](https://vitepress.dev/) - Framework de documentação
- [Vue 3](https://vuejs.org/) - Framework reativo
- [Markdown](https://commonmark.org/) - Formato de conteúdo

## Licença

Copyright © 2024-presente Interflow. Todos os direitos reservados.

---

🔗 **Links Úteis**

- [Plataforma Interflow](https://app.interflow.chat)
- [Site Institucional](https://interflow.chat)
- [API Reference](https://docs.interflow.chat/api/)
- [GitHub](https://github.com/rodrigooliver/interflow)

