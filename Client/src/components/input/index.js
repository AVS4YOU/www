import React from "react";
import styled from "styled-components";
import Text from '../text';
import ErrorBlock from '../error-block';

const StyledInputWrapper = styled.div`
    max-width: 720px;
    display: block;
    margin: auto;
    position: relative;
    margin-top: 30px;
    margin-bottom: 20px;

    .main-input{
        display: block;
        position:relative;
        width: 100%;
        border-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-size: 14px;
        padding: 12px 16px;
        font-weight: 500;
        box-sizing: border-box;
        color: #333;
        outline: none;
        border: 1px solid #fff;
        font-family: 'Open Sans',sans-serif,Arial;

        &::-moz-placeholder { 
            font-size: 14px;
            font-weight: 500;
            color: #666;
            opacity:1;
        }

        &::placeholder{
            font-size: 14px;
            font-weight: 500;
            color: #666;
            opacity:1;
        }

        &::-webkit-input-placeholder{
            font-size: 14px;
            font-weight: 500;
            color: #666;
            opacity:1;
        }

        &::-ms-input-placeholder{
            font-size: 14px;
            font-weight: 500;
            color: #666;
            opacity:1;
        }
    }

    .errorBlock{
        display:none;
    }

    .label-input{
        font-size: 14px;
        font-weight: 500;
        color: #666;
        position: absolute;
        margin: auto;
        left: 17px;
        height: auto;
        transition: .1s linear;
        pointer-events: none;
        top: 12px;
    }

    &.focus{

        .main-input{
            border: 1px solid #2a9ee5;
        }

        .label-input{
            font-size: 11px;
            top: -7px;
            left: 12px;
            color: #1296e6;
            background-color: #fff;
            padding: 0 5px;
        }
    }

    &.error{
        .main-input{
            border-color: #FF0C3E;
        }

        .label-input{
            color: #FF0C3E;
        }

        .errorBlock{
            display:block;
        } 
    }
`;

const StyledInput = styled.input``;

class Input extends React.PureComponent {

    render() {

        const { className, as: tag, inputLabel, onKeyPress, onChange, onFocus, onBlur, inputName, value, errorText, required, inputClassName, placeholder } = this.props;

        return (
            <StyledInputWrapper
                className={[className, inputClassName]}>

                <StyledInput
                    as={tag}
                    placeholder={placeholder}
                    name={inputName}
                    value={value}
                    onKeyPress={onKeyPress}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    className="main-input"
                />
                {inputLabel && <Text className="label-input">{`${inputLabel}${required ? '*' : ''}`}</Text>}
                {errorText &&
                    <ErrorBlock className="errorBlock">
                        {errorText}
                    </ErrorBlock>
                }
            </StyledInputWrapper>
        )
    }
}

Input.defaultProps = {
    regexp: ""
};

export default Input;