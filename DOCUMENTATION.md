# LawyerHero - Template para Sites de Advogados

## 📋 Visão Geral

LawyerHero é um template moderno e profissional para sites de advogados, desenvolvido com Next.js, TypeScript, Tailwind CSS e Framer Motion. O template oferece uma experiência de usuário excepcional com design responsivo e animações suaves.

## 🚀 Características

- **Design Profissional**: Tema escuro elegante com gradientes e efeitos visuais
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Suaves**: Transições e animações com Framer Motion
- **Componentização**: Estrutura modular e reutilizável
- **Configuração Centralizada**: Fácil personalização através de arquivos de configuração
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Build otimizado e carregamento rápido

## 🛠️ Tecnologias

- **Next.js 15**: Framework React com SSR/SSG
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS**: Framework CSS utilitário
- **Framer Motion**: Biblioteca de animações
- **Lucide React**: Ícones modernos e consistentes
- **Vercel**: Deploy e hospedagem

## 📁 Estrutura do Projeto

```
lawyer-hero/
├── src/
│   ├── app/                    # Páginas Next.js
│   ├── components/
│   │   ├── layout/            # Componentes de layout
│   │   ├── sections/          # Seções da página
│   │   └── ui/               # Componentes reutilizáveis
│   └── lib/
│       └── config.ts         # Configuração centralizada
├── public/                    # Arquivos estáticos
└── docs/                     # Documentação
```

## ⚙️ Configuração

### 1. Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lawyer-hero.git
cd lawyer-hero

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

### 2. Personalização

O template é altamente configurável através do arquivo `src/lib/config.ts`:

#### Informações do Advogado
```typescript
export const lawyerConfig = {
  name: "Dra. Geovanna Nery",
  title: "Advogada Especialista em Direito Civil e Trabalhista",
  description: "Descrição personalizada...",
  oab: "OAB/DF",
  location: "Brasília, DF",
  // ... outras configurações
}
```

#### Serviços/Especialidades
```typescript
export const servicesConfig = [
  {
    title: "Direito Civil",
    description: "Descrição do serviço...",
    icon: FileText, // Ícone do Lucide React
    features: ["Recurso 1", "Recurso 2", "Recurso 3"],
    gradient: "from-blue-500 to-cyan-500"
  },
  // ... outros serviços
]
```

#### Informações de Contato
```typescript
export const contactConfig = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(61) 99999-9999"
  },
  // ... outros contatos
]
```

### 3. Ícones

O template usa [Lucide React](https://lucide.dev/icons/) para ícones. Para adicionar novos ícones:

1. Importe o ícone desejado:
```typescript
import { FileText, Calendar, Users } from 'lucide-react'
```

2. Use no componente:
```typescript
<FileText className="h-6 w-6 text-blue-400" />
```

### 4. Cores e Temas

O template usa um tema escuro com as seguintes cores principais:

- **Background**: `slate-900`, `slate-800`, `slate-700`
- **Texto**: `text-white`, `text-gray-300`, `text-gray-200`
- **Acentos**: `blue-500`, `indigo-500`
- **Gradientes**: `from-blue-500 to-indigo-500`

Para personalizar cores, edite as classes Tailwind nos componentes.

## 🎨 Componentes

### Seções Principais

1. **Hero**: Seção principal com informações do advogado
2. **Services**: Especialidades jurídicas oferecidas
3. **About**: Informações sobre o advogado
4. **Contact**: Formulário de contato e informações

### Componentes Reutilizáveis

- `Section`: Container base para seções
- `SectionHeader`: Cabeçalho padronizado
- `AnimatedCard`: Card com animações
- `Button`: Botão personalizado

## 📱 Responsividade

O template é totalmente responsivo com breakpoints:

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Outras Plataformas

O template funciona em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Desenvolvimento

### Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento local
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

### Estrutura de Componentes

Cada componente segue o padrão:

```typescript
/**
 * Componente Nome - Descrição
 * Funcionalidade do componente
 */
import { ... } from '...'

export function NomeComponente() {
  return (
    // JSX do componente
  )
}
```

## 📝 Personalização Avançada

### Adicionando Novas Seções

1. Crie um novo componente em `src/components/sections/`
2. Importe e use no `src/app/page.tsx`
3. Adicione configurações em `src/lib/config.ts`

### Modificando Animações

As animações usam Framer Motion. Para personalizar:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Conteúdo */}
</motion.div>
```

### Adicionando Funcionalidades

Para adicionar novas funcionalidades:

1. **Formulários**: Implemente backend para processar dados
2. **Blog**: Adicione sistema de CMS
3. **Agendamento**: Integre com calendário
4. **Chat**: Adicione widget de chat

## 🎯 SEO

O template inclui:

- Meta tags otimizadas
- Estrutura semântica HTML
- Open Graph tags
- Schema.org markup
- Sitemap automático

## 📊 Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Para suporte e dúvidas:

- Abra uma issue no GitHub
- Consulte a documentação do Next.js
- Verifique a documentação do Tailwind CSS

## 🔄 Atualizações

Para manter o template atualizado:

```bash
# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit

# Atualizar Next.js
npm install next@latest
```

---

**Desenvolvido com ❤️ para a comunidade jurídica** 