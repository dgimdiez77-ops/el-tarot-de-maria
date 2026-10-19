# Aplicación Android · EL TAROT DE MARÍA

La aplicación prevista es una **Trusted Web Activity** generada con Bubblewrap. Abre la web existente, con el mismo contenido y la misma URL pública. Este directorio contiene la comprobación previa y la plantilla de asociación. **Aún no hay APK, AAB, firma ni ficha publicada en Google Play.**

## Lo que ya se puede comprobar

Desde PowerShell en la carpeta del proyecto:

```powershell
./android/check-readiness.ps1
```

La opción `-Online` añade una comprobación HTTPS de la web publicada. Si Windows tiene problemas con sus certificados, este paso puede fallar aunque el sitio abra en un navegador; hay que repetirlo en un equipo con HTTPS operativo.

## Generar el proyecto cuando estén los datos del editor

1. Instalar Node.js con npm y las herramientas Android recomendadas por Bubblewrap. La guía oficial ofrece descargar JDK y Android SDK durante la primera ejecución.
2. Confirmar el titular de Play Console, el identificador final del paquete y dónde custodiar la clave de firma. El identificador debe permanecer estable después de publicar.
3. Generar en una carpeta nueva con la [guía oficial de Bubblewrap](https://developer.chrome.com/docs/android/trusted-web-activity/quick-start):

   ```powershell
   npm install --global @bubblewrap/cli
   bubblewrap init --manifest=https://el-pequeno-tarot-geminis-2026.dgimdiez77.chatgpt.site/manifest.webmanifest --directory=android/native
   ```

4. Revisar `android/native/twa-manifest.json` y `android/native/app/build.gradle` antes de compilar: nombre, URL, identificador del paquete y API de destino exigida por Google Play. El código de la plantilla actual de Bubblewrap usa `targetSdkVersion 36`, pero se debe comprobar el proyecto realmente generado.
5. Compilar, instalar en un Android real y hacer las pruebas anotadas en `../docs/APP_ANDROID_PASOS.md`.
6. Obtener de Play Console la huella SHA-256 del **certificado de firma de la aplicación**. Crear el archivo con `create-assetlinks.ps1 -PackageName <paquete> -Sha256 <huella>`, revisar los valores y publicar el resultado como `/.well-known/assetlinks.json` en **este mismo dominio**. Comprobarlo por HTTPS antes de considerar que la TWA funciona a pantalla completa.

La clave privada y las contraseñas de firma nunca deben copiarse a `site/`, subirse a la web ni añadirse a un repositorio. `android/native/` está excluido del control de versiones hasta revisar su contenido, porque Bubblewrap puede crear allí archivos de firma.

## Decisiones pendientes

- Titular personal u organización y existencia de cuenta de Play Console.
- Identificador final del paquete Android.
- Permiso para distribuir comercialmente el retrato y las ilustraciones de María.
- Certificado de Play, política de privacidad con datos reales del editor y declaraciones de la ficha.
- Prueba en teléfono físico y prueba cerrada de Play si corresponde.

La web y su enlace público no se modifican al preparar el paquete Android.
