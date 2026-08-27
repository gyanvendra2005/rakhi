Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\admin\.gemini\antigravity\brain\91b1e02d-d773-4882-b04f-b77d199f8b06\.user_uploaded\media_1787684106845.png"
$outPath = "C:\Users\admin\Desktop\rakhi\public\logo.png"

$src = [System.Drawing.Bitmap]::FromFile($imgPath)
# L: 35, T: 0, R: 140, B: 30
$rect = [System.Drawing.Rectangle]::FromLTRB(35, 0, 140, 30)
$crop = $src.Clone($rect, $src.PixelFormat)
$crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()
$crop.Dispose()

Write-Host "Adjusted logo.png saved!"
