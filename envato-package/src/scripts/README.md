# 🛠️ Scripts LawyerHero

Este diretório contém scripts utilitários para configuração e otimização do projeto LawyerHero.

## 📁 Scripts Disponíveis

### 🚀 Configuração da Vercel

#### `setup-vercel-env.sh`

**Descrição:** Configura automaticamente as variáveis de ambiente na Vercel  
**Uso:**

```bash
./scripts/setup-vercel-env.sh
```

**O que faz:**

- ✅ Configura variáveis básicas da aplicação
- ✅ Define feature flags
- ✅ Solicita e configura credenciais do EmailJS
- ✅ Lista todas as variáveis configuradas

**Pré-requisitos:**

- Vercel CLI instalado (`npm install -g vercel`)
- Login na Vercel (`vercel login`)
- Credenciais do EmailJS em mãos

#### `verify-vercel-env.sh`

**Descrição:** Verifica se todas as variáveis de ambiente estão configuradas corretamente  
**Uso:**

```bash
./scripts/verify-vercel-env.sh
```

**O que faz:**

- ✅ Verifica se Vercel CLI está instalado
- ✅ Lista variáveis obrigatórias vs configuradas
- ✅ Identifica variáveis críticas faltando
- ✅ Valida formato das credenciais EmailJS
- ✅ Fornece relatório detalhado

### ⚡ Otimização

#### `optimize-cursor.sh`

**Descrição:** Otimiza a configuração do Cursor AI para o projeto  
**Uso:**

```bash
./scripts/optimize-cursor.sh
```

**O que faz:**

- ✅ Configura regras específicas do projeto
- ✅ Otimiza configurações de TypeScript
- ✅ Define padrões de código
- ✅ Configura exclusões de arquivos

## 🔧 Fluxo Recomendado

### Para Configuração Inicial da Vercel:

1. **Instalar Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Fazer Login:**

   ```bash
   vercel login
   ```

3. **Configurar Variáveis:**

   ```bash
   ./scripts/setup-vercel-env.sh
   ```

4. **Verificar Configuração:**

   ```bash
   ./scripts/verify-vercel-env.sh
   ```

5. **Deploy:**
   ```bash
   vercel --prod
   ```

### Para Verificação de Ambiente:

```bash
# Verificação rápida
./scripts/verify-vercel-env.sh

# Se houver problemas, reconfigure
./scripts/setup-vercel-env.sh
```

## 📧 Configuração EmailJS

### Credenciais Necessárias:

1. **Service ID** - Do dashboard EmailJS (ex: `service_abc123`)
2. **Template ID** - Do template criado (ex: `template_xyz789`)
3. **Public Key** - Da seção Account (ex: `pk_abcdef123`)
4. **Contact Email** - Email de destino dos formulários

### Como Obter:

1. **Registre-se em:** [https://emailjs.com](https://emailjs.com)
2. **Crie um serviço** de email (Gmail, Outlook, etc.)
3. **Crie um template** usando o modelo fornecido
4. **Copie as credenciais** para usar nos scripts

## 🐛 Solução de Problemas

### Script não executa:

```bash
# Tornar executável
chmod +x scripts/setup-vercel-env.sh
chmod +x scripts/verify-vercel-env.sh
```

### Vercel CLI não encontrado:

```bash
# Instalar globalmente
npm install -g vercel

# Ou usar npx
npx vercel login
```

### Variáveis não aparecem:

```bash
# Verificar projeto correto
vercel ls

# Trocar projeto se necessário
vercel switch
```

### EmailJS não funciona:

1. Verificar credenciais no dashboard EmailJS
2. Testar template no playground EmailJS
3. Verificar se service está ativo
4. Confirmar que domínio está autorizado

## 📋 Checklist de Variáveis

### ✅ Básicas (Obrigatórias):

- [ ] `NEXT_PUBLIC_APP_NAME`
- [ ] `NEXT_PUBLIC_APP_VERSION`
- [ ] `NEXT_PUBLIC_APP_URL`
- [ ] `NODE_ENV`
- [ ] `NEXT_PUBLIC_DEBUG_MODE`

### 🎨 Features (Recomendadas):

- [ ] `NEXT_PUBLIC_ENABLE_DARK_MODE`
- [ ] `NEXT_PUBLIC_ENABLE_ANIMATIONS`
- [ ] `NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION`

### 📧 EmailJS (Críticas):

- [ ] `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- [ ] `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- [ ] `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL`

## 🆘 Suporte

Se encontrar problemas:

1. **Verificar logs:** `vercel logs`
2. **Verificar build:** `vercel build`
3. **Consultar guia:** `VERCEL_SETUP_GUIDE.md`
4. **Testar localmente:** `npm run dev`

---

**💡 Dica:** Execute sempre o script de verificação antes de fazer deploy para produção!
