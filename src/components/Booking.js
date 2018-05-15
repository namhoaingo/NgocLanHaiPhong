import React, { Component } from 'react';
import { connect } from 'react-redux'; //To connect to our store
import { addTodo, removeTodo } from '../actions'; //Our actions to dispatch
import '../styles/Booking.css';

class Booking extends Component{
	
	render(){
		return(
				<div className="booking-container">
					<input id="fromDate" type="date"/>
					<input id="toDate" type="date"/>
				</div>
			)
	}
}

export default Booking;