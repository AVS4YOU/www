import React from 'react';
import styled from "styled-components";
import Button from '../button';
import { CSSTransition } from 'react-transition-group';
import CategorySelectorComponent from '../category-selector-component';

import LeftArrow from '../../images/common/icons/arrow-left.svg';
import RightArrow from '../../images/common/icons/arrow-right.svg';

const StyledContentSelector = styled.div`
    position:relative;

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

    .previous-button,
    .next-button{
        content:"";
        display:block;
        width:45px;
        height: 65px;
        position: absolute;
        top: 200px;
        margin: auto;
        left:0;
        background-color:#EEEEEE;
        cursor:pointer;
        background-repeat:no-repeat;
    }

    .previous-button{
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        background-image: url(${LeftArrow});   
        background-position: 35% 50%;  
    }

    .next-button{
        right:0;
        left:auto;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        background-image: url(${RightArrow}); 
        background-position: 65% 50%;
    }
`;

class ContentSelector extends React.Component {
    constructor(props){
        super(props);
        this.state={
            animate: true,
            currentContentIndex: 0,
            nextContentIndex: 1,
            content: React.Children.toArray(this.props.children),
            selectorInit: false
        };

        this.content="";  
        this.sumOfChildren = this.state.content.length;     
    };

    changeContent = (nextContentIndex) => {

        if(nextContentIndex != this.state.currentContentIndex){
            this.setState({
                animate: !this.state.animate,
                nextContentIndex: nextContentIndex
            })
        }
    }

    onExited = () => {
        
        this.setState({
            currentContentIndex: this.state.nextContentIndex,
            animate: !this.state.animate
        });
    }

    onClickNext = () => {  

        this.setState({
            animate: !this.state.animate,
            nextContentIndex: this.state.currentContentIndex >= this.sumOfChildren - 1 ? 0 : this.state.currentContentIndex + 1        
        });
    };
    
    onClickPrev = () => {

        this.setState({
            animate: !this.state.animate,
            nextContentIndex: this.state.currentContentIndex <= 0 ? this.sumOfChildren - 1 : this.state.currentContentIndex - 1       
        });
    };

    onClickSelectorButton = (e) => {
        this.changeContent(+e.target.id)
    }

    componentDidUpdate(){
        if(this.props.currentContentIndex && this.state.currentContentIndex !== this.props.currentContentIndex && !this.state.selectorInit){
            this.setState({
                currentContentIndex: this.props.currentContentIndex,
                selectorInit: true
            })
        }
    }

    render(){
        return(       
            <StyledContentSelector>
                <div className={"content-wrapper " + this.props.className }>
                <CategorySelectorComponent
                    buttonNames={this.props.buttonNames}
                    currentContentIndex={this.state.currentContentIndex}
                    onClick={this.onClickSelectorButton}
                />
                <CSSTransition 
                    in={this.state.animate}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onExited={this.onExited.bind(this)}
                >
                    <div>
                        {this.state.content[this.state.currentContentIndex]}
                    </div>
                </CSSTransition>
                </div>
                {!this.props.disableArrows && <div className="previous-button" onClick={this.onClickPrev.bind(this)}></div>}
                {!this.props.disableArrows && <div className="next-button" onClick={this.onClickNext.bind(this)}></div>}
            </StyledContentSelector>
        )
    }
}

export default ContentSelector;