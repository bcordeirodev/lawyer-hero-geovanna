# Estrutura do Projeto LawyerHero

## 📁 Visão Geral da Organização

O projeto foi reorganizado seguindo princípios de **modularidade** e **escalabilidade**, separando responsabilidades e facilitando a manutenção.

## 🏗️ Estrutura de Pastas

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/
│   ├── ui/                # Componentes UI reutilizáveis
│   │   ├── primitives/    # Componentes básicos
│   │   ├── layout/        # Componentes de estrutura
│   │   ├── composite/     # Componentes complexos
│   │   ├── theme/         # Componentes de tema
│   │   └── index.ts       # Exports centralizados
│   ├── forms/             # Componentes de formulário
│   ├── layout/            # Componentes de layout da aplicação
│   └── sections/          # Seções da landing page
├── lib/                   # Biblioteca de utilitários
│   ├── core/              # Funcionalidades principais
│   ├── ui/                # Utilitários de UI
│   ├── validation/        # Sistema de validação
│   ├── animations/        # Sistema de animações
│   ├── seo/               # SEO e metadados
│   └── index.ts           # Exports centralizados
├── constants/             # Constantes da aplicação
├── contexts/              # Contextos React
├── hooks/                 # Hooks customizados
├── types/                 # Definições de tipos
└── utils/                 # Utilitários gerais
```

## 📚 Módulos da Biblioteca (lib/)

### 🎯 Core Module (`lib/core/`)
**Responsabilidade**: Funcionalidades principais da aplicação

```
lib/core/
├── config.ts      # Configurações da aplicação
├── utils.ts       # Utilitários gerais
└── index.ts       # Exports centralizados
```

**Exports principais**:
- Configurações da aplicação
- Utilitários de strings, arrays, objetos
- Funções de formatação e validação

### 🎨 UI Module (`lib/ui/`)
**Responsabilidade**: Utilitários específicos para UI

```
lib/ui/
├── styled-components.ts  # Configuração do styled-components
├── registry.tsx         # Registry para componentes
└── index.ts            # Exports centralizados
```

**Exports principais**:
- Configurações de styled-components
- Registry de componentes

### ✅ Validation Module (`lib/validation/`)
**Responsabilidade**: Sistema de validação

```
lib/validation/
├── validation.ts   # Schemas e funções de validação
└── index.ts        # Exports centralizados
```

**Exports principais**:
- Schemas Zod
- Funções de validação
- Sanitização de dados

### 🎬 Animations Module (`lib/animations/`)
**Responsabilidade**: Sistema de animações

```
lib/animations/
├── animations.ts   # Configurações de animação
└── index.ts       # Exports centralizados
```

**Exports principais**:
- Variants de animação
- Configurações de timing
- Funções utilitárias de animação

### 🔍 SEO Module (`lib/seo/`)
**Responsabilidade**: SEO e metadados

```
lib/seo/
├── seo.ts         # Configurações de SEO
├── metadata.ts    # Geração de metadados
└── index.ts       # Exports centralizados
```

**Exports principais**:
- Configurações de SEO
- Geração de metadados
- Structured data

## 🧩 Módulos de Componentes UI

### 🔧 Primitives (`components/ui/primitives/`)
**Responsabilidade**: Componentes básicos e fundamentais

```
components/ui/primitives/
├── button.tsx     # Componente de botão
├── card.tsx       # Componente de card
└── index.ts       # Exports centralizados
```

**Características**:
- Componentes atômicos
- Alta reutilização
- Baixa complexidade

### 🎨 Theme (`components/ui/theme/`)
**Responsabilidade**: Componentes relacionados ao tema

```
components/ui/theme/
├── theme-toggle.tsx   # Toggle de tema
├── theme-wrapper.tsx  # Wrapper de tema
└── index.ts          # Exports centralizados
```

**Características**:
- Componentes de tema
- Gerenciamento de dark/light mode
- Contextos de tema

### 📐 Layout (`components/ui/layout/`)
**Responsabilidade**: Componentes de estrutura e layout

```
components/ui/layout/
├── section.tsx           # Componente de seção
├── animated-wrapper.tsx  # Wrapper de animações
└── index.ts             # Exports centralizados
```

**Características**:
- Componentes de estrutura
- Animações de layout
- Responsividade

### 🎯 Composite (`components/ui/composite/`)
**Responsabilidade**: Componentes complexos construídos a partir de primitivos

```
components/ui/composite/
├── animated-card.tsx    # Card com animações
└── index.ts            # Exports centralizados
```

**Características**:
- Componentes especializados
- Combinação de primitivos
- Lógica de negócio específica

## 🚀 Benefícios da Nova Estrutura

### ✅ **Modularidade**
- Cada módulo tem responsabilidade única
- Fácil localização de funcionalidades
- Baixo acoplamento entre módulos

### ✅ **Escalabilidade**
- Estrutura preparada para crescimento
- Fácil adição de novos módulos
- Organização clara por domínio

### ✅ **Manutenibilidade**
- Código organizado por funcionalidade
- Imports mais limpos e intuitivos
- Documentação integrada

### ✅ **Reutilização**
- Componentes bem separados
- Utilitários centralizados
- Configurações padronizadas

### ✅ **Performance**
- Imports otimizados
- Tree-shaking eficiente
- Lazy loading facilitado

## 📖 Como Usar

### Importando da Biblioteca
```typescript
// Importar tudo
import * as lib from '@/lib'

