import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";

const backgroundColor = {
    blue: "#1E72D2",
    orange: "#FE9235"
}

const backgroundStylesButton = css`
    background-color: ${props => backgroundColor[props.backgroundColor] || backgroundColor.blue};
    ${props => props.padding && "padding:" + props.padding};
    border-radius: 5px;
    text-decoration: none;

    .buttonText{
        text-decoration: none;
    }
`;

const StyledButton = styled.a`
    
    display: inline-block;
    cursor: pointer;

    .buttonText{
        text-decoration: underline;
    }
    ${props => props.background && backgroundStylesButton}
`;

const Button = (props) => {
    return(
        <StyledButton href={props.href} {...props}>
            <Text className="buttonText" textTransform={props.textTransform} fontSize={props.fontSize ? props.fontSize : 18} color={props.color}>
                {props.children}
            </Text>
        </StyledButton>
    )
}

Button.propTypes = {
    fontSize: PropTypes.number,
    color: PropTypes.string,
    padding: PropTypes.string,
    backgroundColor: PropTypes.string,
    background: PropTypes.bool
};

Button.defaultProps = {
    fontSize: 18,
    color: "#ffffff",
    padding: "20px 25px",
    backgroundColor: "blue",
    background: true
};

export default Button