import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationUA from './ua.json';
import translationRU from './ru.json';

i18next.use(initReactI18next).init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: translationEN,
        },
        ua: {
            translation: translationUA,
        },
        ru: {
            translation: translationRU,
        },
    },
});