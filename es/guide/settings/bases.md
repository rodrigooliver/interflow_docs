# Bases

Bases guarda registros de la organización en una tabla: columnas, páginas, vistas y formularios. No sustituye la ficha del cliente ni los campos personalizados de esa ficha.

> Changelog: [v2026.10.17](/es/changelog/2026/10/2026.10.17)

## Dónde abrir

1. En el pie de la barra lateral, abra **Configuración**
2. En el grupo **Clientes**, pulse **Bases** (debajo de Campos personalizados)

Quien no tiene permiso del módulo Bases no ve el ítem.

## Crear una base

1. Escriba el nombre y pulse **Crear**
2. La base nace con la columna **Nombre**
3. Arriba, ajuste el título, la descripción de la base y el vínculo

El vínculo define a qué puede apuntar cada página:

| Vínculo | Uso |
|---------|-----|
| Sin vínculo | Lista suelta |
| Cliente | La página aparece en la ficha del cliente |
| Chat | La página guarda el id del chat |
| Cita | La página guarda el id de la cita |

## Columnas

Pulse el nombre de la columna, o abra **Columnas** y el lápiz.

- **Nombre** es la etiqueta en la tabla
- **Descripción** se vuelve la ayuda del encabezado y el texto de ejemplo del campo vacío
- **Tipo** define el formato del valor

Tipos: texto, número, sí/no, fecha, selección, selección múltiple, correo, teléfono, enlace, archivos, relación, fórmula y resumen.

Selección y selección múltiple necesitan opciones. La fórmula referencia otra columna por su clave entre llaves, como `{preco} * {qtd}`. Relación apunta a otra base. Resumen agrega una relación (conteo, suma, mínimo, máximo o media).

Hay como máximo 40 columnas por base.

## Páginas, vistas y formularios

- **Nueva página** crea una fila. Se edita en la tabla o al abrir la página.
- **Vistas** cambian la presentación: tabla, calendario, gráfico o informe. Filtros, orden y columnas visibles pertenecen a la vista.
- **Formularios** eligen qué campos aparecen, cuáles son obligatorios y quién puede enviar (todos, rol, equipo o usuario).

En el calendario, la columna de fecha define el día. En el gráfico, elija la columna de agrupación y, en la suma, una columna numérica.

## Exportar

En el menú de la vista, exporte la vista actual en CSV o HTML.

## Límites

- Fórmula y resumen no entran en el formulario: el valor se calcula
- La descripción de la columna tiene como máximo 400 caracteres
- Las bases vinculadas a chat o cita piden el id de ese registro al crear la página
