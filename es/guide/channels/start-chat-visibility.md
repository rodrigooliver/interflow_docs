# Restricción de canales al iniciar conversación

Controla quién puede ver y seleccionar cada canal al iniciar una nueva conversación con un cliente.

## ¿Qué es?

Cada canal puede tener una regla de **visibilidad al iniciar conversación**:

| Opción | Comportamiento |
|--------|----------------|
| **Todos** | Cualquier miembro de la organización ve el canal (predeterminado) |
| **Por perfil** | Solo usuarios con los perfiles seleccionados |
| **Usuarios** | Solo las personas seleccionadas |

**Propietarios y administradores** siempre ven todos los canales principales, para operación y configuración.

Los **canales auxiliares** (vinculados a un canal principal) **nunca** aparecen en la lista al iniciar conversación — solo el canal principal.

## ¿Para qué sirve?

| Escenario | Ejemplo |
|-----------|---------|
| Número oficial restringido | Solo gerentes y un grupo de usuarios pueden iniciar por el número principal |
| Canal de ventas | Visible solo para el perfil de ventas |
| Evitar uso indebido | Impedir que agentes usen un canal de cobro o VIP |

## Dónde acceder

| Área | Ruta |
|------|------|
| **Configurar** | Canales → abrir el canal → Configuraciones → **Quién puede iniciar conversación por este canal** |
| **Usar** | Al iniciar conversación desde un contacto (cliente, lista, nueva conversación, etc.) |

## Cómo configurar

1. Abre el canal en **Canales**
2. Haz clic en **Configuraciones**
3. En la sección de visibilidad, elige **Todos**, **Por perfil** o **Usuarios**
4. Si eliges perfil o usuarios, marca las opciones deseadas
5. Guarda

::: tip 💡 Predeterminado
Los canales sin configuración específica siguen liberados para **todos**. Nada cambia hasta que restrinjas.
:::

## Qué ve el usuario

- La lista al iniciar conversación muestra solo canales **activos**, del **tipo compatible** con el contacto y **permitidos** para el perfil
- Si ningún canal está disponible, la plataforma indica que no hay canal para ese perfil
- La restricción también se valida en el servidor: sin permiso, la creación de la conversación se bloquea

## Limitaciones

- La regla aplica al **iniciar una nueva conversación** (selección de canal). No cambia por sí sola los filtros de la bandeja
- Las integraciones con clave de API de la organización no aplican la restricción por perfil/usuario (siguen bloqueando canales auxiliares)
- Los grupos de permiso personalizados usan el **perfil base** del miembro (como en otros controles de visibilidad de la plataforma)

## Relacionado

- [Changelog v2026.7.5](/es/changelog/2026/07/2026.7.5)
- [Canales de Atención](/es/guide/channels/)
