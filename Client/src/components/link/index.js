import React from "react";
import { Link } from "gatsby";
import { PageContext } from '../../context/page-context';

function AvsLink(props){
    return(
        <PageContext.Consumer>  
            {(pageContext) => (
                <Link id={props.id} className={props.className} to={pageContext && !props.langChange
                    ? pageContext.locale === "en" ? props.to : "/" + pageContext.locale + props.to
                    : props.to}
                      id={props.id}
                >   
                    {props.children}
                </Link>   
            )}                 
        </PageContext.Consumer>  
    )
}

export default AvsLink;
