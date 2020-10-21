import React from "react";
import ImageGQL from "../image-gql";
import { PageContext } from '../../context/page-context';

function AvsLinkHref(props){
    return(
        <PageContext.Consumer>  
            {(pageContext) => (
                
                <ImageGQL className={props.className} imageName={ pageContext.locale === "en" ?  `${props.mainName + pageContext.locale + props.toName}`: 
                `${props.mainName + pageContext.locale + props.toName}`
                    } 
                >   
                    {props.children}
                </ImageGQL>   
            )}              
        </PageContext.Consumer>  
    )
}



export default AvsLinkHref;

