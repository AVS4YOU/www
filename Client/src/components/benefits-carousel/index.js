import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { Swipeable } from 'react-swipeable';

const StyledCarousel = styled.div`
    position: relative;
    padding-top: 50px;
    display: table;
`;

const StyledWrapper = styled.div`
    position: relative;
    left: ${props => props.marginLeft}px;
    top:10px;
    ${props => !props.disableAnimate && "transition: 0.3s;"}
    display: flex;
    vertical-align: middle;
    align-items: center;
    height: 370px;

    .BenefitsCarouselItem.animateOff{
        .carouselItem {
            transition: 0s;
        }
    }
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

class BenefitsCarousel extends React.PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            marginLeft: 0,
            currentIndex: this.props.centerSlide,
            elementWidth: 0,
            windowWidth: 0,
            marginLeftFirst: 0,
            disableAnimate: false,
            needStartAnimate: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        const windowWidth = window.innerWidth;
        const elementWidth = this.element.offsetWidth;
        const centerElementWidth = this.centerElement.offsetWidth;
        let marginLeftFirst = windowWidth/2 - centerElementWidth/2 - 9;
        marginLeftFirst = this.props.infinity ? marginLeftFirst - this.props.children.length*elementWidth : marginLeftFirst;
        const marginLeft = marginLeftFirst - this.props.centerSlide*elementWidth;

        if(this.state.elementWidth !== elementWidth){
            this.setState({
                elementWidth: elementWidth,
                windowWidth: windowWidth,
                marginLeftFirst: marginLeftFirst,
                marginLeft: marginLeft
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    componentDidUpdate(prevProps, prevState){
        const { children } = this.props 
        const { currentIndex, disableAnimate } = this.state 

        if(prevState.disableAnimate){
            this.setState({
                disableAnimate: false
            })
        }

        if((currentIndex > children.length-1 || currentIndex < 0) && !disableAnimate){
            setTimeout(this.changePosition, 300)
        }
    }

    changePosition = () => {

        const { currentIndex } = this.state 
        const { children } = this.props 

        const nextIndex = currentIndex > children.length-1 ? currentIndex - children.length : currentIndex + children.length;
        this.changeSlide(nextIndex);
        this.setState({
            disableAnimate: true
        })
    }

    swipeLeft = () => {
       // const valueOfChildren = this.props.children.length;
        const nextIndex = this.state.currentIndex + 1;
        this.changeSlide(nextIndex);
    }

    swipeRight = () => {
        const nextIndex = this.state.currentIndex - 1;
        this.changeSlide(nextIndex);
    }

    onCarouselItemClick = (index) => {
        if(this.state.currentIndex !== index){
            this.changeSlide(index);
        }
    }

    changeSlide = (index) => {
        const marginLeft = this.state.marginLeftFirst - index*this.state.elementWidth

        this.setState({
            marginLeft: marginLeft,
            currentIndex: index
        })
    }

    getMarginLeft = (nextIndex) => {
        const diff = this.props.centerSlide - nextIndex;
        const marginLeft = diff * this.state.elementWidth;
        return marginLeft;
    }

    onSwipedRight = () => {
        this.swipeRight();
    }

    onSwipedLeft = () => {
        this.swipeLeft();
    }

    render(){
        const { className, children } = this.props;
        const { currentIndex } = this.state;
        const CarouselItems = [];
        const CarouselButtons = [];

        const carouselConfig = {
            delta: 10,                            
            preventDefaultTouchmoveEvent: false,   
            trackTouch: true,                     
            trackMouse: true,                     
            rotationAngle: 0,  
            disableAnimate: false                    
        }

        let elementRefCreated = false;
        let valueOfChildren = children.length;


        if(this.props.infinity){
            children.forEach((item, index) => {
                const key = index - valueOfChildren;
                let itemClassName = key === currentIndex ? "BenefitsCarouselItem active" : "BenefitsCarouselItem";

                if(index === currentIndex && this.state.disableAnimate){
                    itemClassName = itemClassName + " animateOff"
                }

                CarouselItems.push(
                    <div 
                        className={itemClassName}
                        key={key} id={"itemBefore" + index} 
                        onClick={this.onCarouselItemClick.bind(this, key)}
                        aria-hidden="true"
                    >
                        {item}
                    </div>
                )
            });
        }


        children.forEach((item, index) => {
            let itemClassName = index === currentIndex ? "BenefitsCarouselItem active" : "BenefitsCarouselItem";

            if(index === currentIndex && this.state.disableAnimate){
                itemClassName = itemClassName + " animateOff"
            }

            let itemType = "";

            if(!elementRefCreated && index !== currentIndex){
                itemType = "refItem"
                elementRefCreated = true
            } else if (index === currentIndex){
                itemType = "centerItem"
            }

            switch(itemType) {
                case 'centerItem':  
                    CarouselItems.push(
                        <div 
                            ref={(element) => {this.centerElement = element }}
                            className={itemClassName}
                            key={index} id={"item" + index} 
                            onClick={this.onCarouselItemClick.bind(this, index)}
                            aria-hidden="true"
                        >
                            {item}
                        </div>
                    )
                  break
              
                case 'refItem':  
                    CarouselItems.push(
                        <div 
                            ref={(element) => {this.element = element }}
                            className={itemClassName}
                            key={index} id={"item" + index} 
                            onClick={this.onCarouselItemClick.bind(this, index)}
                            aria-hidden="true"
                        >
                            {item}
                        </div>
                    )
                  break
              
                default:
                    CarouselItems.push(
                        <div 
                            className={itemClassName}
                            key={index} id={"item" + index} 
                            onClick={this.onCarouselItemClick.bind(this, index)}
                            aria-hidden="true"
                        >
                            {item}
                        </div>
                    )
                  break
              }
        });

        if(this.props.infinity){
            children.forEach((item, index) => {
                const key = index + valueOfChildren
                let itemClassName = key === currentIndex ? "BenefitsCarouselItem active" : "BenefitsCarouselItem";

                if(index === currentIndex && this.state.disableAnimate){
                    itemClassName = itemClassName + " animateOff"
                }
                
                CarouselItems.push(
                    <div 
                        className={itemClassName}
                        key={key} id={"itemAfter" + index} 
                        onClick={this.onCarouselItemClick.bind(this, key)}
                        aria-hidden="true"
                    >
                        {item}
                    </div>
                )
            });
        }

        children.forEach((item, index) => {
            CarouselButtons.push(
                <StyledCarouselButton 
                    active={index === this.state.currentIndex || index === this.state.currentIndex + this.props.children.length || index === this.state.currentIndex - this.props.children.length}
                    onClick = {this.onCarouselItemClick.bind(this, index)}
                />
            )
            
        })

        return(
            <Swipeable onSwipedRight={this.onSwipedRight} onSwipedLeft={this.onSwipedLeft} {...carouselConfig}>
                <StyledCarousel className={className}>
                    <StyledWrapper marginLeft={this.state.marginLeft} disableAnimate={this.state.disableAnimate}>
                        {CarouselItems}
                    </StyledWrapper>
                </StyledCarousel>
                <StyledButtonsWrapper>
                    {CarouselButtons}
                </StyledButtonsWrapper>   
            </Swipeable>
        );
    };
};
  

BenefitsCarousel.propTypes = {
    padding: PropTypes.number
}
  
BenefitsCarousel.defaultProps = {
    padding: 30,
    marginLeft: 0,
    centerSlide: 2
}

export default BenefitsCarousel