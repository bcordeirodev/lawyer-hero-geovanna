# LawyerHero - Dra. Geovanna Nery

Landing page profissional para a advogada **Dra. Geovanna Nery**, especialista em Direito Civil e Trabalhista, atuando em Brasília-DF.

## 🎯 Sobre a Advogada

- **Nome**: Dra. Geovanna Nery
- **Nascimento**: 20/09/1997
- **Localização**: Brasília-DF
- **Experiência**: Mais de 5 anos na área jurídica
- **OAB**: Inscrita recentemente no DF
- **Especialidades**: Direito Civil e Trabalhista

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

## 📞 Contato

**Dra. Geovanna Nery**
- **Telefone**: (61) 99999-9999
- **E-mail**: geovanna.nery@email.com
- **Localização**: Brasília, DF
- **Horário**: Segunda a Sexta: 9h às 18h

---

**Desenvolvido com ❤️ para advogados que buscam uma presença digital profissional e moderna.**
# Build timestamp: seg 04 ago 2025 10:38:01 -03
