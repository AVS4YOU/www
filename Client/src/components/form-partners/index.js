import React from 'react';
import styled from "styled-components";
import Text from '../text';
import Input from '../input';
import Button from '../button';
import InfoPopupForm from '../info-popup-form';
import ReCAPTCHA from "react-google-recaptcha";
import iconNotice from '../../images/giveaway/notice.svg'

import {RecaptchaKeys, AjaxUrls} from '../../../static/static-data';

const StyledForm = styled.div`
    box-shadow: 3px 3px 24px #00000014;
    padding: 40px;
    background-color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    margin-top: 30px;
    display: block;

    .notice{
        display: grid;
        grid-gap: 14px;
        grid-template-columns: 12px 1fr;
        align-items: center;
        padding-left: 12px;
        margin-top: -15px;
        padding-bottom: 20px;
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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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

        &:before{
            content: none;
        }
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

    @media (max-width: 460px) {
        padding: 20px;

        .formHeader{
            text-align:center;
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

            comment: { value: "", status: ErrorStatus.NoError, inputClassName: "" },

            subscriptions: { value: "", status: ErrorStatus.NoError, inputClassName: "" },

            checkbox: { value: false, status: ErrorStatus.NoError },

            checkBoxClassName: "",
            formSended: false,
            recaptchaValue: "",
            errorNotice: true,
        };

        this.recaptchaRef = React.createRef();

        this.nameErrorText = "";
        this.emailErrorText = "";
        this.commentErrorText = "";
        this.subscriptionsErrorText = "";

        this.regexpEmail = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i')

    }

    request = () => {
        if (this.verifyData()) {

            this.sendForm({
                UserEmail: this.state.email.value,
                UserName: this.state.name.value,
                Comment: this.state.comment.value,
                numOfSubs: this.state.subscriptions.value,
                RecaptchaValue: this.state.recaptchaValue,
                MailPatternName: "ru-reseller.html",
                MailType: "reseller"
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

        let formValid = nameStatus === ErrorStatus.NoError &&
            emailStatus === ErrorStatus.NoError &&
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

    OnChangeRecaptcha = () => {
        this.setState({
            recaptchaValue: this.recaptchaRef.current.getValue()
        })
        this.setState({
            errorNotice: true
        }) 
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
            case "comment":
                this.commentErrorText = `comment ${error}`
                break
            case "subscriptions":
                this.subscriptionsErrorText = `comment ${error}`
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

    showNotice = () => {
        if (this.state.recaptchaValue.length > 0) {
            this.setState({
                errorNotice: true
            })            
        } else {
            this.setState({
                errorNotice: false
            })            
        }
    }

    onClick = () => {
        this.request();
        this.showNotice();
    }

    sendForm = async (data) => {

        let url = AjaxUrls.domain + "api/email";

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
                    <InfoPopupForm />
                    :
                    <div>
                        <Text as="h2" className="formHeader">
                            {this.props.formHeader}
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

                            <Input
                                tabIndex="0"

                                inputName="subscriptions"
                                inputLabel={this.props.numberOfSubscriptions}

                                value={this.state.subscriptions.value}
                                inputClassName={this.state.subscriptions.inputClassName}
                                errorText={this.subscriptionsErrorText}
                                onKeyPress={this.onKeyPress}
                                onChange={this.onChangeInput}
                                onBlur={this.onBlurInput}
                                onFocus={this.onFocusInput}

                                className="formInput"
                            />

                        </div>
                        <Input
                            as="textarea"
                            tabIndex="0"

                            inputName="comment"
                            inputLabel=""
                            placeholder={this.props.comment}

                            value={this.state.comment.value}
                            inputClassName={this.state.comment.inputClassName}
                            errorText={this.commentErrorText}
                            onKeyPress={this.onKeyPress}
                            onChange={this.onChangeInput}
                            onBlur={this.onBlurInput}
                            onFocus={this.onFocusInput}

                            className="formInput textArea"
                        />

                        <div className="recaptchaWrapper">
                            <ReCAPTCHA
                                ref={this.recaptchaRef}
                                onChange={this.OnChangeRecaptcha}
                                sitekey={RecaptchaKeys.public}
                            />
                        </div>
                        {this.state.errorNotice ? null :
                        <div className="errorBlock notice"><img width="15px" src={iconNotice}/><Text fontSize={13} fontWeight={500}>reCAPTCHA is required</Text>
                        </div> 
                        }

                        <Button
                            tabIndex="0"
                            className="getCouponButton"
                            onClick={this.onClick}
                            backgroundColor="blue"
                            padding="13px 24px"
                            fontSize={14}
                            textTransform="uppercase"
                            id={this.props.buttonId}
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
