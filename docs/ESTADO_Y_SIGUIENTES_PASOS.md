# Estado y siguientes pasos · 19 de octubre de 2026

## Hecho y comprobado

- La versión 28 está publicada en `https://mariapredice.com/`. `www`, el enlace de Sites y los enlaces anteriores siguen funcionando. El ejemplo de pregunta cambia según el tema elegido y la confirmación de barajado aparece destacada durante 2,8 segundos. Conserva diario local, favoritas, memoria voluntaria, ayuda de instalación, la bajada de 1,6 segundos al veredicto y el dominio propio al compartir.
- Tiene los 22 arcanos mayores ilustrados con María y Géminis como carta especial del mismo universo visual.
- Permite tiradas de una o tres cartas, cartas invertidas, cinco temas, pregunta opcional, veredicto y reinicio.
- Genera una imagen de lectura y un texto para WhatsApp. La pregunta privada queda excluida salvo elección expresa.
- La web tiene manifiesto, iconos, service worker e información de privacidad.
- Pruebas locales: 23 cartas e imágenes, 230 combinaciones de lectura, 40 preguntas, 31 recursos preparados para uso offline y validación sintáctica de JavaScript.
- Prueba pública de escritorio: una carta con pregunta médica, tres cartas sin pregunta, revelación, veredicto y ausencia de errores de consola.
- Prueba local de teclado: navegación con Enter, revelación de las tres cartas y foco en el título del veredicto.
- Descarga de escritorio: dos PNG nuevos guardados en `Descargas`; el segundo se revisó visualmente.
- La versión 17 fuerza una lectura prudente de salud aunque se haya seleccionado otro tema. También mejora la frase inicial sin pregunta y la redacción de cartas invertidas.
- Los comentarios generales de usuarios de Android y iPhone son positivos, según el usuario. Aún no hay un registro por dispositivo de instalación, modo avión, compartir imagen o lector de pantalla.
- Se han preparado un borrador de ficha para Google Play, una plantilla de asociación entre web y app y los pasos de TWA en `APP_ANDROID_PASOS.md`.
- Android ya tiene una comprobación automatizada de preparación y una guía de generación. La comprobación local pasó para las 23 cartas, el manifiesto, los iconos y los archivos básicos. Faltan las herramientas Android, los datos finales de publicación y la prueba en un teléfono físico.
- Se ha guardado una copia descargable de la versión 18 en `releases/el-tarot-de-maria-v18.zip`.
- La guía `MONETIZACION_Y_PUBLICACION_2026-10-05.md` compara web, dominio, Google Play y App Store y ofrece escenarios de ingresos. El titular acepta estudiar Google Play y un dominio; descarta App Store por su cuota anual.
- `mariapredice.com` y `www.mariapredice.com` están activos en el proyecto actual de Sites. IONOS conserva los registros de correo. Sites confirmó DNS, proveedor y SSL activos, y ambas direcciones respondieron con estado 200.

## Próxima tanda

1. **Claridad y fiabilidad.** Subir a 14 px el texto móvil de la tirada de una carta, impedir guardados duplicados, mostrar el progreso de la memoria y avisar si el navegador no puede guardar.
2. **Diario útil.** Añadir filtros, búsqueda, edición de notas y exportación e importación voluntarias.
3. **Pruebas específicas en teléfonos reales.** Registrar en Android e iPhone la instalación, modo avión, descarga PNG, envío de imagen, TalkBack y VoiceOver.
4. **Crecimiento medible.** Añadir SEO técnico, optimizar la carga de cartas y definir medición mínima con consentimiento antes de monetizar.
5. **Paquete Android.** Con el editor legal, la cuenta de Play Console y el identificador de paquete confirmados, instalar las herramientas, generar y probar la TWA. Publicar `assetlinks.json` solo con la huella real del certificado de firma de Play.

## Límites de la comprobación

La imagen PNG se generó, se mostró y se descargó dos veces en el navegador de escritorio. La instalación y el funcionamiento offline no se han probado todavía en teléfonos físicos; la prueba de caché fue una simulación local. La auditoría de `auditoria_el_tarot_de_maria_2026-10-05.md` partía de la versión 12; su puntuación editorial no debe atribuirse a la versión 18.

## Publicación

Sitio actual: `appgprj_6ac2375410fc8191b51b324e99bef28a` en Sites, con el nombre público `MARÍA PREDICE`. Mantener `https://mariapredice.dgimdiez77.chatgpt.site/`, comprobar el juego publicado después de cada cambio y no crear otro sitio para una actualización ordinaria.

Usar `https://mariapredice.com/` como dirección principal de comunicación. Mantener la dirección de Sites y las redirecciones anteriores para no cortar los enlaces ya compartidos.
