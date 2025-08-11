const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const toIco = require("to-ico");

// Configurações das imagens a serem geradas
const imageConfigs = {
  // Favicon
  favicon: {
    sizes: [16, 32, 48],
    outputDir: "public/images/logos",
    prefix: "favicon",
  },

  // Logo para header (otimizada para fundo claro/escuro)
  header: {
    sizes: [24, 32, 40, 48, 64],
    outputDir: "public/images/logos",
    prefix: "logo-header",
  },

  // Logo para outras partes da aplicação
  app: {
    sizes: [64, 128, 256, 512],
    outputDir: "public/images/logos",
    prefix: "logo-app",
  },

  // Apple touch icon
  apple: {
    sizes: [180],
    outputDir: "public/images/logos",
    prefix: "apple-touch-icon",
  },

  // Android chrome icons
  android: {
    sizes: [192, 512],
    outputDir: "public/images/logos",
    prefix: "android-chrome",
  },
};

// Função para criar diretório se não existir
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Diretório criado: ${dirPath}`);
  }
}

// Função para gerar favicon.ico (formato ICO com múltiplas resoluções)
async function generateFavicon() {
  try {
    const inputPath = "public/images/logo.png";
    const outputPath = "public/favicon.ico";

    // Gerar as diferentes resoluções para o favicon
    const pngBuffers = [];

    for (const size of [16, 32, 48]) {
      const buffer = await sharp(inputPath)
        .resize(size, size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer();

      pngBuffers.push(buffer);
    }

    // Gerar o arquivo ICO real
    const icoBuffer = await toIco(pngBuffers);
    fs.writeFileSync(outputPath, icoBuffer);

    console.log(`✅ Favicon ICO gerado: ${outputPath}`);
  } catch (error) {
    console.error("❌ Erro ao gerar favicon:", error);
  }
}

// Função para gerar imagens com fundo transparente
async function generateTransparentImages(config) {
  const inputPath = "public/images/logo.png";

  for (const size of config.sizes) {
    try {
      const outputPath = path.join(
        config.outputDir,
        `${config.prefix}-${size}x${size}.png`
      );

      await sharp(inputPath)
        .resize(size, size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(outputPath);

      console.log(`✅ ${config.prefix} ${size}x${size} gerado`);
    } catch (error) {
      console.error(
        `❌ Erro ao gerar ${config.prefix} ${size}x${size}:`,
        error
      );
    }
  }
}

// Função para gerar imagens com fundo dourado (para header)
async function generateHeaderLogos() {
  const inputPath = "public/images/logo.png";

  for (const size of imageConfigs.header.sizes) {
    try {
      const outputPath = path.join(
        imageConfigs.header.outputDir,
        `logo-header-${
          size === 24
            ? "sm"
            : size === 32
            ? "sm"
            : size === 40
            ? "md"
            : size === 48
            ? "lg"
            : "xl"
        }.png`
      );

      // Criar um fundo dourado com gradiente
      const background = await sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: { r: 212, g: 175, b: 55, alpha: 1 }, // Dourado
        },
      })
        .png()
        .toBuffer();

      // Calcular o tamanho da logo (80% do tamanho do container)
      const logoSize = Math.floor(size * 0.8);

      // Combinar o fundo com a logo
      await sharp(background)
        .composite([
          {
            input: await sharp(inputPath)
              .resize(logoSize, logoSize, {
                fit: "contain",
                background: { r: 0, g: 0, b: 0, alpha: 0 },
              })
              .png()
              .toBuffer(),
            gravity: "center",
          },
        ])
        .png()
        .toFile(outputPath);

      console.log(`✅ Logo header ${size}x${size} gerado`);
    } catch (error) {
      console.error(`❌ Erro ao gerar logo header ${size}x${size}:`, error);
    }
  }
}

// Função principal
async function generateAllImages() {
  console.log("🚀 Iniciando geração de todas as imagens...\n");

  // Criar diretórios necessários
  for (const config of Object.values(imageConfigs)) {
    ensureDirectoryExists(config.outputDir);
  }

  // Gerar favicon
  console.log("📱 Gerando favicon...");
  await generateFavicon();

  // Gerar logos para header (com fundo dourado)
  console.log("\n🎨 Gerando logos para header...");
  await generateHeaderLogos();

  // Gerar outras imagens com fundo transparente
  console.log("\n🖼️ Gerando outras imagens...");
  for (const [key, config] of Object.entries(imageConfigs)) {
    if (key !== "header") {
      console.log(`\n📐 Gerando ${key}...`);
      await generateTransparentImages(config);
    }
  }

  console.log("\n🎉 Todas as imagens foram geradas com sucesso!");
  console.log("\n📁 Arquivos gerados em: public/images/logos/");
  console.log("🔗 Favicon em: public/favicon.ico");
}

// Executar o script
generateAllImages().catch(console.error);
