import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import PageContentWrapper from '../page-content-wrapper';
import CategorySelector from '../category-selector';
import CategoryCarousel from '../category-carousel'
import { CSSTransition } from 'react-transition-group';

const StyledMainContentWrapper = styled.div`
    display:block;
    padding-bottom: 100px;

    .alert-enter {
        opacity: 0;
    }
    .alert-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    .alert-exit {
        opacity: 1;
    }
    .alert-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }
`;

class MainContentWrapper extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            currentCategory: "video",
            currentCategoryCarousel: "video",
            animate: true
        }
        this.selectCategory = this.selectCategory.bind(this)
    }

    selectCategory(category){
        this.setState({
            animate: !this.state.animate,
            currentCategory: category
        });
        setTimeout(
            function() {
                this.setState({currentCategoryCarousel: category});
            }
            .bind(this),
            300
        );
    }

    fadeCarousel(){
        this.setState({animate: !this.state.animate})
    }

    render(){
        return(
            <StyledMainContentWrapper>
                <PageContentWrapper>
                    <Text fontSize={46} fontWeight={600} className="bodyHeader">Turn your ideas into exciting content</Text>
                    <CategorySelector currentCategory={this.state.currentCategory} selectCategory={this.selectCategory}/>
                    <CSSTransition 
                        in={this.state.animate}
                        timeout={300}
                        classNames="alert"
                        unmountOnExit
                        onExited={() => this.fadeCarousel(true)}
                    >
                        <CategoryCarousel currentCategory={this.state.currentCategoryCarousel}/>
                    </CSSTransition>
                </PageContentWrapper>
            </StyledMainContentWrapper>  
        )
    }
}

export default MainContentWrapper