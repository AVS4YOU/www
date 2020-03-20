import React from "react";
import styled from "styled-components";
import Text from '../text';
import { Link } from "gatsby";
import { PageContext } from '../../context/page-context';

function AvsLink(props){
    return(
        <PageContext.Consumer>  
            {(pageContext) => (
                <Link className={props.className} to={pageContext && !props.langChange
                    ? pageContext.locale == "en" ? props.to : pageContext.locale + props.to
                    : props.to} 
                >   
                    {props.children}
                </Link>   
            )}                 
        </PageContext.Consumer>  
    )
}

export default AvsLink;