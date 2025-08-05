# Melhorias de Metadados e SEO

## Visão Geral

Implementamos um sistema completo de metadados dinâmicos para a aplicação da Dra. Geovanna Nery, garantindo que quando a URL for compartilhada, ela recupere e exiba dados relevantes do advogado.

## Funcionalidades Implementadas

### 1. Metadados Dinâmicos
- **Geração automática** de títulos, descrições e keywords baseados nos dados do advogado
- **Open Graph** otimizado com imagens dinâmicas
- **Twitter Cards** configurados para melhor compartilhamento
- **Metadados específicos** para cada serviço jurídico

### 2. Imagens Open Graph Dinâmicas
- **API Route** (`/api/og`) que gera imagens personalizadas
- **Design responsivo** com informações do advogado
- **Suporte a serviços específicos** com dados customizados
- **Cores e branding** consistentes com a identidade visual

### 3. Dados Estruturados (Schema.org)
- **LegalService** markup para SEO
- **Person** markup para o advogado
- **Service** markup para cada área de atuação
- **LocalBusiness** informações de contato e localização

### 4. Páginas de Serviços
- **URLs amigáveis**: `/servicos/[service-id]`
- **Metadados específicos** para cada área do direito
- **Structured data** otimizado por serviço
- **CTAs personalizados** com informações do serviço

### 5. SEO Técnico
- **Sitemap dinâmico** (`/sitemap.xml`)
- **Robots.txt** configurado
- **Canonical URLs** para evitar conteúdo duplicado
- **Keywords otimizadas** por página

## Estrutura de Arquivos

```
src/
├── lib/
│   ├── metadata.ts          # Geração de metadados dinâmicos
│   └── seo.ts              # Configurações de SEO
├── app/
│   ├── api/og/route.tsx    # API para imagens Open Graph
│   ├── sitemap.ts          # Sitemap dinâmico
│   ├── robots.ts           # Robots.txt
│   └── servicos/[service]/ # Páginas de serviços
├── components/
│   └── common/
│       ├── StructuredData.tsx           # Schema.org geral
│       └── ServiceStructuredData.tsx   # Schema.org por serviço
```

## Como Funciona

### 1. Metadados Principais
```typescript
// src/lib/metadata.ts
export function generateMetadata(options: MetadataOptions = {}): Metadata {
  // Gera metadados baseados nos dados do advogado
  // Inclui Open Graph, Twitter Cards, keywords, etc.
}
```

### 2. Imagens Open Graph
```typescript
// src/app/api/og/route.tsx
export async function GET(request: Request) {
  // Gera imagens dinâmicas com dados do advogado
  // Suporte a parâmetros: name, title, service
}
```

### 3. Páginas de Serviços
```typescript
// src/app/servicos/[service]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  // Metadados específicos para cada serviço
  return generateServiceMetadata(params.service)
}
```

## URLs de Exemplo

### Página Principal
- **URL**: `https://geovannanery.com`
- **Título**: "Dra. Geovanna Nery - Advogada Especialista em Direito Civil, Empresarial e Família"
- **Descrição**: Dados completos do advogado
- **Imagem**: Open Graph com foto e informações

### Páginas de Serviços
- **Direito Civil**: `https://geovannanery.com/servicos/civil-law`
- **Direito Empresarial**: `https://geovannanery.com/servicos/business-law`
- **Direito de Família**: `https://geovannanery.com/servicos/family-law`

## Benefícios

### Para SEO
- ✅ **Melhor indexação** pelos motores de busca
- ✅ **Rich snippets** com informações estruturadas
- ✅ **Keywords otimizadas** por página
- ✅ **Sitemap automático** para indexação

### Para Compartilhamento
- ✅ **Imagens personalizadas** no WhatsApp, Facebook, Twitter
- ✅ **Títulos e descrições** relevantes
- ✅ **Informações de contato** visíveis
- ✅ **Branding consistente** em todas as plataformas

### Para Usuários
- ✅ **URLs amigáveis** e descritivas
- ✅ **Informações claras** sobre serviços
- ✅ **Contatos diretos** via WhatsApp e email
- ✅ **Navegação intuitiva** entre serviços

## Configuração

### Variáveis de Ambiente
```env
NEXT_PUBLIC_SITE_URL=https://geovannanery.com
NEXT_PUBLIC_TWITTER_HANDLE=@advocaciageovanna
```

### Dados do Advogado
Todos os dados são centralizados em `src/constants/data.ts`:
- Informações pessoais
- Serviços oferecidos
- Contatos
- Credenciais

## Testes

### Verificar Metadados
1. **Inspecionar elemento** na página
2. Verificar tags `<meta>` e `<title>`
3. Testar com ferramentas de SEO

### Verificar Open Graph
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### Verificar Structured Data
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/

## Próximos Passos

1. **Analytics** - Implementar Google Analytics 4
2. **Search Console** - Configurar Google Search Console
3. **Performance** - Otimizar Core Web Vitals
4. **Acessibilidade** - Melhorar WCAG compliance
5. **Testes** - Implementar testes automatizados de SEO 