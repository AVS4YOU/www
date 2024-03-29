const fs = require("fs");
const localesNSContent = {
  en: [
    {
      content: fs.readFileSync(`src/locales/en/common.json`, "utf8"),
      ns: "common"
    }
  ],
  de: [
    {
      content: fs.readFileSync(`src/locales/de/common.json`, "utf8"),
      ns: "common"
    }
  ],
  it: [
    {
      content: fs.readFileSync(`src/locales/it/common.json`, "utf8"),
      ns: "common"
    }
  ],
  es: [
    {
      content: fs.readFileSync(`src/locales/es/common.json`, "utf8"),
      ns: "common"
    }
  ],
  fr: [
    {
      content: fs.readFileSync(`src/locales/fr/common.json`, "utf8"),
      ns: "common"
    }
  ],
  jp: [
    {
      content: fs.readFileSync(`src/locales/jp/common.json`, "utf8"),
      ns: "common"
    }
  ],
  ru: [
    {
      content: fs.readFileSync(`src/locales/ru/common.json`, "utf8"),
      ns: "common"
    }
  ],
  pl: [
    {
      content: fs.readFileSync(`src/locales/pl/common.json`, "utf8"),
      ns: "common"
    }
  ],
ko: [
    {
      content: fs.readFileSync(`src/locales/ko/common.json`, "utf8"),
      ns: "common"
    }
  ],
da: [
    {
      content: fs.readFileSync(`src/locales/da/common.json`, "utf8"),
      ns: "common"
    }
  ],
nl: [
    {
      content: fs.readFileSync(`src/locales/nl/common.json`, "utf8"),
      ns: "common"
    }
  ],
  pt: [
    {
      content: fs.readFileSync(`src/locales/pt/common.json`, "utf8"),
      ns: "common"
    }
  ],
  zh: [
    {
      content: fs.readFileSync(`src/locales/zh/common.json`, "utf8"),
      ns: "common"
    }
  ],
};



const availableLocales = [
  { value: "en", text: "English" },
  { value: "de", text: "Deutsch" },
  { value: "it", text: "Italiano" },
  { value: "fr", text: "Français" },
  { value: "es", text: "Español" },
  { value: "jp", text: "日本語" },
  { value: "ru", text: "Русский" },
  { value: "pl", text: "Polski"},
  { value: "ko", text: "한국어"},
  { value: "da", text: "Dansk"},
  { value: "nl", text: "Nederland"},
  { value: "pt", text: "Português"},
  { value: "zh", text: "中文"}
];


// default locales don't end up in a specific locale route i.e example.com for english and example.com/fr for franch
const defaultLocales = { value: "en", text: "English" };

exports.onCreatePage = async props => {

  const { page, actions: { createPage, deletePage, createRedirect } } = props;

  deletePage(page);

  if (page.path === '/') { 
    
    availableLocales.map(({ value }) => {
      const newPath = defaultLocales.value === value ? page.path : `${value}`
      createPage({
        ...page,
        path: newPath,
        context: {
          availableLocales,
          locale: value,
          routed: true,
          data: localesNSContent[value],
          originalPath: page.path,
          page: page
        }
      });
    })
    
  } else {
    availableLocales.map(({ value }) => {
      const newPath = defaultLocales.value === value ? page.path : `/${value}${page.path}`

      const localePage = {
        ...page,
        originalPath: page.path,
        path: newPath,
        context: {
          availableLocales,
          locale: value,
          routed: true,
          data: localesNSContent[value],
          originalPath: page.path,
          page: page
        },
      }
      createPage(localePage)
    });
  }
};