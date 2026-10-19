# EL TAROT DE MARÍA

Proyecto local del juego de tarot. La versión pública está en:

**https://mariapredice.com/**

El enlace anterior redirige a esta dirección, por lo que los enlaces ya compartidos siguen llegando al juego.

El dominio propio `mariapredice.com` se registró el 13 de octubre de 2026 y quedó activo el 14 de octubre en el mismo proyecto de Sites. También funciona `www.mariapredice.com`. El enlace de Sites y los enlaces anteriores se mantienen como continuidad.

## Abrir el juego

- En este ordenador: doble clic en [`site/index.html`](site/index.html). Las tiradas funcionan sin instalar nada.
- En internet: usa el enlace público. Es abierto y se puede enviar por WhatsApp.
- Para probar instalación y caché offline: sirve la carpeta `site` por HTTPS o con un servidor local; el doble clic no activa el service worker.

## Carpetas

- `site/`: **fuente de trabajo a partir de ahora**. Contiene la web completa y las 23 ilustraciones.
- `docs/`: auditoría, pruebas en móvil, hoja de registro para testers, hoja de ruta Android, borrador de Play Store, guía de monetización y decisiones de producto.
- `android/`: comprobación previa, guía de generación de la aplicación Android y plantilla de asociación con el mismo dominio.
- `tests/`: comprobaciones de estructura, lecturas, preguntas y caché offline. Se ejecutan desde esta carpeta raíz con `node tests/check-game.cjs`, `node tests/test-narrative.cjs`, `node tests/test-questions.cjs` y `node tests/test-offline.cjs`.
- `releases/`: copias descargables de las versiones publicadas. Después de cada publicación hay que regenerar el ZIP desde `site/`.

## Estado

Consulta [docs/ESTADO_Y_SIGUIENTES_PASOS.md](docs/ESTADO_Y_SIGUIENTES_PASOS.md). La versión 28, publicada el 19 de octubre de 2026, adapta el ejemplo de pregunta al tema elegido y confirma el barajado con un aviso destacado. Conserva `La memoria de María`, el dominio propio y la bajada lenta al veredicto. Su paquete está en `releases/site-v28.tar.gz`. La auditoría anterior está en [docs/auditoria_web_el-tarot-de-maria.dgimdiez77.chatgpt.site_2026-10-13.docx](docs/auditoria_web_el-tarot-de-maria.dgimdiez77.chatgpt.site_2026-10-13.docx).

El juego utiliza el retrato aportado para este proyecto. Antes de redistribuir las imágenes fuera del sitio actual, confirma el permiso de uso correspondiente.
