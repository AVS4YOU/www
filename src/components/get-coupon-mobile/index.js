import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import Input from '../input';
import Text from '../text';
import ErrorBlock from '../error-block';

const StyledGetCouponWrapper = styled.div`
    display: table;
    width: 100%;
    margin: auto;
    padding-top: 60px;
    align-items: center;

    .getCouponButton{
        display: block;
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
            cursor: pointer;
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
`;

class GetCouponMobile extends React.PureComponent {

    constructor(props){
        super(props);
        this.state={
            isShown: false,
            getCouponToggle: false,
            checked: false,
            validForm: false,
            checkBoxError: false
        }
        
        this.toShowForm = this.toShowForm.bind(this);
        this.getCoupon = this.getCoupon.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.checkValid = this.checkValid.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    };

    emailRegexp = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i');

    toShowForm(){
        this.setState({
            isShown: !this.state.isShown
        })
    };

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
            console.log("form valid!")
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
            <StyledGetCouponWrapper className={this.props.className}>
                
                {this.state.isShown && <Input 
                    tabIndex="0"
                    onKeyPress={this.keyPressed}
                    checkValid={this.checkValid} 
                    getCouponToggle={this.state.getCouponToggle}
                    inputName="email"
                    inputLabel="Enter your email"
                    valueIncorrectText="Email is incorrect"
                    valueEmptyText="Email is empty"
                    regexp={this.emailRegexp}
                    onKeyDown={this._handleKeyDown}
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
                    </div>
                }
            </StyledGetCouponWrapper>
        )
    }
}

export default GetCouponMobile;