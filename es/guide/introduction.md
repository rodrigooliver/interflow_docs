# Introducción

Bienvenido a la documentación oficial de **Interflow** – tu plataforma completa de atención multicanal y CRM.


## ¿Qué es Interflow?

Interflow es una plataforma SaaS que centraliza todos tus canales de comunicación con clientes en un solo lugar. Con ella, puedes:

- **Atender clientes** de WhatsApp, Instagram, Facebook y Email
- **Automatizar conversaciones** con flujos visuales inteligentes
- **Gestionar relaciones** con CRM completo
- **Programar servicios** con sistema de calendario integrado
- **Controlar finanzas** de tu operación
- **Analizar métricas** con dashboards en tiempo real

![Interfaz principal de Interflow](/images/guide/dashboard/dashboard_es.png)

## ¿Para quién es Interflow?

La plataforma fue desarrollada para empresas que:

- Reciben alto volumen de mensajes
- Poseen equipo de atención
- Necesitan centralizar múltiples canales
- Buscan automatizar procesos repetitivos
- Quieren mejorar la experiencia del cliente

### Segmentos que más utilizan

| Segmento | Casos de uso |
|----------|--------------|
| **E-commerce** | Atención postventa, rastreo, soporte |
| **Clínicas y Consultorios** | Citas, confirmaciones, recordatorios |
| **Inmobiliarias** | Captación de leads, seguimiento, calificación |
| **Escuelas y Cursos** | Matrículas, comunicación con alumnos |
| **Retail** | Ventas por WhatsApp, catálogo, pedidos |
| **Servicios** | Presupuestos, citas, seguimiento |

## Principales Recursos

### 💬 Atención Multicanal

Centraliza WhatsApp, Instagram, Facebook y Email en una única bandeja de entrada. Tu equipo atiende de forma organizada sin alternar entre aplicaciones.

**Recursos incluidos:**
- Bandeja de entrada unificada
- Historial completo de conversaciones
- Indicadores de lectura y estado
- Adjuntos y medios
- Notas internas entre agentes

### 🤖 Automatización con Flujos

Construye automatizaciones visuales sin necesidad de programar. Nuestro editor drag-and-drop permite crear flujos complejos de forma intuitiva.

**Tipos de nodos disponibles:**
- Mensajes de texto y medios
- Preguntas y recolección de datos
- Condiciones y lógica
- Delays y temporizadores
- Transferencia a agente
- Integración con APIs externas
- Acciones de CRM

![Constructor de Flujos](/images/guide/flows/flow_es.png)

### 👥 CRM Integrado

Gestiona tus clientes con recursos avanzados de CRM directamente integrados a la atención.

**Recursos del CRM:**
- Registro completo de clientes
- Campos personalizados
- Tags para segmentación
- Embudos de venta (Kanban)
- Historial de interacciones
- Tareas y seguimientos

### 📅 Sistema de Citas

Ofrece programación online a tus clientes con calendario integrado y recordatorios automáticos.

**Funcionalidades:**
- Calendario de disponibilidad
- Múltiples prestadores de servicio
- Recordatorios por WhatsApp/Email
- Integración con Google Calendar
- Pago anticipado (opcional)

### 💰 Módulo Financiero

Controla las finanzas de tu operación con visibilidad completa de ingresos y gastos.

**Incluye:**
- Dashboard financiero
- Control de transacciones
- Categorización automática
- Informes y gráficos
- Gestión de cajas

### 🛒 PDV (Punto de Venta)

Para operaciones que necesitan ventas directas, nuestro PDV integrado ofrece:

- Registro de productos
- Carrito de compras
- Múltiples formas de pago
- Emisión de recibos
- Control de inventario

## Arquitectura de la Plataforma

```
┌─────────────────────────────────────────────────────────────┐
│                        INTERFLOW                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │WhatsApp │  │Instagram│  │Facebook │  │  Email  │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
│       │            │            │            │              │
│       └────────────┴─────┬──────┴────────────┘              │
│                          │                                   │
│                   ┌──────▼──────┐                           │
│                   │   Backend   │                           │
│                   │   Node.js   │                           │
│                   └──────┬──────┘                           │
│                          │                                   │
│    ┌─────────────────────┼─────────────────────┐            │
│    │                     │                     │            │
│ ┌──▼──┐  ┌──────┐  ┌────▼────┐  ┌─────────┐  │            │
│ │ CRM │  │Flujos│  │  Chat   │  │Informes │  │            │
│ └─────┘  └──────┘  └─────────┘  └─────────┘  │            │
│                                               │            │
│                   ┌──────────┐                │            │
│                   │ Supabase │                │            │
│                   │PostgreSQL│                │            │
│                   └──────────┘                │            │
└─────────────────────────────────────────────────────────────┘
```

## Requisitos del Sistema

### Para usuarios

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet estable
- Cuenta en la plataforma Interflow

## Próximos Pasos

Ahora que conoces Interflow, sigue al próximo paso:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/es/guide/quick-start" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">🚀</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Inicio Rápido</p>
  </div>
</a>

<a href="/es/guide/channels/" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📱</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Conectar Canales</p>
  </div>
</a>

<a href="/es/api/" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📚</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">API Reference</p>
  </div>
</a>

</div>
