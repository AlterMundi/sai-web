// src/i18n/utils.js
// Utilidades para el sistema de internacionalización

import { translations } from './translations.js';

// Idiomas soportados
export const languages = {
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  },
  en: {
    code: 'en', 
    name: 'English',
    flag: '🇺🇸'
  }
};

// Idioma por defecto
export const defaultLanguage = 'es';

// Obtener traducciones para un idioma específico
export function getTranslations(lang = defaultLanguage) {
  return translations[lang] || translations[defaultLanguage];
}

// Obtener texto traducido usando dot notation
export function t(key, lang = defaultLanguage) {
  const trans = getTranslations(lang);
  return getNestedValue(trans, key) || key;
}

// Helper para obtener valores anidados usando dot notation
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

// Extraer idioma de la URL
export function getLangFromUrl(url) {
  const segments = url.pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && languages[firstSegment]) {
    return firstSegment;
  }
  
  return defaultLanguage;
}

// Cambiar idioma manteniendo la ruta actual
export function switchLanguage(currentUrl, targetLang) {
  const currentLang = getLangFromUrl(currentUrl);
  let path = currentUrl.pathname;
  
  // Remover idioma actual de la ruta
  if (currentLang !== defaultLanguage) {
    path = path.replace(`/${currentLang}`, '');
  }
  
  // Agregar nuevo idioma
  if (targetLang !== defaultLanguage) {
    path = `/${targetLang}${path}`;
  }
  
  return path || '/';
}
