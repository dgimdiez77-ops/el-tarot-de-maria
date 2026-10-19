# Camino a la aplicación · 5 de octubre de 2026

## Estado real

La web pública sigue en https://el-pequeno-tarot-geminis-2026.dgimdiez77.chatgpt.site/. Android y iPhone han recibido buenos comentarios generales de usuarios. La versión 18 añade una ayuda para instalar el juego desde el navegador. El manifiesto, los iconos y la caché de las 23 cartas ya están en la web. El uso instalado sin conexión, TalkBack, VoiceOver y el envío de la imagen desde móviles físicos aún requieren pruebas específicas.

La instalación desde la pantalla de inicio es el primer camino para ambos sistemas. Para Play Store, la opción prevista es una **Trusted Web Activity (TWA)** que abre esta misma web. La versión de iPhone se puede seguir usando desde Safari y añadir a la pantalla de inicio; una publicación en App Store necesitaría un proyecto y una cuenta de Apple propios, que aún no existen.

El 5 de octubre se añadió `android/check-readiness.ps1`, que comprueba los 23 archivos de cartas, los archivos básicos, el manifiesto y los iconos. La comprobación local pasó. La guía reproducible está en `android/README.md`. En este ordenador todavía no hay npm, JDK ni Android SDK. La comprobación HTTPS de consola tampoco pudo completarse por un error de credenciales TLS de Windows; esto no demuestra un fallo del sitio público.

## Preparación de Android

1. Confirmar quién será el editor legal, qué cuenta de Play Console se usará y el identificador definitivo del paquete Android. No elegir un identificador provisional para una publicación.
2. Generar el proyecto Android con Bubblewrap a partir del manifiesto público: `bubblewrap init --manifest=https://el-pequeno-tarot-geminis-2026.dgimdiez77.chatgpt.site/manifest.webmanifest`. Bubblewrap pedirá los datos de la aplicación y las herramientas Android. Revisar el proyecto generado antes de compilar.
3. Configurar la firma y preparar el Android App Bundle para Play. Desde el 31 de agosto de 2026, una app nueva para teléfonos debe orientarse a Android 16, API 36 o superior. Comprobar el valor efectivo en el proyecto generado.
4. Obtener la huella SHA-256 del **certificado de firma de la app en Play Console**. Crear `/.well-known/assetlinks.json` en el mismo dominio con el identificador real y esa huella. La plantilla está en `android/assetlinks.template.json`. Verificar que se sirve por HTTPS, como JSON y sin redirecciones. Sin esa comprobación, la TWA puede abrir con interfaz de navegador.
5. Instalar un paquete de prueba en Android. Comprobar una y tres cartas, cartas invertidas, instalación, modo avión, descarga y compartición, regreso desde WhatsApp y TalkBack. Registrar dispositivo y resultado.
6. Completar política de privacidad, sección Seguridad de los datos, ficha y materiales de Play. La información actual sobre preguntas procesadas en el navegador se debe contrastar con el comportamiento final del paquete y el alojamiento.
   Si la web incorpora cobros digitales, revisar cómo se mostrarán dentro de la TWA. Un enlace de pago web visible en la app puede activar las reglas de facturación de Play; definir la compra permitida antes de subir el paquete.
7. Si la cuenta personal de desarrollador se creó después del 13 de noviembre de 2023, planificar la prueba cerrada exigida por Google: 12 testers inscritos durante al menos 14 días continuos antes de pedir acceso a producción.

## Datos que faltan para el paquete publicable

- Titular y datos de contacto públicos del editor, con permiso para usar el retrato en la app y la ficha.
- Cuenta de Play Console y fecha/tipo de alta.
- Identificador definitivo del paquete Android.
- Certificado de firma, huella SHA-256 de Play y custodia segura de la clave de subida.
- Dos o más capturas reales de la app Android, gráfico promocional y respuestas finales de la ficha. Hay un borrador de textos en `FICHA_PLAY_STORE_BORRADOR.md`.

No se ha generado todavía un proyecto Android con identificador y firma definitivos, un AAB o APK, ni se ha publicado una aplicación en Play Store. Tampoco se ha subido una asociación de dominio con datos inventados. La web continúa en el mismo enlace.

## Fuentes oficiales consultadas

- [Guía de TWA y Bubblewrap](https://developer.chrome.com/docs/android/trusted-web-activity/quick-start)
- [Asociación web y app con Digital Asset Links](https://developer.android.com/training/app-links/configure-assetlinks)
- [Nivel de API exigido en Google Play](https://support.google.com/googleplay/android-developer/answer/11926878?hl=es)
- [Pruebas para nuevas cuentas personales](https://support.google.com/googleplay/android-developer/answer/14151465?hl=es)
- [Materiales de la ficha](https://support.google.com/googleplay/android-developer/answer/9866151?hl=es)
