import { defineConfig } from 'vitepress'

// Sidebar compartilhada (mesma estrutura para todos os idiomas)
function getSidebar(lang: string = '') {
  const prefix = lang ? `/${lang}` : ''
  
  return {
    [`${prefix}/guide/`]: [
      {
        text: lang === 'en' ? '🚀 Getting Started' : lang === 'es' ? '🚀 Primeros Pasos' : '🚀 Primeiros Passos',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Introduction' : lang === 'es' ? 'Introducción' : 'Introdução', link: `${prefix}/guide/introduction` },
          { text: lang === 'en' ? 'Quick Start' : lang === 'es' ? 'Inicio Rápido' : 'Início Rápido', link: `${prefix}/guide/quick-start` }
        ]
      },
      {
        text: lang === 'en' ? '📱 Communication Channels' : lang === 'es' ? '📱 Canales de Atención' : '📱 Canais de Atendimento',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Visión General' : 'Visão Geral', link: `${prefix}/guide/channels/` },
          { text: 'WhatsApp Business', link: `${prefix}/guide/channels/whatsapp-business` },
          { text: 'WhatsApp WAHA', link: `${prefix}/guide/channels/whatsapp-waha` },
          { text: 'Instagram', link: `${prefix}/guide/channels/instagram` },
          { text: 'Facebook Messenger', link: `${prefix}/guide/channels/facebook` },
          { text: 'Email', link: `${prefix}/guide/channels/email` }
        ]
      },
      {
        text: lang === 'en' ? '💬 Chat & Support' : lang === 'es' ? '💬 Chat y Atención' : '💬 Chat e Atendimento',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Chat Interface' : lang === 'es' ? 'Interfaz de Chat' : 'Interface de Chat', link: `${prefix}/guide/chat/interface` }
        ]
      },
      {
        text: lang === 'en' ? '🤖 Automation & Flows' : lang === 'es' ? '🤖 Automatización y Flujos' : '🤖 Automação e Fluxos',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Flow Builder' : lang === 'es' ? 'Constructor de Flujos' : 'Construtor de Fluxos', link: `${prefix}/guide/flows/builder` }
        ]
      },
      {
        text: lang === 'en' ? '👥 CRM & Customers' : lang === 'es' ? '👥 CRM y Clientes' : '👥 CRM e Clientes',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Customer Management' : lang === 'es' ? 'Gestión de Clientes' : 'Gerenciamento de Clientes', link: `${prefix}/guide/crm/customers` }
        ]
      },
      {
        text: lang === 'en' ? '🔌 Integrations' : lang === 'es' ? '🔌 Integraciones' : '🔌 Integrações',
        collapsed: false,
        items: [
          { text: 'OpenAI', link: `${prefix}/guide/integrations/openai` }
        ]
      }
    ],
    [`${prefix}/api/`]: [
      {
        text: lang === 'en' ? '📚 API Reference' : lang === 'es' ? '📚 Referencia de API' : '📚 Referência da API',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Introduction' : lang === 'es' ? 'Introducción' : 'Introdução', link: `${prefix}/api/` },
          { text: lang === 'en' ? 'Authentication' : lang === 'es' ? 'Autenticación' : 'Autenticação', link: `${prefix}/api/authentication` },
          { text: lang === 'en' ? 'Errors' : lang === 'es' ? 'Errores' : 'Erros', link: `${prefix}/api/errors` }
        ]
      },
      {
        text: lang === 'en' ? '💬 Messages' : lang === 'es' ? '💬 Mensajes' : '💬 Mensagens',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Send Message' : lang === 'es' ? 'Enviar Mensaje' : 'Enviar Mensagem', link: `${prefix}/api/messages/send` }
        ]
      }
    ],
    [`${prefix}/features/`]: [
      {
        text: lang === 'en' ? '🎯 Features' : lang === 'es' ? '🎯 Recursos' : '🎯 Recursos',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Visión General' : 'Visão Geral', link: `${prefix}/features/` }
        ]
      }
    ]
  }
}

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

  locales: {
    root: {
      label: 'Português',
      lang: 'pt-BR',
      title: 'Interflow Docs',
      description: 'Documentação oficial da plataforma Interflow',
      themeConfig: {
        nav: [
          { text: 'Início', link: '/' },
          { text: 'Guia', link: '/guide/introduction' },
          { text: 'API', link: '/api/' },
          { text: 'Recursos', link: '/features/' },
          { text: 'Changelog', link: '/changelog' }
        ],
        sidebar: getSidebar(),
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
        sidebar: getSidebar('en'),
        footer: {
          message: 'Documentation constantly being updated',
          copyright: 'Copyright © 2024-present Interflow'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        outline: {
          label: 'On this page'
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
          { text: 'Guía', link: '/es/guide/introduction' },
          { text: 'API', link: '/es/api/' },
          { text: 'Recursos', link: '/es/features/' },
          { text: 'Changelog', link: '/es/changelog' }
        ],
        sidebar: getSidebar('es'),
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
  
  // Ignora links para páginas que ainda não existem
  ignoreDeadLinks: true,
  
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  }
})
