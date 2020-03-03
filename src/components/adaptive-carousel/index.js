import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from "prop-types";
import Slider from "react-slick";
import LeftArrow from '../../images/common/icons/arrow-left.svg';
import RightArrow from '../../images/common/icons/arrow-right.svg';


const StyledWrapper = styled.div`
    
`;

class AdaptiveCarousel extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isCarousel: false,
            childrenElements: React.Children.toArray(this.props.children)
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            isCarousel: window.innerWidth < this.props.activateCarouselWidth
        })
    }

    render() {

     /*  const childItems = this.state.childrenElements.length > 0 && this.state.childrenElements.map((item, i) => {
            return(item)
        });*/

        return(
            this.state.isCarousel 
                ?
                    <Slider 
                        arrows={false}
                        infinite={true}
                        dots={this.props.dots}
                        slidesToShow={1}
                        slidesToScroll={1}
                        swipeToSlide={false}
                        focusOnSelect={false}
                        className={this.props.classNameSlider}
                    >
                         {this.props.children}
                    </Slider>
                :
                    <StyledWrapper className={this.props.className}>
                        
                        {this.props.children}
                    </StyledWrapper>
        )
    }
}

AdaptiveCarousel.propTypes = {
    activateCarouselWidth: PropTypes.number,
    dots: PropTypes.bool
};

AdaptiveCarousel.defaultProps = {
    activateCarouselWidth: 750,
    dots: false
};

export default AdaptiveCarousel;