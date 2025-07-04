# 🌍 Sistema Multiidioma S.A.I.

## Idiomas Soportados
- **Español (ES)** - Idioma por defecto
- **English (EN)** - Traducción completa

## Estructura de URLs
- **Español**: `https://sistemasai.com/` (raíz)
- **English**: `https://sistemasai.com/en/`

## Archivos Principales
- `src/i18n/translations.js` - Todas las traducciones
- `src/i18n/utils.js` - Utilidades de traducción
- `src/components/LanguageSelector.astro` - Selector de idioma
- `src/layouts/MainLayout.astro` - Layout con soporte i18n
- `src/pages/index.astro` - Página en español
- `src/pages/en/index.astro` - Página en inglés

## Cómo Usar las Traducciones

### En componentes Astro:
```astro
---
import { getTranslations, getLangFromUrl } from '../i18n/utils.js';

const currentLang = getLangFromUrl(Astro.url);
const t = getTranslations(currentLang);
---

<h1>{t.hero.title}</h1>
<p>{t.hero.subtitle}</p>
```

### Agregar Nueva Traducción:
1. Editar `src/i18n/translations.js`
2. Agregar la clave en ambos idiomas (es/en)
3. Usar en componentes con `t.nuevaClave`

### Agregar Nuevo Idioma:
1. Agregar idioma en `src/i18n/utils.js` (languages object)
2. Agregar traducciones en `src/i18n/translations.js`
3. Crear carpeta `src/pages/[codigo-idioma]/`
4. Agregar hreflang en MainLayout.astro

## SEO Multiidioma
- Hreflang tags automáticos
- Meta tags por idioma
- Structured data localizado
- URLs amigables

## Comando de Desarrollo
```bash
npm run dev
```

## Comando de Build
```bash
npm run build
```

## Notas Importantes
- El selector de idioma está fijo en la esquina superior derecha
- Las traducciones son reactivas al cambio de idioma
- El contenido se actualiza automáticamente
- WhatsApp button se localiza automáticamente
