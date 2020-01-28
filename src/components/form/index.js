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

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state={
            name: "",
            nameEmpty: true,
            nameShowErrors: false,

            email: "",
            emailEmpty: true,
            emailIncorrect: false,
            emailShowErrors: false,

            comment: "",
            commentEmpty: true,
            commentShowErrors: false
        };

        this.regexpEmail = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i')

    }

    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.request();
        }
    };

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

    verifyInput = (inputName, emptyState, showErrorsState = "", incorrectState = "", regexp = "") => {

        let verifyData = {
            empty: this.state[inputName] == "",
            incorrect: regexp && !this.state[inputName].match(regexp),
        }

        this.setState({
            [emptyState]: verifyData.empty,
            [showErrorsState]: true
        });

        if(incorrectState) {

            this.setState({
                [incorrectState]: verifyData.incorrect
            });
        }

        return(verifyData);
    }

    focusInput = (emptyState, showErrorsState, incorrectState = "") => {
        this.setState({
            [emptyState]: false,
            [showErrorsState]: true
        })

        if(incorrectState) {
            this.setState({
                [incorrectState]: false
            });
        }
    }

    verifyData = () => {

        let emailErrors = this.verifyInput("email", "emailEmpty", "emailShowErrors", "emailIncorrect", this.regexpEmail);
        let nameErrors = this.verifyInput("name", "nameEmpty", "nameShowErrors");
        //this.verifyInput("comment", "commentEmpty", "commentShowErrors");

        let formValid = !emailErrors.empty && 
                        !emailErrors.incorrect && 
                        !nameErrors.empty;

        return formValid;
    }

    setInputData = (inputName, value) => {
        this.setState({
            [inputName]: value
        });
    }

    /*getCouponRequest = async (data) => {

        const response = await fetch('http://192.168.3.164:8086/WeatherForecast')
        const myJson = await response.json();
        console.log(myJson);
        console.log(data);
        alert("request send");
    }*/

    render(){
        return(       
            <StyledForm>
                <Text as="h2" className="formHeader">
                    To become an AVS4YOU reseller, please, use the form below:
                </Text>
                <div className="inputsWrapper">
                    <Input  
                        tabIndex="0"
                        onKeyPress={this.keyPressed}
                        setInputData={this.setInputData}
                        inputName="name"
                        inputLabel="Name*"
                        valueIncorrectText="Name is incorrect"
                        valueEmptyText="Name is empty"
                        onKeyDown={this._handleKeyDown}
                        className="formInput"
                        required={true}
                        verifyInput={this.verifyInput.bind(this, "name", "nameEmpty", "nameShowErrors")}
                        focusInput={this.focusInput.bind(this, "nameEmpty", "nameShowErrors")}
                        empty={this.state.nameEmpty}
                        showErrors={this.state.nameShowErrors}
                    />
                     <Input 
                        tabIndex="1"
                        onKeyPress={this.keyPressed}
                        setInputData={this.setInputData}
                        inputName="email"
                        inputLabel="Email address*"
                        valueIncorrectText="Email is incorrect"
                        valueEmptyText="Email is empty"
                        regexp={this.regexpEmail}
                        onKeyDown={this._handleKeyDown}
                        className="formInput"
                        required={true}
                        verifyInput={this.verifyInput.bind(this, "email", "emailEmpty", "emailShowErrors", "emailIncorrect", this.regexpEmail)}
                        focusInput={this.focusInput.bind(this, "emailEmpty", "emailShowErrors", "emailIncorrect")}
                        empty={this.state.emailEmpty}
                        incorrect={this.state.emailIncorrect}
                        showErrors={this.state.emailShowErrors}
                    />

                </div>
                <Input 
                    as="textarea"
                    tabIndex="2"
                    onKeyPress={this.keyPressed}
                    setInputData={this.setInputData}
                    inputName="comment"
                    inputLabel="Give us a brief description of your specific needs"
                    onKeyDown={this._handleKeyDown}
                    className="formInput textArea"
                    verifyInput={this.verifyInput.bind(this, "comment", "commentEmpty", "commentShowErrors")}
                    focusInput={this.focusInput.bind(this, "commentEmpty", "commentShowErrors")}
                    empty={this.state.commentEmpty}
                    showErrors={this.state.commentShowErrors}
                />

                <Button 
                    tabIndex="1"
                    className="getCouponButton" 
                    onClick={this.request}
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