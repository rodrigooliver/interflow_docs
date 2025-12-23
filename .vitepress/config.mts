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
          { text: lang === 'en' ? 'Chat Interface' : lang === 'es' ? 'Interfaz de Chat' : 'Interface de Chat', link: `${prefix}/guide/chat/interface` },
          { text: lang === 'en' ? 'Text Enhancer' : lang === 'es' ? 'Mejorador de Texto' : 'Melhorador de Texto', link: `${prefix}/guide/chat/text-enhancer` }
        ]
      },
      {
        text: lang === 'en' ? '🤖 Automation & Flows' : lang === 'es' ? '🤖 Automatización y Flujos' : '🤖 Automação e Fluxos',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Flow Builder' : lang === 'es' ? 'Constructor de Flujos' : 'Construtor de Fluxos', link: `${prefix}/guide/flows/builder` },
          { 
            text: lang === 'en' ? 'Node Types' : lang === 'es' ? 'Tipos de Nodos' : 'Tipos de Nós',
            collapsed: true,
            items: [
              { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Visión General' : 'Visão Geral', link: `${prefix}/guide/flows/nodes/` },
              { text: 'Start', link: `${prefix}/guide/flows/nodes/start` },
              { text: lang === 'en' ? 'Text Message' : lang === 'es' ? 'Mensaje de Texto' : 'Mensagem de Texto', link: `${prefix}/guide/flows/nodes/text` },
              { text: lang === 'en' ? 'Send Audio' : lang === 'es' ? 'Enviar Audio' : 'Enviar Áudio', link: `${prefix}/guide/flows/nodes/audio` },
              { text: lang === 'en' ? 'Send Image' : lang === 'es' ? 'Enviar Imagen' : 'Enviar Imagem', link: `${prefix}/guide/flows/nodes/image` },
              { text: lang === 'en' ? 'Send Video' : lang === 'es' ? 'Enviar Video' : 'Enviar Vídeo', link: `${prefix}/guide/flows/nodes/video` },
              { text: lang === 'en' ? 'Send Document' : lang === 'es' ? 'Enviar Documento' : 'Enviar Documento', link: `${prefix}/guide/flows/nodes/document` },
              { text: lang === 'en' ? 'Send Email' : lang === 'es' ? 'Enviar Email' : 'Enviar Email', link: `${prefix}/guide/flows/nodes/email` },
              { text: 'Input', link: `${prefix}/guide/flows/nodes/input` },
              { text: 'Delay', link: `${prefix}/guide/flows/nodes/delay` },
              { text: lang === 'en' ? 'Variable' : lang === 'es' ? 'Variable' : 'Variável', link: `${prefix}/guide/flows/nodes/variable` },
              { text: lang === 'en' ? 'Condition' : lang === 'es' ? 'Condición' : 'Condição', link: `${prefix}/guide/flows/nodes/condition` },
              { text: lang === 'en' ? 'Random' : lang === 'es' ? 'Aleatorio' : 'Aleatório', link: `${prefix}/guide/flows/nodes/random` },
              { text: lang === 'en' ? 'Update Customer' : lang === 'es' ? 'Actualizar Cliente' : 'Atualizar Cliente', link: `${prefix}/guide/flows/nodes/update-customer` },
              { text: 'Jump To', link: `${prefix}/guide/flows/nodes/jump-to` },
              { text: lang === 'en' ? 'System Message' : lang === 'es' ? 'Mensaje de Sistema' : 'Mensagem de Sistema', link: `${prefix}/guide/flows/nodes/system-message` },
              { text: lang === 'en' ? 'Private Note' : lang === 'es' ? 'Nota Privada' : 'Nota Privada', link: `${prefix}/guide/flows/nodes/private-note` },
              { text: lang === 'en' ? 'Close Attendance' : lang === 'es' ? 'Cerrar Atención' : 'Encerrar Atendimento', link: `${prefix}/guide/flows/nodes/close-attendance` },
              { text: lang === 'en' ? 'AI Agent' : lang === 'es' ? 'Agente IA' : 'Agente IA', link: `${prefix}/guide/flows/nodes/agenteia` },
              { text: 'OpenAI', link: `${prefix}/guide/flows/nodes/openai` },
              { text: 'ElevenLabs TTS', link: `${prefix}/guide/flows/nodes/elevenlabs` },
              { text: 'Minimax TTS', link: `${prefix}/guide/flows/nodes/minimax` },
              { text: lang === 'en' ? 'HTTP Request' : lang === 'es' ? 'Solicitud HTTP' : 'Requisição HTTP', link: `${prefix}/guide/flows/nodes/request` },
              { text: lang === 'en' ? 'Group' : lang === 'es' ? 'Grupo' : 'Grupo', link: `${prefix}/guide/flows/nodes/group` },
              { text: 'POS', link: `${prefix}/guide/flows/nodes/pos` }
            ]
          }
        ]
      },
      {
        text: lang === 'en' ? '🤖 AI Agents' : lang === 'es' ? '🤖 Agentes IA' : '🤖 Agentes IA',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Visión General' : 'Visão Geral', link: `${prefix}/guide/ai-agents/` }
        ]
      },
      {
        text: lang === 'en' ? '📅 Schedule' : lang === 'es' ? '📅 Agenda' : '📅 Agenda',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Visión General' : 'Visão Geral', link: `${prefix}/guide/schedule/` }
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
        text: lang === 'en' ? '📊 Reports' : lang === 'es' ? '📊 Informes' : '📊 Relatórios',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Visión General' : 'Visão Geral', link: `${prefix}/guide/reports/` }
        ]
      },
      {
        text: lang === 'en' ? '⚙️ Settings' : lang === 'es' ? '⚙️ Configuraciones' : '⚙️ Configurações',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Visión General' : 'Visão Geral', link: `${prefix}/guide/settings/` }
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
    ],
    [`${prefix}/changelog/`]: [
      {
        text: lang === 'en' ? '📋 Changelog' : lang === 'es' ? '📋 Changelog' : '📋 Changelog',
        collapsed: false,
        items: [
          { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Visión General' : 'Visão Geral', link: `${prefix}/changelog/` },
          { text: 'Roadmap', link: `${prefix}/changelog/roadmap` }
        ]
      },
      {
        text: '2025',
        collapsed: false,
        items: [
          {
            text: lang === 'en' ? 'December' : lang === 'es' ? 'Diciembre' : 'Dezembro',
            collapsed: false,
            items: [
              { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Resumen' : 'Resumo', link: `${prefix}/changelog/2025/12/` },
              { text: 'v2025.12.9', link: `${prefix}/changelog/2025/12/2025.12.9` },
              { text: 'v2025.12.8', link: `${prefix}/changelog/2025/12/2025.12.8` },
              { text: 'v2025.12.7', link: `${prefix}/changelog/2025/12/2025.12.7` },
              { text: 'v2025.12.6', link: `${prefix}/changelog/2025/12/2025.12.6` },
              { text: 'v2025.12.5', link: `${prefix}/changelog/2025/12/2025.12.5` },
              { text: 'v2025.12.4', link: `${prefix}/changelog/2025/12/2025.12.4` },
              { text: 'v2025.12.3', link: `${prefix}/changelog/2025/12/2025.12.3` },
              { text: 'v2025.12.2', link: `${prefix}/changelog/2025/12/2025.12.2` },
              { text: 'v2025.12.1', link: `${prefix}/changelog/2025/12/2025.12.1` }
            ]
          },
          {
            text: lang === 'en' ? 'November' : lang === 'es' ? 'Noviembre' : 'Novembro',
            collapsed: true,
            items: [
              { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Resumen' : 'Resumo', link: `${prefix}/changelog/2025/11/` },
              { text: 'v2025.11.14', link: `${prefix}/changelog/2025/11/2025.11.14` },
              { text: 'v2025.11.13', link: `${prefix}/changelog/2025/11/2025.11.13` },
              { text: 'v2025.11.12', link: `${prefix}/changelog/2025/11/2025.11.12` },
              { text: 'v2025.11.11', link: `${prefix}/changelog/2025/11/2025.11.11` },
              { text: 'v2025.11.10', link: `${prefix}/changelog/2025/11/2025.11.10` },
              { text: 'v2025.11.9', link: `${prefix}/changelog/2025/11/2025.11.9` },
              { text: 'v2025.11.8', link: `${prefix}/changelog/2025/11/2025.11.8` },
              { text: 'v2025.11.7', link: `${prefix}/changelog/2025/11/2025.11.7` },
              { text: 'v2025.11.6', link: `${prefix}/changelog/2025/11/2025.11.6` },
              { text: 'v2025.11.5', link: `${prefix}/changelog/2025/11/2025.11.5` },
              { text: 'v2025.11.4', link: `${prefix}/changelog/2025/11/2025.11.4` },
              { text: 'v2025.11.3', link: `${prefix}/changelog/2025/11/2025.11.3` },
              { text: 'v2025.11.2', link: `${prefix}/changelog/2025/11/2025.11.2` },
              { text: 'v2025.11.1', link: `${prefix}/changelog/2025/11/2025.11.1` }
            ]
          },
          {
            text: lang === 'en' ? 'October' : lang === 'es' ? 'Octubre' : 'Outubro',
            collapsed: true,
            items: [
              { text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Resumen' : 'Resumo', link: `${prefix}/changelog/2025/10/` },
              { text: 'v2025.10.5', link: `${prefix}/changelog/2025/10/2025.10.5` },
              { text: 'v2025.10.4', link: `${prefix}/changelog/2025/10/2025.10.4` },
              { text: 'v2025.10.3', link: `${prefix}/changelog/2025/10/2025.10.3` },
              { text: 'v2025.10.2', link: `${prefix}/changelog/2025/10/2025.10.2` },
              { text: 'v2025.10.1', link: `${prefix}/changelog/2025/10/2025.10.1` }
            ]
          }
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
          { text: 'Changelog', link: '/changelog/' }
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
          pattern: 'https://github.com/rodrigooliver/interflow_docs/edit/main/:path',
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
          { text: 'Changelog', link: '/en/changelog/' }
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
          pattern: 'https://github.com/rodrigooliver/interflow_docs/edit/main/:path',
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
          { text: 'Changelog', link: '/es/changelog/' }
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
          pattern: 'https://github.com/rodrigooliver/interflow_docs/edit/main/:path',
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
