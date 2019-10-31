const languages = [ 'en', 'ru' ]
const catalogs = {
  en: { messages: require('./locale/en/messages.json') },
  ru: { messages: require('./locale/ru/messages.json') }
}

const defaultLanguage = 'en'


const langPrefix = lang => (lang === defaultLanguage ? '' : `/${lang}`);
const deprefix = pathname =>
  pathname[0] === '/' && pathname[3] === '/' ? pathname.substr(3) : pathname;
const langFromPath = pathname => {
  const lang = pathname.split('/')[1];
  return languages.includes(lang) ? lang : 'en';
};

const browserLanguagePropertyKeys = [
  'languages',
  'language',
  'browserLanguage',
  'userLanguage',
  'systemLanguage'
];
const getLocale = () =>
  compose(
    compact,
    flatten,
    values,
    pick(browserLanguagePropertyKeys)
  )(window.navigator)
    .map(s => s.substr(0, 2))
    .find(s => languages.includes(s)) || 'en';

exports.defaultLanguage = defaultLanguage;
exports.languages = languages;
exports.catalogs = catalogs;
exports.langPrefix = langPrefix;
exports.deprefix = deprefix;
exports.langFromPath = langFromPath;
exports.getLocale = getLocale;
