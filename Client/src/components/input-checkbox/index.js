import React from "react";
import styled from "styled-components";
import Text from '../text';
import ErrorBlock from '../error-block';

const StyledInputWrapper = styled.div`
    width: 16px;

    input{
        cursor: pointer;
        position: relative;
        width: 0px;
        height: 11px;

        &:checked{
            &:after{
                content: '';
                display: block;
                width: 4px;
                position: absolute;
                height: 7px;
                border: solid #F59541;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
                left: 1px;
                top: 1px;
            }
        }

        &:before{
            content: '';
            display: block;
            width: 12px;
            height: 12px;
            border: 1px solid #C2C2C2;
            border-radius: 1px;
            opacity: 1;
            z-index: 1;
            position: absolute;
            left: -3px;
        }
    }

    .errorBlock{
        display:none;
        bottom: -80px;
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

class InputCheckbox extends React.PureComponent {

    render() {

        const { className, onChange, inputName, errorText, inputClassName, value } = this.props;

        return (
            <StyledInputWrapper
                className={[className, inputClassName]}>

                <StyledInput
                    type="checkbox"
                    name={inputName}
                    onChange={onChange}
                    className="main-input"
                />
                {errorText &&
                    <ErrorBlock className="errorBlock">
                        {errorText}
                    </ErrorBlock>
                }
            </StyledInputWrapper>
        )
    }
}

export default InputCheckbox;