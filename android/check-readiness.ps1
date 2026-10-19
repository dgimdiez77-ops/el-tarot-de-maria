param([switch]$Online)

$ErrorActionPreference = 'Stop'
$project = Split-Path $PSScriptRoot -Parent
$site = Join-Path $project 'site'
$publicUrl = 'https://el-pequeno-tarot-geminis-2026.dgimdiez77.chatgpt.site/'
$errors = [System.Collections.Generic.List[string]]::new()

function Check-File([string]$RelativePath) {
  $path = Join-Path $site $RelativePath
  if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
    $errors.Add("Falta site/$RelativePath")
  }
}

@('index.html', 'app.js', 'sw.js', 'privacidad.html', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'maria-portada.webp') | ForEach-Object { Check-File $_ }

$cards = @('fool','magician','priestess','empress','emperor','hierophant','lovers',
  'chariot','strength','hermit','wheel','justice','hanged','death','temperance',
  'devil','tower','star','moon','sun','judgement','world','gemini')
$cards | ForEach-Object { Check-File "tarot-art/$_.webp" }

$manifestPath = Join-Path $site 'manifest.webmanifest'
if (Test-Path -LiteralPath $manifestPath) {
  try {
    $manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
    if ($manifest.name -ne 'EL TAROT DE MARÍA') { $errors.Add('Nombre inesperado en el manifiesto') }
    if ($manifest.start_url -ne '/' -or $manifest.scope -ne '/') { $errors.Add('Inicio o alcance inesperado en el manifiesto') }
    if ($manifest.display -ne 'standalone') { $errors.Add('La web no pide visualización independiente') }
    $iconNames = @($manifest.icons | ForEach-Object { $_.src })
    if ('/icon-192.png' -notin $iconNames -or '/icon-512.png' -notin $iconNames) {
      $errors.Add('Faltan iconos de 192 o 512 en el manifiesto')
    }
  } catch { $errors.Add("Manifiesto inválido: $($_.Exception.Message)") }
}

if ($Online) {
  foreach ($path in @('', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'sw.js')) {
    try {
      $response = Invoke-WebRequest -Uri ($publicUrl + $path) -Method Get -MaximumRedirection 3 -TimeoutSec 20
      if ($response.StatusCode -ne 200) { $errors.Add("HTTP $($response.StatusCode): $path") }
    } catch { $errors.Add("No se pudo verificar la web pública ($path): $($_.Exception.Message)") }
  }
}

if ($errors.Count -gt 0) {
  $errors | ForEach-Object { Write-Error $_ }
  exit 1
}

Write-Host "Preparación web local: correcta ($($cards.Count) cartas, manifiesto, iconos y caché)."
if ($Online) { Write-Host 'Recursos públicos comprobados por HTTPS.' }
