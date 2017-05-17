require('bootstrap-loader');
require("./sass/style.scss");

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';


class Everapp extends Component {
	constructor(props){
    	super(props);
    	this.state={
	    	modalAppear: false
		}
		this.modalOpen = this.modalOpen.bind(this);
		this.modalClose = this.modalClose.bind(this);
	}

	modalOpen(){
		this.setState({modalAppear: true})
	}
	modalClose(){
		this.setState({modalAppear: false})
	}

	render() {
		return (
			<div>
				<button className="hero-button btn" onClick={this.modalOpen}>learn More</button>
				<EverModal modalAppear={this.state.modalAppear} close={this.modalClose}>
					<h2 className="ever-heading--sub">This is modal </h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
				</EverModal>
			</div>
		)
	}
}

class EverModal extends Component {
	render(){
		if(this.props.modalAppear == false){
			return null
		}
		else{
			return(
				<div className="ever-modal-wrapper">
					<div className="ever-modal">
						{this.props.children}
						<button className="btn hero-button" onClick={this.props.close}>Close</button>
					</div>
				</div>
			)	
		}

	}
}


ReactDOM.render(<Everapp />, document.getElementById('hero-button-wrapper'))