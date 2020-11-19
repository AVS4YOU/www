import React from "react";
import { PageContext } from '../../context/page-context';

function AvsLinkHref(props){
    return(
        <PageContext.Consumer>  
            {(pageContext) => (
                <a className={props.className}   href={ pageContext.locale === "en" ?  (props.mainLink === "/" ? "" : props.mainLink) + "/" + (props.toLink === "=" ? "" : props.toLink) : 
                props.mainLink + (props.toLink !== ".pdf" ? "" : "_") + pageContext.locale + (props.toLink === ".pdf" ? "" : props.toLink === "=" ? "" :  "/") + (props.toLink === "=" ? "" : props.toLink)
                    } 
                >   
                    {props.children}
                </a>   
            )}              
        </PageContext.Consumer>  
    )
}

export default AvsLinkHref;

