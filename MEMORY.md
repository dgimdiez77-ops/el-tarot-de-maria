# Memoria local · EL TAROT DE MARÍA

Esta memoria pertenece únicamente a este proyecto. Actualizarla solo con decisiones y hechos comprobados del juego. No añadir información de Atlas, Mireia, UAB ni otros trabajos del usuario.

## Identidad y alcance

- Nombre: **EL TAROT DE MARÍA**.
- Juego de predicciones simbólicas para navegador, con 22 arcanos mayores y Géminis como carta especial. Las 23 cartas tienen ilustraciones de María.
- Fuente de trabajo local: esta carpeta; la web está en `site/`.
- Nombre público del Site: **MARÍA PREDICE**. El juego mantiene **EL TAROT DE MARÍA** como título dentro de la experiencia.
- Enlace público principal: https://mariapredice.com/. También funciona https://www.mariapredice.com/.
- Los enlaces anteriores `https://el-tarot-de-maria.dgimdiez77.chatgpt.site/` y `https://el-pequeno-tarot-geminis-2026.dgimdiez77.chatgpt.site/` redirigen al actual; no eliminar esa continuidad.
- Proyecto de publicación Sites: `appgprj_6ac2375410fc8191b51b324e99bef28a`. Las actualizaciones ordinarias deben publicarse en este mismo proyecto y enlace.
- Dominio propio registrado y activo: `mariapredice.com`. Está conectado al mismo proyecto de Sites junto con `www.mariapredice.com`; ambos tienen DNS, HTTPS y respuesta pública comprobados.

## Estado comprobado a 19 de octubre de 2026

- La versión pública registrada en este proyecto es la 28. Se publicó correctamente el 19 de octubre. El ejemplo del campo de pregunta cambia entre general, amor, trabajo y estudios, dinero y bienestar. Al pulsar `Barajar mazo`, la confirmación aparece durante 2,8 segundos con mayor tamaño, contraste dorado y una animación breve. El paquete de despliegue está en `releases/site-v28.tar.gz`.
- El 13 de octubre de 2026 el slug público de Sites pasó a `mariapredice` y el título del Site a `MARÍA PREDICE`. La nueva URL respondió con estado 200 y la anterior `el-tarot-de-maria` redirigió con estado 307.
- Tras revelar la última carta, la bajada al veredicto dura 1,6 segundos. El foco llega al título al terminar y la preferencia de reducir movimiento evita la animación.
- La web permite tiradas de una o tres cartas, tema y pregunta opcional, cartas invertidas, veredicto, reinicio, compartir por WhatsApp y un diario local opcional.
- Géminis sigue siendo una carta especial integrada en la baraja. La portada explica que María es Géminis y ofrece un contexto opcional; cuando aparece, su texto y el veredicto relacionan esa identidad con curiosidad, conversación y dos perspectivas.
- El diario guarda fecha, tema, cartas, interpretación y nota en el navegador de quien juega. La pregunta solo se guarda tras una casilla expresa. Incluye favoritas, borrado individual y borrado completo; no se sincroniza ni se envía al proyecto.
- En la página principal, el diario tiene un único acceso destacado en el pie, junto a `Instalar juego`. Después de una tirada también aparece `Ver mi diario`. El pie incluye el texto `Retrato real de María la tarotista aportado para este juego`.
- `La memoria de María` es voluntaria y empieza desactivada. Solo marca para personalización las nuevas lecturas guardadas mientras está activa. Reconoce temas recurrentes y palabras repetidas de preguntas guardadas; puede desactivarse u olvidar lo aprendido sin borrar el diario. Todo permanece en el navegador.
- Tiene manifiesto de instalación, iconos, caché para uso sin conexión y página de privacidad.
- Pasaron las pruebas locales de estructura, 230 lecturas, 40 preguntas y 31 recursos preparados para la caché. Tras la versión 19 se comprobó en el navegador la tirada, la apertura del guardado con la casilla de pregunta desactivada por defecto y el alta de una lectura en el diario.
- Los usuarios han dado comentarios generales positivos sobre Android y iPhone, según el titular; no hay cifra de tráfico ni registro completo de pruebas por dispositivo.
- IONOS activó el contrato de `mariapredice.com` el 13 de octubre de 2026. Verisign confirmó el registro y la fecha de expiración del 13 de octubre de 2027. El 14 de octubre se configuraron los dos registros A, el CNAME de `www` y los TXT de validación sin alterar los registros de correo. Sites confirmó ambos nombres como activos y con SSL activo; los dos respondieron con estado 200.

## Decisiones del titular

- Mantener el nuevo enlace público de Sites. Los enlaces antiguos compartidos siguen funcionando mediante redirección.
- Preparar una app Android para Google Play y estudiar si merece la pena monetizarla. El coste único de registro de Google Play y un dominio barato son asumibles; la cuota anual de App Store no.
- Mantener el uso web y desde iPhone por navegador. El titular autorizó la compra y la conexión de `mariapredice.com`. Abrir otras cuentas de pago o publicar una app en una tienda sigue necesitando sus datos definitivos y autorización específica.

## Trabajo pendiente

- `android/` contiene comprobaciones, guía y plantilla para asociar la futura app al dominio. No hay APK, AAB, firma ni publicación en Google Play.
- Confirmar titular personal u organización, existencia de cuenta Play Console, identificador definitivo de paquete y permiso de uso comercial del retrato e ilustraciones.
- Instalar herramientas Android, generar y probar el paquete en un móvil real, obtener la huella real de la firma de Play y publicar `/.well-known/assetlinks.json` en el mismo dominio.
- Completar pruebas de instalación, modo avión, compartir y lectores de pantalla en móviles físicos. Después, completar ficha y declaraciones de Google Play.
- Medir visitas y uso antes de tratar las previsiones de ingresos como resultados reales.
- Auditoría de experiencia de la versión 26: `docs/auditoria_web_el-tarot-de-maria.dgimdiez77.chatgpt.site_2026-10-13.docx`. Prioridades inmediatas: texto móvil de una carta, guardados duplicados, errores de almacenamiento, crecimiento del diario y progreso visible de la memoria.
- `eltarotdemaria.com` y `eltarotdemaria.es` están registrados. Las variantes con tilde parecían disponibles el 13 de octubre de 2026, pero deben confirmarse en un registrador antes de comprar y son menos fáciles de escribir y compartir.

## Fuentes internas para retomar

- `README.md`: estructura y enlace del proyecto.
- `docs/ESTADO_Y_SIGUIENTES_PASOS.md`: estado operativo.
- `docs/APP_ANDROID_PASOS.md` y `android/README.md`: camino Android.
- `docs/MONETIZACION_Y_PUBLICACION_2026-10-05.md`: escenarios, costes y supuestos de monetización.

Antes de actuar, comprobar si estos datos siguen vigentes. Esta memoria es un índice de contexto, no sustituye los archivos ni las pruebas actuales.
