# Nodo: Decisor IA

La IA elige una salida del flujo a partir del contexto y de la descripción de cada opción.

## Visión general

El nodo **Decisor IA** está en la paleta de integraciones. En el lienzo solo aparecen los títulos de las salidas. El contexto, la confianza y las descripciones están en el panel lateral.

El uso se descuenta del saldo de créditos de IA de Interflow. No usa la clave de OpenAI del cliente.

## Cómo configurarlo

1. Arrastra **Decisor IA** al flujo
2. Haz clic en el título de una salida
3. Completa el contexto. Usa el botón de variable para incluir, por ejemplo, `{{conversation.lastMessages:10}}` o `{{conversation.lastMessages:50}}`
4. En cada opción, indica el título y la descripción. La descripción es el criterio que la IA compara
5. Ajusta la confianza mínima (0 a 100). El valor predeterminado es 70

## Salidas

| Salida | Cuándo sigue |
|--------|----------------|
| Cada opción | La IA elige esa opción y la confianza queda igual o por encima del mínimo |
| Ninguna | La IA no elige, la elección no existe o la confianza queda por debajo del mínimo |
| Error | Sin saldo de créditos o fallo en la llamada |

La variable `ai_decision` guarda la opción elegida, la confianza y la salida usada.

## Límites

- Cada opción necesita descripción. Sin descripción, la opción no entra en la decisión
- Sin saldo, el flujo no elige una opción: sigue **Error**
