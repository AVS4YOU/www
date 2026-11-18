import Sector1 from "../../images/black-friday-2026/bf-sector-1-usd10.svg";
import Sector1Win from "../../images/black-friday-2026/bf-sector-1-usd10-win.svg";
import Sector2 from "../../images/black-friday-2026/bf-sector-2-mystery.svg";
import Sector2Win from "../../images/black-friday-2026/bf-sector-2-mystery-win.svg";
import Sector3 from "../../images/black-friday-2026/bf-sector-3-50.svg";
import Sector3Win from "../../images/black-friday-2026/bf-sector-3-50-win.svg";
import Sector4 from "../../images/black-friday-2026/bf-sector-4-40.svg";
import Sector4Win from "../../images/black-friday-2026/bf-sector-4-40-win.svg";
import Sector5 from "../../images/black-friday-2026/bf-sector-5-30.svg";
import Sector5Win from "../../images/black-friday-2026/bf-sector-5-30-win.svg";
import Sector6 from "../../images/black-friday-2026/bf-sector-6-45.svg";
import Sector6Win from "../../images/black-friday-2026/bf-sector-6-45-win.svg";
import Sector7 from "../../images/black-friday-2026/bf-sector-7-35.svg";
import Sector7Win from "../../images/black-friday-2026/bf-sector-7-35-win.svg";
import Sector8 from "../../images/black-friday-2026/bf-sector-8-25.svg";
import Sector8Win from "../../images/black-friday-2026/bf-sector-8-25-win.svg";

const UNLIMITED = { productKey: "AVS4YOU Unlimited", prods: 604132 };
const ONE_YEAR = { productKey: "AVS4YOU 1 Year Subscription", prods: 604110 };
const REMAKER = { productKey: "AVS Video ReMaker 1 Year Subscription", prods: 26192289 };

// The Mystery prize drops once per 100 spins, the other seven share the rest equally.
const MYSTERY_WEIGHT = 1;
const REGULAR_WEIGHT = 99 / 7;

// Wheel sectors clockwise from the top (the pointer) at rotation 0, as in the Figma
// frame "AVS_blackfriday_main / STATIC master". Sector i is centered at -90 + i * 45 degrees.
// labelRadius is the distance from the wheel center to the label center in the 640px design.
export const SECTORS = [
    { id: "usd10", label: "$10", discount: "$10", kind: "dollar", coupon: "Unlim10", ...UNLIMITED,
      weight: REGULAR_WEIGHT, labelRadius: 184.77, image: Sector1, winImage: Sector1Win },
    { id: "mystery", label: "Mystery", discount: "100%", kind: "mystery", coupon: "Mystery26", ...REMAKER,
      weight: MYSTERY_WEIGHT, labelRadius: 175, image: Sector2, winImage: Sector2Win },
    { id: "p50", label: "50%", discount: "50%", kind: "percent", coupon: "50AnlAV", ...ONE_YEAR,
      weight: REGULAR_WEIGHT, labelRadius: 184.77, image: Sector3, winImage: Sector3Win },
    { id: "p40", label: "40%", discount: "40%", kind: "percent", coupon: "Av40Sub", ...ONE_YEAR,
      weight: REGULAR_WEIGHT, labelRadius: 184.77, image: Sector4, winImage: Sector4Win },
    { id: "p30", label: "30%", discount: "30%", kind: "percent", coupon: "ANYeR30", ...ONE_YEAR,
      weight: REGULAR_WEIGHT, labelRadius: 184.77, image: Sector5, winImage: Sector5Win },
    { id: "p45", label: "45%", discount: "45%", kind: "percent", coupon: "Wheel45", ...UNLIMITED,
      weight: REGULAR_WEIGHT, labelRadius: 184.77, image: Sector6, winImage: Sector6Win },
    { id: "p35", label: "35%", discount: "35%", kind: "percent", coupon: "Top35", ...UNLIMITED,
      weight: REGULAR_WEIGHT, labelRadius: 184.77, image: Sector7, winImage: Sector7Win },
    { id: "p25", label: "25%", discount: "25%", kind: "percent", coupon: "Main25", ...UNLIMITED,
      weight: REGULAR_WEIGHT, labelRadius: 184.77, image: Sector8, winImage: Sector8Win },
];

// Returns the index of a sector picked at random according to the sector weights.
export const pickSectorIndex = () => {
    const total = SECTORS.reduce((sum, sector) => sum + sector.weight, 0);
    let rest = Math.random() * total;
    for (let i = 0; i < SECTORS.length; i++) {
        rest -= SECTORS[i].weight;
        if (rest < 0) return i;
    }
    return SECTORS.length - 1;
};

// Store currency and language per locale, the same as for the Halloween 2026 banner links.
// English uses the checkout link from the spec as is.
const CHECKOUT_LOCALE_PARAMS = {
    en: "",
    fr: "&CURRENCY=EUR&LANGUAGES=fr",
    de: "&CURRENCY=EUR&LANGUAGES=de",
    es: "&CURRENCY=EUR&LANGUAGES=es",
    it: "&CURRENCY=EUR&LANGUAGES=it",
    jp: "&CURRENCY=JPY&LANGUAGES=ja",
    nl: "&CURRENCY=EUR&LANGUAGES=nl",
    pt: "&CURRENCY=USD&LANGUAGES=pt-br",
    pl: "&CURRENCY=EUR&LANGUAGES=pl",
    zh: "&CURRENCY=CNY&LANGUAGES=zh",
    da: "&CURRENCY=EUR&LANGUAGES=da",
    ko: "&CURRENCY=KRW&LANGUAGES=ko",
};

export const checkoutUrl = (sector, locale) => {
    const localeParams = CHECKOUT_LOCALE_PARAMS[locale] || CHECKOUT_LOCALE_PARAMS.en;
    return "https://store.avs4you.com/order/checkout.php"
        + `?PRODS=${sector.prods}&QTY=1&CART=1&CARD=2&SHORT_FORM=1${localeParams}`
        + `&ORDERSTYLE=nLW0m5S5iLk=&COUPON=${sector.coupon}&CLEAN_CART=ALL`;
};
