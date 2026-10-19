# Auditoría de El Tarot de María

**5 de octubre de 2026 · versión pública 12**  
Juego auditado: https://el-pequeno-tarot-geminis-2026.dgimdiez77.chatgpt.site/

**Seguimiento:** la versión 17 se publicó el mismo día en el mismo enlace. Se corrigieron los textos sin pregunta, la visibilidad del veredicto, la portada móvil, la síntesis de una y tres cartas, el aviso de tema discordante, la casilla de privacidad, la imagen social, la frase sobre conexión y el peso de la portada. Se añadieron manifiesto, caché e información pública de privacidad. Las 23 ilustraciones pasaron de 16,9 MB a 7,7 MB en conjunto, conservando la escena y el rostro. Las versiones posteriores ampliaron la interpretación de preguntas, aclararon las preguntas con varios temas, llevaron el foco a la lectura y al veredicto, evitaron predicciones clínicas incluso si se elige otro tema y reforzaron la instalación de la caché de cartas. En escritorio se comprobaron dos descargas PNG. Las puntuaciones y hallazgos que siguen describen la versión 12 y no son una nota actualizada de la versión 17. Quedan pendientes pruebas en teléfonos físicos, lectores de pantalla y una evaluación editorial con usuarios.

## Diagnóstico

El juego tiene una identidad visual reconocible, funciona sin registro y permite terminar una consulta breve. Su principal debilidad es la distancia entre la promesa «pregúntale a María» y lo que entrega el veredicto: la lectura aún une frases predefinidas y, a veces, habla de una pregunta que no se escribió. Conviene resolver esto y el descubrimiento del resultado en móvil antes de sumar nuevas funciones.

**Calidad global actual: 7,2/10.** Diseño 9; entrada al juego 7; interpretación 6; móvil 7; compartición 7; preparación para app 4. Son valoraciones editoriales, no puntuaciones de usuarios.

## Qué comprobé

Probé la web pública a 320, 390 y 1280 píxeles. Hice tiradas de una y tres cartas, con y sin pregunta, en temas general, amor y bienestar. Revisé cartas invertidas, veredicto, imagen compartible y consola. Contrasté los resultados con el código y los archivos publicados. No hice pruebas en teléfonos físicos, WhatsApp instalado, lectores de pantalla ni una medición de red móvil. La automatización no confirmó una segunda descarga del PNG; la imagen y el enlace sí se generaron.

## Hallazgos y correcciones

| Prioridad | Hallazgo comprobado | Corrección propuesta |
|---|---|---|
| Alta | Sin pregunta, la pantalla dice «María escucha tu pregunta» y el veredicto habla de «tu pregunta». | Títulos y aperturas distintos según exista texto escrito. |
| Alta | A 390 × 844, tras «Revelar todas», el veredicto empieza a 1096 px y el botón de compartir a 1316 px. | Desplazar y enfocar el veredicto al terminar, respetando el movimiento reducido. |
| Alta | En la portada, el primer botón para jugar empieza a 1069 px en móvil y a 821 px en escritorio de 800 px de alto. | Reducir o mover la portada para que la acción principal entre en la primera pantalla. |
| Alta | El veredicto concatena las ideas de tres cartas y añade la respuesta a la pregunta al final. | Redactar una síntesis con situación, tensión entre cartas y consejo condicionado por la pregunta. |
| Media | La Estrella repite «señal» y «volver» en una lectura; la tirada de una carta repite casi toda su interpretación en el veredicto. | Editar duplicados y escribir un cierre nuevo para una carta. |
| Alta | Las preguntas se clasifican por palabras clave; si el tema seleccionado no coincide, la intención se descarta y la lectura de tres cartas pasa a ser general. | Explicar cuándo la pregunta no se comprende y ofrecer reformulación; probar consultas reales por tema. |
| Baja | «Incluir mi pregunta» aparece incluso si no se escribió ninguna. | Ocultar la casilla y adaptar el mensaje. |
| Alta | En la vista móvil de la imagen compartible, las tres cartas y el texto quedan pequeños. La descarga repetida aún requiere prueba manual. | Crear un resumen social más legible y probar WhatsApp, Instagram y descargas en dispositivos reales. |
| Alta | El pie dice «Funciona sin conexión», pero la web no incluye manifiesto ni service worker. El ZIP descargado sí puede abrirse localmente. | Corregir la frase ahora; ofrecer uso offline cuando exista una PWA probada. |
| Media | La portada usa un PNG de 3,3 MB para una imagen mostrada a unos 195 px de ancho en móvil. | Servir versiones WebP o AVIF de tamaño adaptado y medir el efecto. |
| Media | Hay etiquetas y respeto por movimiento reducido, pero no se probó lector de pantalla; el foco no pasa al veredicto. | Revisar teclado, TalkBack y VoiceOver y anunciar el resultado una sola vez. |
| Media | Una consulta de ansiedad recibe un consejo simbólico, pero la aclaración sanitaria está solo al pie. | Añadir una advertencia breve y contextual para salud y decisiones económicas graves. |

