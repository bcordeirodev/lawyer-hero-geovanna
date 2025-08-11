# 🏛️ LawyerHero - Template de Landing Page para Advogados

## 📋 Guia de Personalização

Este template foi desenvolvido para advogados que desejam uma presença digital profissional e moderna. Siga este guia para personalizar completamente o template com suas informações.

## 🔧 Personalização Básica

### 1. Informações do Advogado

Edite o arquivo `src/config/lawyer.ts` para personalizar:

#### Dados Pessoais
```typescript
name: "Seu Nome Completo",
fullName: "Nome Completo com Sobrenome",
title: "Sua Especialização",
description: "Sua apresentação pessoal",
detailedDescription: "Descrição detalhada da sua experiência",
```

#### Credenciais
```typescript
credentials: {
    bar: "OAB-UF 123.456", // Sua OAB
    location: "Sua Cidade, UF"
},
```

#### Estatísticas
```typescript
statistics: {
    experience: "X+", // Anos de experiência
    casesResolved: "XXX+", // Casos resolvidos
    successRate: "XX%" // Taxa de sucesso
},
```

#### Contato
```typescript
contact: {
    email: "seu@email.com",
    phone: "(XX) XXXXX-XXXX",
    workingHours: "Horário de atendimento"
},
```

### 2. Foto de Perfil

1. Substitua a imagem em `public/images/lawyer-profile.jpg`
2. Recomendação: 400x400px, formato JPG/PNG
3. Imagem profissional com boa iluminação

### 3. Áreas de Atuação

Personalize os serviços no mesmo arquivo `lawyer.ts`:

```typescript
services: [
    {
        id: "area-id",
        title: "Nome da Área",
        description: "Descrição da área",
        icon: IconeEscolhido, // De lucide-react
        features: [
            "Serviço 1",
            "Serviço 2",
            // ...
        ],
        gradient: "from-yellow-500 to-orange-500",
        category: "categoria"
    }
]
```

### 4. Redes Sociais

```typescript
socialMedia: {
    whatsapp: "https://wa.me/55XXXXXXXXX",
    instagram: "https://instagram.com/seuperfil",
    linkedin: "https://linkedin.com/in/seuperfil",
    facebook: "https://facebook.com/seuperfil"
},
```

## 🎨 Personalização Visual

### Cores
Edite `src/app/globals.css` para alterar as cores principais:

```css
:root {
    --gold-500: #d4af37; /* Cor dourada principal */
    --gold-600: #b8941f;
    /* Outras variáveis de cor */
}
```

### Logo
1. Substitua o texto por sua logo em `src/components/layout/header.tsx`
2. Ou adicione sua imagem de logo

## 📧 Configuração de E-mail

### EmailJS Setup
1. Crie uma conta em [EmailJS](https://emailjs.com)
2. Configure um serviço de e-mail
3. Crie um template de e-mail
4. Adicione as variáveis no arquivo `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas
- Netlify
- Railway
- AWS Amplify

## 📱 Recursos Inclusos

- ✅ Design responsivo (mobile-first)
- ✅ Modo escuro/claro
- ✅ Animações suaves
- ✅ SEO otimizado
- ✅ Formulário de contato funcional
- ✅ Integração WhatsApp
- ✅ Performance otimizada
- ✅ Acessibilidade

## 🛠️ Tecnologias

- **Framework:** Next.js 15
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Formulários:** React Hook Form + Zod
- **E-mail:** EmailJS
- **TypeScript:** Totalmente tipado

## 📞 Suporte

Para dúvidas sobre personalização:
- Documentação completa no README.md
- Código bem comentado e organizado
- Estrutura modular e fácil de entender

---

**Desenvolvido com ❤️ para advogados que buscam uma presença digital profissional.**