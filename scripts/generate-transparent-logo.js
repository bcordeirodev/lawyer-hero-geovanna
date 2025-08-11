const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputLogo = path.join(__dirname, '../public/images/logo.png');
const outputDir = path.join(__dirname, '../public/images/logos');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function generateTransparentLogo() {
    console.log('🔄 Generating transparent logo variants...');
    
    try {
        // Generate a clean transparent logo
        await sharp(inputLogo)
            // Remove excess black background while preserving transparency
            .removeAlpha()
            .threshold(180) // Remove very dark pixels (black background)
            .negate() // Invert to get white background
            .removeAlpha()
            .threshold(180) // Remove very dark pixels again
            .negate() // Invert back to get clean logo
            .resize(512, 512, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
            })
            .png()
            .toFile(path.join(outputDir, 'logo-transparent-512x512.png'));
        
        // Generate smaller transparent versions
        const sizes = [256, 128, 64, 32];
        
        for (const size of sizes) {
            await sharp(inputLogo)
                .removeAlpha()
                .threshold(180)
                .negate()
                .removeAlpha()
                .threshold(180)
                .negate()
                .resize(size, size, {
                    fit: 'contain',
                    background: { r: 0, g: 0, b: 0, alpha: 0 }
                })
                .png()
                .toFile(path.join(outputDir, `logo-transparent-${size}x${size}.png`));
            
            console.log(`✅ Generated: logo-transparent-${size}x${size}.png`);
        }
        
        console.log('✅ Generated: logo-transparent-512x512.png');
        console.log('\n🎉 All transparent logos generated successfully!');
        
    } catch (error) {
        console.error('❌ Error generating transparent logos:', error);
        process.exit(1);
    }
}

generateTransparentLogo();
