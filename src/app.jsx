require('bootstrap-loader');
require("./sass/style.scss");

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';


class Everapp extends Component {
	constructor(props){
    	super(props);
    	// state is either true or false
    	this.state={
	    	modalAppear: false
		}
		this.modalOpen = this.modalOpen.bind(this);
		this.modalClose = this.modalClose.bind(this);
	}

	// to open set state to true
	modalOpen(){
		this.setState({modalAppear: true})
	}

	// to open set state to close
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

// modal component
class EverModal extends Component {
	render(){
		// if state is false, dont render modal
		if(this.props.modalAppear == false){
			return null
		}

		// if state if true, render modal
		else{
			return(
				<div className="ever-modal-wrapper">
					<div className="ever-modal">

						{/* this props children so various content can be added to modal */}
						{this.props.children}

						{/* if this button is pressed, invokde close function which will set state to false */}
						<button className="btn hero-button" onClick={this.props.close}>Close</button>
					</div>
				</div>
			)	
		}

	}
}


ReactDOM.render(<Everapp />, document.getElementById('hero-button-wrapper'))