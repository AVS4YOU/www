import React from "react";
import PropTypes from "prop-types";



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

		this.outerStyle = {
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			zIndex: 1
		};

		// default style
		this.stylemodal = {
			position: "absolute",
            width: "185px",
            height: "auto",
            top: "68px",
			right: "0",
			padding: "20px 0",
			boxSizing: "border-box",
			backgroundColor: "#E5EBEC",
			borderRadius: 8,
			zIndex: 2,
			textAlign: "left",
			boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
			border: "1px solid #809CA0",
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
			backgroundColor: "transparent",
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
			>
				<div style={this.styleoverlay} onClick={this.props.closeModal} aria-hidden="true"/>
				<div onClick={this.props.closeModal} aria-hidden="true"/>
				<div style={this.stylemodal}>{this.props.children}</div>
			</div>
		);
	}
}