import React from "react";
import Link from '../link';
import { PageContext } from '../../context/page-context';

function AvsLinkHref(props){
    return(
        <PageContext.Consumer>  
            {(pageContext) => (
                <a className={props.className}   href={ (pageContext.locale === "en" || pageContext.locale === "ru"
                || pageContext.locale === "nl" || pageContext.locale === "kr" || pageContext.locale === "pl" || pageContext.locale === "dk") ?  (props.mainLink === "/" ? "" : props.mainLink) + (props.toLink === ".pdf" ? "" : (pageContext.locale === "ru" ? "" : "/")) + (props.toLink === "=" ? "" : props.toLink) : 
                props.mainLink + (props.toLink !== ".pdf" ? "" : "_") + pageContext.locale + (props.toLink === ".pdf" ? "" : props.toLink === "=" ? "" : "/") + (props.toLink === "=" ? "" : props.toLink)
                    } 
                >   
                    {props.children}
                </a>   
            )}              
        </PageContext.Consumer>  
    )
}

export default AvsLinkHref;

