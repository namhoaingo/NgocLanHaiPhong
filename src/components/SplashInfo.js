import React, { Component } from 'react';
import { connect } from 'react-redux'; //To connect to our store
import { addTodo, removeTodo } from '../actions'; //Our actions to dispatch
import '../styles/SplashInfo.css';


class SplashInfo extends Component {
	
	render(){
		return(
			<div className="splash-info-container">
				<div className="container-fluid">
					<div className="row">
						<div className="splash-info-thumb col-md-3 col-sm-3 col-xs-6">
							<div className= "splash-box splash-box-1">
								Box 1
							</div>
						</div>
						<div className="splash-info-thumb col-md-3 col-sm-3 col-xs-6">
							<div className= "splash-box splash-box-2">
								Box 2
							</div>
						</div>
						<div className="splash-info-thumb col-md-3 col-sm-3 col-xs-6">
							<div className= "splash-box splash-box-3">
								Box 3
							</div>
						</div>
						<div className="splash-info-thumb col-md-3 col-sm-3 col-xs-6">
							<div className= "splash-box splash-box-4">
								Box 4
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default SplashInfo;