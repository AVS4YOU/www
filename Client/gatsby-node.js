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
  ]
};

const availableLocales = [
  { value: "ru", text: "Русский" },
  { value: "en", text: "English" }
];

// default locales don't end up in a specific locale route i.e example.com for english and example.com/fr for franch
const defaultLocales = { value: "en", text: "English" };

exports.onCreatePage = async props => {
  const {
    page,
    actions: { createPage, deletePage, createRedirect }
  } = props;

  if (/^\/dev-404-page\/?$/.test(page.path)) {
    return;
  }

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
