Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\admin\.gemini\antigravity\brain\91b1e02d-d773-4882-b04f-b77d199f8b06\.user_uploaded\media_1787684106845.png"
$outPath = "C:\Users\admin\Desktop\rakhi\public\search.png"

$src = [System.Drawing.Bitmap]::FromFile($imgPath)
# Find top right search icon (approx L: 825, T: 10, R: 860, B: 45)
$rect = [System.Drawing.Rectangle]::FromLTRB(825, 10, 860, 45)
$crop = $src.Clone($rect, $src.PixelFormat)
$crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()
$crop.Dispose()

Write-Host "Search icon saved to public/search.png!"