// Importar módulo específico
import { validateField } from '@/lib/validation'
import { fadeIn } from '@/lib/animations'
import { cn } from '@/lib/core'

// Importar componentes UI
import { Button, Card } from '@/components/ui/primitives'
import { AnimatedWrapper } from '@/components/ui/layout'
import { ServiceCard } from '@/components/ui/composite'
```

### Adicionando Novos Módulos
1. Criar pasta no módulo apropriado
2. Adicionar arquivo `index.ts` com exports
3. Atualizar o arquivo de índice principal
4. Documentar a nova funcionalidade

### Convenções de Nomenclatura
- **Pastas**: kebab-case (`animated-wrapper`)
- **Arquivos**: kebab-case (`theme-toggle.tsx`)
- **Componentes**: PascalCase (`AnimatedWrapper`)
- **Funções**: camelCase (`validateField`)
- **Constantes**: UPPER_SNAKE_CASE (`APP_CONFIG`)

## 🔄 Migração

### Arquivos Movidos
- `lib/utils.ts` → `lib/core/utils.ts`
- `lib/config.ts` → `lib/core/config.ts`
- `lib/validation.ts` → `lib/validation/validation.ts`
- `lib/animations.ts` → `lib/animations/animations.ts`
- `lib/seo.ts` → `lib/seo/seo.ts`
- `lib/metadata.ts` → `lib/seo/metadata.ts`
- `components/ui/button.tsx` → `components/ui/primitives/button.tsx`
- `components/ui/card.tsx` → `components/ui/primitives/card.tsx`
- `components/ui/section.tsx` → `components/ui/layout/section.tsx`
- `components/ui/animated-wrapper.tsx` → `components/ui/layout/animated-wrapper.tsx`
- `components/ui/animated-card.tsx` → `components/ui/composite/animated-card.tsx`

### Imports Atualizados
Todos os imports foram atualizados para refletir a nova estrutura. Os arquivos de índice garantem compatibilidade com imports existentes.

## 📈 Próximos Passos

1. **Testes**: Implementar testes para cada módulo
2. **Documentação**: Criar documentação detalhada de cada componente
3. **Storybook**: Implementar Storybook para documentação visual
4. **Performance**: Otimizações baseadas na nova estrutura
5. **Monitoramento**: Implementar métricas de uso dos módulos 