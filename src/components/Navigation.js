import React, { Component } from 'react';
import { connect } from 'react-redux'; //To connect to our store
import '../styles/Navigation.css';

class Navigation extends Component{
	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
  					
    					<div className="navbar-header">
      						<a className="navbar-brand" href="#">WebSiteName</a>
    					</div>
    					<ul className="nav navbar-nav">
					      <li className="active"><a href="#">Home</a></li>
					      <li><a href="#">Page 1</a></li>
					      <li><a href="#">Page 2</a></li>
					      <li><a href="#">Page 3</a></li>
    					</ul>
  					
				</nav>
			</div>
			)
	}
}


export default Navigation;