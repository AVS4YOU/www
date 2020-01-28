import React from 'react';
import styled, {css} from 'styled-components';
import Button from '../button';
import Input from '../input';
import Text from '../text';
import ErrorBlock from '../error-block';
import InfoPopup from '../info-popup';
import UAParser from 'ua-parser-js';

const mobileStyles = css`
    .headerButtonsWrapper{
        display:none;
    }

    .getCouponButton, .mobileFormWrapper{
        display:block;
    }
`;

const desktopStyles = css`
    .getCouponButton{
        display: none;
        text-align: center;
        outline: none;
    }

    .mobileFormWrapper{
        display:none;
    }

    .headerButtonsWrapper{
        display:table;
    }
`;

const StyledHeaderDownloadButtons = styled.div`
    display: table;
    width: 100%;
    margin: auto;
    padding-top: 60px;
    align-items: center;

    .mobileFormWrapper{
        display:none;
    }

    .headerButtonsWrapper{
        display: table;
        align-items: center;
        grid-gap: 30px;
        padding-top: 60px;
        ${props => props.margin && "margin:" + props.margin};

        .secondaryButton{
            margin-left:30px;
        }
    }

    .getCouponButton{
        display: none;
        text-align: center;
        outline: none;
    }

    .agreeData{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 5px;
        margin-top: 10px;
        position:relative;

        &.error{
            .errorBlock{
                display: block;
                bottom: -60px;
            }
        }

        input{
            cursor: pointer;
            position:relative;
            width: 0;
            height: 0;
            margin-right: 12px;

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
    }

    ${props => props.touchDevice !== null 
        ? props.touchDevice ? mobileStyles : desktopStyles
        : ""}

    .mobileInput{
        max-width: inherit;
    }

    @media (max-width: 1050px) {

        .headerButtonsWrapper{
            display:none;
        }

        .getCouponButton, .mobileFormWrapper{
            display:block;
        }

        ${props => props.touchDevice !== null 
            ? props.touchDevice ? mobileStyles : desktopStyles
            : ""}

        .headerButtonsWrapper{
            margin: auto;

            .mainButton{
                padding: 14px 22px;
            }

            .buttonText{
                font-size: 16px;
            }
        }
    }
`;

class HeaderDownloadButtons extends React.PureComponent {

    constructor(props){
        super(props);
        this.state={
            isShown: false,
            getCouponToggle: false,
            checked: false,
            validForm: false,
            checkBoxError: false,
            infoIsShown: false,
            touchDevice: null
        }
        
        this.getCoupon = this.getCoupon.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.checkValid = this.checkValid.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
        this.getCouponRequest = this.getCouponRequest.bind(this);
        this.closePopupFunction = this.closePopupFunction.bind(this);
    };

    toShowForm = () => {
        this.setState({
            isShown: !this.state.isShown
        })
    };

    closePopupFunction(){
        this.setState({
            infoIsShown: false
        })
    }

    componentDidMount(){
        var parser = new UAParser();
        var result = parser.getResult();

        this.setState({
            touchDevice: result.device.type === "mobile" || result.device.type === "tablet"
        })
    }

    getCouponRequest = async () => {

        const response = await fetch('http://192.168.3.164:8086/WeatherForecast')
        const myJson = await response.json();
        console.log(myJson);

        this.setState({
            infoIsShown: true
        })
    }

    checkValid(valid){
        this.setState({
            validForm: valid,
        }) 

        if(!this.state.checked){
            this.setState({
                checkBoxError: true
            })
        } else {
            this.setState({
                checkBoxError: false
            })
        }

        if(valid && this.state.checked){
            this.getCouponRequest();
        } else {
            console.log("form invalid")
        }
    }

    keyPressed(event) {
        if (event.key === "Enter") {
            this.getCoupon()
        }
    }

    getCoupon(){
        this.setState({
            getCouponToggle: !this.state.getCouponToggle
        })
    };

    handleCheckboxChange(){
        this.setState({
            checked: !this.state.checked,
            checkBoxError: false
        })
    }

    render(){
        return(
            <StyledHeaderDownloadButtons {...this.props} touchDevice={this.state.touchDevice} className={this.props.className}>

                <div className="headerButtonsWrapper">
                    <Button className="mainButton" 
                        href={this.props.mainHref} 
                        color="#fff" 
                        padding={this.props.mainPadding && this.props.mainPadding} 
                        textTransform="uppercase" 
                        backgroundColor={this.props.backgroundColor && this.props.backgroundColor}
                        secondaryText={this.props.secondaryText && this.props.secondaryText} 
                        textTransform="uppercase">
                            {this.props.t("download now")}
                    </Button>
                    {this.props.secondaryHref && <Button className="secondaryButton" href={this.props.secondaryHref} textTransform="uppercase" background={false}>{this.props.t("learn more")}</Button>}
                </div>

                <div className="mobileFormWrapper">
                
                    {this.state.isShown && <Input 
                        tabIndex="0"
                        onKeyPress={this.keyPressed}
                        checkValid={this.checkValid} 
                        getCouponToggle={this.state.getCouponToggle}
                        inputName="email"
                        inputLabel="Enter your email"
                        valueIncorrectText="Email is incorrect"
                        valueEmptyText="Email is empty"
                        regexp="email"
                        onKeyDown={this._handleKeyDown}
                        className="mobileInput"
                        />}
                    <Button 
                        tabIndex="1"
                        className="getCouponButton" 
                        onClick={this.state.isShown ? this.getCoupon : this.toShowForm}
                        backgroundColor="orange" 
                        padding="13px 24px"
                        fontSize={14} 
                        textTransform="uppercase"
                        >
                        {this.state.isShown 
                            ? this.props.t("get coupon") 
                            : this.props.t("get $5 coupon code")}
                    </Button>
                    {this.state.isShown &&
                        <div className={this.state.checkBoxError ? "agreeData error" : "agreeData"}>
                            <input 
                                type="checkbox"
                                checked={this.state.checked}
                                onChange={this.handleCheckboxChange}
                            />
                            <Text 
                                fontSize={12}
                                fontWeight={300}
                                color="#ffffff" >
                                {this.props.t("I agree that my personal data may be collected, used and processed in accordance with the privacy policy")}
                            </Text>
                            <ErrorBlock className="errorBlock">
                                {this.props.t("Confirm agreement")}
                            </ErrorBlock>
                            {this.state.infoIsShown && <InfoPopup closePopupFunction={this.closePopupFunction}></InfoPopup>}
                        </div>
                    }
                </div>
            </StyledHeaderDownloadButtons>
        )
    }
}

export default HeaderDownloadButtons;