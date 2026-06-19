param(
  [string]$SourceRoot = "C:\Users\Lenovo thinkpad\Desktop\themeforest-Cklb6YJ4-pofo-creative-agency-corporate-and-portfolio-multipurpose-template\html",
  [string]$OutputRoot = "$PSScriptRoot\..\exact-original-center-navigation"
)

$ErrorActionPreference = "Stop"

if (!(Test-Path $SourceRoot)) {
  throw "SourceRoot олдсонгүй: $SourceRoot"
}

if (Test-Path $OutputRoot) { Remove-Item $OutputRoot -Recurse -Force }
New-Item -ItemType Directory -Path $OutputRoot | Out-Null

Copy-Item "$SourceRoot\center-navigation.html" "$OutputRoot\index.html" -Force
Copy-Item "$SourceRoot\center-navigation.html" "$OutputRoot\center-navigation.html" -Force

$folders = @("css", "js", "images", "fonts", "revolution")
foreach ($folder in $folders) {
  $src = Join-Path $SourceRoot $folder
  if (Test-Path $src) {
    Copy-Item $src (Join-Path $OutputRoot $folder) -Recurse -Force
  } else {
    Write-Warning "Folder олдсонгүй: $src"
  }
}

$zipPath = "$OutputRoot.zip"
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path "$OutputRoot\*" -DestinationPath $zipPath -Force
Write-Host "Done: $zipPath"
