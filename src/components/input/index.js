import React from "react";
import styled from "styled-components";
import Text from '../text';
import ErrorBlock from '../error-block';

const StyledInputWrapper = styled.div`
    max-width: 700px;
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

class Input extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isFocus: false,
            email: '',
            error: false
        }

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    inputErrorText = "";
    emailRegex = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i');

    onFocus(){
        this.setState({
            isFocus: true,
            error: false
        })
    }

    onBlur(){
        this.validateData(false)
    }

    validateData(isButton){

        const data = {
            email: this.state.email
        }

        var isEmpty = data.email === "" || data.email === null || data.email === undefined;

        if(isButton){

            if(isEmpty){
                this.setState({
                    error: true,
                    isFocus: false
                })

                this.props.checkValid(false);
                this.inputErrorText = this.props.valueEmptyText;
            } else if(this.props.regexp !== "" && !data.email.match(this.props.regexp)){
                this.setState({
                    error: true   
                })

                this.props.checkValid(false);
                this.inputErrorText = this.props.valueIncorrectText;
            } else {
                this.props.checkValid(true);
                this.setState({
                    error: false
                })
            }

        } else {
            if(isEmpty){
                this.setState({
                    isFocus: false,
                    error: false
                })
            } else if(this.props.regexp !== ""){
                if(!data.email.match(this.props.regexp)){
                    this.setState({
                        error: true   
                    })

                    this.inputErrorText = this.props.valueIncorrectText;
                }
            }
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.getCouponToggle !== this.props.getCouponToggle){
            this.validateData(true);
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    render(){
        return(
            <StyledInputWrapper 
                className={this.state.error ? 
                    this.state.isFocus 
                        ? "focus error" : "error" 
                        : this.state.isFocus && "focus"}>
                <input
                    onKeyPress={this.props.onKeyPress}
                    name={this.props.inputName}
                    value={this.state.email}
                    onFocus={this.onFocus} 
                    onBlur={this.onBlur} 
                    onChange={this.handleUserInput}
                    className="main-input" />
                <Text className="label-input">{this.props.inputLabel}</Text>
                {this.props.valueEmptyText && 
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