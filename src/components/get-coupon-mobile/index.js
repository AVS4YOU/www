import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import Input from '../input';
import Text from '../text';

const StyledGetCouponWrapper = styled.div`
    display: table;
    width: 100%;
    margin: auto;
    padding-top: 60px;
    align-items: center;

    .getCouponButton{
        display: block;
        text-align: center;
    }

    .agreeData{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 5px;
        margin-top: 10px;

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
            getCouponToggle: false
        }
        
        this.toShowForm = this.toShowForm.bind(this);
        this.getCoupon = this.getCoupon.bind(this);
    };

    toShowForm(){
        this.setState({
            isShown: !this.state.isShown
        })
    };

    getCoupon(){
        this.setState({
            getCouponToggle: !this.state.getCouponToggle
        })
    };

    render(){
        return(
            <StyledGetCouponWrapper>
                
                {this.state.isShown && <Input getCouponToggle={this.state.getCouponToggle}/>}
                <Button className="getCouponButton" onClick={this.state.isShown ? this.getCoupon : this.toShowForm} backgroundColor="orange" padding="13px 24px" fontSize={14} textTransform="uppercase">
                    {this.state.isShown 
                        ? this.props.t("get coupon") 
                        : this.props.t("get $5 coupon code")}
                </Button>
                {this.state.isShown &&
                    <div className="agreeData">
                        <input type="checkbox" />
                        <Text 
                            fontSize={12}
                            fontWeight={300}
                            color="#ffffff" >
                            {this.props.t("I agree that my personal data may be collected, used and processed in accordance with the privacy policy")}
                        </Text>
                    </div>
                }
            </StyledGetCouponWrapper>
        )
    }
}

export default GetCouponMobile;