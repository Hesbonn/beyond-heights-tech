# PowerShell script to replace Unsplash URLs with local images
$content = Get-Content "c:\Users\Justice Defenders\Desktop\HEZZY\MY PROJECTS\WEBSITE PROJECTS\project with AI\TEST\beyond-heights-tech\src\data\blogData.ts" -Raw

# Define image mappings by category
$imageMappings = @{
    "Maintenance" = @("/assets/BH-Window-Cleaning.jpg", "/assets/BH-residential-service.jpg", "/assets/BH-equipment-setup.jpg", "/assets/BH-Equipments.jpg")
    "Safety" = @("/assets/BH-team-safety.jpg", "/assets/BH-Team.jpg", "/assets/Team geared.jpeg", "/assets/training.jpeg")
    "Fumigation" = @("/assets/BH-fumigation.jpg", "/assets/BH-fumigation 2.jpg")
    "Innovation" = @("/assets/BH-Equipments.jpg", "/assets/BH-Window-Cleaning.jpg", "/assets/Beyond H 14.jpeg", "/assets/BH-equipment-setup.jpg", "/assets/training.jpeg", "/assets/BH-fumigation.jpg", "/assets/equipment-tools.jpeg", "/assets/Beyond H 1.jpeg", "/assets/Beyond H 11.jpeg")
    "Height Access" = @("/assets/Beyond H 1.jpeg", "/assets/Beyond H 2.jpeg", "/assets/Beyond H 3.jpeg", "/assets/Beyond H 4.jpeg", "/assets/Beyond H 5.jpeg", "/assets/Beyond H 7.jpeg", "/assets/Beyond H 8.jpeg", "/assets/Beyond H 9.jpeg", "/assets/Beyond H 10.jpeg", "/assets/Beyond H 18.jpeg", "/assets/kenya-service-3-rope-access.jpg", "/assets/rope-access.jpeg", "/assets/hunging-height.jpeg", "/assets/height-access.jpeg")
    "Window Cleaning" = @("/assets/BH-Window-Cleaning.jpg", "/assets/Beyond H 14.jpeg", "/assets/Beyond H 11.jpeg", "/assets/Beyond H 12.jpeg", "/assets/Beyond H 13.jpeg", "/assets/Beyond H 15.jpeg", "/assets/Beyond H 16.jpeg", "/assets/Beyond H 17.jpeg", "/assets/kenya-service-4-window-detail.jpg")
    "Gutter Cleaning" = @("/assets/BH-Gutter Cleaning.jpeg", "/assets/BH-Gutter Cleaning2.jpeg", "/assets/BH-Gutter Services.jpg")
    "Pressure Washing" = @("/assets/BH-Window-Cleaning.jpg", "/assets/BH-equipment-setup.jpg", "/assets/BH-Equipments.jpg")
    "Facade Restoration" = @("/assets/BH-Window-Cleaning.jpg", "/assets/BH-residential-service.jpg", "/assets/Beyond H 14.jpeg", "/assets/Beyond H 11.jpeg", "/assets/Beyond H 12.jpeg", "/assets/Beyond H 13.jpeg", "/assets/Beyond H 15.jpeg", "/assets/Beyond H 16.jpeg", "/assets/Beyond H 17.jpeg")
    "Waterproofing" = @("/assets/BH-Gutter Cleaning.jpeg", "/assets/BH-Gutter Cleaning2.jpeg", "/assets/BH-Window-Cleaning.jpg")
}

# Find all Unsplash URLs and replace them
$lines = Get-Content "c:\Users\Justice Defenders\Desktop\HEZZY\MY PROJECTS\WEBSITE PROJECTS\project with AI\TEST\beyond-heights-tech\src\data\blogData.ts"
$updatedLines = @()
$imageIndex = 0

foreach ($line in $lines) {
    if ($line -match 'image: "https://images\.unsplash\.com/[^"]*"') {
        # Extract category from previous lines (look for category in the current or previous few lines)
        $category = "Maintenance" # default
        for ($i = 1; $i -le 5; $i++) {
            if ($updatedLines.Count -ge $i) {
                $prevLine = $updatedLines[$updatedLines.Count - $i]
                if ($prevLine -match 'category: "([^"]*)"') {
                    $category = $matches[1]
                    break
                }
            }
        }

        # Get appropriate image for this category
        $categoryImages = $imageMappings[$category]
        if ($categoryImages -and $categoryImages.Count -gt 0) {
            $selectedImage = $categoryImages[$imageIndex % $categoryImages.Count]
            $imageIndex++
        } else {
            $selectedImage = "/assets/BH-Window-Cleaning.jpg" # fallback
        }

        # Replace the Unsplash URL with local image
        $line = $line -replace 'image: "https://images\.unsplash\.com/[^"]*"', "image: `"$selectedImage`""
    }
    $updatedLines += $line
}

# Write back to file
$updatedLines | Set-Content "c:\Users\Justice Defenders\Desktop\HEZZY\MY PROJECTS\WEBSITE PROJECTS\project with AI\TEST\beyond-heights-tech\src\data\blogData.ts"

Write-Host "Replaced all Unsplash URLs with local images"