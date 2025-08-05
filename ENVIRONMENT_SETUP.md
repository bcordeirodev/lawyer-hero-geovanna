# 🌍 Environment Setup Guide

Este guia explica como configurar as variáveis de ambiente para desenvolvimento local e produção na Vercel.

## 📋 Índice

- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Desenvolvimento Local](#desenvolvimento-local)
- [Produção na Vercel](#produção-na-vercel)
- [Verificação](#verificação)
- [Troubleshooting](#troubleshooting)

---

## 🔧 Variáveis de Ambiente

### Variáveis Obrigatórias

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `NEXT_PUBLIC_APP_NAME` | Nome da aplicação | `LawyerHero` |
| `NEXT_PUBLIC_APP_VERSION` | Versão da aplicação | `1.0.0` |
| `NEXT_PUBLIC_APP_URL` | URL da aplicação | `https://geovannanery.com` |

### Feature Flags

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `NEXT_PUBLIC_ENABLE_DARK_MODE` | Habilita modo escuro | `true` |
| `NEXT_PUBLIC_ENABLE_ANIMATIONS` | Habilita animações | `true` |
| `NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION` | Habilita integração WhatsApp | `true` |

### Desenvolvimento

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `NODE_ENV` | Ambiente de execução | `development` |
| `NEXT_PUBLIC_DEBUG_MODE` | Modo debug | `false` |

---

## 🏠 Desenvolvimento Local

### 1. Criar arquivo .env.local

```bash
# Copie o arquivo de exemplo
cp env.example .env.local
```

### 2. Configurar variáveis

Edite o arquivo `.env.local`:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME=LawyerHero
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Development
NODE_ENV=development
NEXT_PUBLIC_DEBUG_MODE=true

# Feature Flags
NEXT_PUBLIC_ENABLE_DARK_MODE=true
NEXT_PUBLIC_ENABLE_ANIMATIONS=true
NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION=true
```

### 3. Verificar configuração

O componente `EnvironmentInfo` será exibido no canto superior direito em desenvolvimento, mostrando:

- ✅ Status das variáveis
- ⚠️ Avisos de configuração
- 📊 Informações do ambiente

---

## 🚀 Produção na Vercel

### Opção 1: Script Automático

```bash
# Execute o script de configuração
./scripts/setup-vercel-env.sh
```

### Opção 2: Configuração Manual

1. Acesse o [Dashboard da Vercel](https://vercel.com/dashboard)
2. Selecione seu projeto
3. Vá para **Settings > Environment Variables**
4. Adicione as seguintes variáveis:

```env
NEXT_PUBLIC_APP_NAME=LawyerHero
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_APP_URL=https://geovannanery.com
NODE_ENV=production
NEXT_PUBLIC_DEBUG_MODE=false
NEXT_PUBLIC_ENABLE_DARK_MODE=true
NEXT_PUBLIC_ENABLE_ANIMATIONS=true
NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION=true
```

### 3. Deploy

```bash
# Deploy para produção
vercel --prod
```

---

## ✅ Verificação

### Desenvolvimento Local

1. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

2. **Verifique o componente EnvironmentInfo:**
   - Deve aparecer no canto superior direito
   - Deve mostrar "Environment: development"
   - Deve mostrar todas as features habilitadas

3. **Verifique no console:**
   ```javascript
   // No console do navegador
   import { logEnvironmentInfo } from '@/lib/env-checker'
   logEnvironmentInfo()
   ```

### Produção

1. **Verifique no console:**
   ```javascript
   // No console do navegador
   import { getEnvironmentSummary } from '@/lib/env-checker'
   console.log(getEnvironmentSummary())
   ```

2. **Verifique as features:**
   - WhatsApp integration deve funcionar
   - Animações devem estar ativas
   - Modo escuro deve estar disponível

---

## 🔍 Troubleshooting

### Problema: Variáveis não carregam

**Solução:**
1. Verifique se o arquivo `.env.local` existe
2. Reinicie o servidor de desenvolvimento
3. Verifique se as variáveis começam com `NEXT_PUBLIC_`

### Problema: Componente EnvironmentInfo não aparece

**Solução:**
1. Verifique se `NODE_ENV=development`
2. Verifique se `NEXT_PUBLIC_DEBUG_MODE=true`
3. Verifique se não há erros no console

### Problema: Features não funcionam

**Solução:**
1. Verifique se as feature flags estão habilitadas
2. Verifique se as variáveis estão corretas
3. Use o `EnvironmentInfo` para debug

### Problema: Vercel não reconhece variáveis

**Solução:**
1. Verifique se as variáveis estão na seção correta (Production)
2. Faça um novo deploy após adicionar as variáveis
3. Verifique se não há espaços extras nos valores

---

## 📚 Recursos Adicionais

### Utilitários Disponíveis

```javascript
// Verificar ambiente
import { isDevelopment, isProduction } from '@/lib/env'

// Verificar features
import { isFeatureEnabled } from '@/lib/env'

// Validar configuração
import { validateEnvironment } from '@/lib/env-checker'

// Log de informações
import { logEnvironmentInfo } from '@/lib/env-checker'
```

### Componentes

- `EnvironmentInfo`: Exibe informações do ambiente (apenas desenvolvimento)
- `FloatingWhatsApp`: Respeita a configuração `ENABLE_WHATSAPP_INTEGRATION`

### Arquivos de Configuração

- `env.example`: Exemplo para desenvolvimento
- `env.production.example`: Exemplo para produção
- `scripts/setup-vercel-env.sh`: Script de configuração automática

---

## 🎯 Próximos Passos

1. **Configure as variáveis de ambiente**
2. **Teste em desenvolvimento local**
3. **Configure na Vercel**
4. **Deploy para produção**
5. **Verifique se tudo está funcionando**

---

*Documentação criada por Bruno Cordeiro - 2024* 