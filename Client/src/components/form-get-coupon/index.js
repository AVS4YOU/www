import React from 'react';
import styled from "styled-components";
import Text from '../text';
import Input from '../input';
import Button from '../button';
import InputCheckbox from '../input-checkbox';
import InfoPopup from '../info-popup';
import ReCAPTCHA from "react-google-recaptcha";

import {RecaptchaKeys, AjaxUrls} from '../../../static/static-data';

const StyledForm = styled.div`

    .checkBoxWrapper{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 5px;
        margin-top: 10px;
        position: relative;
    }

    .inputsWrapper, .formCheckbox {   
        
        .focus{
            .main-input{
                
            }
    
            .label-input{
                font-size: 11px;
                top: 2px;
                left: 17px;
                color: #1296e6;
                padding: 0;
            }
        }

        .error{
            color:#FF0C3E;
        }

        .errorBlock{
            bottom: -57px;
            padding: 15px;
            background-color:#ffffff;
            background-position: 12px 50%;
            border-radius: 5px;
            padding-left: 37px;

            border: none;
            padding: 15px 15px 15px 37px;
            background-size: 15px;

            p{
                color:#333;
            }
        }
        
        .main-input{
            padding: 16px 16px 8px;
        }
    }

    .formCheckbox{
        .errorBlock{
            bottom: -80px;
        }
    }

    .recaptchaWrapper{
        margin-top: 18px;
    }

    @media (max-width: 360px) {

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

class FormGetCoupon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: { value: "", status: ErrorStatus.NoError, inputClassName: "" },
            checkbox: { value: false, status: ErrorStatus.NoError },
            checkBoxClassName: "",
            formSended: false,
            recaptchaValue: "",
        };
        this.emailErrorText = "";
        this.checkboxErrorText = "you need agree with policy";
        this.recaptchaRef = React.createRef();

        this.regexpEmail = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i')

    }

    request = () => {
        if (this.verifyData()) {

            this.sendForm({
                UserEmail: this.state.email.value,
                MailPatternName: "en-get-coupon.html",
                MailType: "getCoupon",
                RecaptchaValue: this.state.recaptchaValue,
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

        const emailStatus = this.validate("email", this.state.email.value);
        this.setError("email", emailStatus);
        this.updateInputClassName("email", emailStatus);
        this.updateErrorText("email", emailStatus);

        const checkBoxStatus = this.validate("checkbox", this.state.checkbox.value);
        this.updateCheckboxClassName(checkBoxStatus === ErrorStatus.NoError ? "" : "error");

        let formValid = emailStatus === ErrorStatus.NoError &&
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

        if (!field) throw "Unknown name";

        this.setState(
            {
                [inputName]: { ...field, value: value }
            }
        );
    }

    setError = (inputName, newStatus) => {
        const field = this.state[inputName];

        if (!field) throw "Unknown name";

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

        if (!field) throw "Unknown name";

        this.setState({
            [inputName]: { ...field, inputClassName: className }
        })
    }

    setErrorText = (inputName, error) => {
        switch (inputName) {
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
        const status = this.validate(e.target.name, e.target.value);
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
    };

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

            if (responseTest.indexOf("Error") > -1) {
                console.log(responseTest)
            } else {
                this.props.toShowInfoPopup();
            }

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <StyledForm>
                <div className="inputsWrapper">
                    <Input
                        tabIndex="1"

                        inputName="email"
                        inputLabel={this.props.t("Email address")}

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

                <Button
                    tabIndex="1"
                    className="getCouponButton mobile"
                    onClick={this.onClick}
                    backgroundColor="orange"
                    padding="13px 24px"
                    fontSize={14}
                    textTransform="uppercase"
                >
                    {this.props.t("Get coupon")}
                </Button>

                <div className="recaptchaWrapper">
                    <ReCAPTCHA
                        ref={this.recaptchaRef}
                        onChange={this.OnChangeRecaptcha}
                        sitekey={RecaptchaKeys.public}
                    />
                </div>

                <div className="checkBoxWrapper">
                    <InputCheckbox
                        tabIndex="2"

                        inputName="checkbox"

                        value={this.state.checkbox.value}
                        inputClassName={this.state.checkBoxClassName}
                        errorText={this.checkboxErrorText}
                        onChange={this.onChangeCheckbox}

                        className="formCheckbox"
                        required={true}
                    />
                    <Text
                        fontSize={12}
                        fontWeight={300}
                        color="#ffffff" >
                        {this.props.t("I agree that my personal data may be collected, used and processed in accordance with the privacy policy")}
                    </Text>
                    {this.state.infoIsShown && <InfoPopup closePopupFunction={this.closePopupFunction}></InfoPopup>}
                </div>
            </StyledForm>
        )
    }
}

export default FormGetCoupon;