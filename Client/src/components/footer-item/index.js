import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';

const closedFooterItem = css`
    height: 0 !important;
    margin-bottom: 0px;
    margin-top: 0px;
`;

const FooterLinksWrapper = styled.div`
    overflow: hidden;		
    transition: 0.4s linear;

    a{
        text-decoration: none;
    }

    @media (max-width: 1050px) {

        visibility: hidden;
        position: relative;
        margin-top: 0;

        ${props => props.componentIsRendered && "visibility: visible; position:initial; margin-top: 20px;"}
        height: ${props => props.height}px;
        
        ${props => props.footerItemOpen && closedFooterItem}
    }
`;

const StyledFooterItem = styled.div`

    width: 20%;
    display: table-cell;
    vertical-align:top;

    .footerHeader{
        text-align: left;
        margin-top: 40px;
        margin-bottom: 25px;
    }
    
    @media (max-width: 1050px) {

        width: 100%;
        display: block;

        .footerHeader{
            margin: 0;
            padding: 20px 0px;
            border-bottom: 1px solid #898D90;
            cursor: pointer;

            &:after{
                display: block;
                content: '';
                width: 10px;
                height: 10px;
                border-top: 2px solid #fff;
                border-left: 2px solid #fff;
                float: right;
                transition: 0.3s linear;
                transform: ${props => props.footerItemOpen ? "rotate(225deg)" : "rotate(45deg)"};
            }      
        }
    }
`;

class FooterItem extends React.Component{

    constructor(props) {
        super(props);
        this.getHeight = this.getHeight.bind(this);
        this.toggleFooterItem = this.toggleFooterItem.bind(this);
        this.state = {
            height: null,
            footerItemOpen: false,
            componentIsRendered: false,
        }
        this.myRef = React.createRef();
    }

    getHeight(myRef){
        if (myRef && !this.state.height) {
            this.setState({
                height: this.myRef.current.offsetHeight,
            });
        }
    }

    toggleFooterItem(){
        this.setState({ footerItemOpen: !this.state.footerItemOpen })
    }

    componentDidMount() {
        this.getHeight(this.myRef)
        this.toggleFooterItem();
        this.setState({ componentIsRendered: true });
    }

    render(){ 
      
        return(
            <StyledFooterItem footerItemOpen={this.state.footerItemOpen} {...this.props}>
                <Text onClick={this.toggleFooterItem} className="footerHeader" fontSize={14} fontWeight={600} textTransform="uppercase" color="#fff">{this.props.header}</Text>
                <FooterLinksWrapper componentIsRendered={this.state.componentIsRendered} footerItemOpen={this.state.footerItemOpen} height={this.state.height} ref={this.myRef}>
                    {this.props.children}
                </FooterLinksWrapper> 
            </StyledFooterItem>
        )
    }
}

export default FooterItem;