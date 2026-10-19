# Prototipo móvil de Lovable · revisión inicial

Fecha de inicio: 12 de octubre de 2026. Proyecto de Lovable: `be572215-0042-4046-a876-8f3e54848cb0`.

## Estado observado

- Lovable terminó su primera versión en el commit `b31febd269130d92ab275b4f62e4b387a78905dd` y una corrección en `b166492fa547654b3141639e972b55de1ccaaf18`.
- No está publicado. El editor figura con visibilidad `workspace_edit`, lo que permite acceso según los permisos del espacio de trabajo. Al abrir editor y vista previa sin iniciar sesión, ambos pidieron autenticación; no se debe compartir la vista previa como si fuera pública.
- La web en `site/` y el enlace público actual no se han cambiado.
- Lovable recibió el encargo de usar seis cartas de ejemplo más Géminis, con imágenes abstractas propias. Esto permite probar el flujo, pero no reproduce el juego completo de 23 cartas.
- Se examinó el código del prototipo y una captura de su portada de escritorio. Lovable declara haber ejecutado pruebas de lógica y recorridos con navegador; aquí no se han reproducido esas pruebas porque la vista previa requiere iniciar sesión.

## Base actual comprobada para la comparación

| Área | Web actual | Qué revisar en el prototipo |
|---|---|---|
| Cartas | 22 arcanos mayores y Géminis, todos ilustrados con María | Confirmar que las cartas de muestra se distinguen y que una migración podría conservar las 23 ilustraciones |
| Tirada | Una o tres cartas, revelación individual, invertidas, cinco temas, pregunta opcional y veredicto | La primera versión prototipo tiene cartas grandes y revela una o tres; omite inversión y sus textos no variaban por tema ni pregunta |
| Compartir | Enlace por WhatsApp; imagen y texto de la lectura con pregunta excluida por defecto | No perder estas funciones ni exponer la pregunta automáticamente |
| Privacidad | Sin cuenta, sin almacenamiento de preguntas, sin análisis de uso en el código | El prototipo guarda preguntas solo al guardar una lectura; explica almacenamiento local, borrado y acceso desde el mismo navegador. La primera versión cargaba Google Fonts y contenía un gancho de reporte de errores de Lovable en la vista del editor |
| Instalación | Manifiesto, iconos y caché de los recursos del juego | El prototipo no incluye equivalentes observados. No usarlo como sustituto de la PWA actual |
| Accesibilidad | Teclado probado; faltan pruebas físicas con TalkBack y VoiceOver | Revisar etiquetas, foco, contraste y reducción de movimiento; probar después en móvil real |

## Criterio para decidir

Revisar el prototipo terminado en móvil y escritorio, inspeccionar su código y probar una y tres cartas, diario, favoritas y feedback. Valorar cada novedad por utilidad, claridad y coste de mantenimiento. Después decidir qué funciones incorporar a la web actual y qué cambios de diseño merecen una prueba con usuarios. No sustituir el sitio público por el prototipo de ejemplo.

### Riesgos concretos que hay que comprobar

- **Diario:** guardar una pregunta personal debe requerir una acción expresa. La persona ha de poder borrar una lectura y vaciar el diario. Comprobar qué ocurre al cambiar de móvil, navegador o borrar datos locales.
- **Favoritas:** deben ser una marca dentro del diario; evitar duplicar lecturas o crear dos fuentes de datos que puedan desincronizarse.
- **Feedback:** si se guarda solo en el dispositivo del jugador, el equipo no recibe esa opinión. La vista privada de revisión servirá como demostración, pero para recoger comentarios reales habrá que decidir un envío consentido o una exportación manual. No prometer recogida de opiniones mientras no exista ese canal.
- **Predicciones:** el prototipo usa cartas de muestra. Antes de migrar, comprobar que no reduce la baraja ni pierde textos por tema, inversión, matices de preguntas sensibles o la identidad visual de María.
- **Coste y dependencia:** comparar el mantenimiento de la web estática actual con el de un proyecto TypeScript de Lovable antes de añadir cuentas, base de datos o pagos.

## Revisión de la primera versión

**Aprovechable:** el diseño de portada ofrece una jerarquía clara; el diario guarda fecha, tema, cartas, pregunta, veredicto y nota cuando el jugador pulsa «Guardar». Favoritas se implementa como marca de una lectura guardada. Hay filtros por tema, edición de nota, borrado individual, borrado completo y una opción de reducir movimiento. La foto principal es una ilustración nueva del Sol sin el rostro de María, tal como se pidió para esta demostración.

**Corregido en la segunda versión:** las siete cartas de muestra tienen reflexiones distintas por tema. Una clasificación simple de la pregunta modifica la lectura y el cierre; las tres cartas y su orden aparecen en el veredicto. Hay ocho pruebas nuevas de la lógica de interpretación. La comparación reconoce las funciones existentes de la web actual, el feedback aclara que no llega al equipo, se quitó la carga de Google Fonts y las pantallas de error están en español. Estos cambios se verificaron al leer el código; Lovable declara que ejecutó sus pruebas, pero esta revisión no pudo repetirlas en su vista previa autenticada.

**Límite que permanece:** la adaptación a la pregunta depende de patrones de palabras y no entiende cualquier formulación libre. La tarjeta base contiene un texto general al que se añade la reflexión contextual. El prototipo sigue siendo una muestra de siete cartas y no reproduce las ilustraciones ni las funciones de compartir e instalación de la web actual.

**Límites para una migración:** son siete cartas de muestra, sin las 23 ilustraciones de María, sin cartas invertidas, sin imagen de lectura ni compartir por WhatsApp, sin instalación o caché offline verificada. La web actual conserva esas funciones. Por ahora conviene trasladar ideas concretas, no sustituir el juego completo.

## Próximo paso

La corrección de Lovable ya terminó. Decidir qué incorporar primero al juego local: diario opcional con borrado y favoritas; después feedback con un canal real y consentimiento claro si se quiere recoger comentarios de jugadores. Probar la propuesta móvil con personas que ya usan la web antes de cambiar su diseño público.

## Orden de incorporación propuesto para la web actual

1. **Diario optativo y favoritas.** Añadir un botón «Guardar esta lectura» después del veredicto. Guardar fecha, tema, cartas, posición e inversión, textos mostrados y una nota opcional. La pregunta se incluirá solo si la persona marca una casilla desactivada por defecto. Una lectura favorita será una lectura guardada con una marca, sin copia aparte. Ofrecer borrar una entrada y borrar todo; explicar que el diario queda en ese navegador y puede perderse al limpiar sus datos.
2. **Prueba local antes de publicar.** Comprobar recarga, modo avión, lectura guardada sin pregunta, lectura con pregunta consentida, favoritas, borrado, almacenamiento desactivado y migración si cambia el formato. Mantener intacta la generación de imagen y la función de WhatsApp. Actualizar la página de privacidad y la caché con la versión correspondiente.
3. **Feedback útil.** Preguntar si la lectura fue clara, repetida o confusa. Si se quiere recoger comentarios de distintos jugadores, definir un canal de envío voluntario con destinatario y texto visibles antes de incorporarlo; el almacenamiento puramente local no permitirá al equipo verlos. Evitar incluir automáticamente preguntas personales o notas del diario.
4. **Diseño móvil.** Probar la nueva jerarquía y los botones grandes con usuarios de Android e iPhone. Adoptar solo los elementos que mejoren la tirada sin perder la estética vintage y las ilustraciones de María. Conservar los 22 arcanos y Géminis con el mismo criterio visual.

El paquete Android debe basarse en la versión web estable que resulte de estas pruebas, no en la demostración incompleta de Lovable.
