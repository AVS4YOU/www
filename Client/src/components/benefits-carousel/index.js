import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledCarousel = styled.div`
    position: relative;
    padding-top: 50px;
    display: table;
`;

const StyledWrapper = styled.div`
    position: relative;
    left: ${props => props.marginLeft}px;
    top:10px;
    transition: 0.3s;
    display: flex;
    vertical-align: middle;
    align-items: center;
    height: 370px;
`;

const StyledButtonsWrapper = styled.div`
    display:table;
    margin:auto;
    margin: -6px auto;
    margin-top: 30px;
`;

const StyledCarouselButton = styled.div`
    display:inline-block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${props => !props.active ? "#808080" : "#38add8"};
    margin: 6px;
    cursor: pointer;
`;


class BenefitsCarousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            marginLeft: 0,
            currentIndex: 2,
        }
    }

    onButtonRightClick = () => {
        const nextIndex = this.state.currentIndex + 1;
        const marginLeft = this.getMarginLeft(nextIndex);

        this.changeSlide(marginLeft, nextIndex);
    }

    onButtonLeftClick = () => {

        const nextIndex = this.state.currentIndex - 1;
        const marginLeft = this.getMarginLeft(nextIndex);

        this.changeSlide(marginLeft, nextIndex);
    }

    onCarouselItemClick = (index) => {
        if(this.state.currentIndex !== index){
            
            const marginLeft = this.getMarginLeft(index)
            this.changeSlide(marginLeft, index);
        }
    }

    changeSlide = (marginLeft, index) => {
        this.setState({
            marginLeft: marginLeft,
            currentIndex: index
        })
    }

    getMarginLeft = (nextIndex) => {
        const diff = 2 - nextIndex;
        const marginLeft = diff * this.element.offsetWidth;
        return marginLeft;
    }

    render(){

        const { className, children } = this.props;
        const CarouselItems = [];
        const CarouselButtons = [];

        children.forEach((item, index) => {
            const itemClassName = index === this.state.currentIndex ? "BenefitsCarouselItem active" : "BenefitsCarouselItem";
            index === 0 
                ?
                    CarouselItems.push(
                        <div 
                            ref={(element) => {this.element = element }}
                            className={itemClassName}
                            key={index} id={"item" + index} 
                            onClick={this.onCarouselItemClick.bind(this, index)}
                        >
                            {item}
                        </div>
                    )
                : 
                    CarouselItems.push(
                        <div 
                            className={itemClassName}
                            key={index} id={"item" + index} 
                            onClick={this.onCarouselItemClick.bind(this, index)}
                        >
                            {item}
                        </div>
                    )
        });

        children.forEach((item, index) => {
            CarouselButtons.push(
                <StyledCarouselButton 
                    active={index === this.state.currentIndex}
                    onClick = {this.onCarouselItemClick.bind(this, index)}
                />
            )
            
        })

        return(
            <StyledCarousel className={className}>
                <StyledWrapper marginLeft={this.state.marginLeft}>
                    {CarouselItems}
                </StyledWrapper>
                <StyledButtonsWrapper>
                    {CarouselButtons}
                </StyledButtonsWrapper>     
            </StyledCarousel>
        )
    }
}

BenefitsCarousel.propTypes = {
    padding: PropTypes.number
}
  
BenefitsCarousel.defaultProps = {
    padding: 30,
    marginLeft: 0
}

export default BenefitsCarousel