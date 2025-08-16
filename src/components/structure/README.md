# Componentes Structure - LC Copper

## 🎨 Paleta de Cores da Empresa

**Cores Principais:**
- **Azul Escuro**: `#05357e` - Cor principal da marca
- **Azul Médio**: `#1173c6` - Cor secundária
- **Vermelho**: `#b20001` - Cor de destaque e call-to-action

## Melhorias Implementadas

### Componente Apresentation.js

**Melhorias de Layout:**
- ✅ Design mais profissional com gradientes e sombras modernas
- ✅ Layout responsivo com Grid System do Bootstrap
- ✅ Animações suaves e elegantes
- ✅ Badge estilizado com cores da empresa
- ✅ Botão CTA mais atrativo com ícone do WhatsApp
- ✅ Overlay nas imagens para melhor contraste
- ✅ Tipografia escalável com `clamp()`

**Responsividade:**
- ✅ Breakpoints otimizados para diferentes tamanhos de tela
- ✅ Texto centralizado em dispositivos móveis
- ✅ Imagens adaptáveis
- ✅ Espaçamentos ajustáveis

### Componente Structure.js

**Melhorias de Layout:**
- ✅ Grid layout moderno e flexível
- ✅ Cards com design profissional
- ✅ Ícones FontAwesome para melhor UX
- ✅ Lista estruturada com ícones de check
- ✅ Overlay nas imagens
- ✅ Animações de entrada escalonadas

**Responsividade:**
- ✅ Grid adaptativo que se ajusta ao tamanho da tela
- ✅ Layout em coluna única em dispositivos móveis
- ✅ Tamanhos de fonte responsivos
- ✅ Espaçamentos otimizados para cada breakpoint

## Características Técnicas

### CSS Moderno
- Gradientes CSS3 com cores da empresa
- Box-shadows avançadas
- Transições suaves
- Animações CSS keyframes
- Flexbox e Grid Layout
- Media queries otimizadas

### Performance
- Imagens otimizadas (WebP)
- Animações com `transform` e `opacity`
- Lazy loading de imagens
- CSS modular

### Acessibilidade
- Estrutura semântica com `<section>`
- Alt text descritivo nas imagens
- Contraste adequado
- Navegação por teclado

## Como Usar

```jsx
// Importar os componentes
import Apresentation from './components/structure/Apresentation';
import Structure from './components/structure/Structure';

// Usar no seu componente
function HomePage() {
  return (
    <div>
      <Apresentation />
      <Structure />
    </div>
  );
}
```

## Dependências

- React
- Next.js
- Bootstrap 5
- FontAwesome (para ícones)
- react-intersection-observer (para animações)

## Breakpoints Responsivos

- **Desktop**: > 1200px
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 576px

## Aplicação das Cores

### Gradientes Utilizados
- **Títulos**: `linear-gradient(135deg, #05357e, #1173c6)`
- **Botões**: `linear-gradient(135deg, #05357e, #1173c6)`
- **Barras de destaque**: `linear-gradient(90deg, #05357e, #1173c6, #b20001)`
- **Headers dos cards**: `linear-gradient(135deg, #05357e, #1173c6)`

### Elementos de Destaque
- **Ícones de check**: `#b20001` (vermelho)
- **Textos secundários**: `#05357e` (azul escuro)
- **Overlays**: Transparência com cores da empresa
