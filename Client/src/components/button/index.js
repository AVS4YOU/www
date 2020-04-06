import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";

const backgroundColor = {
    blue: "#1373E2",
    orange: "#FE9235"
}

const backgroundStylesButton = css`
    background-color: ${props => backgroundColor[props.backgroundColor] || backgroundColor.blue};
    ${props => props.padding && "padding:" + props.padding};
    border-radius: 5px;
    text-decoration: none;

    &:hover{
        background-color: ${props => props.backgroundColor === "blue" ? "#428fe8" : "#f7a966"}
    }

    .buttonText{
        text-decoration: none;
    }
`;

const StyledButton = styled.a`
    
    display: inline-block;
    cursor: pointer;
    text-decoration: none;

    .buttonText{
        text-decoration: underline;
    }
    ${props => props.background && backgroundStylesButton}
`;

const Button = (props) => {
    return(
        <StyledButton className={props.className} href={props.href} {...props}>
            <Text className={"buttonText " + props.textClassName && props.textClassName} textTransform={props.textTransform} fontSize={props.fontSize ? props.fontSize : 18} color={props.color}>
                {props.children}
            </Text>
            {props.secondaryText && <Text color={props.color} fontSize={12} align="center">{props.secondaryText}</Text>}
        </StyledButton>
    )
}

Button.propTypes = {
    fontSize: PropTypes.number,
    color: PropTypes.string,
    padding: PropTypes.string,
    backgroundColor: PropTypes.string,
    background: PropTypes.bool,
    href: PropTypes.string,
    textClassName: PropTypes.string
};

Button.defaultProps = {
    fontSize: 18,
    color: "#ffffff",
    padding: "20px 25px",
    backgroundColor: "blue",
    background: true
};

export default Button