// Teste simples para verificar variáveis de ambiente
const fs = require('fs');
const path = require('path');

// Carrega o arquivo .env.local
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    
    envContent.split('\n').forEach(line => {
        const match = line.match(/^([^#][^=]+)=(.*)$/);
        if (match) {
            envVars[match[1]] = match[2];
        }
    });
    
    // Simula process.env
    Object.assign(process.env, envVars);
}

console.log('=== TESTE DE VARIÁVEIS DE AMBIENTE ===');
console.log('NEXT_PUBLIC_APP_NAME:', process.env.NEXT_PUBLIC_APP_NAME);
console.log('NEXT_PUBLIC_APP_VERSION:', process.env.NEXT_PUBLIC_APP_VERSION);
console.log('NEXT_PUBLIC_APP_URL:', process.env.NEXT_PUBLIC_APP_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('NEXT_PUBLIC_DEBUG_MODE:', process.env.NEXT_PUBLIC_DEBUG_MODE);
console.log('NEXT_PUBLIC_ENABLE_DARK_MODE:', process.env.NEXT_PUBLIC_ENABLE_DARK_MODE);
console.log('NEXT_PUBLIC_ENABLE_ANIMATIONS:', process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS);
console.log('NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION:', process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION);
console.log('=== FIM DO TESTE ==='); 