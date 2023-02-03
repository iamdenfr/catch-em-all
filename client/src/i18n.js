import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import './locales/en/translation.json'
import './locales/ua/translation.json'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use (initReactI18next)
    .init({
        resources: {
            en: {
                translation: require('./locales/en/translation.json')
            },
            ua: {
                translation: require('./locales/ua/translation.json')
            }
        },
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
        escapeValue: false
    }
})

export default i18n;

    