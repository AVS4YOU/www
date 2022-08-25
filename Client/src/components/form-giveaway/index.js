import React from 'react';
import styled from "styled-components";
import Text from '../text';
import Input from '../input';
import Button from '../button';
import ReCAPTCHA from "react-google-recaptcha";
import InputCheckbox from '../input-checkbox';
import InfoPopup from '../info-popup';
import {VideoReMaker} from '../../../static/products-info';

import {RecaptchaKeys, AjaxUrls} from '../../../static/static-data';

import iconKnowledge from '../../images/giveaway/icon-books.svg'
import iconTips from '../../images/giveaway/icon-tips.svg'
import iconQuestion from '../../images/giveaway/icon-question.svg'

const StyledForm = styled.div`
    padding: 40px;
    max-width: 580px;
    box-sizing: border-box;
    margin: auto;
    margin-top: 30px;
    display: block;

    .checkBoxWrapper{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 5px;
        margin: 30px 0;
        position: relative;
    }

    .formHeader{
        color:#161922;
        font-size:24px;
        padding-bottom: 25px;
        font-weight:600;
    }

    .recaptchaWrapper{
        margin-bottom: 24px
    }

    .inputsWrapper{
        display: block;
        margin-top: 30px;
    }

    .errorBlock{
        bottom: -21px;
        padding: 15px;
        background-color:#ffffff;
        background-position: 12px 50%;
        border-radius: 5px;
        max-width: 100%;
        border: none;
        padding: 0px 15px 0px 37px;
        background-size: 15px;

        p{
            color: #333;
        }
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

        &:before{
            content: none;
        }
    }

    .getCouponButton {
        width: 100%;

        p {
            text-align: center;
        }
    }
    
      .help-item {
        display: inline-table;
        vertical-align: middle;
        width: auto;
      }

      .help-img {
        height: 37px;
      }
    
      .list-help {
        max-width: 500px;
        margin: auto;
        margin-top: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    
      .help-text {
        padding: 16px 0;

        a {
            color: #000000;
            text-decoration: underline;
        }
      }  
      
      hr {
        margin: 40px 0;
        background-color: #DADADA;
      }

      .headerThank {
        margin-bottom: 40px;
      }

      .headerVersion {
        margin-bottom: 20px;
      }

    @media (max-width: 700px) {
        .inputsWrapper{
            grid-template-columns: 1fr;
            grid-gap:0;
        }

        .formHeader{
            font-size:18px;
        }
    }

    @media (max-width: 500px) {
        padding: 20px;
        margin-top: 0px;

        .formHeader{
            text-align:center;
        }

        .getStarted {
            font-size: 25px;
            padding-bottom: 10px;
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

class FormPartners extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: { value: "", status: ErrorStatus.NoError, inputClassName: "" },

            email: { value: "", status: ErrorStatus.NoError, inputClassName: "" },

            checkbox: { value: false, status: ErrorStatus.NoError },

            checkBoxClassName: "",
            formSended: false,
            recaptchaValue: "",
        };

        this.recaptchaRef = React.createRef();

        this.nameErrorText = "";
        this.emailErrorText = "";
        this.checkboxErrorText = "Please agree to receive your free license key.";

        this.regexpEmail = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i')

    }

    request = () => {
        if (this.verifyData()) {

            
            this.sendData({
                name: this.state.name.value,
                email: this.state.email.value,
                
            });
            

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
        switch (inputName) {
            case "checkbox":
                return value ? ErrorStatus.NoError : ErrorStatus.Empty;
            case "name":
                return this.isEmpty(value) ? ErrorStatus.Empty : ErrorStatus.NoError;
            case "email":
                if (this.isEmpty(value))
                    return ErrorStatus.Empty;
                else if (this.isEmailInvalid(value))
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
        this.updateInputClassName("name", nameStatus);
        this.updateErrorText("name", nameStatus);

        const emailStatus = this.validate("email", this.state.email.value);
        this.setError("email", emailStatus);
        this.updateInputClassName("email", emailStatus);
        this.updateErrorText("email", emailStatus);

        const checkBoxStatus = this.validate("checkbox", this.state.checkbox.value);
        this.updateCheckboxClassName(checkBoxStatus === ErrorStatus.NoError ? "" : "error");

        let formValid = nameStatus === ErrorStatus.NoError &&
            emailStatus === ErrorStatus.NoError &&
            checkBoxStatus === ErrorStatus.NoError &&
            this.state.recaptchaValue.length > 0;

        return formValid;
    }

    updateInputClassName = (inputName, status) => {
        if (status === ErrorStatus.Empty) {
            this.setFocusInput(inputName, "error");

        } else if (status === ErrorStatus.Incorrect) {
            this.setFocusInput(inputName, "focus error");

        } else if (this.state[inputName].value) {
            this.setFocusInput(inputName, "focus");

        } else {
            this.setFocusInput(inputName, "");

        }
    }

    updateCheckboxClassName = (className) => {
        this.setState({
            checkBoxClassName: className
        })
    }

    updateErrorText = (inputName, status) => {

        switch (status) {
            case ErrorStatus.Empty:
                this.setErrorText(inputName, "is empty");
                break
            case ErrorStatus.Incorrect:
                this.setErrorText(inputName, "is incorrect");
                break
            default:
                break
        }
    }

    setInputData = (inputName, value) => {
        const field = this.state[inputName];

        if (!field) throw new Error("Unknown name");

        this.setState(
            {
                [inputName]: { ...field, value: value }
            }
        );
    }

    setError = (inputName, newStatus) => {
        const field = this.state[inputName];

        if (!field) throw new Error("Unknown name");

        if (field.status !== newStatus) {
            this.setState(
                {
                    [inputName]: { ...field, status: newStatus }
                }
            )
        }
    }

    setFocusInput = (inputName, className) => {
        const field = this.state[inputName];

        if (!field) throw new Error("Unknown name");

        this.setState({
            [inputName]: { ...field, inputClassName: className }
        })
    }

    setErrorText = (inputName, error) => {
        switch (inputName) {
            case "name":
                this.nameErrorText = `name ${error}`;
                break
            case "email":
                this.emailErrorText = `email ${error}`
                break
            default:
                break
        }
    }

    onChangeInput = (e) => {
        this.setInputData(e.target.name, e.target.value);
    }

    OnChangeRecaptcha = () => {
        this.setState({
            recaptchaValue: this.recaptchaRef.current.getValue()
        })
    }

    onChangeCheckbox = (e) => {

        if (e.target.checked) {
            this.setError(e.target.name, ErrorStatus.NoError);

            this.updateCheckboxClassName("");
        } else {
            this.setError(e.target.name, ErrorStatus.Empty);
        }

        this.setInputData(e.target.name, e.target.checked);
    }

    onBlurInput = (e) => {
        let status = ErrorStatus.NoError;

        if (e.target.name === "email" && e.target.value && this.isEmailInvalid(e.target.value)){
            status = ErrorStatus.Incorrect;
        }

        this.setError(e.target.name, status);
        this.updateInputClassName(e.target.name, status);
        this.updateErrorText(e.target.name, status);
    }

    onFocusInput = (e) => {
        this.setError(e.target.name, ErrorStatus.NoError);
        this.setFocusInput(e.target.name, "focus")
    };

    onKeyPress = (event) => {
        if (event.key === "Enter") {
            this.request();
        }
    };

    onClick = () => {
        this.request();
    }



    sendData = async (data) => {

        let url = "https://api-post-form-data.avs4you.com/users/";

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data), 

            });

            let responseTest = await response.text();

            if (false) { //responseTest.indexOf("Error") > -1
                console.log(responseTest)
            } else {
                this.setState({
                    formSended: true
                })
                console.log("Email sended")
            }

        } catch (error) {
            console.log(error)
        }
    }



    
    render() {

        return (
            <StyledForm>
                {this.state.formSended
                    ?
                    <div>
                    <div className='headerThank'>
                    <Text
                        fontSize={37}
                        fontWeight={700}
                        color="#181C47" >
                        Thank you!
                    </Text>
                    </div>
                    <div className='headerVersion'>
                    <Text
                        fontSize={17}
                        fontWeight={600}
                        color="#181C47" >
                        Download the full version of AVS Video ReMaker {VideoReMaker.version}
                    </Text>
                    </div>
                    <Button
                            className="getCouponButton"
                            href="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe"
                            backgroundColor="orange"
                            padding="13px 0"
                            fontSize={18}
                            fontWeight={500}
                        >
                            Download the full version
                        </Button>
                        <hr />
                    <Text
                        fontSize={24}
                        fontWeight={700}
                        color="#181C47" >
                        Helpful resources
                    </Text>
                    <div className="list-help">
              <div className="help-item"><div className="help-img"><img src={iconKnowledge}/></div><Text className="help-text" color="#000000" fontSize={15} fontWeight={400}><a href="https://onlinehelp.avs4you.com/avs-video-remaker/">Knowledge centre</a></Text></div>
              <div className="help-item"><div className="help-img"><img src={iconTips}/></div><Text className="help-text" color="#000000" fontSize={15} fontWeight={400}><a href="https://www.avs4you.com/guides/video.aspx">Tips & tricks</a></Text></div>
              <div className="help-item"><div className="help-img"><img src={iconQuestion}/></div><Text className="help-text" color="#000000" fontSize={15} fontWeight={400}>Got a question or an idea? <a href="https://support.avs4you.com/login.aspx">Contact us</a></Text></div>
            </div>
                </div>

                    
                    :

                    <div>
                    <Text
                        className="getStarted"
                        fontSize={37}
                        fontWeight={700}
                        color="#181C47" >
                        Get started for free!
                    </Text>
                    <Text
                        fontSize={17}
                        fontWeight={600}
                        color="#181C47" >
                        Please, fill in the form and get a free license key for your PC 
                    </Text>
                        <div className="inputsWrapper">
                            <Input
                                tabIndex="0"

                                inputName="name"
                                inputLabel={this.props.nameAuthor}
                                
                                value={this.state.name.value}
                                inputClassName={this.state.name.inputClassName}
                                errorText={this.nameErrorText}
                                onKeyPress={this.onKeyPress}
                                onChange={this.onChangeInput}
                                onBlur={this.onBlurInput}
                                onFocus={this.onFocusInput}

                                className="formInput"
                                required={true}

                            />
                            <Input
                                tabIndex="0"

                                inputName="email"
                                inputLabel={this.props.emailAddressText}
                                
                                value={this.state.email.value}
                                inputClassName={this.state.email.inputClassName}
                                errorText={this.emailErrorText}
                                onKeyPress={this.onKeyPress}
                                onChange={this.onChangeInput}
                                onBlur={this.onBlurInput}
                                onFocus={this.onFocusInput}

                                className="formInput"
                                required={true}
                            />

                        </div>

                        <div className="recaptchaWrapper">
                            <ReCAPTCHA
                                ref={this.recaptchaRef}
                                onChange={this.OnChangeRecaptcha}
                                sitekey={RecaptchaKeys.public}
                            />
                        </div>

                        <div className="checkBoxWrapper">
                    <InputCheckbox
                        tabIndex="0"

                        inputName="checkbox"
                        inputLabel={this.props.checkboxGiveaway}

                        value={this.state.checkbox.value}
                        inputClassName={this.state.checkBoxClassName}
                        errorText={this.checkboxErrorText}
                        onChange={this.onChangeCheckbox}

                        className="formCheckbox"
                        required={true}
                    />
                   <Text
                        fontSize={14}
                        fontWeight={400}
                        color="#241C15" >
                        By providing my personal data I agree to be informed about AVS4YOU software deals via email.
                    </Text>

                    {this.state.infoIsShown && <InfoPopup closePopupFunction={this.closePopupFunction}></InfoPopup>}
                </div>

                        <Button
                            tabIndex="0"
                            className="getCouponButton"
                            onClick={this.onClick}
                            backgroundColor="orange"
                            padding="13px 0"
                            fontSize={18}
                            fontWeight={500}
                        >
                            {this.props.buttonTextSend}
                        </Button>
                    </div>

                }
            </StyledForm>
        )
    }
}

export default FormPartners;