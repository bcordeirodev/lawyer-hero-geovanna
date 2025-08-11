const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const inputLogo = path.join(__dirname, "../public/images/logo.png");
const outputDir = path.join(__dirname, "../public/images/logos");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Logo sizes for different uses
const logoConfigs = [
  // Favicon sizes
  { name: "favicon-16x16.png", width: 16, height: 16 },
  { name: "favicon-32x32.png", width: 32, height: 32 },
  { name: "favicon-48x48.png", width: 48, height: 48 },

  // Header logo sizes
  { name: "logo-header-sm.png", width: 40, height: 40 },
  { name: "logo-header-md.png", width: 56, height: 56 },
  { name: "logo-header-lg.png", width: 64, height: 64 },

  // Social media and other uses
  { name: "logo-192x192.png", width: 192, height: 192 },
  { name: "logo-512x512.png", width: 512, height: 512 },

  // Apple touch icons
  { name: "apple-touch-icon-180x180.png", width: 180, height: 180 },

  // Android icons
  { name: "android-chrome-192x192.png", width: 192, height: 192 },
  { name: "android-chrome-512x512.png", width: 512, height: 512 },
];

async function generateLogos() {
  console.log("🔄 Generating logo variants...");

  try {
    for (const config of logoConfigs) {
      const outputPath = path.join(outputDir, config.name);

      await sharp(inputLogo)
        // Remove excess black background by thresholding
        .removeAlpha()
        .threshold(200) // Remove very dark pixels (black background)
        .negate() // Invert to get white background
        .removeAlpha()
        .threshold(200) // Remove very dark pixels again
        .negate() // Invert back to get clean logo
        .resize(config.width, config.height, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png()
        .toFile(outputPath);

      console.log(
        `✅ Generated: ${config.name} (${config.width}x${config.height})`
      );
    }

    // Generate favicon.ico (16x16, 32x32, 48x48 combined)
    console.log("🔄 Generating favicon.ico...");

    // For now, we'll copy the 32x32 as favicon.ico
    // In production, you might want to use a proper .ico generator
    fs.copyFileSync(
      path.join(outputDir, "favicon-32x32.png"),
      path.join(__dirname, "../public/favicon.ico")
    );

    console.log("✅ Generated: favicon.ico");
    console.log("\n🎉 All logos generated successfully!");
    console.log(`📁 Output directory: ${outputDir}`);
  } catch (error) {
    console.error("❌ Error generating logos:", error);
    process.exit(1);
  }
}

generateLogos();
