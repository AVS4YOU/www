import React from "react";
import { PageContext } from '../../context/page-context';
import Text from '../text';

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  const regExp = /=regnow:(.*):/;
  const date = new Date();
  const currentMounth = date.getMonth();
  const currentYear = date.getFullYear();
  
  const de_mounth = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  const es_mounth = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];
  const jp_mounth = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ];
  const fr_mounth = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ];
  const it_mounth = [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre"
  ];
  const ru_mounth = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
];
  let DE_MText = "nur bis "  + getLastDayOfMonth(currentYear, currentMounth) + ". " + de_mounth[currentMounth] + " "  +  currentYear + " gültig";
  let FR_MText = "jusqu’à " + getLastDayOfMonth(currentYear, currentMounth) + " " + fr_mounth[currentMounth] + " "  +  currentYear;
  let IT_MText = "al " + getLastDayOfMonth(currentYear, currentMounth) + " " + it_mounth[currentMounth] + " "  +  currentYear;
  let JP_MText = "価格は" + currentYear + "年" + jp_mounth[currentMounth] + "" + getLastDayOfMonth(currentYear, currentMounth) + "日までに有効です";
  let ES_MText = "el " + getLastDayOfMonth(currentYear, currentMounth) + " de " + es_mounth[currentMounth] + " de "  +  currentYear;
  let RU_MText = "действительно до "  + getLastDayOfMonth(currentYear, currentMounth) + " " + ru_mounth[currentMounth] + " "  +  currentYear;

function AvsLinkHref(props){
    return(
        <PageContext.Consumer>  
            {(pageContext) => (
                 
            <Text className="limited-offer-text last">
                {
                pageContext.locale === "en" ? props.MText : 
                pageContext.locale === "de" ? DE_MText: 
                pageContext.locale === "fr" ? FR_MText : 
                pageContext.locale === "it" ? IT_MText : 
                pageContext.locale === "jp" ? JP_MText : 
                pageContext.locale === "es" ? ES_MText :
                pageContext.locale === "ru" ? RU_MText :
                ""
                }
                {props.children}
            </Text>

            )}              
        </PageContext.Consumer>  
    )
}

export default AvsLinkHref;

