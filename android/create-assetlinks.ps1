param(
  [Parameter(Mandatory = $true)][string]$PackageName,
  [Parameter(Mandatory = $true)][string]$Sha256,
  [string]$OutputPath = (Join-Path $PSScriptRoot 'assetlinks.generated.json')
)

$ErrorActionPreference = 'Stop'
if ($PackageName -cnotmatch '^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*){2,}$') {
  throw 'El identificador debe tener al menos tres partes en minúsculas, por ejemplo com.ejemplo.tarot.'
}
$fingerprint = $Sha256.Trim().ToUpperInvariant()
if ($fingerprint -cnotmatch '^([0-9A-F]{2}:){31}[0-9A-F]{2}$') {
  throw 'La huella SHA-256 debe tener 32 pares hexadecimales separados por dos puntos.'
}

$assetLinks = @(
  [ordered]@{
    relation = @('delegate_permission/common.handle_all_urls')
    target = [ordered]@{
      namespace = 'android_app'
      package_name = $PackageName
      sha256_cert_fingerprints = @($fingerprint)
    }
  }
)
$json = ConvertTo-Json -InputObject $assetLinks -Depth 5
[System.IO.File]::WriteAllText($OutputPath, $json + "`n", [System.Text.UTF8Encoding]::new($false))
Write-Host "Generado $OutputPath. Comprueba los datos antes de publicarlo como /.well-known/assetlinks.json."
