import React from "react";
import styled from "styled-components";
import Text from '../text';
import ErrorBlock from '../error-block';
import Select from 'react-styled-select'


const StyledInputWrapper = styled.div`
    max-width: 701px;
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
        padding: 16px 16px 8px;
        font-weight: 500;
        box-sizing: border-box;
        color: #333;
        outline: none;
        border: 1px solid #fff;
        font-family: 'Open Sans',sans-serif,Arial;
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
            background-color: #eef8ff;
            border: 1px solid #2a9ee5;
        }

        .label-input{
            font-size: 11px;
            top: 2px;
            left: 17px;
            color: #1296e6;
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

class Input extends React.Component {

    constructor(props){
        super(props);

        this.inputErrorText = "";
        this.inputClass = "";
    }

    onFocus = () => {
        this.props.focusInput();
    }

    getInputState = (incorrect = false, empty = false) => {

        let inputState = {
            isFocus: !empty,
            error: empty || incorrect
        }

        this.inputErrorText = empty ? this.props.valueEmptyText : this.props.valueIncorrectText

        return inputState;
    }

    onBlur = () => {
        this.props.verifyInput();
    }

    handleUserInput = (e) => {
        this.props.setInputData(this.props.inputName, e.target.value);
    }

    render(){

        if (this.props.showErrors){
            let inputState = this.getInputState(this.props.incorrect, this.props.empty);

            if(!this.props.required){
                inputState.error = false;
            }

            this.inputClass = inputState.error ? 
            inputState.isFocus 
                ? "focus error" : "error" 
                : inputState.isFocus && "focus";
        }

        const {className, as: tag, inputLabel, valueEmptyText, onKeyPress} = this.props;
        
        return(
            <StyledInputWrapper 
                className={[className, this.inputClass]}>

                    <StyledInput
                        as={tag}
                        onKeyPress={onKeyPress}
                        onFocus={this.onFocus} 
                        onBlur={this.onBlur} 
                        onChange={this.handleUserInput}
                        className="main-input"
                    /> 
                <Text className="label-input">{inputLabel}</Text>
                {valueEmptyText && 
                    <ErrorBlock className="errorBlock">
                        {this.inputErrorText}
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