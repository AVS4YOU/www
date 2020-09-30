import React from "react";
import { Link } from "gatsby";
import { PageContext } from '../../context/page-context';

function AvsLink(props){
    return(
        <PageContext.Consumer>  
            {(pageContext) => (
                <Link className={props.className}   to={pageContext.originalPath.replace(/(\/)?$/, '') && pageContext && !props.langChange
                    ? pageContext.locale == "en" ? pageContext.originalPath="https://onlinehelp.avs4you.com/" + props.to : "https://onlinehelp.avs4you.com" + "/" + pageContext.locale + props.to
                    : props.to} 
                >   
                    {props.children}
                    {console.log(pageContext)}
                </Link>   
            )}                 
        </PageContext.Consumer>  
    )
}

export default AvsLink;