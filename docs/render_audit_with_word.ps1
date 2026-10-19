$ErrorActionPreference = 'Stop'
$docx = 'C:\Users\1385550\Documents\Codex\Proyectos\el-tarot-de-maria\docs\auditoria_web_el-tarot-de-maria.dgimdiez77.chatgpt.site_2026-10-13.docx'
$pdf = 'C:\Users\1385550\Documents\Codex\Proyectos\el-tarot-de-maria\docs\auditoria_web_el-tarot-de-maria.dgimdiez77.chatgpt.site_2026-10-13.pdf'
$word = New-Object -ComObject Word.Application
$word.Visible = $false
try {
  $document = $word.Documents.Open($docx, $false, $true)
  $document.ExportAsFixedFormat($pdf, 17)
  $document.Close($false)
} finally {
  $word.Quit()
}
Write-Output $pdf
