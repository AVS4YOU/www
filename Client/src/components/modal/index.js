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
            width: "250px",
            height: "300px",
            top: "200px",
			padding: "35px 15px",
			boxSizing: "border-box",
			backgroundColor: "#fff",
			margin: "40px auto",
			borderRadius: 3,
			zIndex: 2,
			textAlign: "left",
			boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
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
			>
				<div style={this.styleoverlay} onClick={this.props.closeModal} />
				<div onClick={this.props.closeModal} />
				<div style={this.stylemodal}>{this.props.children}</div>
			</div>
		);
	}
}