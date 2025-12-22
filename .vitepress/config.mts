import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Interflow Docs",
  description: "Documentação oficial da plataforma Interflow - Atendimento multicanal e CRM",
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Interflow Docs' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
  ],

  // Configuração de idiomas
  locales: {
    root: {
      label: 'Português',
      lang: 'pt-BR',
      title: 'Interflow Docs',
      description: 'Documentação oficial da plataforma Interflow',
      themeConfig: {
        nav: [
          { text: 'Início', link: '/' },
          { text: 'Guia', link: '/guia/introducao' },
          { text: 'API', link: '/api/' },
          { text: 'Recursos', link: '/recursos/' },
          { text: 'Changelog', link: '/changelog' }
        ],
        sidebar: {
          '/guia/': [
            {
              text: '🚀 Primeiros Passos',
              collapsed: false,
              items: [
                { text: 'Introdução', link: '/guia/introducao' },
                { text: 'Início Rápido', link: '/guia/inicio-rapido' },
                { text: 'Criando sua Conta', link: '/guia/criando-conta' },
                { text: 'Configuração Inicial', link: '/guia/configuracao-inicial' }
              ]
            },
            {
              text: '📱 Canais de Atendimento',
              collapsed: false,
              items: [
                { text: 'Visão Geral', link: '/guia/canais/' },
                { text: 'WhatsApp Business', link: '/guia/canais/whatsapp-business' },
                { text: 'WhatsApp API', link: '/guia/canais/whatsapp-api' },
                { text: 'Instagram', link: '/guia/canais/instagram' },
                { text: 'Facebook Messenger', link: '/guia/canais/facebook' },
                { text: 'Email', link: '/guia/canais/email' }
              ]
            },
            {
              text: '💬 Chat e Atendimento',
              collapsed: false,
              items: [
                { text: 'Interface de Chat', link: '/guia/chat/interface' },
                { text: 'Gerenciando Conversas', link: '/guia/chat/gerenciando-conversas' },
                { text: 'Respostas Rápidas', link: '/guia/chat/respostas-rapidas' },
                { text: 'Templates de Mensagem', link: '/guia/chat/templates' },
                { text: 'Transferência de Atendimento', link: '/guia/chat/transferencia' }
              ]
            },
            {
              text: '🤖 Automação e Fluxos',
              collapsed: false,
              items: [
                { text: 'Construtor de Fluxos', link: '/guia/fluxos/construtor' },
                { text: 'Tipos de Nós', link: '/guia/fluxos/tipos-nos' },
                { text: 'Variáveis', link: '/guia/fluxos/variaveis' },
                { text: 'Condições e Lógica', link: '/guia/fluxos/condicoes' },
                { text: 'Integrações', link: '/guia/fluxos/integracoes' }
              ]
            },
            {
              text: '👥 CRM e Clientes',
              collapsed: false,
              items: [
                { text: 'Gerenciamento de Clientes', link: '/guia/crm/clientes' },
                { text: 'Campos Personalizados', link: '/guia/crm/campos-personalizados' },
                { text: 'Tags e Segmentação', link: '/guia/crm/tags' },
                { text: 'Funis de Venda', link: '/guia/crm/funis' },
                { text: 'Negócios (Deals)', link: '/guia/crm/negocios' }
              ]
            },
            {
              text: '👨‍💼 Equipes e Usuários',
              collapsed: false,
              items: [
                { text: 'Gerenciamento de Equipes', link: '/guia/equipes/gerenciamento' },
                { text: 'Permissões e Papéis', link: '/guia/equipes/permissoes' },
                { text: 'Atribuição de Atendentes', link: '/guia/equipes/atribuicao' }
              ]
            },
            {
              text: '📅 Agendamentos',
              collapsed: false,
              items: [
                { text: 'Configuração do Calendário', link: '/guia/agendamentos/calendario' },
                { text: 'Serviços e Prestadores', link: '/guia/agendamentos/servicos' },
                { text: 'Lembretes Automáticos', link: '/guia/agendamentos/lembretes' }
              ]
            },
            {
              text: '💰 Financeiro',
              collapsed: false,
              items: [
                { text: 'Visão Geral', link: '/guia/financeiro/' },
                { text: 'Transações', link: '/guia/financeiro/transacoes' },
                { text: 'Categorias', link: '/guia/financeiro/categorias' },
                { text: 'Relatórios', link: '/guia/financeiro/relatorios' }
              ]
            },
            {
              text: '🛒 PDV (Ponto de Venda)',
              collapsed: false,
              items: [
                { text: 'Configuração do PDV', link: '/guia/pdv/configuracao' },
                { text: 'Vendas', link: '/guia/pdv/vendas' },
                { text: 'Pagamentos', link: '/guia/pdv/pagamentos' }
              ]
            },
            {
              text: '📊 Relatórios',
              collapsed: false,
              items: [
                { text: 'Dashboard', link: '/guia/relatorios/dashboard' },
                { text: 'Relatórios de Atendimento', link: '/guia/relatorios/atendimento' },
                { text: 'Exportação de Dados', link: '/guia/relatorios/exportacao' }
              ]
            }
          ],
          '/api/': [
            {
              text: '📚 Referência da API',
              collapsed: false,
              items: [
                { text: 'Introdução', link: '/api/' },
                { text: 'Autenticação', link: '/api/autenticacao' },
                { text: 'Limites e Rate Limiting', link: '/api/limites' },
                { text: 'Erros', link: '/api/erros' }
              ]
            },
            {
              text: '💬 Mensagens',
              collapsed: false,
              items: [
                { text: 'Enviar Mensagem', link: '/api/mensagens/enviar' },
                { text: 'Mensagens em Massa', link: '/api/mensagens/massa' },
                { text: 'Templates', link: '/api/mensagens/templates' }
              ]
            },
            {
              text: '👥 Clientes',
              collapsed: false,
              items: [
                { text: 'Listar Clientes', link: '/api/clientes/listar' },
                { text: 'Criar Cliente', link: '/api/clientes/criar' },
                { text: 'Atualizar Cliente', link: '/api/clientes/atualizar' },
                { text: 'Campos Personalizados', link: '/api/clientes/campos-personalizados' }
              ]
            },
            {
              text: '💬 Chats',
              collapsed: false,
              items: [
                { text: 'Listar Chats', link: '/api/chats/listar' },
                { text: 'Criar Chat', link: '/api/chats/criar' },
                { text: 'Webhook de Mensagens', link: '/api/chats/webhook' }
              ]
            },
            {
              text: '🔗 Webhooks',
              collapsed: false,
              items: [
                { text: 'Configuração', link: '/api/webhooks/configuracao' },
                { text: 'Eventos', link: '/api/webhooks/eventos' },
                { text: 'Exemplos', link: '/api/webhooks/exemplos' }
              ]
            }
          ],
          '/recursos/': [
            {
              text: '🎯 Recursos',
              collapsed: false,
              items: [
                { text: 'Visão Geral', link: '/recursos/' },
                { text: 'Atendimento Multicanal', link: '/recursos/multicanal' },
                { text: 'Automação com IA', link: '/recursos/ia' },
                { text: 'CRM Integrado', link: '/recursos/crm' },
                { text: 'Agendamentos', link: '/recursos/agendamentos' },
                { text: 'Financeiro', link: '/recursos/financeiro' }
              ]
            }
          ]
        },
        footer: {
          message: 'Documentação em constante atualização',
          copyright: 'Copyright © 2024-presente Interflow'
        },
        docFooter: {
          prev: 'Anterior',
          next: 'Próximo'
        },
        outline: {
          label: 'Nesta página'
        },
        lastUpdated: {
          text: 'Atualizado em',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        returnToTopLabel: 'Voltar ao topo',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Tema',
        lightModeSwitchTitle: 'Mudar para tema claro',
        darkModeSwitchTitle: 'Mudar para tema escuro',
        editLink: {
          pattern: 'https://github.com/rodrigooliver/interflow-docs/edit/main/:path',
          text: 'Editar esta página'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'Interflow Docs',
      description: 'Official documentation for the Interflow platform',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/introduction' },
          { text: 'API', link: '/en/api/' },
          { text: 'Features', link: '/en/features/' },
          { text: 'Changelog', link: '/en/changelog' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: '🚀 Getting Started',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/en/guide/introduction' },
                { text: 'Quick Start', link: '/en/guide/quick-start' },
                { text: 'Creating Your Account', link: '/en/guide/creating-account' },
                { text: 'Initial Setup', link: '/en/guide/initial-setup' }
              ]
            },
            {
              text: '📱 Communication Channels',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/en/guide/channels/' },
                { text: 'WhatsApp Business', link: '/en/guide/channels/whatsapp-business' },
                { text: 'WhatsApp API', link: '/en/guide/channels/whatsapp-api' },
                { text: 'Instagram', link: '/en/guide/channels/instagram' },
                { text: 'Facebook Messenger', link: '/en/guide/channels/facebook' },
                { text: 'Email', link: '/en/guide/channels/email' }
              ]
            },
            {
              text: '💬 Chat & Support',
              collapsed: false,
              items: [
                { text: 'Chat Interface', link: '/en/guide/chat/interface' },
                { text: 'Managing Conversations', link: '/en/guide/chat/managing-conversations' },
                { text: 'Quick Replies', link: '/en/guide/chat/quick-replies' },
                { text: 'Message Templates', link: '/en/guide/chat/templates' },
                { text: 'Conversation Transfer', link: '/en/guide/chat/transfer' }
              ]
            },
            {
              text: '🤖 Automation & Flows',
              collapsed: false,
              items: [
                { text: 'Flow Builder', link: '/en/guide/flows/builder' },
                { text: 'Node Types', link: '/en/guide/flows/node-types' },
                { text: 'Variables', link: '/en/guide/flows/variables' },
                { text: 'Conditions & Logic', link: '/en/guide/flows/conditions' },
                { text: 'Integrations', link: '/en/guide/flows/integrations' }
              ]
            }
          ],
          '/en/api/': [
            {
              text: '📚 API Reference',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/en/api/' },
                { text: 'Authentication', link: '/en/api/authentication' },
                { text: 'Rate Limits', link: '/en/api/rate-limits' },
                { text: 'Errors', link: '/en/api/errors' }
              ]
            },
            {
              text: '💬 Messages',
              collapsed: false,
              items: [
                { text: 'Send Message', link: '/en/api/messages/send' },
                { text: 'Bulk Messages', link: '/en/api/messages/bulk' },
                { text: 'Templates', link: '/en/api/messages/templates' }
              ]
            }
          ]
        },
        footer: {
          message: 'Documentation constantly being updated',
          copyright: 'Copyright © 2024-present Interflow'
        },
        editLink: {
          pattern: 'https://github.com/rodrigooliver/interflow-docs/edit/main/:path',
          text: 'Edit this page'
        }
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      title: 'Interflow Docs',
      description: 'Documentación oficial de la plataforma Interflow',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Guía', link: '/es/guia/introduccion' },
          { text: 'API', link: '/es/api/' },
          { text: 'Recursos', link: '/es/recursos/' },
          { text: 'Changelog', link: '/es/changelog' }
        ],
        sidebar: {
          '/es/guia/': [
            {
              text: '🚀 Primeros Pasos',
              collapsed: false,
              items: [
                { text: 'Introducción', link: '/es/guia/introduccion' },
                { text: 'Inicio Rápido', link: '/es/guia/inicio-rapido' },
                { text: 'Creando tu Cuenta', link: '/es/guia/creando-cuenta' },
                { text: 'Configuración Inicial', link: '/es/guia/configuracion-inicial' }
              ]
            },
            {
              text: '📱 Canales de Atención',
              collapsed: false,
              items: [
                { text: 'Visión General', link: '/es/guia/canales/' },
                { text: 'WhatsApp Business', link: '/es/guia/canales/whatsapp-business' },
                { text: 'WhatsApp API', link: '/es/guia/canales/whatsapp-api' },
                { text: 'Instagram', link: '/es/guia/canales/instagram' },
                { text: 'Facebook Messenger', link: '/es/guia/canales/facebook' },
                { text: 'Email', link: '/es/guia/canales/email' }
              ]
            }
          ],
          '/es/api/': [
            {
              text: '📚 Referencia de API',
              collapsed: false,
              items: [
                { text: 'Introducción', link: '/es/api/' },
                { text: 'Autenticación', link: '/es/api/autenticacion' },
                { text: 'Límites', link: '/es/api/limites' },
                { text: 'Errores', link: '/es/api/errores' }
              ]
            }
          ]
        },
        footer: {
          message: 'Documentación en constante actualización',
          copyright: 'Copyright © 2024-presente Interflow'
        },
        docFooter: {
          prev: 'Anterior',
          next: 'Siguiente'
        },
        outline: {
          label: 'En esta página'
        },
        editLink: {
          pattern: 'https://github.com/rodrigooliver/interflow-docs/edit/main/:path',
          text: 'Editar esta página'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Interflow',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rodrigooliver/interflow' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Pesquisar',
                buttonAriaLabel: 'Pesquisar'
              },
              modal: {
                noResultsText: 'Nenhum resultado encontrado',
                resetButtonTitle: 'Limpar pesquisa',
                footer: {
                  selectText: 'para selecionar',
                  navigateText: 'para navegar'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search'
              }
            }
          },
          es: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar'
              },
              modal: {
                noResultsText: 'Sin resultados',
                resetButtonTitle: 'Limpiar búsqueda'
              }
            }
          }
        }
      }
    }
  },

  lastUpdated: true,
  cleanUrls: true,
  
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  }
})

