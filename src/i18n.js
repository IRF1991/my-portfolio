import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import en from './locales/en.json'
import de from './locales/de.json'

const messages = {
  es,
  en,
  de
}

const i18n = createI18n({
  locale: 'es', // Default language
  fallbackLocale: 'es',
  messages,
  legacy: false,
  globalInjection: true
})

export default i18n