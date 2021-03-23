import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import Egg  from '../../images/easter-event/egg.png';
import Egg1 from '../../images/easter-event/egg1.png';
import Egg2 from '../../images/easter-event/egg2.png';
import Egg3 from '../../images/easter-event/egg3.png';
import Egg4 from '../../images/easter-event/egg4.png';



export default class Modal extends React.Component {
	static propTypes = {
		isModalOpen: PropTypes.bool.isRequired,
		closeModal: PropTypes.func.isRequired,
		style: PropTypes.shape({
			modal: PropTypes.object,
			overlay: PropTypes.object
		})
	};

	constructor(props) {
		super(props);
        this.nowIsTablet = false;

        this.state = {
            open: false,
            isTablet: false,
            offAnimate: false
        };

		this.outerStyle = {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			zIndex: 1
		};

		// default style
		this.stylemodal = {
			position: "relative",
            width: "475px",
            height: "580px",
            top: "80px",
			padding: "35px 15px",
			boxSizing: "border-box",
			backgroundColor: "none",
			margin: "40px auto",
			zIndex: 2,
			textAlign: "left",
			//boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
			...this.props.stylemodal
		};

	this.styleoverlay = {
			position: "fixed",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(0,0,0,0.5)",
			...this.props.styleoverlay
		};
        
	}

	// render modal
	render() {
		return (
			<div
				style={{
					...this.outerStyle,
					display: this.props.isModalOpen ? "block" : "none"
				}}
			>	<div className="EggsModal"> 
				<div style={this.styleoverlay} onClick={this.props.closeModal} aria-hidden="true"/>
				<div onClick={this.props.closeModal} aria-hidden="true"/>
				<div style={this.stylemodal}>{this.props.children}</div>				
				</div>
			</div>
		);
	}
}