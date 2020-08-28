const fs = require("fs");
const localesNSContent = {
  en: [
    {
      content: fs.readFileSync(`src/locales/en/common.json`, "utf8"),
      ns: "common"
    }
  ],
  ru: [
    {
      content: fs.readFileSync(`src/locales/ru/common.json`, "utf8"),
      ns: "common"
    }
  ],
  de: [
    {
      content: fs.readFileSync(`src/locales/de/common.json`, "utf8"),
      ns: "common"
    }
  ],
  es: [
    {
      content: fs.readFileSync(`src/locales/es/common.json`, "utf8"),
      ns: "common"
    }
  ],
  it: [
    {
      content: fs.readFileSync(`src/locales/it/common.json`, "utf8"),
      ns: "common"
    }
  ],
  fr: [
    {
      content: fs.readFileSync(`src/locales/fr/common.json`, "utf8"),
      ns: "common"
    }
  ],
  ja: [
    {
      content: fs.readFileSync(`src/locales/ja/common.json`, "utf8"),
      ns: "common"
    }
  ]
};

const availableLocales = [
  { value: "ru", text: "Русский" },
  { value: "en", text: "English" },
  { value: "de", text: "Deutsch" },
  { value: "es", text: "Español" },
  { value: "it", text: "Italiano" },
  { value: "fr", text: "Français" },
  { value: "ja", text: "日本語" }
];

// default locales don't end up in a specific locale route i.e example.com for english and example.com/fr for franch
const defaultLocales = { value: "en", text: "English" };

exports.onCreatePage = async props => {
  const {
    page,
    actions: { createPage, deletePage, createRedirect }
  } = props;

  deletePage(page);

  availableLocales.map(({ value }) => {
    let newPath = `/${value}${page.path}`;
    if (defaultLocales.value === value) {
      newPath = page.path;
    }

    const localePage = {
      ...page,
      originalPath: page.path,
      path: newPath,
      context: {
        availableLocales,
        locale: value,
        routed: true,
        data: localesNSContent[value],
        originalPath: page.path
      }
    };
    createPage(localePage);
  });
};
