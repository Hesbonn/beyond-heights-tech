# PowerShell script to replace all remaining Unsplash URLs with local images
$content = Get-Content "c:\Users\Justice Defenders\Desktop\HEZZY\MY PROJECTS\WEBSITE PROJECTS\project with AI\TEST\beyond-heights-tech\src\data\blogData.ts" -Raw

# Define all available local images
$localImages = @(
    "/assets/Beyond H 1.jpeg",
    "/assets/Beyond H 2.jpeg",
    "/assets/Beyond H 3.jpeg",
    "/assets/Beyond H 4.jpeg",
    "/assets/Beyond H 5.jpeg",
    "/assets/Beyond H 7.jpeg",
    "/assets/Beyond H 8.jpeg",
    "/assets/Beyond H 9.jpeg",
    "/assets/Beyond H 10.jpeg",
    "/assets/Beyond H 11.jpeg",
    "/assets/Beyond H 12.jpeg",
    "/assets/Beyond H 13.jpeg",
    "/assets/Beyond H 14.jpeg",
    "/assets/Beyond H 15.jpeg",
    "/assets/Beyond H 16.jpeg",
    "/assets/Beyond H 17.jpeg",
    "/assets/Beyond H 18.jpeg",
    "/assets/BH-equipment-setup.jpg",
    "/assets/BH-Equipments.jpg",
    "/assets/BH-fumigation.jpg",
    "/assets/BH-fumigation 2.jpg",
    "/assets/BH-Gutter Cleaning.jpeg",
    "/assets/BH-Gutter Cleaning2.jpeg",
    "/assets/BH-Gutter Services.jpg",
    "/assets/BH-residential-service.jpg",
    "/assets/BH-team-safety.jpg",
    "/assets/BH-Team.jpg",
    "/assets/BH-Window-Cleaning.jpg",
    "/assets/Britam-tower.jpg",
    "/assets/CEO of beyond heights.jpeg",
    "/assets/equipment-height.jpeg",
    "/assets/equipment-tools.jpeg",
    "/assets/Eunice Mashaiti.jpeg",
    "/assets/height-access.jpeg",
    "/assets/Holiday-Inn.jpg",
    "/assets/hunging-height.jpeg",
    "/assets/kenya-service-3-rope-access.jpg",
    "/assets/kenya-service-4-window-detail.jpg",
    "/assets/kenya-service-5-interior-cleaning.jpg",
    "/assets/KRA-Plaza.jpg",
    "/assets/Nicholas-Kaparo-2.jpeg",
    "/assets/Nicholas-Kaparo.png",
    "/assets/Office-of-DP.jpg",
    "/assets/Prism-tower.jpg",
    "/assets/rope-access.jpeg",
    "/assets/septic-cleaning.jpeg",
    "/assets/Team geared.jpeg",
    "/assets/training.jpeg"
)

# Read the file line by line and replace Unsplash URLs
$lines = Get-Content "c:\Users\Justice Defenders\Desktop\HEZZY\MY PROJECTS\WEBSITE PROJECTS\project with AI\TEST\beyond-heights-tech\src\data\blogData.ts"
$updatedLines = @()
$imageIndex = 0

foreach ($line in $lines) {
    if ($line -match 'image: "https://images\.unsplash\.com/[^"]*"') {
        # Replace with next local image, cycling through the array
        $selectedImage = $localImages[$imageIndex % $localImages.Count]
        $imageIndex++

        # Replace the Unsplash URL with local image
        $line = $line -replace 'image: "https://images\.unsplash\.com/[^"]*"', "image: `"$selectedImage`""
    }
    $updatedLines += $line
}

# Write back to file
$updatedLines | Set-Content "c:\Users\Justice Defenders\Desktop\HEZZY\MY PROJECTS\WEBSITE PROJECTS\project with AI\TEST\beyond-heights-tech\src\data\blogData.ts"

Write-Host "Replaced all remaining Unsplash URLs with local images. Used $imageIndex images, cycling through $($localImages.Count) available images."