### Cinco correcciones rápidas

1. Cambiar los textos de la lectura sin pregunta.
2. Ocultar la casilla de compartir pregunta cuando esté vacía.
3. Llevar la vista y el foco al veredicto al completar la tirada.
4. Sustituir la promesa de funcionamiento sin conexión.
5. Quitar las repeticiones más visibles de cartas y cierres.

## Comparación de mercado

Seleccioné cinco referentes que cubren tarot web sencillo, apps de uso frecuente y lecturas narrativas. La comparación se basa en sus páginas o fichas oficiales consultadas el 5 de octubre de 2026. No probé sus apps instaladas ni equiparo cantidad de funciones con calidad.

| Referente | Oferta observable | Comparación útil para María |
|---|---|---|
| [Labyrinthos](https://play.google.com/store/apps/details?id=com.labyrinthos.app) | 78 cartas, más de 50 tiradas, diario, aprendizaje y reversos configurables. | Gana en profundidad y continuidad; María puede conservar su entrada breve y mejorar la coherencia editorial. |
| [Trusted Tarot](https://www.trustedtarot.com/free-reading/) | 14 modalidades gratuitas, incluidas tiradas de una, tres, seis y diez cartas. | Más elección de tiradas; María destaca por una experiencia más concentrada y personal. |
| [Tarot.Free](https://tarot.free/) | 78 cartas, tiradas breves y Cruz Celta, enlace compartible, varios idiomas y lectura AI opcional. | Es el comparable web más directo. Conviene estudiar su facilidad de compartir sin copiar su amplitud. |
| [Mystic Mondays](https://play.google.com/store/apps/details?id=com.mysticmondays) | App con carta diaria, diario, varios mazos e interpretaciones invertidas. | Muestra cómo crear hábito; no justifica añadir puntos ni un diario antes de saber si los jugadores vuelven. |
| [Marselia](https://marselia.app/) | 78 cartas, pregunta escrita, lectura narrada en texto y voz, método editorial declarado. | Es el referente más interesante para la voz interpretativa; María puede mejorarla sin depender de lectura remota. |

**Posición posible.** El Tarot de María no necesita perseguir 78 cartas. Su ventaja defendible es una protagonista reconocible en cada ilustración, una consulta rápida y una lectura que parezca hecha por María. Esa última parte es la que más trabajo necesita.

## Orden de trabajo

**1. Arreglar la experiencia actual.** Corregir textos condicionales, visibilidad del veredicto, entrada móvil, casilla sin pregunta y promesa offline. Comprobar 320, 390 y 1280 px, con y sin pregunta.

**2. Rehacer el contenido de la lectura.** Definir reglas de síntesis para posición, tema, pregunta, cartas invertidas y Géminis. Revisar manualmente al menos 40 preguntas de prueba y combinaciones frecuentes. Mantener un tono simbólico sin certezas médicas o económicas.

**3. Afinar compartición y calidad.** Crear una versión visual breve, probar descargas y envío en Android, iPhone y ordenador, optimizar imágenes y comprobar teclado y lector de pantalla. Recoger comentarios de jugadores reales antes de añadir funciones de retorno.

**4. Preparar la app cuando la web esté cerrada.** Convertirla en PWA instalable y probar el modo offline. Después se puede evaluar una [Trusted Web Activity](https://developer.android.com/develop/ui/views/layout/webapps/trusted-web-activities) para Android, manteniendo la web como base. Google verifica la relación entre app y sitio con Digital Asset Links. La publicación requiere una [política de privacidad y el formulario Data safety](https://support.google.com/googleplay/android-developer/answer/10787469), incluso si no se recogen datos. Para cuentas personales de desarrollador creadas después del 13 de noviembre de 2023, Google exige [12 testers durante 14 días continuos](https://support.google.com/googleplay/android-developer/answer/14151465?hl=es) antes de pedir acceso a producción. Estos requisitos se deben comprobar de nuevo cuando toque publicar.
