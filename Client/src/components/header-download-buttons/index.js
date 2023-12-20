import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import FormGetCoupon from '../form-get-coupon';
import InfoPopup from '../info-popup';
import UAParser from 'ua-parser-js';
import Cookies from 'universal-cookie';
import { Link } from "react-scroll";
import Text from '../text';

const StyledHeaderDownloadButtons = styled.div`

    display:none;

    ${props => props.touchDevice !== null && "display:block;"}

    .headerButtonsWrapper{
        display: table;
        align-items: center;
        grid-gap: 30px;
        padding-top: 60px;
        ${props => props.margin && "margin:" + props.margin};

        .secondaryButton{
            margin-left:30px;
            display:inline-block;
            cursor:pointer;
            color: #fff;

            &:hover{
                text-decoration: underline;
            }
        }
    }

    .agreeData{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 5px;
        margin-top: 10px;
        position:relative;

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

    @media (max-width: 500px) {
        .headerButtonsWrapper{
            .mainButton{
                display:block;
            }
            .secondaryButton{
                display: table;
                margin: auto;
                margin-top: 20px;
            }
        }
    }
`;

class HeaderDownloadButtons extends React.PureComponent {

    constructor(props){
        super(props);
        this.cookies = new Cookies();

        this.state={
            formIsShown: false,
            InfoPopupHidden: false,
            touchDevice: null,
            formSended: this.cookies.get("formSended") ? true : false,  
        }
        
        this.closePopupFunction = this.closePopupFunction.bind(this); 
    };

    toShowForm = () => {
        this.setState({
            formIsShown: !this.state.formIsShown
        })
    };

    addClassToBody = () => {
        document.body.classList.add('formSended');
    }

    toShowInfoPopup = () => {
        this.setState({
            formSended: true
        })
    }

    closePopupFunction = () => {
        this.setState({
            InfoPopupHidden: true
        })
    }

    componentDidMount(){
        var parser = new UAParser();
        var result = parser.getResult();
        let regex = new RegExp("mobile", 'i');
    
        this.setState({
            touchDevice: result.device.type === "mobile" || result.device.type === "tablet" || regex.test(result.device.browser)
        })
    }

    render(){
        return(
            <StyledHeaderDownloadButtons {...this.props} touchDevice={this.state.touchDevice} className={this.props.className} id={undefined}>
                {this.state.touchDevice ? 

                    this.state.formSended 
                        ?
                        this.cookies.get("formSended") 
                            ? 
                                <div></div>
                            :
                            <div>
                                <InfoPopup closePopupFunction={this.closePopupFunction} InfoPopupHidden={this.state.InfoPopupHidden}/>
                                {this.cookies.set("formSended", "true")}
                                {this.addClassToBody()}
                            </div>
                                
                        :
                            <div className="mobileFormWrapper">
                                {this.state.formIsShown ?    
                                    <FormGetCoupon t={this.props.t} toShowInfoPopup={this.toShowInfoPopup}/>
                                :

                                    <Button 
                                        tabIndex="0"
                                        className="getCouponButton" 
                                        onClick={this.toShowForm}
                                        backgroundColor="orange" 
                                        padding="13px 24px"
                                        fontSize={14} 
                                        textTransform="uppercase"
                                        >
                                        {this.props.t("get $5 coupon code")}
                                    </Button>   
                                }
                            </div>
                        
                    :
       
                    <div className="headerButtonsWrapper">
                        <Button className="mainButton"
                            id={this.props.id}
                            href={this.props.mainHref}
                            color="#fff" 
                            padding={this.props.mainPadding && this.props.mainPadding} 
                            backgroundColor={this.props.backgroundColor && this.props.backgroundColor}
                            secondaryText={this.props.secondaryText && this.props.secondaryText} 
                            textTransform="uppercase">
                                {this.props.t("download now")}
                        </Button>
                        {this.props.secondaryHref && <Button className="secondaryButton" href={this.props.secondaryHref} textTransform="uppercase" background={false}>{this.props.t("learn more")}</Button>}
                        {this.props.scrollTo && 
                            <Link id={this.props.secondButtonId} to={this.props.scrollTo} spy={true} smooth={true} offset={20} duration={500} className="secondaryButton">
                                <Text textTransform="uppercase" color="#ffffff">{this.props.t("learn more")}</Text>
                            </Link>
                        }
                    </div>
                }     
            </StyledHeaderDownloadButtons>
        )
    }
}

export default HeaderDownloadButtons;
