# 📸 **Instruções para Adicionar Foto da Dra. Geovanna Nery**

## 🎯 **Como Substituir o Placeholder pela Foto Real**

### **1. Preparação da Foto**
- **Formato**: JPG, PNG ou WebP
- **Tamanho recomendado**: 400x400 pixels (mínimo)
- **Qualidade**: Alta resolução para melhor aparência
- **Fundo**: Preferencialmente neutro ou profissional

### **2. Onde Colocar a Foto**
1. Salve a foto no diretório: `public/images/`
2. Nome sugerido: `geovanna-nery-profile.jpg`

### **3. Código para Substituir**

**Localizar no arquivo**: `src/components/sections/hero.tsx`

**Substituir este trecho**:
```jsx
<div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
    {/* Placeholder para foto - você pode substituir por uma imagem real */}
    <div className="text-center text-gray-400">
        <svg className="w-24 h-24 sm:w-32 sm:h-32 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <p className="text-sm sm:text-base font-medium">Dra. Geovanna Nery</p>
        <p className="text-xs sm:text-sm text-gray-500">Advogada</p>
    </div>
</div>
```

**Por este código**:
```jsx
<img 
    src="/images/geovanna-nery-profile.jpg" 
    alt="Dra. Geovanna Nery - Advogada Especialista"
    className="w-full h-full object-cover"
/>
```

### **4. Estrutura de Diretórios**
```
lawyer-hero/
├── public/
│   └── images/
│       └── geovanna-nery-profile.jpg  ← Coloque a foto aqui
└── src/
    └── components/
        └── sections/
            └── hero.tsx  ← Arquivo a ser editado
```

### **5. Características da Foto Implementada**

✅ **Layout Responsivo**
- Mobile: 256x256px
- Tablet: 320x320px  
- Desktop: 288x288px
- Large Desktop: 320x320px

✅ **Efeitos Visuais**
- Borda arredondada perfeita
- Sombra elegante
- Anel decorativo animado
- Efeito hover suave
- Badge "OAB/DF" no canto

✅ **Animações**
- Entrada suave da esquerda
- Efeito de escala no hover
- Anel decorativo pulsante

### **6. Dicas para a Foto**

🎯 **Composição Ideal**:
- **Enquadramento**: Rosto e ombros
- **Expressão**: Profissional e acolhedora
- **Vestimenta**: Traje formal ou business casual
- **Fundo**: Neutro ou desfocado

🎨 **Estilo Profissional**:
- **Iluminação**: Suave e natural
- **Cores**: Harmoniosas com o tema escuro
- **Qualidade**: Alta resolução para nitidez

### **7. Exemplo de Código Completo**

```jsx
{/* Foto de perfil */}
<motion.div
    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
>
    <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
        <img 
            src="/images/geovanna-nery-profile.jpg" 
            alt="Dra. Geovanna Nery - Advogada Especialista"
            className="w-full h-full object-cover"
        />
    </div>
</motion.div>
```

### **8. Teste e Ajustes**

Após adicionar a foto:
1. **Teste em diferentes dispositivos**
2. **Verifique se a foto está centralizada**
3. **Ajuste o `object-cover` se necessário**
4. **Otimize a imagem se estiver muito pesada**

---

**Resultado**: Uma foto de perfil profissional e elegante que complementa perfeitamente as informações da Dra. Geovanna Nery! 📸✨ 