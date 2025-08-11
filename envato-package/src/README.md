# 🏛️ LawyerHero - Template para Advogados

Template de landing page profissional para advogados, desenvolvido com Next.js 15, TypeScript e Tailwind CSS. Design moderno, responsivo e totalmente personalizável.

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e profissional
- 📱 **Totalmente Responsivo**: Perfeito em qualquer dispositivo
- ⚡ **Alta Performance**: Otimizado para velocidade e SEO
- 🌓 **Modo Escuro/Claro**: Tema adaptável às preferências do usuário
- 📧 **Formulário Funcional**: Integração com EmailJS para contato
- 🚀 **Fácil Personalização**: Configure rapidamente com seus dados
- ♿ **Acessível**: Desenvolvido seguindo padrões de acessibilidade

## 🚀 Tecnologias Utilizadas

- **Next.js 14** com App Router
- **TypeScript** para type safety
- **Tailwind CSS v3.4.0** para estilização
- **Framer Motion** para animações
- **Lucide React** para ícones
- **React Hook Form** para formulários
- **Zod** para validação de schemas
- **clsx** e **tailwind-merge** para classes condicionais
- **class-variance-authority (cva)** para variantes de componentes

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/
│   ├── ui/                # Componentes base
│   │   ├── button.tsx     # Botão reutilizável
│   │   └── card.tsx       # Card reutilizável
│   ├── layout/            # Componentes de layout
│   │   ├── header.tsx     # Header com navegação
│   │   └── footer.tsx     # Footer com informações
│   └── sections/          # Seções da landing page
│       ├── hero.tsx       # Seção principal
│       ├── services.tsx   # Áreas de atuação
│       ├── about.tsx      # Sobre a advogada
│       └── contact.tsx    # Formulário de contato
└── lib/
    └── utils.ts           # Utilitários (clsx, twMerge)
```

## 🎨 Design System

### Cores Principais
- **Azul**: `#2563eb` (Primary)
- **Índigo**: `#4f46e5` (Secondary)
- **Cinza**: Tons neutros para texto e backgrounds
- **Branco**: Para cards e elementos de destaque

### Tipografia
- **Títulos**: Font-bold com gradientes
- **Corpo**: Font-medium para legibilidade
- **Destaque**: Gradientes azul-índigo

### Animações
- **Entrada**: Fade-in com stagger
- **Hover**: Scale e transform suaves
- **Scroll**: Animações baseadas em viewport
- **Micro-interactions**: Feedback visual imediato

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta
cd lawyer-hero

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linting
```

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Funcionalidades

### Seções Principais
1. **Hero Section**: Apresentação da advogada com estatísticas
2. **Services**: Áreas de atuação com cards interativos
3. **About**: Informações detalhadas e diferenciais
4. **Contact**: Formulário de contato e informações

### Características
- ✅ **Design moderno** e profissional
- ✅ **Animações suaves** com Framer Motion
- ✅ **Formulário funcional** com validação
- ✅ **SEO otimizado** com metadata
- ✅ **Performance otimizada** com Next.js
- ✅ **Acessibilidade** com ARIA labels
- ✅ **Responsividade** completa

## 🛠️ Personalização

### Dados da Advogada
Para personalizar para outro advogado, atualize:

1. **Hero Section** (`src/components/sections/hero.tsx`)
   - Nome e título
   - Estatísticas
   - Descrição

2. **About Section** (`src/components/sections/about.tsx`)
   - Informações pessoais
   - Experiência
   - Diferenciais

3. **Contact Section** (`src/components/sections/contact.tsx`)
   - Dados de contato
   - Endereço

4. **Layout** (`src/app/layout.tsx`)
   - Metadata para SEO
   - Título da página

5. **Footer** (`src/components/layout/footer.tsx`)
   - Informações de contato
   - Redes sociais

### Cores e Estilo
Para alterar as cores, edite:
- `src/app/globals.css` - Variáveis CSS
- `tailwind.config.ts` - Configuração do Tailwind

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **Bundle Size**: < 200KB
- **Loading Time**: < 2s

## 🔧 Manutenção

### Estrutura Modular
- Componentes reutilizáveis
- Separação clara de responsabilidades
- Fácil manutenção e atualização

### Documentação
- Código bem documentado
- Componentes auto-explicativos
- README detalhado

## 🚀 Como Usar

1. **Clone o repositório**
2. **Instale as dependências**: `npm install`
3. **Configure seus dados** em `src/config/lawyer.ts`
4. **Configure EmailJS** (opcional)
5. **Execute em desenvolvimento**: `npm run dev`
6. **Faça o deploy**: `npm run build`

Para instruções detalhadas, consulte o [TEMPLATE_GUIDE.md](./TEMPLATE_GUIDE.md)

## 📄 Licença

Este template está disponível sob licença MIT. Você pode usar, modificar e distribuir livremente.

---

**Desenvolvido com ❤️ para advogados que buscam uma presença digital profissional e moderna.**
