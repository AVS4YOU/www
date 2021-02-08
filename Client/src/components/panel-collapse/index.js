import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Text from "../text";
import CloseIcon from '../../images/common/icons/close-popup.svg';

const StyledPanelCollapse = styled.div`

    width:100%;
    background-color:#ffffff;
    box-shadow: 3px 3px 24px #9A9A9A29;
    border-radius: 5px;
    position:relative;

    &:hover{
        .panelName{
            color:#000000;
        }
    }
    
    .panelName{
        color:${props => props.isOpen ? "#000000" : "#555555"};

        &:before{
            content: "";
            position: absolute;
            margin:auto;
            background-image: url(${CloseIcon});
            background-size:contain;
            background-repeat:no-repeat;
            ${props => props.isInitialized && "transition: ease-out 0.2s;"}

            ${props => props.isInitialized 
                ? props.isOpen ? "transform: rotate(0deg)" : "transform: rotate(45deg)"
                : ""};
        }
    }

    .panelContent{
        width: 100%;
        overflow: hidden;
        ${props => props.isInitialized && "transition: ease-out 0.5s;"}
        ${props => props.isInitialized 
            ? props.isOpen ? "height:" + props.heightVal + "px" : "height:0px"
            : "height:auto"};
    }

    @media (max-width: 1050px) {
    }
`;

class PanelCollapse extends React.Component {

    constructor(props) {
        super(props);

        this.togglePanel = this.togglePanel.bind(this);
        this.initPanel = this.initPanel.bind(this);
        this.getHeight = this.getHeight.bind(this);

        this.state = { 
            isOpen: true,
            isInitialized: false,
            heightVal: null
        };

        this.myRef = React.createRef();
    };

    getHeight(myRef){

        if (myRef.current && !this.state.heightVal) {
            this.setState({
                heightVal: myRef.current.offsetHeight,
            });
        }
    };

    initPanel(){

        this.setState({
            isInitialized: true
        });

        this.togglePanel();
    };
    
    togglePanel() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    componentDidMount(){

        this.getHeight(this.myRef);
        this.initPanel();
    };

    render(){
        return( 
            <StyledPanelCollapse className={this.props.className} heightVal={this.state.heightVal} isInitialized={this.state.isInitialized} isOpen={this.state.isOpen} {...this.props}>
                <div onClick={this.togglePanel} className="panelNameWrapper">
                    <Text className="panelName">{this.props.panelName}</Text>
                </div>
                <div className="panelContent" ref={this.myRef}>
                    {this.props.children}
                </div>
            </StyledPanelCollapse>
        )
    }
}

PanelCollapse.propTypes = {
    visibly: PropTypes.bool ,
    panelName: PropTypes.string 
}

PanelCollapse.defaultProps = {
    visibly: true,
    panelName: "Enter \'panelName\'"
}

export default PanelCollapse;