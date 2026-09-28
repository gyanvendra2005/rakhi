Add-Type -AssemblyName System.Drawing

$imgPath = "C:\Users\admin\.gemini\antigravity\brain\84be428e-491c-412c-a98f-823ad53ee5b3\.user_uploaded\media__1790586063872.png"
$outPath = "C:\Users\admin\Desktop\rakhi\public\india-map.png"

$src = [System.Drawing.Bitmap]::FromFile($imgPath)
Write-Host "Image size: $($src.Width) x $($src.Height)"

# In media__1790586063872.png (approx 1200x1600 or similar):
# Third card is National Presence section.
# The map of India is on the right side of the third box.

# Let's crop from approx X: 50% to 88% of width, Y: 43% to 68% of height
$left = [int]($src.Width * 0.48)
$top = [int]($src.Height * 0.44)
$width = [int]($src.Width * 0.40)
$height = [int]($src.Height * 0.25)

$rect = New-Object System.Drawing.Rectangle($left, $top, $width, $height)
$crop = $src.Clone($rect, $src.PixelFormat)
$crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$src.Dispose()
$crop.Dispose()
Write-Host "Cropped india-map.png successfully!"
