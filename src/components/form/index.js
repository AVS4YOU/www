import React from 'react';
import styled from "styled-components";
import Text from '../text';
import Input from '../input';
import Button from '../button';

const StyledForm = styled.div`
    box-shadow: 3px 3px 24px #00000014;
    padding: 40px;
    background-color: #ffffff;
    width: auto;
    box-sizing: border-box;
    margin: auto;
    margin-top: 30px;
    display: table;

    .formHeader{
        color:#161922;
        font-size:24px;
        padding-bottom: 25px;
        font-weight:600;
    }

    .inputsWrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    .formInput{
        width: 100%;  
        margin: 0;
        margin-bottom: 25px;

        &.textArea .main-input{
            max-width: 100%;
            min-width: 100%;
            height:160px;
        }
    }

    .main-input{
        border-color: #CECECE;
    }

    .errorBlock{
        border: 1px solid #CECECE;
        z-index: 1;

        &:before{
            content: none;
        }
    }
`;

/**
* Enum for employee activation status.
* @readonly
*/
const ErrorStatus = Object.freeze({
    NoError: 0,
    Empty: 1,
    Incorrect: 2
});

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state={
            name: { value: "", status: ErrorStatus.NoError },

            email: { value: "", status: ErrorStatus.NoError },

            comment: { value: "", status: ErrorStatus.NoError }
        };

        this.regexpEmail = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i')

    }

    request = () => {
        if(this.verifyData()){
            console.log("form valid: ")
            console.log("name: " + this.state.name)
            console.log("email: " + this.state.email)
            console.log("comment: " + this.state.comment)
        } else {
            console.log("form invalid")
        }
    };

    isEmpty = (value) => {
        return !value || !value.length;
    }

    isEmailInvalid = (value) => {
        return !value.match(this.regexpEmail)
    }

    validate = (inputName, value) => {
        switch(inputName) {
            case "name":
                return this.isEmpty(value) ? ErrorStatus.Empty :  ErrorStatus.NoError;
            case "email":
                if(this.isEmpty(value)) 
                    return ErrorStatus.Empty;
                else if(this.isEmailInvalid(value)) 
                    return ErrorStatus.Incorrect;
                else 
                    return ErrorStatus.NoError;
            default: 
                return ErrorStatus.NoError;
        }
    }

    verifyData = () => {

        const nameStatus = this.validate("name", this.state.name.value);
        this.setError("name", nameStatus);
        const emailStatus = this.validate("email", this.state.email.value);
        this.setError("email", emailStatus);
        
        //this.verifyInput("comment", "commentEmpty", "commentShowErrors");

        let formValid = nameStatus === ErrorStatus.NoError && 
                        emailStatus === ErrorStatus.NoError;

        return formValid;
    }

    setInputData = (inputName, value) => {
        const field = this.state[inputName];

        if(!field) throw "Unknown name";

        this.setState(
            {
                [inputName]: {...field, value}
            }
        );
    }

    onChangeInput = (e) => {
        this.setInputData(e.target.name, e.target.value);
    }

    onBlurInput = (e) => {
        const status = this.validate(e.target.name, e.target.value);
        this.setError(e.target.name, status);
    }

    setError = (inputName, newStatus) => {
        const field = this.state[inputName];

        if(!field) throw "Unknown name";

        if(field.status !== newStatus) {
            this.setState(
                {
                    [inputName]: {...field, status: newStatus}
                }
            )
        }
    }
    
    onFocusInput = (e) => {
        this.setError(e.target.name, ErrorStatus.NoError);
    };
    
    onKeyPress = (event) => {
        if (event.key === "Enter") {
            this.request();
        }
    };

    onClick = () => {
        this.request();
    }

    /*getCouponRequest = async (data) => {

        const response = await fetch('http://192.168.3.164:8086/WeatherForecast')
        const myJson = await response.json();
        console.log(myJson);
        console.log(data);
        alert("request send");
    }*/

    getErrorText = (inputName) => {
        const field = this.state[inputName];

        switch(field.status) {
            case ErrorStatus.Empty:
                return  `${inputName} is empty`;
            case ErrorStatus.Incorrect:
                return `${inputName} is incorrect`;
                default: 
                    return null;
        }
    }

    render(){

        const nameErrorText = this.getErrorText("name");
        const emailErrorText = this.getErrorText("email");
        const commentErrorText = this.getErrorText("comment");

        return(       
            <StyledForm>
                <Text as="h2" className="formHeader">
                    To become an AVS4YOU reseller, please, use the form below:
                </Text>
                <div className="inputsWrapper">
                    <Input  
                        tabIndex="0"

                        inputName="name"
                        inputLabel="Name"

                        value={this.state.name.value}
                        errorText={nameErrorText}
                        onKeyPress={this.onKeyPress}
                        onChange={this.onChangeInput}
                        onBlur={this.onBlurInput}
                        onFocus={this.onFocusInput}

                        className="formInput"
                        required={true}
                        
                    />
                     <Input 
                        tabIndex="1"
                        
                        inputName="email"
                        inputLabel="Email address"

                        value={this.state.email.value}
                        errorText={emailErrorText}
                        onKeyPress={this.onKeyPress}
                        onChange={this.onChangeInput}
                        onBlur={this.onBlurInput}
                        onFocus={this.onFocusInput}
                        
                        className="formInput"
                        required={true}
                        
                    />

                </div>
                <Input 
                    as="textarea"
                    tabIndex="2"
                    
                    inputName="comment"
                    inputLabel="Give us a brief description of your specific needs"

                    value={this.state.comment.value}
                    errorText={commentErrorText}
                    onKeyPress={this.onKeyPress}
                    onChange={this.onChangeInput}
                    onBlur={this.onBlurInput}
                    onFocus={this.onFocusInput}

                    className="formInput textArea"
                />

                <Button 
                    tabIndex="1"
                    className="getCouponButton" 
                    onClick={this.onClick}
                    backgroundColor="blue" 
                    padding="13px 24px"
                    fontSize={14} 
                    textTransform="uppercase"
                    >
                    Send your request
                </Button>
            </StyledForm>
        )
    }
}

export default Form;